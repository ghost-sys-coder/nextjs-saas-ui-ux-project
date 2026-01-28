import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { auth, currentUser } from "@clerk/nextjs/server";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId) {
        return NextResponse.json({
            success: false,
            message: "Authorized Required!"
        }, { status: 401 });
    }

    try {
        const [existingUser] = await db.select().from(usersTable).where(eq(usersTable.userId, userId)).limit(1);

        if (existingUser) {
            return NextResponse.json({
                success: true,
                message: `Welcome back ${user?.firstName}`,
                user: existingUser
            }, { status: 200 });
        }

        const [newUser] = await db.insert(usersTable).values({
            userId: userId,
            name: user?.fullName ?? "User",
            email: user?.emailAddresses?.[0]?.emailAddress ?? "",
        }).returning();

        return NextResponse.json({
            success: true,
            message: "Account successfully created!",
            user: newUser
        }, { status: 201 });
    } catch (error) {
        console.error("Something went wrong!", error);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch user"
        }, { status: 500 });
    }
}