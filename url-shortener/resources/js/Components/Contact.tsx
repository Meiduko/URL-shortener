import githubLogo from "../../../public/githubLogo.svg";

export default function Contact() {
    return (
        <section className="flex flex-col justify-evenly">
            <h3 className="text-xl">
                Te invito a ver el repositorio en github
            </h3>
            <a href="https://github.com/meiduko/url-shortener">
                {" "}
                <img
                    className="indigo-900 m-auto h-24 w-24 justify-self-center"
                    src={githubLogo}
                    alt="Clicable github logo that redirects you to the repository of this project"
                />
            </a>
        </section>
    );
}
