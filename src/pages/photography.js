import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotographyPage = ({ data: { photography } }) => {
  return (
    <Layout>
      <SEO title="Photography" />
      <div className="pt-10 md:pt-40 pb-24 md:pb-40 overflow-hidden">
        <div className="w-full md:w-5/12 mx-auto relative mb-12 px-8 md:px-0">
          <nav>
            <ul>
            {photography.edges.map(({ node }, index) => (
              <li key={index}>
                <Link className="featured-nav-item" to={`/photography/${node.slug}`}>
                  {node.title}
                  <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left no-underline">{node.date} / {node.location}</span>
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  )
}

export default PhotographyPage

export const query = graphql`
  query PhotographyQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    photography: allDatoCmsPhotography {
      edges {
        node {        
          title
          location
          date
          id
          slug
        }
      }
    }
  }
`

