import { getDoctors } from "@/src/api/doctorApi";
import DeleteDoctorButton from "@/src/components/DeleteDoctorButton";
import EditDoctorForm from "@/src/components/EditDoctorForm";
import { DoctorsType } from "@/src/types/doctors";
import Image from "next/image";

export const dynamic = "force-dynamic";

const TotalDoctors = async () => {
    let totalDoctors: DoctorsType[] = [];

    let error = "";
    try {
        totalDoctors = await getDoctors();
    } catch (err) {
        error = err instanceof Error ? err.message : "Failed to load doctors";
    }

    return (
        <div className="min-h-screen bg-[#F2F4F2] px-6 py-14 md:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 border-b border-[#16302B]/15 pb-6">
                    {/* ✅ CHANGED: typo "staf" -> "staff" */}
                    <h1 className="font-serif text-3xl text-[#16302B]">Doctors on staff</h1>
                    <p className="mt-1 text-sm text-[#16302B]/60">
                        {totalDoctors.length} physicians currently registered
                    </p>
                </div>

                {/* ✅ NEW: show the real error on the page */}
                {error && (
                    <p className="mb-6 rounded bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </p>
                )}

                {/* ✅ NEW: empty state */}
                {!error && totalDoctors.length === 0 && (
                    <p className="text-sm text-[#16302B]/60">No doctors found.</p>
                )}

                <div className="grid grid-cols-1 gap-px bg-[#16302B]/10 sm:grid-cols-2 lg:grid-cols-3">
                    {totalDoctors.map((doctor) => (
                        <div
                            key={doctor._id}
                            className="group relative flex gap-4 bg-[#F2F4F2] p-6 transition-colors hover:bg-white"
                        >
                            <span className="absolute bottom-6 left-0 top-6 w-[3px] bg-[#7C9885]" />

                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-[#16302B]/10">
                                <Image
                                    src={doctor.image || "/doctor-placeholder.png"} // ✅ CHANGED: fallback for empty image
                                    alt={doctor.name}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex min-w-0 flex-1 flex-col justify-center">
                                <h2 className="truncate font-serif text-lg text-[#16302B]">
                                    {doctor.name}
                                </h2>
                                {/* ✅ CHANGED: wrapper so the buttons sit side by side */}
                                <div className="mt-2 flex items-center gap-2">
                                    <DeleteDoctorButton id={doctor._id} />
                                    <EditDoctorForm doctor={doctor} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TotalDoctors;