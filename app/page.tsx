import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={'text-4xl font-extrabold'}>
                Enson Handpokes Home Page
                <br/>
            </div>

            {/*this can be moved anywhere*/}
            <button className={'bg-blue-500 p-2 rounded-2xl hover:opacity-70'}>
                <Link href={'/contact'}>Contact Me</Link>
            </button>
            <button className={'bg-blue-500 p-2 rounded-2xl hover:opacity-70'}>
                <Link href={'/work'}>My Work</Link>
            </button>
        </main>
    );
}
