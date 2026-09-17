
const DoctorSkelaton = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow">
            {/* Image */}
            <div className="h-72 w-full animate-pulse bg-gray-300" />

            {/* Content */}
            <div className="space-y-4 p-5">
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300" />

                <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-8 w-24 animate-pulse rounded bg-gray-300" />

                <div className="grid grid-cols-2 gap-3">
                    <div className="h-11 animate-pulse rounded-lg bg-gray-300" />
                    <div className="h-11 animate-pulse rounded-lg bg-gray-300" />
                </div>
            </div>
        </div>
    );
};

export default DoctorSkelaton;