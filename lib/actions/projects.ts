"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/drizzle";
import { projectsTable, screenConfigTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";


export async function getProject(projectId: string) {

    const { userId } = await auth();

    if (!userId) {
        return { success: false, message: "Not authorized! Login."}
    }

    if (!projectId) {
        return {success: false, message: "Project ID not found!"}
    }
    
    try {
        // fetch product
        const [project] = await db.select().from(projectsTable).where(
            and(
                eq(projectsTable.id, parseFloat(projectId)),
                eq(projectsTable.userId, userId)
            )
        ).limit(1);

        if (!project) {
            return { success: false, message: "Project not found!"}
        }

        // fetch the project with screens
        const projectWithScreens = await db.select().from(screenConfigTable).where(
            eq(screenConfigTable.projectId, project.projectId)
        );

        return {
            success: true,
            data: project,
            screenConfig: projectWithScreens,
            message: "Project Found!"
        };
    } catch (error) {
        console.error("Something went wrong!", error);
        return { success: false, message: error instanceof Error ? error.message : "Failed to fetch project"}
    }
}