
import Hero from "@/components/Hero";
import About from "@/components/About";
import Counter from "@/components/Counter/Counter";
import Faqs from "@/components/Faqs";
import WorkSamples from "@/components/WorkSamples";

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center mt-72">
            <h1 className="my-8 text-4xl text-black"><span className="px-6">HAND.</span><span className="px-6">POKE.</span><span className="px-6">TATTOO.</span></h1>
            <About/>
            <Counter/>
            <WorkSamples/>
            <Faqs/>
            <br className="size-lg"></br>
        </main>
    );
}

export default Home;