"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Mail,
    Send,
    CheckCircle2,
} from "lucide-react";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO:
        // Firebase sendPasswordResetEmail()

        setSuccess(true);
    };

    if (success) {
        return (
            <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2
                        size={40}
                        className="text-green-600"
                    />
                </div>

                <h1 className="mt-6 text-3xl font-bold">
                    Check Your Email
                </h1>

                <p className="mt-4 leading-7 text-slate-500">
                    We've sent a password reset link to
                    your email address.
                </p>

                <Link
                    href="/login"
                    className="mt-8 inline-flex rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
                >
                    Back to Login
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">
                    Forgot Password?
                </h1>

                <p className="mt-3 text-slate-500">
                    Enter your email address and we'll
                    send you a password reset link.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div>
                    <label className="mb-2 block font-medium">
                        Email Address
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 px-4 transition focus-within:border-cyan-600">
                        <Mail
                            size={20}
                            className="text-slate-400"
                        />

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="john@example.com"
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700"
                >
                    Send Reset Link
                    <Send size={18} />
                </button>

                <p className="text-center text-slate-600">
                    Remember your password?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-cyan-600"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </>
    );
}