import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    UserRound,
    ArrowLeft,
    Clock3,
    Share2,
    CheckCircle2,
    Wrench,
    Camera,
    Phone,
} from "lucide-react";

const blogs = {
    "healthy-heart-tips": {
        title: "10 Tips for Maintaining a Healthy Heart",
        image: "/images/doctor.png",
        category: "Cardiology",
        author: "Dr. Sarah Johnson",
        date: "15 July 2026",
        readTime: "5 min read",
        description:
            "Discover practical lifestyle changes and expert advice to keep your heart healthy and reduce the risk of cardiovascular disease.",
        content: [
            {
                heading: "Why Heart Health Matters",
                text: "Heart disease remains one of the leading causes of death worldwide. Maintaining a healthy lifestyle can significantly reduce your risk and improve your quality of life.",
            },
            {
                heading: "Eat a Balanced Diet",
                text: "Include fruits, vegetables, whole grains, lean protein, and healthy fats in your daily meals while reducing processed foods and excess sugar.",
            },
            {
                heading: "Exercise Regularly",
                text: "Aim for at least 30 minutes of moderate physical activity five days a week. Walking, cycling, and swimming are excellent options.",
            },
            {
                heading: "Manage Stress",
                text: "Practice meditation, yoga, or breathing exercises to reduce stress and improve heart health.",
            },
            {
                heading: "Get Regular Checkups",
                text: "Routine health screenings help detect high blood pressure, diabetes, and cholesterol problems before they become serious.",
            },
        ],
    },
};

export default async function BlogDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blog =
        blogs[slug as keyof typeof blogs] ??
        blogs["healthy-heart-tips"];

    return (
        <main className="bg-slate-50">

            {/* Hero */}
            <section className="bg-gradient-to-r from-cyan-600 to-sky-700 py-24">
                <div className="mx-auto max-w-5xl px-6">

                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-cyan-100 hover:text-white"
                    >
                        <ArrowLeft size={18} />
                        Back to Blogs
                    </Link>

                    <span className="mt-8 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                        {blog.category}
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
                        {blog.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
                        {blog.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6 text-cyan-100">

                        <div className="flex items-center gap-2">
                            <UserRound size={18} />
                            {blog.author}
                        </div>

                        <div className="flex items-center gap-2">
                            <CalendarDays size={18} />
                            {blog.date}
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock3 size={18} />
                            {blog.readTime}
                        </div>

                    </div>

                </div>
            </section>

            {/* Article */}
            <section className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 lg:grid-cols-3">

                    {/* Content */}
                    <article className="lg:col-span-2">

                        <div className="relative h-[450px] overflow-hidden rounded-3xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="prose prose-lg mt-12 max-w-none">

                            {blog.content.map((section) => (
                                <div key={section.heading} className="mb-12">

                                    <h2 className="text-3xl font-bold text-slate-900">
                                        {section.heading}
                                    </h2>

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {section.text}
                                    </p>

                                </div>
                            ))}

                            <div className="rounded-3xl bg-cyan-50 p-8">

                                <h3 className="text-2xl font-bold">
                                    Healthy Lifestyle Checklist
                                </h3>

                                <div className="mt-6 space-y-4">

                                    {[
                                        "Eat healthy foods",
                                        "Exercise regularly",
                                        "Avoid smoking",
                                        "Sleep 7-8 hours",
                                        "Drink enough water",
                                        "Visit your doctor regularly",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="text-cyan-600" />
                                            {item}
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-8">

                        <div className="rounded-3xl bg-white p-8 shadow">

                            <h3 className="text-2xl font-bold">
                                Share This Article
                            </h3>

                            <div className="mt-6 flex gap-4">

                                <button className="rounded-xl bg-slate-100 p-3 hover:bg-cyan-100">
                                    <Wrench />
                                </button>

                                <button className="rounded-xl bg-slate-100 p-3 hover:bg-cyan-100">
                                    <Camera />
                                </button>

                                <button className="rounded-xl bg-slate-100 p-3 hover:bg-cyan-100">
                                    <Phone />
                                </button>

                                <button className="rounded-xl bg-slate-100 p-3 hover:bg-cyan-100">
                                    <Share2 />
                                </button>

                            </div>

                        </div>

                        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 p-8 text-white">

                            <h3 className="text-3xl font-bold">
                                Need Medical Advice?
                            </h3>

                            <p className="mt-5 text-cyan-100">
                                Schedule an appointment with our experienced healthcare specialists today.
                            </p>

                            <Link
                                href="/appointment"
                                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-cyan-700"
                            >
                                Book Appointment
                            </Link>

                        </div>

                    </aside>

                </div>

            </section>

            {/* Related Articles */}
            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-center text-4xl font-bold">
                        Related Articles
                    </h2>

                    <div className="mt-14 grid gap-8 md:grid-cols-3">

                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="rounded-3xl border bg-slate-50 p-6 transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <h3 className="text-xl font-bold">
                                    Healthcare Article {item}
                                </h3>

                                <p className="mt-4 text-slate-600">
                                    Read more expert health advice from our medical specialists.
                                </p>

                                <Link
                                    href="/blogs"
                                    className="mt-6 inline-block font-semibold text-cyan-600"
                                >
                                    Read More →
                                </Link>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}