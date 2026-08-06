// import { Doctor } from "@/src/types/doctors";


// interface DoctorCardProps {
//     doctor: Doctor;
//     onBookNow?: (doctor: Doctor) => void;
// }

// export const DoctorCards: React.FC<DoctorCardProps> = ({ doctor, onBookNow }) => {
//     return (
//         <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
//             {/* Top Banner / Header Info */}
//             <div className="p-6">
//                 <div className="flex items-start gap-4">
//                     {/* Doctor Image */}
//                     <div className="relative">
//                         <img
//                             src={doctor.image}
//                             alt={doctor.name}
//                             className="w-24 h-24 rounded-xl object-cover border-2 border-sky-500 shadow-sm"
//                         />
//                         <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow">
//                             ★ {doctor.rating}
//                         </span>
//                     </div>

//                     {/* Basic Info */}
//                     <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                             <div>
//                                 <span className="inline-block bg-sky-50 text-sky-600 text-xs font-semibold px-2.5 py-1 rounded-md mb-1">
//                                     {doctor.specialty}
//                                 </span>
//                                 <h3 className="text-lg font-bold text-slate-800">{doctor.name}</h3>
//                                 <p className="text-xs text-slate-500">{doctor.degree}</p>
//                             </div>
//                         </div>

//                         <p className="text-xs text-slate-600 mt-2 font-medium flex items-center gap-1">
//                             🏥 {doctor.hospital}
//                         </p>
//                         <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
//                             📍 {doctor.location}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Quick Stats Grid */}
//                 <div className="grid grid-cols-3 gap-2 my-4 bg-slate-50 p-3 rounded-xl text-center">
//                     <div>
//                         <p className="text-[10px] text-slate-400 uppercase font-semibold">Experience</p>
//                         <p className="text-sm font-bold text-slate-700">{doctor.experience}</p>
//                     </div>
//                     <div className="border-x border-slate-200">
//                         <p className="text-[10px] text-slate-400 uppercase font-semibold">Patients</p>
//                         <p className="text-sm font-bold text-slate-700">{doctor.patients}</p>
//                     </div>
//                     <div>
//                         <p className="text-[10px] text-slate-400 uppercase font-semibold">Reviews</p>
//                         <p className="text-sm font-bold text-slate-700">{doctor.reviews}</p>
//                     </div>
//                 </div>

//                 {/* Specialization Tags (Limited view) */}
//                 <div className="flex flex-wrap gap-1.5 mb-4">
//                     {doctor.specializations.slice(0, 3).map((spec, index) => (
//                         <span
//                             key={index}
//                             className="bg-slate-100 text-slate-600 text-[11px] px-2.5 py-1 rounded-full"
//                         >
//                             {spec}
//                         </span>
//                     ))}
//                     {doctor.specializations.length > 3 && (
//                         <span className="bg-slate-100 text-slate-500 text-[11px] px-2 py-1 rounded-full">
//                             +{doctor.specializations.length - 3} more
//                         </span>
//                     )}
//                 </div>

//                 {/* Availability info */}
//                 <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-2 rounded-lg flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//                     {doctor.availability}
//                 </div>
//             </div>

//             {/* Footer / Action Area */}
//             <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
//                 <div>
//                     <span className="text-xs text-slate-400 block">Consultation Fee</span>
//                     <span className="text-lg font-extrabold text-slate-900">{doctor.consultationFee}</span>
//                 </div>
//                 <button
//                     onClick={() => onBookNow && onBookNow(doctor)}
//                     className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-colors"
//                 >
//                     Book Appointment
//                 </button>
//             </div>
//         </div>
//     );
// };