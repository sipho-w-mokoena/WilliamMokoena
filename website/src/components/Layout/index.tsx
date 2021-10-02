import Header from "Components/Header"
import classNames from "Lib/utils/classNames"

export default function Layout({ children }: any) {
  return (
    <div className={classNames("flex flex-col", "bg-gray-50")}>
      <main className={classNames("max-w-screen-2xl max-h-full")}>
        <Header />
        {children}
      </main>
    </div>
  )
}
