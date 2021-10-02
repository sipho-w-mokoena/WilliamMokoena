import Header from "Components/Header"
import Socials from "Components/Socials"

import classNames from "Lib/utils/classNames"
import { T_Socials } from "Lib/types/socialMedia"

const socialMedia: T_Socials[] = [
  {
    siteName: "github",
    url: "https://github.com/WilliamMokoena",
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
