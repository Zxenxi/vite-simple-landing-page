import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SectionTwoCard } from "./components/SectionTwoCard";
import { SectionThree } from "./components/MiniIcon";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0f172a]">
      <Navbar />
      <Hero />
      <SectionTwoCard />
      <SectionThree />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
