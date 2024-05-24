import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import UrlForm from "@/Components/UrlForm";
import YourLinks from "@/Components/YourLinks";
import { getUrls } from "@/services/getUrls";
import { UrlResponse } from "@/types";
import { router } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
    const [urls, setUrls] = useState<UrlResponse[]>([]);

    const handleSubmit = (
        e: FormEvent<HTMLFormElement>,
        longUrl: string,
        reset: () => void,
    ) => {
        e.preventDefault();
        router.reload({ only: ["YourLinks"] });
        router.post("/urls", {
            longUrl: longUrl,
        });
        getUrls().then((res) => setUrls(res));
        reset();
    };

    useEffect(() => {
        getUrls().then((res) => setUrls(res));
    }, []);
    return (
        <div className="flex min-h-screen justify-center">
            <Navbar />
            <main className="mt-36 flex w-2/3 flex-col justify-center gap-10 sm:mt-24 xl:mt-0">
                <section className=" flex flex-col justify-evenly gap-10 sm:mt-0 xl:flex-row">
                    <article className="border-outline h-fit rounded-lg border p-4 text-center xl:w-full">
                        <UrlForm handleSubmit={handleSubmit} />
                    </article>
                    <article className="border-outline min-h-64 overflow-auto rounded-lg border p-4 text-center  scrollbar scrollbar-track-transparent scrollbar-thumb-indigo-800 scrollbar-thumb-rounded-full xl:w-full">
                        <YourLinks urls={urls} />
                    </article>
                </section>
                <section className="border-outline w- flex h-fit min-h-64  self-center overflow-x-auto rounded-lg border p-4 text-center xl:w-1/3">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}
