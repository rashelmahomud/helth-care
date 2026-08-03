import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ForgotPasswordForm from "@/src/components/auth/ForgetPasswordFrom";

export default function ForgotPasswordPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-10">
                <div className="w-full max-w-lg rounded-[30px] border border-slate-200 bg-white p-8 shadow-2xl md:p-12">
                    <Link
                        href="/login"
                        className="mb-8 inline-flex items-center gap-2 text-cyan-600 transition hover:text-cyan-700"
                    >
                        <ArrowLeft size={18} />
                        Back to Login
                    </Link>

                    <ForgotPasswordForm />
                </div>
            </div>
        </main>
    );
}