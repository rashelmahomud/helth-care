"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/src/hooks/useAuth";

export default function AuthGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        // if (!user) {
        //     router.push("/login");
        //     return;
        // }

        // if (!user.emailVerified) {
        //     router.push("/verify-email");
        // }

        if (user && !user.emailVerified) {
            router.push("/verify-email");
        }


    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    // if (!user || !user.emailVerified) {
    //     return null;
    // }

    return <>{children}</>;
}