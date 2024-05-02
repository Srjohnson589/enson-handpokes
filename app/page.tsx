import Image from "next/image";
import Link from "next/link";
import About from "@/components/About";
import WorkSamples from "@/components/WorkSamples";
import SectionTitle from "@/components/SectionTitle";
import Faqs from "@/components/Faqs";

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
           {/* hero  */}
            <div className="hero min-h-80 min-w-max">
                <div className="hero-content w-20 text-center">
                    <div className="max-w-md">
                    <h1 className="text-3xl my-4">handpoke tattoos by enson</h1>
                    <Link href={'/contact'}><button className="btn btn-primary my-7">Book with me!</button></Link>
                    </div>
                </div>
            </div>
            <SectionTitle title={"about"} />
            <About/>
            <SectionTitle title={"some pieces"} />
            <WorkSamples/>
            <SectionTitle title={"my studio"} />
            <About/>
            <SectionTitle title={"FAQs"}/>
            <Faqs/>
            <SectionTitle title={"merch store"} />
            <About />
            <br className="size-lg"></br>
        </main>
    );
}

export default Home;