"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import {
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

export default function RegisterForm() {
    const { register } = useAuth();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        const form = e.currentTarget;

        const firstName = (
            form.elements.namedItem("firstName") as HTMLInputElement
        ).value;

        const lastName = (
            form.elements.namedItem("lastName") as HTMLInputElement
        ).value;

        const email = (
            form.elements.namedItem("email") as HTMLInputElement
        ).value;

        const phone = (
            form.elements.namedItem("phone") as HTMLInputElement
        ).value;

        const password = (
            form.elements.namedItem("password") as HTMLInputElement
        ).value;

        const confirmPassword = (
            form.elements.namedItem("confirmPassword") as HTMLInputElement
        ).value;

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const result = await register(email, password);

            // console.log(result.user);
            // console.log(firstName, lastName, phone);

            setSuccess("Registration successful!");

            form.reset();

            setTimeout(() => {
                router.push("/");
            }, 1500);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Registration failed.");
            }
        }
    };

    return (
        <div className="w-full max-w-lg">
            {/* Heading */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">
                    Create Account
                </h1>

                <p className="mt-3 text-slate-500">
                    Create your healthcare account to book appointments
                    and manage your medical records.
                </p>
            </div>

            <form
                onSubmit={handleRegister}
                className="space-y-6"
            >
                {/* Name */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-medium">
                            First Name
                        </label>

                        <div className="flex items-center rounded-xl border px-4 focus-within:border-cyan-600">
                            <User size={18} className="text-slate-400" />

                            <input
                                name="firstName"
                                type="text"
                                placeholder="John"
                                required
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Last Name
                        </label>

                        <div className="flex items-center rounded-xl border px-4 focus-within:border-cyan-600">
                            <User size={18} className="text-slate-400" />

                            <input
                                name="lastName"
                                type="text"
                                placeholder="Smith"
                                required
                                className="w-full bg-transparent px-3 py-4 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block font-medium">
                        Email Address
                    </label>

                    <div className="flex items-center rounded-xl border px-4 focus-within:border-cyan-600">
                        <Mail size={18} className="text-slate-400" />

                        <input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="mb-2 block font-medium">
                        Phone Number
                    </label>

                    <div className="flex items-center rounded-xl border px-4 focus-within:border-cyan-600">
                        <Phone size={18} className="text-slate-400" />

                        <input
                            name="phone"
                            type="tel"
                            placeholder="+880 123456789"
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <div className="flex items-center rounded-xl border px-4 focus-within:border-cyan-600">
                        <Lock size={18} className="text-slate-400" />

                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password"
                            required
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
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

                {/* Confirm Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Confirm Password
                    </label>

                    <div className="flex items-center rounded-xl border px-4 focus-within:border-cyan-600">
                        <Lock size={18} className="text-slate-400" />

                        <input
                            name="confirmPassword"
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm password"
                            required
                            className="w-full bg-transparent px-3 py-4 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirm(!showConfirm)
                            }
                        >
                            {showConfirm ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="rounded-xl bg-red-50 p-4 text-red-600">
                        {error}
                    </div>
                )}

                {/* Success */}
                {success && (
                    <div className="rounded-xl bg-green-50 p-4 text-green-600">
                        {success}
                    </div>
                )}

                {/* Terms */}
                <label className="flex items-start gap-3 text-sm text-slate-600">
                    <input
                        required
                        type="checkbox"
                        className="mt-1 accent-cyan-600"
                    />

                    <span>
                        I agree to the{" "}
                        <Link
                            href="/terms"
                            className="font-semibold text-cyan-600"
                        >
                            Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="font-semibold text-cyan-600"
                        >
                            Privacy Policy
                        </Link>
                    </span>
                </label>

                {/* Register Button */}
                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700"
                >
                    Create Account
                    <ArrowRight size={18} />
                </button>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                    </div>

                    <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-sm text-slate-500">
                            OR
                        </span>
                    </div>
                </div>

                {/* Google */}
                <button
                    type="button"
                    className="w-full rounded-xl border py-4 font-medium transition hover:bg-slate-50"
                >
                    Continue with Google
                </button>

                {/* Login */}
                <p className="text-center text-slate-600">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-cyan-600"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
}