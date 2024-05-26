import { UrlResponse } from "@/types"
import { env } from "process"


interface Props {
  urls: UrlResponse[]
}

export default function YourLinks ({ urls }: Props) {
  const apiUrl = import.meta.env.VITE_APP_URL
  console.log(apiUrl)

  return (
    <>
      <h2 className="text-2xl">Tus enlaces</h2>
      {urls?.length ? (
        <table className="w-full  table-auto border-collapse  border border-black/70 dark:border-indigo-800">
          <thead>
            <tr>
              <th className="border border-black/70 dark:border-indigo-800">
                Long URL
              </th>
              <th className="border border-black/70 dark:border-indigo-800">
                Short URL
              </th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => {
              const { longUrl, shortUrl } = url
              return (
                <tr
                  key={shortUrl}
                  className="border-collapse border border-black/70 dark:border-indigo-800"
                >
                  <td className="border-collapse border border-black/70 dark:border-indigo-800">
                    {" "}
                    {longUrl}
                  </td>
                  <td className="border-collapse border border-black/70 hover:text-yellow-400 dark:border-indigo-800">
                    <a
                      href={`http://localhost:8000/${shortUrl}`}
                    > {apiUrl + shortUrl}
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        "https://mdkurl.com/example"
      )}
    </>
  )
}
