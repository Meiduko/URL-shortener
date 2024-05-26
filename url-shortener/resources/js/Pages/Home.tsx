import ColorCheckBox from "@/Components/ColorCheckBox"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import UrlForm from "@/Components/UrlForm"
import YourLinks from "@/Components/YourLinks"
import { getUrls } from "@/services/getUrls"
import { UrlResponse } from "@/types"
import { router } from "@inertiajs/react"
import { FormEvent, useEffect, useState } from "react"


export default function Home () {
  const [urls, setUrls] = useState<UrlResponse[]>([])

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    longUrl: string,
    reset: () => void,
  ) => {
    e.preventDefault()
    router.reload({ only: ["YourLinks"] })
    router.post("/urls", {
      longUrl: longUrl,
    })
    getUrls().then((res) => setUrls(res))
    reset()
  }

  useEffect(() => {
    getUrls().then((res) => setUrls(res))
  }, [])
  return (
    <div className="flex min-h-screen justify-center">
      <Navbar />
      <div className="absolute right-2 top-2"><ColorCheckBox /></div>
      <main className="mt-36 flex w-2/3 flex-col justify-center gap-10 sm:mt-24 xl:mt-24">
        <section className=" flex flex-col justify-evenly gap-10 sm:mt-0 xl:flex-row">
          <article className=" dark:bg-transparent bg-black/40 dark:border-outline h-fit rounded-lg border p-4 text-center xl:w-full">
            <UrlForm handleSubmit={handleSubmit} />
          </article>
          <article className="dark:border-outline min-h-64 overflow-auto rounded-lg border p-4 text-center dark:bg-transparent bg-black/40  scrollbar scrollbar-track-transparent dark:scrollbar-thumb-indigo-800 scrollbar-thumb-black/70 scrollbar-thumb-rounded-full xl:w-full">
            <YourLinks urls={urls} />
          </article>
        </section>
        <section className="dark:border-outline flex h-fit min-h-64 self-center overflow-x-auto flex-col dark:bg-transparent bg-black/40 justify-evenly rounded-lg border p-4 text-center xl:w-1/3">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
}
