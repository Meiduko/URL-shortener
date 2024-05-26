import { FormEvent, useState } from "react"

interface Props {
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    longUrl: string,
    reset: () => void,
  ) => void
}

export default function UrlForm ({ handleSubmit }: Props) {
  const [longUrl, setLongUrl] = useState("")
  const reset = () => {
    setLongUrl("")
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e, longUrl, reset)}
      action=""
      className="flex min-h-64 flex-col "
    >
      <h2 className="text-2xl">Introduce la URL a acortar</h2>
      <div className="mt-24 flex flex-row">
        <input
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-10/12 rounded-l-lg text-black"
          type="text"
          name="longUrl"
          id="longUrl"
          placeholder="https://google.com"
          value={longUrl}
        />
        <button className="w-2/12 rounded-r-lg bg-black/70 text-white dark:bg-indigo-900/50">
          Acortar
        </button>
      </div>
      <span className="text-center"></span>
    </form>
  )
}