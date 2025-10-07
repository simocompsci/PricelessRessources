import About from "./components/Landing/About";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About/>
    </main>
  );
}
