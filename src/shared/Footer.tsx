import Link from "next/link";
import {
    HeartPulse,
    MapPin,
    Phone,
    Mail,
    PhoneCall,
    GeorgianLariIcon,
    CreativeCommons,
} from "lucide-react";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
];

const services = [
    "Cardiology",
    "Neurology",
    "Dental Care",
    "Emergency Care",
    "Laboratory",
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600">
                                <HeartPulse className="h-6 w-6 text-white" />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white">MediCare</h2>
                                <p className="text-sm text-slate-400">
                                    Healthcare Solution
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 text-sm leading-7">
                            Providing quality healthcare with experienced doctors,
                            modern technology, and compassionate patient care.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <Link
                                href="#"
                                className="rounded-full border border-slate-700 p-2 transition hover:bg-cyan-600 hover:border-cyan-600"
                            >
                                <PhoneCall size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-slate-700 p-2 transition hover:bg-cyan-600 hover:border-cyan-600"
                            >
                                <GeorgianLariIcon size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-slate-700 p-2 transition hover:bg-cyan-600 hover:border-cyan-600"
                            >
                                <CreativeCommons size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-slate-700 p-2 transition hover:bg-cyan-600 hover:border-cyan-600"
                            >
                                <Phone size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="transition hover:text-cyan-400"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Our Services
                        </h3>

                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 text-cyan-500" size={18} />
                                <p className="text-sm">
                                    Chattogram, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-cyan-500" size={18} />
                                <p className="text-sm">+880 1234-567890</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-cyan-500" size={18} />
                                <p className="text-sm">support@medicare.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-slate-800 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row">
                        <p>
                            © {new Date().getFullYear()} MediCare. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-cyan-400">
                                Privacy Policy
                            </Link>

                            <Link href="/terms" className="hover:text-cyan-400">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}