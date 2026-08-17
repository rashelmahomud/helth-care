export interface DoctorSchedule {
    day: string;
    time: string;
}

export interface DoctorsType {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    image: string;
    hospital: string;
    degree: string;
    patients: string;
    email: string;
    phone: string;
    location: string;
    consultationFee: string;
    languages: string[];
    availability: string;
    about: string;
    education: string[];
    specializations: string[];
    achievements: string[];
    schedule: DoctorSchedule[];
}


