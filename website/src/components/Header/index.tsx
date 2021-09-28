import { Link } from "gatsby"

interface HeaderProps { }
interface HeaderState { }

export default function Header() {
    return (
        <nav className={`w-full
            flex flex-row justify-around content-center
            py-5 px-5`}>
            <h1 className={`w-36 self-center mr-20 text-2xl`}>SW Mokoena</h1>
            <ul className="w-full flex flex-row justify-evenly self-center gap-8 text-xl uppercase font-medium text-gray-700">
                <li>
                    <Link to="#">{"showroom"}</Link>
                </li>
                <li>
                    <Link to="#">{"notes & essays"}</Link>
                </li>
                <li>
                    <Link to="#">{"assets"}</Link>
                </li>
                <li className="">
                    <Link to="#">{"contact me"}</Link>
                </li>
            </ul>
        </nav>
    )
}