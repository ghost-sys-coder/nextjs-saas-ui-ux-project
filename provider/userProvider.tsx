"use client";
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import LoadingScreen from '@/components/shared/LoadingScreen';
import { useAuth } from '@clerk/nextjs';
import { DBUser, UserContext } from '@/context/UserDetailContext';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [isValidatingUser, setIsValidatingUser] = useState(false);
    const [userDetails, setUserDetails] = useState<DBUser | null>(null);
    const { isLoaded, isSignedIn } = useAuth();

    // console.log({ isLoaded, isSignedIn });

    const shouldShowToast = () => {
        const lastToastDate = localStorage.getItem("lastWelcomeToast");
        const today = new Date().toDateString();

        if (!lastToastDate || lastToastDate !== today) {
            localStorage.setItem("lastWelcomeToast", today);
            return true;
        }

        return false;
    }

    const createNewUser = useCallback(async () => {
        if (!isLoaded || !isSignedIn) return;

        setIsValidatingUser(true);

        try {
            // create or check clerk user in neon db
            const { data, status } = await axios.get("/api/user");

            console.log({ data });

            if (status === 200 && shouldShowToast()) {
                setUserDetails(data?.user);
                toast.success(data?.message || "Welcome back")
            }
            if (status === 201) {
                setUserDetails(data?.user);
                toast.success(data?.message || "Account successfully added!");
                localStorage.setItem("lastWelcomeToast", new Date().toDateString());
            }
        } catch (error) {
            console.error("Failed to create new user", error);
            toast.error((error as Error).message || "Something went wrong!");
        } finally {
            setIsValidatingUser(false);
        }
    }, [isLoaded, isSignedIn])

    useEffect(() => {
        createNewUser();
    }, [createNewUser]);

    if (isValidatingUser || !isLoaded) return <LoadingScreen />

    return (
        <UserContext.Provider value={{ user: userDetails, loading: isValidatingUser, refetch: createNewUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider