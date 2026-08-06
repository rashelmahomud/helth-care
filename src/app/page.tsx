import Banner from "../components/Banner"
import WhyChooseUs from "../components/home/WhyChooseUs";
import DoctorPage from "./doctors/page";
import Services from "./services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <WhyChooseUs />
      <DoctorPage />
    </div>
  );
}
