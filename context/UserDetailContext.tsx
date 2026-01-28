import { createContext, useContext } from "react";

export interface DBUser {
    id: number;
    userId: string;
    name: string;
    email: string;
    credits: number;
    createdAt: string;
}

interface UserContextType {
    user: DBUser | null;
    loading: boolean;
    refetch: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const userDetails = () => {
    const ctx = useContext<UserContextType>;
    if (!ctx) throw new Error("userDetail must be used within userProvider");

    return ctx;
}