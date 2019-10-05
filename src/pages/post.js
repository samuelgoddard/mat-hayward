import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostPage = () => (
  <Layout>
    <SEO title="Post Template" />
    <div className="pt-10 md:pt-0 pb-10 md:pb-0 overflow-hidden">

      <div className="w-full ml-auto flex flex-wrap md:h-screen px-8 md:px-0 mb-12 md:mb-24">
        <div className="w-full md:w-7/12 h-full flex flex-wrap relative">
          <div className="w-full md:w-7/12 ml-auto self-center md:pr-12 lg:pr-24 order-2 md:order-1">
            <span className="meta">Info</span>
            <p>Simplicity marks the origin of Banff—Canada’s first national park.</p>
          </div>
          <div className="md:fixed bottom-0 left-0 pb-0 md:p-12 lg:p-16 order-1 md:order-2">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-0 pb-0">Banff</h1>
          </div>
        </div>

        <div className="w-full md:w-5/12 h-72 md:h-full bg-gray-300 relative">
          <span className="text-lg md:text-xl lg:text-2xl uppercase font-sans tracking-widest upright absolute bottom-0 md:bottom-auto md:top-0 right-0 md:right-auto md:left-0 md:mt-16 md:-ml-4 lg:-ml-5 z-10 -mr-3 md:-mr-0 mb-12 md:mb-0">Canada &bull; 2017</span>
        </div>
      </div>
    </div>

    <div className="container pb-10 md:pb-10 px-8">
      <img className="w-full mb-8 xl:mb-16" src="https://via.placeholder.com/1920x1080/cbd5e0/a0aec0" alt="Placeholder" />
      
      <div className="overflow-hidden">
        <div className="flex flex-wrap md:-mx-4 xl:-mx-8">
          <div className="w-full md:w-1/2 md:px-4 xl:px-8 mb-8 xl:mb-16">
            <img className="w-full" src="https://via.placeholder.com/720x1080/cbd5e0/a0aec0" alt="Placeholder" />
          </div>
          <div className="w-full md:w-1/2 md:px-4 xl:px-8 mb-8 xl:mb-16">
            <img className="w-full" src="https://via.placeholder.com/720x1080/cbd5e0/a0aec0" alt="Placeholder" />
          </div>
        </div>
      </div>

      <img className="w-full mb-8 xl:mb-16" src="https://via.placeholder.com/1920x1080/cbd5e0/a0aec0" alt="Placeholder" />

      <img className="w-full mb-8 xl:mb-16" src="https://via.placeholder.com/1920x1080/cbd5e0/a0aec0" alt="Placeholder" />
    </div>

    <div className="flex flex-wrap items-center container px-8 pb-12 md:pb-20 lg:pb-24 md:pl-40">
      <span class="md:ml-auto meta mb-2 md:mb-0">Other Locations</span>

      <div class="w-full xl:w-auto ml-auto flex flex-wrap md:justify-end">
        <Link to="/post" className="font-heading text-2xl lg:text-3xl leading-snug link mr-5">Jasper</Link>
        <Link to="/post" className="font-heading text-2xl lg:text-3xl leading-snug link mr-5">Mt Assiniboine</Link>
        <Link to="/post" className="font-heading text-2xl lg:text-3xl leading-snug link mr-0">Kananaskis</Link>
      </div>
    </div>
  </Layout>
)

export default PostPage
