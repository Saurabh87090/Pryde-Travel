import Image from "next/image";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Service from "@/components/Service";

import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import CircularDemo from "@/components/Test";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Service/>
      <CircularDemo/>
      <About/>
      <Gallery/>
      <Review/>
      <Banner/>
      <Footer/>
    </div>
  );
}
