import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const PhotographyPage = ({ data: { photography } }) => {
  return (
    <>
      <SEO title="Photography" />
      <div className="pt-12 md:pt-40 pb-24 md:pb-40 overflow-hidden">
        <div className="w-full md:w-5/12 mx-auto relative mb-12 px-8 md:px-0">
          <nav>
            <motion.ul 
              variants={container}
              initial="hidden" 
              animate="visible"
              exit="hidden"
            >
            {photography.edges.map(({ node }, index) => (
              <motion.li
                key={index}
                variants={item}
                transition={"easeInOut"}
              >
                <Link className="featured-nav-item" to={`/photography/${node.slug}`}>
                  {node.title}
                  <span className="meta text-3xs block md:absolute top-0 right-0 -mr-20 mt-2 md:mt-4 text-left no-underline">{node.date} / {node.location}</span>
                </Link>
              </motion.li>
            ))}
            </motion.ul>
          </nav>
        </div>
      </div>
    </>
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

