import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CourseGrid } from "./components/CourseGrid";
import { MindfulnessCard } from "./components/MindfulnessCard";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CourseGrid />
        <MindfulnessCard />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
