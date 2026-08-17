export type PatientInfo = {
    name: string;
    email: string;
    phone: string;
    gender: string;
    age: number;
    bloodGroup: string;
    location: string;
};

export type HospitalCost = {
    id: number;
    name: string;
    description: string;
    price: number;
    icon: React.ElementType;
};