import About from "./components/Landing/About";
import Features from "./components/Landing/Features";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import Testimonials from "./components/Landing/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About/>
      <Features/>
      <Testimonials/>
    </main>
  );
}
