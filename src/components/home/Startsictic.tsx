import { Statistic } from "@/src/types/Statistics";
import {
    Users,
    UserRoundCheck,
    Building2,
    Award,
} from "lucide-react";

const statistics: Statistic[] = [
    {
        id: 1,
        title: "Happy Patients",
        value: "25K+",
        icon: Users,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        id: 2,
        title: "Expert Doctors",
        value: "120+",
        icon: UserRoundCheck,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        id: 3,
        title: "Medical Departments",
        value: "30+",
        icon: Building2,
        color: "bg-orange-100 text-orange-600",
    },
    {
        id: 4,
        title: "Years of Experience",
        value: "25+",
        icon: Award,
        color: "bg-violet-100 text-violet-600",
    },
];

const Statistics = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                        Our Achievements
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        Trusted By Thousands
                        <span className="block text-cyan-600">
                            Delivering Quality Healthcare
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We are committed to providing exceptional healthcare services with
                        experienced doctors, advanced technology, and compassionate care.
                    </p>
                </div>

                {/* Statistics */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {statistics.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                            >
                                <div
                                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${item.color} transition group-hover:scale-110`}
                                >
                                    <Icon size={38} />
                                </div>

                                <h3 className="mt-8 text-5xl font-extrabold text-slate-900">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-lg font-medium text-slate-600">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Banner */}
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 px-8 py-12 text-center">
                    <h3 className="text-3xl font-bold text-white">
                        Your Health Is Our Highest Priority
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-cyan-100">
                        Join thousands of satisfied patients who trust our experienced
                        doctors and world-class healthcare services every day.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Statistics;