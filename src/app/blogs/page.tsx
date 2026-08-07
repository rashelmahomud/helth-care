import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, UserRound } from "lucide-react";

const blogs = [
    {
        id: 1,
        title: "10 Tips for Maintaining a Healthy Heart",
        slug: "healthy-heart-tips",
        image: "/images/doctor-04.png",
        category: "Cardiology",
        author: "Dr. Sarah Johnson",
        date: "15 July 2026",
        description:
            "Discover practical lifestyle changes and expert advice to keep your heart healthy and reduce the risk of cardiovascular disease.",
    },
    {
        id: 2,
        title: "How Regular Health Checkups Save Lives",
        slug: "regular-health-checkup",
        image: "/images/doctor-03.png",
        category: "General Health",
        author: "Dr. David Lee",
        date: "20 July 2026",
        description:
            "Learn why routine health screenings are essential for detecting diseases early and maintaining long-term wellness.",
    },
    {
        id: 3,
        title: "Child Vaccination Schedule Every Parent Should Know",
        slug: "child-vaccination-guide",
        image: "/images/doctor-02.png",
        category: "Pediatrics",
        author: "Dr. Emily Wilson",
        date: "28 July 2026",
        description:
            "A complete guide to childhood vaccinations, helping parents protect their children from preventable diseases.",
    },
];

const Blogs = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                        Latest Articles
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        Health Tips &
                        <span className="block text-cyan-600">
                            Medical News
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Stay informed with expert healthcare advice, wellness tips,
                        and the latest medical insights from our specialists.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                <span className="absolute left-5 top-5 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                                    {blog.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-5 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <UserRound size={16} />
                                        {blog.author}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <CalendarDays size={16} />
                                        {blog.date}
                                    </div>
                                </div>

                                <h3 className="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-cyan-600">
                                    {blog.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {blog.description}
                                </p>

                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:gap-3"
                                >
                                    Read More
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
                    >
                        View All Articles
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blogs;