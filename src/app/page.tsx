import Banner from "../components/Banner"
import AppointmentCTA from "../components/home/AppoinmentCTA";
import FAQ from "../components/home/FAQ";
import Statistics from "../components/home/Startsictic";
import Testimonials from "../components/home/Testimonial";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Blogs from "./blogs/page";
import DoctorPage from "./doctors/page";
import Services from "./services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <WhyChooseUs />
      <DoctorPage />
      <Statistics />
      <Testimonials />
      <AppointmentCTA />
      <Blogs />
      <FAQ />
    </div>
  );
}
