import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotographyPage = () => (
  <Layout>
    <SEO title="Photography" />
    <div className="pt-10 md:pt-40 pb-24 md:pb-40 overflow-hidden">
      <div className="w-full md:w-5/12 mx-auto relative mb-12 px-8 md:px-0">
        <nav>
          <ul>
            <li><Link className="featured-nav-item" to="/post">
              Jasper
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left no-underline">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Banff
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Highlands
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Rudi
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Mt Assiniboine
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Kananaskis
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Canisp
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Barbican
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Loch Voil
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
            <li><Link className="featured-nav-item" to="/post">
              Balquhidder
              <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left">2017 / Location</span>
            </Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </Layout>
)

export default PhotographyPage
