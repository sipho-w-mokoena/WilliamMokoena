import Layout from "Components/Layout"
import Seo from "Components/SEO"

// @ts-ignore: Unreachable code error
import ProductTourSvg from "Assets/images/illustrations/Product_tour.svg"

import classNames from "Lib/utils/classNames"

export default function ShowroomPage() {
  return (
    <Layout>
    <Seo title="Showroom" />
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
          <img src={ProductTourSvg} />
          </div>
          <h1 className={"self-center text-lg font-medium"}>Welcome To My Showroom Page</h1>
    </section>
    </Layout>
  )
}
