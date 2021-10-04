import Header from "Components/Header"
import Socials from "Components/Socials"

import classNames from "Lib/utils/classNames"
import { T_Socials } from "Lib/types/socialMedia"

const socialMedia: T_Socials[] = [
  {
    siteName: "linkedin",
    url: "https://www.linkedin.com/in/sipho-mokoena-6169b5209/",
  },
  {
    siteName: "github",
    url: "https://github.com/WilliamMokoena",
  },
  {
    siteName: "youtube",
    url: "https://www.youtube.com/channel/UCH7YuL9wVHPiDfSUMByGMKw",
  },
  {
    siteName: "twitter",
    url: "",
  },
  {
    siteName: "pinterest",
    url: "",
  },
  {
    siteName: "medium",
    url: "https://medium.com/@WilliamMokoena",
  },
]

export default function Layout({ children }: any) {
  return (
    <div className={classNames("flex flex-col", "bg-gray-50")}>
      <main className={classNames("max-w-screen-2xl max-h-full")}>
        <Header />
        <Socials socials={socialMedia} />
        {children}
      </main>
    </div>
  )
}
