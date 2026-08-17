import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Testemonial } from "@/src/types/Testimonial";

const testimonials: Testemonial[] = [
    {
        id: 1,
        name: "John Smith",
        role: "Heart Patient",
        image: "/images/doctor-02.png",
        rating: 5,
        review:
            "The doctors were incredibly professional and caring. Booking an appointment was simple, and I received excellent treatment. Highly recommended!",
    },
    {
        id: 2,
        name: "Emma Williams",
        role: "Mother",
        image: "/images/doctor-03.png",
        rating: 5,
        review:
            "The pediatric department took wonderful care of my daughter. The doctors explained everything clearly and made us feel comfortable.",
    },
    {
        id: 3,
        name: "Michael Johnson",
        role: "Businessman",
        image: "/images/doctor-04.png",
        rating: 5,
        review:
            "Modern facilities, experienced specialists, and exceptional patient support. One of the best healthcare experiences I've ever had.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                        Testimonials
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        What Our Patients
                        <span className="block text-cyan-600">
                            Say About Us
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Thousands of patients trust our healthcare services.
                        Here are some of their experiences.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Quote */}
                            <div className="absolute right-8 top-8 rounded-full bg-cyan-100 p-3">
                                <Quote className="text-cyan-600" size={22} />
                            </div>

                            {/* Patient */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-cyan-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {item.name}
                                    </h3>

                                    <p className="text-slate-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="mt-6 flex gap-1">
                                {Array.from({ length: item.rating }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="mt-6 leading-8 text-slate-600">
                                {item.review}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 px-8 py-14 text-center">
                    <h3 className="text-3xl font-bold text-white">
                        More Than 25,000 Happy Patients
                    </h3>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-cyan-100">
                        We are proud to provide trusted healthcare services with
                        experienced doctors, advanced medical technology, and
                        compassionate care.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;