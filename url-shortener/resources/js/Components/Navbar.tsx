import appLogo from "../../../public/appLogo.svg";

export default function Navbar() {
    return (
        <nav className="fixed mt-2 flex w-2/3 justify-center rounded-full bg-indigo-900/50 p-4	text-center">
            <img src={appLogo} className="h-12 sm:h-9 md:h-12" alt="App logo" />
            <h1 className="text-3xl md:text-5xl"> URL Shortener</h1>
        </nav>
    );
}
