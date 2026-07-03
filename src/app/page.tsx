import HalideLanding from "@/components/demo";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <HalideLanding />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
