import { Link } from "gatsby"
import { useState } from "react"

import classNames from "Lib/utils/classNames"

import { Tab } from "@headlessui/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

// @ts-ignore: Unreachable code error
import Logo from "Assets/images/logo.svg"

interface HeaderProps {}
interface HeaderState {}

interface I_Tabs {
  category: string
  route: string
}

function Tabs(props: { tabs: I_Tabs[] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabs = props.tabs

  return (
    <div
      className={classNames(
        "absolute md:relative right-2 md:right-5 top-16 md:top-0",
        "w-48 md:min-w-max p-4 md:p-0",
        "bg-gray-50 shadow-md md:shadow-none text-gray-800",
        "rounded-sm md:rounded-none"
      )}
    >
      <Tab.Group manual defaultIndex={activeTabIndex}>
        <Tab.List
          className={classNames(
            "flex flex-col md:flex-row",
            "gap-2 md:gap-5 lg:gap-20",
            "justify-start md:justify-evenly"
          )}
        >
          {tabs.map((tab, key) => (
            <Tab
              key={key}
              className={({ selected }) =>
                classNames(
                  "text-left p-1 h-full",
                  "hover:text-green-400",
                  "focus:text-green-600",
                  "uppercase font-medium",
                  "rounded-md",
                  "focus:outline-none",
                  "focus:ring-1 ring-offset-2",
                  "ring-offset-green-400",
                  "ring-green-400",
                  selected ? "text-green-600" : "hover:text-green-400"
                )
              }
            >
              <Link
                {...props}
                getProps={props => {
                  if (props.isCurrent) {
                    setActiveTabIndex(key)
                  }
                  return {}
                }}
                to={tab.route}
              >
                {tab.category}
              </Link>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default function Header() {
  const TabsLinks: I_Tabs[] = [
    { category: "home", route: "/home" },
    { category: "showroom", route: "/showroom" },
    { category: "notes & essays", route: "/notes-and-essays" },
    { category: "store", route: "/store" },
    { category: "about me", route: "/about" },
  ]

  return (
    <div className="sticky max-w-screen-2xl top-0 mb-10 p-5 bg-gray-50 shadow-sm">
      <nav className="top-0 flex flex-row justify-between">
        <div className="px-3 cursor-pointer">
          <img className="h-7" src={Logo} />
        </div>
        <button
          className={classNames(
            "md:hidden rounded-md p-1",
            "text-gray-600",
            "hover:text-green-400",
            "focus:text-green-60",
            "focus:outline-none",
            "focus:ring-1 ring-offset-2 ring-offset-green-400 ring-green-400"
          )}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Tabs tabs={TabsLinks} />
      </nav>
    </div>
  )
}
