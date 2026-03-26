import Image from "next/image";
import Header from "./shared/ui/Header/Header";
import Slogan from "./shared/ui/Slogan/Slogan";
import BookingPanel from "./features/booking/ui/BookingPanel/BookingPanel";
import About from "./shared/ui/About/About";
import LocalTime from "./shared/ui/LocalTime/LocalTime";

export default function Home() {
  return (
    <main>
      <Header />
      <Slogan />
      <BookingPanel />

      <About />
      
    </main>
  );
}
