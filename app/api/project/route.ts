import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/drizzle";
import { projectsTable } from "@/db/schema";

// create a project
export async function POST(req: NextRequest) {
    const { input, device, projectId } = await req.json();

    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated || !userId) {
        return NextResponse.json({
            success: false,
            message: "Not authorized, login!"
        }, { status: 401 });
    }


    try {
        const [project] = await db.insert(projectsTable).values({
            projectId: projectId,
            userId: userId,
            userInput: input,
            deviceType: device,
        }).returning();

        return NextResponse.json({
            success: true,
            message: "Project has been successfully added!",
            project
        }, { status: 201 });
    } catch (error) {
        console.error("Something went wrong in the project route:", error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message || "Failed to create project!"
        }, { status: 500 });
    }

}


// get project 
// export async function GET(request: RouteContext<"/api/projects/[projectId]">) {
    
// }