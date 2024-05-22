import { router } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function UrlForm() {
    const [longUrl, setLongUrl] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.post("/urls", {
            longUrl: longUrl,
        });
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className="flex flex-col gap-4"
        >
            <h2 className="text-2xl">Introduce la URL a acortar</h2>
            <div className="flex">
                <input
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="w-10/12 rounded-l-lg text-black"
                    type="text"
                    name="longUrl"
                    id="longUrl"
                    placeholder="https://google.com"
                    value={longUrl}
                />
                <button className="w-2/12 rounded-r-lg bg-indigo-900/50">
                    Acortar URL
                </button>
            </div>
            <span className="text-center"></span>
        </form>
    );
}
