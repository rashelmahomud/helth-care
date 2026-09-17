import DoctorSkelaton from "@/src/components/skelaton/DoctorSkelaton";

const loading = () => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, index) => (
                <DoctorSkelaton key={index}></DoctorSkelaton>
            ))}
        </div>
    );
};

export default loading;