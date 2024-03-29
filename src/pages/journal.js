import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
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

const JournalPage = ({ data: { journals } }) => {
  return (
    <>
      <SEO title="Journal" />
      <motion.div 
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <div className="pt-12 md:pt-40 pb-24 md:pb-40 overflow-hidden">
          {journals.edges.map(({ node }, index) => (
          <div key={index} className="w-full md:w-8/12 lg:w-7/12 mx-auto relative pb-12 md:pb-24 lg:pb-40 mb-12 md:px-0">
            <div className="w-full md:w-10/12 lg:w-11/12 ml-auto">
              <div className="relative">
                <motion.div
                  variants={item}
                  transition={"easeInOut"}
                >
                  <span className="text-lg md:text-xl lg:text-2xl uppercase font-sans tracking-widest absolute top-0 left-0 -mt-3 md:-mt-4 lg:-mt-5 ml-8 lg:ml-16 z-10">Journal &bull; MH</span>
                </motion.div>

                <motion.div
                  variants={item}
                  transition={"easeInOut"}
                >
                  <Img fluid={node.featuredImage.fluid} key={node.featuredImage.title} alt={node.featuredImage.alt} className="w-full mb-4 md:mb-20 lg:mb-24" />
                </motion.div>

                <motion.div
                  variants={item}
                  transition={"easeInOut"}
                >
                  <div className="md:absolute bottom-0 right-0 md:-mb-8 lg:-mb-10 md:-mr-12 z-10 leading-minimal w-10/12 md:text-right mb-8 lg:mb-0 px-8 md:px-0">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-heading leading-minimal">{node.title}</h1>
                    <span className="meta">Posted {node.meta.publishedAt}</span>
                  </div>
                </motion.div>
              </div>

              <div className="md:w-10/12 lg:w-3/4 px-8 md:px-0">
                <motion.div
                  variants={item}
                  transition={"easeInOut"}
                >
                  <span dangerouslySetInnerHTML={{__html:node.content}}></span>
                </motion.div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default JournalPage

export const query = graphql`
  query JournalQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    journals: allDatoCmsJournal {
      edges {
        node {        
          title
          content
          id
          meta {
            publishedAt(formatString: "DD MMMM YYYY")
          }
          featuredImage {
            url
            title
            alt
            fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
