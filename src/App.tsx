import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { Recognition } from "./components/Recognition";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="relative">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Recognition />
      </main>
      <Footer />
    </div>
  );
}
