'use client'

import Image from "next/image";
import Header from "./shared/ui/Header/Header";
import Slogan from "./shared/ui/Slogan/Slogan";
import BookingPanel from "./features/booking/ui/BookingPanel/BookingPanel";
import About from "./shared/ui/About/About";
import LocalTime from "./shared/ui/LocalTime/LocalTime";
import dynamic from "next/dynamic";
import CustomMap from "./features/customMap/ui/CustomMap/CustomMap";

export default function Home() {

  const customMap = dynamic(
    () => import("./features/customMap/ui/CustomMap/CustomMap"),
    { ssr: false }
  )

  return (
    <main>
      <Header />
      <Slogan />
      <BookingPanel />

      <About />

      <CustomMap />
      
    </main>
  );
}
