import { db } from "@/db/drizzle";
import { projectsTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


// get the project
export async function GET(
    request: NextRequest,
    {params}: {params: Promise<{projectId: string}>}
) {
    const { projectId } = await params;
    console.log({ projectId, type:typeof(projectId) });

    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated || !userId) {
        return NextResponse.json({
            success: false,
            message: "Not authorized, login!"
        }, { status: 401 });
    }

    
    if (!projectId) {
        return NextResponse.json({
            success: false,
            message: "Project ID not found!",
            projectId
        }, { status: 404 });
    }
    
    // const projectNum = Number(projectId);

    try {
        const [project] = await db.select().from(projectsTable).where(
            and(
                eq(projectsTable.id, parseFloat(projectId)),
                eq(projectsTable.userId, "user_39P7nnLPIjgPyMAVO256qAAglWD")
            )
        ).limit(1);

        if (!project) {
            return NextResponse.json({
                success: false,
                message: "No project found!"
            }, { status: 404 });
        }
        
        return NextResponse.json({
            success: true,
            message: "Project retrieved!",
            project
        }, { status: 200 });
    } catch (error) {
        console.error("Failed to retrieve project:", (error as Error).message);
        return NextResponse.json({
            success: false,
            message: (error as Error).message || "Failed to retrieve project!"
        }, { status: 500 });
    }
}