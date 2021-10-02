import Layout from "Components/Layout"
import Seo from "Components/SEO"

// @ts-ignore: Unreachable code error
import DevelopingIllustration from "Assets/images/illustrations/developing.svg"

import classNames from "Lib/utils/classNames"

export default function HomePage() {
  return (
    <Layout>
      <Seo title={"William Mokoena"}/>
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
            <img src={DevelopingIllustration} />
            </div>
            <h1 className={"self-center text-lg font-medium"}>Welcome To My Website</h1>
            <p className={"self-center text-center"}>Thank you for visiting but sadly I'm still developing this site. 🙃 Check
              back after a few weeks. 🥰</p>
      </section>
    </Layout>
  )
}
