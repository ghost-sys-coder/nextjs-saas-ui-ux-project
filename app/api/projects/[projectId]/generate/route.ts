import { NextRequest, NextResponse } from "next/server";
import { OpenRouter } from "@openrouter/sdk";
import { buildMockupSpecPrompt } from "@/lib/genai";
import { db } from "@/db/drizzle";
import { projectsTable, screenConfigTable } from "@/db/schema";
import { eq } from "drizzle-orm";

// initialize openrouter
const openrouter = new OpenRouter({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const {
      prompt,
      deviceType,
      theme,
      quality,
      darkMode,
      projectName,
        projectId,
      id
    } = await request.json();

    if (!projectId || !id) {
      return NextResponse.json(
        {
          success: false,
          message: "Project IDs is missing!",
        },
        { status: 404 },
      );
    }

    if (!prompt) {
      return NextResponse.json(
        {
          success: false,
          message: "User prompt is missing!",
        },
        { status: 404 },
      );
    }

    const fullPrompt = buildMockupSpecPrompt({
      prompt,
      projectName,
      deviceType,
      stylePreset: theme,
      darkMode,
      quality,
    });

    const completion = await openrouter.chat.send({
      chatGenerationParams: {
        model: "nvidia/nemotron-3-nano-30b-a3b:free",
        messages: [
          {
            role: "system",
            content: fullPrompt,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        stream: false,
      },
    });

    const messageContent = completion?.choices[0]?.message?.content;

    if (!messageContent) {
      return NextResponse.json(
        {
          success: false,
          message: "No AI Response Generated!",
        },
        { status: 401 },
      );
    }

    //   Handle both content types -- string & array content types
    let aiResult: string;
    if (typeof messageContent === "string") {
      aiResult = messageContent;
    } else if (Array.isArray(messageContent)) {
      const textContent = messageContent.find((item) => item.type === "text");
      aiResult = textContent?.text || "";
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Unexpected AI Format Response!",
        },
        { status: 500 },
      );
    }

    if (!aiResult) {
      return NextResponse.json(
        {
          success: false,
          message: "No text content in AI response",
        },
        { status: 401 },
      );
    }

    let parsedResult;

    try {
      parsedResult = JSON.parse(aiResult);
      console.log(parsedResult);
    } catch (error) {
      console.error("JSON Parse Error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "AI Response was not valid JSON",
          rawResponse: aiResult.substring(0, 500),
        },
        { status: 500 },
      );
    }

    //   update projects table
    await db
      .update(projectsTable)
      .set({
        projectName: parsedResult?.projectName,
        projectVisualDescription: parsedResult?.projectVisualDescription,
        theme: parsedResult?.theme,
      })
      .where(eq(projectsTable.id, parseFloat(id)));

      //   insert data into screens configuration table
      parsedResult?.screens?.forEach(async (screen: ScreenConfigProps) => {
        //   the error of concern is right here 
          await db.insert(screenConfigTable).values({
              projectId: projectId,
              screenId: screen.id,
              screenName: screen?.name,
              purpose: screen?.purpose,
              screenDescription: screen?.layoutDescription,
              code: screen?.code
          }).returning();
      })

    return NextResponse.json(
      {
        success: true,
        message: "Mockup successfully created!",
            data: parsedResult,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error((error as Error).message || "Failed to create mockup");
    return NextResponse.json({
      success: false,
      message: (error as Error).message || "Failed to create mockup!",
    });
  }
}
