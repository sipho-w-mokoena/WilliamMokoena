import classNames from "Lib/utils/classNames"
import { T_Socials } from "Lib/types/socialMedia"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

function RenderSocials(props: { socials: T_Socials[] }) {
  return (
    <ul className="w-max rounded-sm flex flex-col gap-2 bg-gray-50">
      {props.socials.map((social, index) => (
        <li key={index} className="p-2">
          <button
            className={classNames(
              "w-8",
              "rounded-full",
              "text-lg md:text-2xl",
              "text-gray-700 hover:text-blue-400 focus:text-blue-600",
              "ring-offset-2 focus:ring-2 focus:ring-blue-400"
            )}
          >
            <FontAwesomeIcon size="lg" icon={["fab", social.siteName]} />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function Socials(props: { socials: T_Socials[] }) {
  return (
    <div
      className={classNames(
        "fixed right-1 h-full",
        "grid items-center"
      )}
    >
      {RenderSocials(props)}
    </div>
  )
}
