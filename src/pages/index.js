import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data: { site, bio } }) => {
  return (
    <Layout>
      <SEO title="Biography" />
      <div className="pt-32 md:pt-72 pb-24 md:pb-40 overflow-hidden">
        <div className="w-full md:w-5/12 mx-auto relative mb-12 md:mb-20">
        
          <h1 className="w-8/12 md:w-10/12 absolute top-0 left-0 md:left-auto md:right-0 z-10 -mt-16 ml-8 md:ml-0 md:-mr-40 xl:-mt-24 xl:-mr-64 font-heading text-3xl md:text-4xl xl:text-5xl leading-minimal">{ bio.heading }</h1>

          <span className="text-lg md:text-xl lg:text-2xl uppercase font-sans tracking-widest md:upright absolute bottom-0 right-0 md:right-auto md:left-0 md:mb-24 mr-8 md:mr-0 -mb-3 md:-mb-0 md:-ml-4 lg:-ml-5 z-10">Biography &bull; MH</span>
          <div className="mb-6 md:mb-10">
            <Img fluid={bio.featuredImage.fluid} key={bio.featuredImage.title} alt={bio.featuredImage.alt} className="w-full" />
          </div>
        </div>

        <div className="w-full px-8 md:px-0 md:w-5/12 mx-auto relative">
          <div className="mb-8 md:mb-12">
          <span className="meta block">Info</span>
            <span dangerouslySetInnerHTML={{__html:bio.content}}></span>
          </div>

          <span className="meta block">Stay in touch</span>
          <a className="font-heading inline text-xl md:text-2xl link" href="https://instagram.com/mathaywarduk" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
          <a className="font-heading inline text-xl md:text-2xl link" href="mailto:hello@mathayward.co.uk">Email</a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    bio: datoCmsBiography {
      heading
      content
      featuredImage {
        url
        title
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
