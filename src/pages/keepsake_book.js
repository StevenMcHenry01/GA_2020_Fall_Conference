/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

function KeepsakePage() {
  const data = useStaticQuery(graphql`
    query KeepsakeImageQuery {
      file(relativePath: { eq: "images/Keepsake.jpeg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout banner={false}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Registration'
      />
      <section className='text-center -mt-8'>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt='Live For Today - SAN DIEGO 2020'
        />
      </section>
      <section className='text-center py-6'>
        <KeepsakeFormLink />
      </section>
    </Layout>
  )
}

const KeepsakeFormLink = () => {
  return (
    <a
      className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
      href='/files/KEEPSAKE.pdf'
      download
    >
      <svg
        className='fill-current w-4 h-4 mr-2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
      </svg>
      CLICK HERE TO DOWNLOAD KEEPSAKE FORM
    </a>
  )
}

export default KeepsakePage
