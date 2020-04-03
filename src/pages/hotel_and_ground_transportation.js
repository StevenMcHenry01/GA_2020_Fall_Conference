/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

function HotelTransportPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "images/hotel" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout banner={false}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Hotel and ground transportation'
      />
      <section className='text-center'>
        <p className='font-bold underline'>Hotel/Ground Transportation</p>
      </section>
      <section>
        <div className='py-4'>
          <span className='font-bold underline'>Crowne Plaza Hotel Room:</span>{' '}
          2270 Hotel Circle North, San Diego, CA 92108. Room rate is $130.00 per
          room/night + hotel taxes. Prices are guaranteed 3 days pre/post based
          on availability. <span className='font-bold'>Contact hotel</span> at{' '}
          <span className='font-bold'>1-888-233-9527</span> or{' '}
          <a
            className='text-main'
            target='_blank'
            rel='noopener noreferrer'
            href='https://book.passkey.com/e/49950216'
          >
            https://book.passkey.com/e/49950216
          </a>{' '}
          Reference <span className='font-bold'>“2020 SD Fall Conference”</span>{' '}
          to secure your hotel room. Hotel room reservations must be made by
          9/15/2020, After this date room rates are pending availability. The
          hotel does NOT provide transportation to and from Airport. Parking is
          $13.00 per day.
        </div>
        <div>
          Crowne Plaza website:
          <a
            className='text-main'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.ihg.com/crowneplaza/hotels/us/en/san-diego/sancp/hoteldetail/hotel-overview'
          >
            https://www.ihg.com/crowneplaza/hotels/us/en/san-diego/sancp/hoteldetail/hotel-overview
          </a>
        </div>
        <div className='flex flex-wrap justify-center'>
          {data.allFile.edges.map((image, index) => (
            <HotelStyledImg
              fixed={image.node.childImageSharp.fixed}
              alt={image.node.base.split('.')[0]}
              key={index}
            />
          ))}
        </div>
        <div className='py-4'>
          <span className='font-bold underline'>
            Airport Ground Transportation:
          </span>{' '}
          It is recommended to use Uber and Lyft for your transportation to/from
          the San Diego International Airport to the Crowne Plaza Hotel.
          (estimated cost is $12.00 - $15.00 each way) Please follow signs
          outside baggage claim to direct you to your pick up for “shared
          rides”.
        </div>
        <div>
          Local Taxi Companies which will be outside baggage claim at both
          terminals (estimated cost is $20.00 - $25.00 each way)
        </div>{' '}
        <div className='py-4'>
          Cloud 9/Super shuttle which were options from 2016 conference are no
          longer in business.
        </div>
      </section>
    </Layout>
  )
}

const HotelStyledImg = styled(Img)`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export default HotelTransportPage
