import { getDoctors } from "@/src/api/doctorApi";
import DeleteDoctorButton from "@/src/components/DeleteDoctorButton";
import EditDoctorForm from "@/src/components/EditDoctorForm";
import { DoctorsType } from "@/src/types/doctors";
import Image from "next/image";

export const dynamic = "force-dynamic";

const TotalDoctors = async () => {
    const totalDoctors: DoctorsType[] = await getDoctors();
    return (
        <div className="min-h-screen bg-[#F2F4F2] px-6 py-14 md:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 border-b border-[#16302B]/15 pb-6">
                    <h1 className="font-serif text-3xl text-[#16302B]">Doctors on staff</h1>
                    <p className="mt-1 text-sm text-[#16302B]/60">
                        {totalDoctors.length} physicians currently registered
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-px bg-[#16302B]/10 sm:grid-cols-2 lg:grid-cols-3">
                    {totalDoctors.map((doctor) => (
                        <div
                            key={doctor._id}
                            className="group relative flex gap-4 bg-[#F2F4F2] p-6 transition-colors hover:bg-white"
                        >
                            <span className="absolute bottom-6 left-0 top-6 w-[3px] bg-[#7C9885]" />

                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-[#16302B]/10">
                                <Image
                                    src={doctor.image}
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
                                <DeleteDoctorButton id={doctor._id} />
                                <EditDoctorForm doctor={doctor} />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TotalDoctors;