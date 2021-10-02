import Layout from "Components/Layout"
import Seo from "Components/SEO"

// @ts-ignore: Unreachable code error
import PageNotFoundSvg from "Assets/images/illustrations/Page_not_found.svg"

import classNames from "Lib/utils/classNames"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section
      className={classNames(
        "h-full mx-5",
        "bg-gray-50 text-gray-800",
        "flex flex-col gap-10 justify-center"
      )}
    >
      <div className={classNames("lg:w-96 md:w-96 sm:w-64 self-center")}>
        <img src={PageNotFoundSvg} />
      </div>
      <h1 className={"self-center text-lg font-medium"}>Page Not Found</h1>
    </section>
  </Layout>
)

export default NotFoundPage
