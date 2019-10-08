import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

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

const PostPage = ({ data: { current } }) => {
  return (
    <>
      <SEO title={current.title} />
      <motion.div 
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <div className="pt-10 md:pt-0 pb-10 md:pb-0 overflow-hidden">
          <div className="w-full ml-auto flex flex-wrap md:h-screen px-8 md:px-0 mb-12 md:mb-24">
            <motion.div
              variants={item}
              transition={"easeInOut"}
              className="block md:hidden pb-2"
            >
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-0 pb-0">{current.title}</h1>
            </motion.div>

            <div className="w-full md:w-7/12 h-full flex flex-wrap relative order-2 md:order-1 mt-5 md:mt-0">
              <motion.div
                variants={item}
                transition={"easeInOut"}
                className="w-full md:w-7/12 ml-auto self-center md:pr-12 lg:pr-24"
              >
                <span className="meta">Info</span>
                <span className="block" dangerouslySetInnerHTML={{__html:current.blurb}}></span>
              </motion.div>
              
              <motion.div
                variants={item}
                transition={"easeInOut"}
                className="hidden md:block md:fixed z-10 bottom-0 left-0 pb-0 md:p-12 lg:p-16"
              >
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-0 pb-0">{current.title}</h1>
              </motion.div>
            </div>

            <BackgroundImage
              Tag="div"
              className="w-full md:w-5/12 h-72 md:h-full relative order-1 md:order-2"
              fluid={current.featuredImage.fluid}
              backgroundColor={`#040e18`}
            >
              <span className="text-lg md:text-xl lg:text-2xl uppercase font-sans tracking-widest upright absolute bottom-0 md:bottom-auto md:top-0 right-0 md:right-auto md:left-0 md:mt-16 md:-ml-4 lg:-ml-5 z-10 -mr-3 md:-mr-0 mb-12 md:mb-0">{current.location} &bull; {current.date}</span>
            </BackgroundImage>
          </div>
        </div>

        <div className="container pb-10 md:pb-10 px-8">
          <motion.div
            variants={item}
            transition={"easeInOut"}
          >
          {
            current.imageryModular.map((block) => (
              <div key={block.id}>
                {
                  block.model.apiKey === 'single_image' &&
                    <Img fluid={block.single.fluid} key={block.single.title} alt={block.single.alt} className="w-full mb-8 xl:mb-16" />
                }
                {
                  block.model.apiKey === 'double_image' &&
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap md:-mx-4 xl:-mx-8">
                        <div className="w-full md:w-1/2 md:px-4 xl:px-8 mb-8 xl:mb-16">
                          <Img fluid={block.imageOne.fluid} key={block.imageOne.title} alt={block.imageOne.alt} className="w-full mb-8 xl:mb-16" />
                        </div>
                        <div className="w-full md:w-1/2 md:px-4 xl:px-8 mb-8 xl:mb-16">
                          <Img fluid={block.imageTwo.fluid} key={block.imageTwo.title} alt={block.imageTwo.alt} className="w-full mb-8 xl:mb-16" />
                        </div>
                      </div>
                    </div>
                }
              </div>
            ))
          }
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center container px-8 pb-12 md:pb-20 lg:pb-24 md:pl-40">
          <motion.div
            variants={item}
            transition={"easeInOut"}
          >
            <span className="md:ml-auto meta mb-2 md:mb-0">Other Locations</span>

            <div className="w-full xl:w-auto ml-auto flex flex-wrap md:justify-end">
              <Link to="/post" className="font-heading text-2xl lg:text-3xl leading-snug link mr-5">Jasper</Link>
              <Link to="/post" className="font-heading text-2xl lg:text-3xl leading-snug link mr-5">Mt Assiniboine</Link>
              <Link to="/post" className="font-heading text-2xl lg:text-3xl leading-snug link mr-0">Kananaskis</Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default PostPage

export const query = graphql`
  query PhotographyPostQuery($slug: String!) {
    current: datoCmsPhotography(slug: { eq: $slug }) {
      title
      location
      date
      blurb
      featuredImage {
        url
        title
        alt
        fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      imageryModular {
        ... on DatoCmsSingleImage {
          id
          model { apiKey }
          single: images {
            fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
        }
        ... on DatoCmsDoubleImage {
          id
          model { apiKey }
          imageOne {
            fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
          imageTwo {
            fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
        }
      }
    }
  }
`
