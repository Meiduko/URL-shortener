import Checkbox from "@/Components/Checkbox";
import { useState } from "react";

export default function Home() {
    const [signedIn, setSignedIn] = useState(false);
    const [login, setLogin] = useState(false);
    return (
        <>
            <nav className="flex justify-center	text-center">
                <div className="fixed m-2 w-11/12 rounded-full bg-indigo-900/50 p-4">
                    <h1 className="text-3xl"> URL Shortener</h1>
                </div>
            </nav>
            <main className="mt-20 place-items-center">
                <section className="border-outline rounded-lg border p-4 text-center">
                    <form action="" className="flex flex-col gap-4">
                        <h2 className="text-2xl">Introduce la URL a acortar</h2>
                        <div className="flex">
                            <input
                                className="w-10/12 rounded-l-lg"
                                type="text"
                                name="longUrl"
                                id="longUrl"
                                placeholder="https://google.com"
                            />
                            <button className="w-2/12 rounded-r-lg bg-indigo-900/50">
                                Acortar URL
                            </button>
                        </div>
                        <span className="text-center">URL corta</span>
                    </form>
                </section>
                <Checkbox
                    onClick={() => setSignedIn(!signedIn)}
                    className="m-4"
                />
                <Checkbox onClick={() => setLogin(!login)} />

                {signedIn ? (
                    <section className="border-outline mt-4 rounded-lg border p-4 text-center">
                        <h2 className="text-2xl">Tus enlaces</h2>
                        <ul>
                            <li>https://mkdurl.com/example</li>
                        </ul>
                    </section>
                ) : (
                    <section className="justify-content-around flex flex-row gap-4">
                        {login ? (
                            <article className="border-outline mt-4 rounded-lg border p-4 text-center">
                                <h2 className="text-2xl">
                                    Inicia sesión para acceder a tus enlaces
                                </h2>
                                <form action="" className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        placeholder="johndoe@example.com"
                                    />
                                    <input
                                        type="text"
                                        placeholder="JohnsPassword"
                                    />
                                </form>
                            </article>
                        ) : (
                            <article className="border-outline mt-4 rounded-lg border p-4 text-center">
                                <h2 className="text-2xl">
                                    Regístrate para personalizar tus enlaces
                                </h2>
                                <form action="" className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        placeholder="johndoe@example.com"
                                    />
                                    <input
                                        type="text"
                                        placeholder="JohnsPassword"
                                    />
                                </form>
                            </article>
                        )}
                    </section>
                )}
            </main>
        </>
    );
}
