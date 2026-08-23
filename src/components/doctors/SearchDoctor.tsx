import { useState } from "react";



const SearchDoctor = () => {
    const [search, setSearch] = useState('')




    return (
        <div className="mx-auto max-w-3xl text-center">
            {/* search fields  */}
            <input
                type="text"
                placeholder="Search by specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
            />
        </div>
    );
};

export default SearchDoctor;