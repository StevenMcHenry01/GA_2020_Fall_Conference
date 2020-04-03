/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

function GolfPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "images/golf" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 300, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      file(relativePath: { eq: "images/walkathon.png" }) {
        childImageSharp {
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
        title='Golf and Walkathon'
      />
      <section className='text-center'>
        <p className='font-bold underline'>Golf and Walk-A-Thon</p>
      </section>
      <section>
        <div className='py-4'>
          <span className='font-bold underline'>Golf</span> will be held on
          Wednesday, 10/14/2020 at Admiral Baker Golf Course. Green fees are $
          55.00. Club Rentals are $ 25.00. Fees include (1) round of golf, golf
          cart and transportation. All golf fees and bag rentals must be paid in
          full prior to 10/1/2020 to secure your spot. After this date, please
          contact at:{' '}
          <a
            className='text-main'
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:golfsd2020@gmail.com'
          >
            golfsd2020@gmail.com
          </a>
        </div>
        <div className='flex flex-wrap justify-center'>
          {data.allFile.edges.map((image, index) => (
            <GolfStyledImg
              fixed={image.node.childImageSharp.fixed}
              alt={image.node.base.split('.')[0]}
              key={index}
            />
          ))}
        </div>
        <div className='py-4'>
          <span className='font-bold underline'>Walk-A-Thon</span> will be held
          on Saturday, 10/17/2020. Please meet in the lobby of the hotel at
          6:00am. Please let us know on the conference registration form if you
          are participating. You will be contacted by Walk-A-Thon chairperson
          for more information on how you can coordinate a sponsorship to raise
          money for ISO.
        </div>
        <div className='flex flex-row justify-center'>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt='walkathon route'
          style={{ width: '400px' }}
        />
        </div>
      </section>
    </Layout>
  )
}

const GolfStyledImg = styled(Img)`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export default GolfPage
