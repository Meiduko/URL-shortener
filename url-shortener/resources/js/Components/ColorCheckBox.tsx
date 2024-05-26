import Moon from "@/icons/Moon"
import Sun from "@/icons/Sun"
import { useEffect, useState } from "react"

export default function ColorCheckBox () {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = useState(prefersDarkMode)

  const htmlTag = document.querySelector('html')
  useEffect(() => {
    // Al entrar seteo la preferencia del usuario

    if (prefersDarkMode) {
      htmlTag?.setAttribute('data-theme', 'dark')
    } else {
      htmlTag?.setAttribute('data-theme', 'light')

    }
  }, [])

  const handleCheckboxChange = () => {
    htmlTag?.setAttribute('data-theme', dark ? 'light' : 'dark')
    setDark(!dark)
  }

  return (
    <>
      <label className='inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={dark}
          onChange={handleCheckboxChange}
          className='hidden'
        />
        <div className='shadow-card flex h-8 w-16 items-center justify-around rounded-md bg-white'>
          <span
            className={`flex h-7 w-7 items-center justify-center rounded ${!dark ? 'bg-black/70 dark:bg-indigo-600' : 'bg-white'
              }`}
          >
            <Sun />
          </span>
          <span
            className={`flex h-7 w-7 items-center justify-center rounded ${dark ? 'bg-black/70 dark:bg-indigo-600' : 'bg-white'
              }`}
          >
            <Moon />
          </span>
        </div>
      </label >
    </>
  )
}
