"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
    Eye,
    EyeOff,
    HeartPulse,
    Lock,
    Mail,
    ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

import useAuth from "@/src/hooks/useAuth";

export default function LoginForm() {
    const router = useRouter();
    const { login } = useAuth();

    const [showPassword, setShowPassword] =
        useState(false);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        const form = e.currentTarget;

        const emailInput = form.elements.namedItem(
            "email"
        ) as HTMLInputElement | null;

        const passwordInput = form.elements.namedItem(
            "password"
        ) as HTMLInputElement | null;

        if (!emailInput || !passwordInput) {
            setError("Email or password field is missing.");
            setLoading(false);
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        try {
            const result = await login(
                email,
                password
            );

            console.log(
                "Logged in user:",
                result.user
            );

            router.push("/");
        } catch (error) {
            console.error("Login error:", error);

            setError(
                "Invalid email or password. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:hidden">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 shadow-lg">
                    <HeartPulse className="h-8 w-8 text-white" />
                </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">
                    Welcome Back 👋
                </h1>

                <p className="mt-3 text-slate-500">
                    Sign in to manage your appointments and
                    healthcare services.
                </p>
            </div>

            <form
                className="space-y-6"
                onSubmit={handleLogin}
            >
                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block font-medium text-slate-700"
                    >
                        Email Address
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 px-4 transition focus-within:border-cyan-600 focus-within:ring-2 focus-within:ring-cyan-100">
                        <Mail
                            className="text-slate-400"
                            size={20}
                        />

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            autoComplete="email"
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="block font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="flex items-center rounded-xl border border-slate-300 px-4 transition focus-within:border-cyan-600 focus-within:ring-2 focus-within:ring-cyan-100">
                        <Lock
                            className="text-slate-400"
                            size={20}
                        />

                        <input
                            id="password"
                            name="password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="••••••••"
                            required
                            autoComplete="current-password"
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="text-slate-400 transition hover:text-cyan-600"
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* Remember */}
                <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                        />

                        Remember me
                    </label>

                    <Link
                        href="/forgot-password"
                        className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* Login */}
                <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? (
                        <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Signing In...
                        </>
                    ) : (
                        <>
                            Sign In
                            <ArrowRight size={18} />
                        </>
                    )}
                </button>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300" />
                    </div>

                    <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-sm text-slate-500">
                            OR CONTINUE WITH
                        </span>
                    </div>
                </div>

                {/* Google */}
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-4 font-medium transition hover:bg-slate-50"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.611 20.083H42V20H24v8h11.303C33.651 32.657 29.24 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.959 3.041l5.657-5.657C34.053 6.053 29.277 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                        />

                        <path
                            fill="#FF3D00"
                            d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.959 3.041l5.657-5.657C34.053 6.053 29.277 4 24 4c-7.732 0-14.41 4.388-17.694 10.691z"
                        />

                        <path
                            fill="#4CAF50"
                            d="M24 44c5.177 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.164 35.091 26.715 36 24 36c-5.219 0-9.617-3.317-11.283-7.946l-6.522 5.025C9.438 39.556 16.227 44 24 44z"
                        />

                        <path
                            fill="#1976D2"
                            d="M43.611 20.083H42V20H24v8h11.303c-.793 2.266-2.29 4.2-4.084 5.57l.003-.002 6.19 5.238C36.971 38.48 44 33 44 24c0-1.341-.138-2.65-.389-3.917z"
                        />
                    </svg>

                    Continue with Google
                </button>

                {/* Register */}
                <p className="text-center text-slate-600">
                    Don't have an account?{" "}

                    <Link
                        href="/register"
                        className="font-semibold text-cyan-600 hover:text-cyan-700"
                    >
                        Create Account
                    </Link>
                </p>
            </form>
        </div>
    );
}