import Navbar from "@/Components/Navbar";
import UrlForm from "@/Components/UrlForm";
import YourLinks from "@/Components/YourLinks";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="mt-20 flex flex-col justify-items-center gap-4 md:flex-row">
                <section className="align-self-top border-outline h-fit rounded-lg border p-4 text-center md:w-1/2 ">
                    <UrlForm />
                </section>

                <section className="border-outline scrollbar scrollbar-thumb-indigo-800 scrollbar-thumb-rounded-full scrollbar-track-transparent sm: justify-center overflow-x-auto rounded-lg border p-4 text-center md:w-1/2">
                    <YourLinks />
                </section>
            </main>
        </>
    );
}
