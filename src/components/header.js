import { graphql, useStaticQuery, Link } from 'gatsby'
import React, { useState } from 'react'
import Img from 'gatsby-image'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQueryandImage {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "images/header_image.png" }) {
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
    <header className='bg-white.300'>
      <div className='flex items-center justify-between mx-auto p-2 md:p-2'>
        <Link className='flex items-center no-underline text-main' to='/'>
          <span className='font-bold text-l tracking-tight'>
            {data.site.siteMetadata.title}
          </span>
        </Link>

        <button
          className={`${
            isExpanded ? `hidden` : `block`
          } md:hidden border border-white flex items-center px-3 py-2 rounded text-main`}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/registration`,
              title: `Registration`
            },
            {
              route: `/hotel_and_ground_transportation`,
              title: `Hotel and transportation info`
            },
            {
              route: `/golf_and_walkathon`,
              title: `Golf and walkathon info`
            },
            {
              route: `/keepsake_book`,
              title: `Keepsake Book`
            },
            {
              route: `/what_to_do_in_San_Diego`,
              title: `What to do in San Diego`
            }
          ].map(link => (
            <Link
              className='block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-main text-xs hover:text-gray-800'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={() => toggleExpansion(!isExpanded)}
        className={`${
          isExpanded ? `block` : `hidden`
        } h-screen w-screen bg-transparent`}
      ></button>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='Live For Today - SAN DIEGO 2020'
        style={{ maxHeight: '350px' }}
      />
    </header>
  )
}

export default Header
