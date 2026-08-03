import AuthBanner from "@/src/components/auth/AuthBanner";
import LoginForm from "@/src/components/auth/LoginForm";

const LoginPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-10">
                <div className="grid w-full overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl lg:grid-cols-2">
                    {/* Left Side */}
                    <AuthBanner />

                    {/* Right Side */}
                    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;