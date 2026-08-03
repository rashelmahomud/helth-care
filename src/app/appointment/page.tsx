import AppointmentForm from '@/src/components/AppointmentForm';
import AppointmentHero from '@/src/components/AppointmentHero';
import DoctorCard from '@/src/components/DoctorCard';
import EmergencyCard from '@/src/components/EmergencyCard';
import React from 'react';

const AppoinmentPage = () => {
    return (
        <main>
            <AppointmentHero />

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="space-y-8">
                        <DoctorCard />
                        <EmergencyCard />
                    </div>

                    <div className="lg:col-span-2">
                        <AppointmentForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AppoinmentPage;