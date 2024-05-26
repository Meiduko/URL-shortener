import appLogo from "../../../public/appLogo.svg";

export default function Navbar() {
    return (
        <nav className="fixed mt-2 flex w-2/3 justify-center rounded-full bg-black/40 dark:bg-indigo-900/90 p-4	text-center">
            <img height={50} width={50} src={appLogo} className="h-12 sm:h-9 md:h-12" alt="App logo" />
            <h1 className="text-3xl md:text-5xl"> URL Shortener</h1>
        </nav>
    );
}
