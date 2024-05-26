import githubLogo from "../../../public/githubLogo.svg"

export default function Contact () {
  return (
    <>
      <h3 className="text-xl">
        Te invito a ver el repositorio en github
      </h3>
      <a href="https://github.com/meiduko/url-shortener">
        {" "}
        <img
          className="hover:scale-125 transition-all m-auto justify-self-center"
          width={96}
          height={96}
          src={githubLogo}
          alt="Clicable github logo that redirects you to the repository of this project"
        />
      </a>
    </>
  )
}
