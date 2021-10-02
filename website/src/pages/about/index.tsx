import Layout from "Components/Layout"
import Seo from "Components/SEO"

// @ts-ignore: Unreachable code error
import AboutMeSvg from "Assets/images/illustrations/About_me.svg"

import classNames from "Lib/utils/classNames"

export default function AboutPage() {
  return (
    <Layout>
    <Seo title="About Me" />
    <section className={
      classNames(
        "h-full mx-5",
        "bg-gray-50 text-gray-800",
        "flex flex-col gap-10 justify-center"
        )}>
          <div className={
            classNames(
              "lg:w-96 md:w-96 sm:w-64 self-center"
            )}>
          <img src={AboutMeSvg} />
          </div>
          <h1 className={"self-center text-lg font-medium"}>Welcome To My About Page</h1>
    </section>
    </Layout>
  )
}
