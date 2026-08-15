"use client";

import { useState } from "react";
import { Mail, CheckCircle, RefreshCw } from "lucide-react";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "@/src/firebase/firebase.config";
import useAuth from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
    const { user } = useAuth();
    const router = useRouter();

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleResend = async () => {
        if (!user) return;

        try {
            setLoading(true);
            setError("");
            setMessage("");

            await sendEmailVerification(user);

            setMessage(
                "Verification email sent successfully. Check your inbox."
            );
        } catch (error) {
            console.error(error);
            setError("Failed to send verification email.");
        } finally {
            setLoading(false);
        }
    };

    const handleCheckVerification = async () => {
        if (!user) return;

        try {
            await user.reload();

            if (auth.currentUser?.emailVerified) {
                router.push("/");
            } else {
                setError(
                    "Your email is not verified yet. Please check your email."
                );
            }
        } catch (error) {
            console.error(error);
            setError("Could not check verification status.");
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100">
                    <Mail className="h-10 w-10 text-cyan-600" />
                </div>

                <h1 className="mt-6 text-3xl font-bold text-slate-900">
                    Verify Your Email
                </h1>

                <p className="mt-4 leading-7 text-slate-500">
                    We sent a verification link to:
                </p>

                <p className="mt-2 font-semibold text-cyan-600">
                    {user?.email}
                </p>

                <p className="mt-4 text-sm text-slate-500">
                    Please check your inbox and click the verification
                    link to activate your account.
                </p>

                {message && (
                    <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-50 p-4 text-left text-sm text-green-700">
                        <CheckCircle size={20} />
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <button
                    onClick={handleCheckVerification}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 font-semibold text-white hover:bg-cyan-700"
                >
                    <CheckCircle size={18} />
                    I Verified My Email
                </button>

                <button
                    onClick={handleResend}
                    disabled={loading}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                >
                    <RefreshCw size={18} />
                    {loading ? "Sending..." : "Resend Verification Email"}
                </button>

            </div>
        </main>
    );
}