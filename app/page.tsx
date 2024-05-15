import Hero from "@/components/Hero";
import About from "@/components/About";
import Counter from "@/components/Counter/Counter";
import Faqs from "@/components/Faqs";
import WorkSamples from "@/components/WorkSamples";

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center mt-72">
            <Hero/>
            <About/>
            <Counter/>
            <WorkSamples/>
            <Faqs/>
            <br className="size-lg"></br>
        </main>
    );
}

export default Home;