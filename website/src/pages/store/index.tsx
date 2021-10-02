import Layout from "Components/Layout"
import Seo from "Components/SEO"

// @ts-ignore: Unreachable code error
import ShoppingSvg from "Assets/images/illustrations/Shopping.svg"

import classNames from "Lib/utils/classNames"

export default function StorePage() {
  return (
    <Layout>
    <Seo title="Store" />
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
          <img src={ShoppingSvg} />
          </div>
          <h1 className={"self-center text-lg font-medium"}>Welcome to My Store Page 🛍️</h1>
    </section>
    </Layout>
  )
}
