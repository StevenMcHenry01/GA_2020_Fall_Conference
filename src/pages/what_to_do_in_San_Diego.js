/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

function SanDiegoPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "images/sandiego" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(height: 250) {
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
        title='What to do in SanDiego'
      />
      <section className='text-center'>
        <p className='font-bold underline'>
          What to do and Where to Go in San Diego
        </p>
      </section>
      <section className='text-center py-4'>
        <p className='font-bold text-sm'>
          PLEASE ALSO ASK THE HOTEL CONCERIEGE FOR MORE INFORMATION OR CHECK IN
          WITH US AT THE 2020 FALL CONFERENCE HOSPITALITY DESK.
        </p>
      </section>
      <div className='bg-main h-3 pb-4'></div>
      <SpacedStyledSection>
        <div>
          <p className='text-2xl italic'>{`"How do I get to..."`}</p>
        </div>
        <div>
          <span className='font-bold'>Airport/Lindbergh Field - </span>Turn
          right from our driveway. At the stop sign turn left onto 8 West to 5
          South and exit Sassafrass. Turn right on Laurel and follow signs to
          airport.
        </div>
        <div>
          <span className='font-bold'>Banks -</span>
          <div className='px-8 flex justify-center'>
            <table className='table-auto'>
              <tbody>
                <tr>
                  <td className='border px-4 py-2 text-center font-bold'>
                    Bank of America
                  </td>
                  <td className='border px-4 py-2'>
                    Follow Mission Valley Mall Directions, Bank is on the
                    right-hand side.
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 text-center font-bold'>
                    Chase Bank
                  </td>
                  <td className='border px-4 py-2'>
                    Follow Mission Valley Mall Directions, Bank is on the
                    left-hand side.
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 text-center font-bold'>
                    Wells Fargo
                  </td>
                  <td className='border px-4 py-2'>
                    Follow Mission Valley Mall Directions, Bank is on the
                    left-hand side.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <span className='font-bold'>
            Coronado/Hotel Del Coronado/Silver Strand -{' '}
          </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          South. About ten miles down, take the Coronado Bridge exit, then cross
          the bridge. Turn left on Orange Ave. The Hotel Del Coronado is on the
          right, continue straight to get to the Silver Strand.
        </div>
        <div>
          <span className='font-bold'>Gas Station/Carwash - </span>
          Turn right from our driveway. Turn left at the stop sign onto 8 West.
          Exit Rosecrans and turn left on Midway Drive. Turn right into car wash
          just past the gas station.
        </div>
        <div>
          <span className='font-bold'>Fedex Kinkos/Starbucks/USD - </span>
          Turn right from our driveway. At stop sign turn left onto 8 West and
          exit Morena Blvd. Stay to the right on Linda Vista Road. Go through
          the light and turn right into the driveway. For USD continue straight
          on Linda Vista Road. USD will be on your left.
        </div>
        <div>
          <span className='font-bold'>
            Fashion Valley Mall/AMC Theatres/Trolley Station -{' '}
          </span>
          Turn left out of our driveway. At 1st light (Fashion Valley Road) turn
          left. Mall is on right hand side.
        </div>
        <div>
          <span className='font-bold'>Fast Food - </span>
          Turn right from our driveway. At stop sign turn left onto 8 West. Exit
          Rosecrans and turn right onto Midway. There are many fast food
          restaurants to choose from.
        </div>
        <div>
          <span className='font-bold'>
            Harbor Excursion/Santa Fe Train Depot -{' '}
          </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          South. Exit Sassafras, continue, this becomes Kettner. Santa Fe Depot
          is on the right. Turn right on Broadway and cross railroad tracks and
          park. Harbor Excursion docks are located across Harbor Drive.
        </div>
        <div>
          <span className='font-bold'>
            Hazard Center Mall/Mann Theatres/Fedex Kinkos -{' '}
          </span>
          Turn left from our driveway. At first light (Fashion Valley Road) turn
          left. Turn right on Friars then turn right on Frazee Road. Free
          parking underground.
        </div>
        <div className='flex flex-wrap justify-center'>
          <GolfStyledImg
            fixed={data.allFile.edges[0].node.childImageSharp.fixed}
            alt={data.allFile.edges[0].node.base.split('.')[0]}
          />
          <GolfStyledImg
            fixed={data.allFile.edges[1].node.childImageSharp.fixed}
            alt={data.allFile.edges[1].node.base.split('.')[0]}
          />
        </div>
      </SpacedStyledSection>
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

const SpacedStyledSection = styled.section`
  div {
    margin: 1.5rem 0;
    div {
      margin: 0 1.5rem;
    }
  }
  &:first-child {
    margin-top: none;
  }
  &:last-child {
    margin-bottom: none;
  }
`

export default SanDiegoPage
