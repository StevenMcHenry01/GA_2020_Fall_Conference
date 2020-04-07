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
          <p className='text-2xl italic font-bold'>{`"How do I get to..."`}</p>
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
        <div>
          <span className='font-bold'>
            Horton Plaza Mall/Gaslamp Quarter -{' '}
          </span>
          Turn right from our driveway. At the stop sign turn left onto 8 West
          to 5 South. Exit Front Street. Go straight, turn left on Broadway and
          turn right on Fourth. Mall is on your right. Turn right into the
          parking structure.
        </div>
        <div>
          <span className='font-bold'>La Jolla - </span>
          Turn right from our driveway. At the stop sign turn left onto 8 West
          to 5 North, exit at La Jolla Parkway. Continue driving about 5 miles
          and turn right on Prospect. Continue straight for downtown La Jolla or
          make a right on Coast Blvd. for the cove.
        </div>
        <div>
          <span className='font-bold'>Legoland/Carlsbad Outlets - </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          North. Exit Cannon Rd. (Approximately 30 miles away.)
        </div>
        <div>
          <span className='font-bold'>MCRD - </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          South and exit Old Town Ave. and continue straight. Turn right on
          Witherby Street. This takes you into MCRD.{' '}
        </div>
        <div>
          <span className='font-bold'>Mission Beach/Belmont Park - </span>
          Turn right out of the hotel. Turn left at the stop sign to 8 West.
          Exit West Mission Bay Dr. Turn right onto W. Mission Bay Dr. Turn
          slight right onto ramp. Merge onto W. Mission Bay Dr. Turn left onto
          Mission Blvd.
        </div>
        <div>
          <span className='font-bold'>
            Mission Valley Mall/AMC Theatres/Target -{' '}
          </span>
          Turn left from our driveway, then at the second light (Camino de la
          Reina) turn left. Follow past Mission Center Road. Mall is on right
          side where Target is.
        </div>
        <div>
          <span className='font-bold'>
            Old Town/Heritage Park/Trolley Station -{' '}
          </span>
          Turn right from our driveway. Make a left at the stop sign and a right
          at the light. Cross bridge then make a right at the stop sign on
          Taylor Street. At Juan Street make a left or straight for the trolley.
        </div>
        <div>
          <span className='font-bold'>Pacific Beach - </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          North. Exit Garnet Ave. Turn left on Garnet Ave. Follow to the ocean.
        </div>
        <div>
          <span className='font-bold'>PETCO Park - </span>
          Turn left from our driveway. Stay to your right as you continue around
          Hotel Circle underneath the freeway to the south side. At the stop
          sign turn right onto 8 East. Merge onto 163 south toward downtown.
          Stay straight to go onto 10th Avenue. Turn right onto Park Blvd.
        </div>
        <div>
          <span className='font-bold'>Qualcomm Stadium - </span>
          Turn left from our driveway. Stay to your right as you continue around
          Hotel Circle underneath the freeway to the south side. At the stop
          sign turn right onto 8 East and exit Qualcomm Way and follow the signs
          to the stadium.
        </div>
        <div>
          <span className='font-bold'>SDSU/Viejas Arena - </span>
          Turn left from our driveway. Continue around Hotel Circle, underneath
          the freeway to the south side. At stop sign turn right onto 8 East.
          Exit College Ave and turn right. SDSU and Arena are on the right hand
          side.
        </div>
        <div>
          <span className='font-bold'>
            Seaport Village/SD Convention Center/USS Midway -{' '}
          </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          South. Exit at Sassafras Street and continue straight. This becomes
          Kettner Blvd. Seaport Village is at the end. For the Convention Center
          turn left on Harbor Drive.
        </div>
        <div>
          <span className='font-bold'>SeaWorld - </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          North. Exit SeaWorld Drive. Turn left on SeaWorld Drive to entrance.
        </div>
        <div>
          <span className='font-bold'>
            Valley View Casino Center/Grocery Store/Target -{' '}
          </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to
          the Rosecrans exit. Turn right on Sports Arena Blvd. Ralph’s grocery
          store is on the left and the Sports Arena is on the right.
        </div>
        <div>
          <span className='font-bold'>San Diego Safari Park - </span>
          Turn left from our driveway. Continue around Hotel Circle underneath
          the freeway to the south side. At stop sign turn right onto 8 East to
          163 North, this will merge with and become 15 North. Exit Via Rancho
          Parkway and turn right. Turn right on San Pasqual Road. Follow signs
          to San Diego Wild Animal Park. (30 miles)
        </div>
        <div>
          <span className='font-bold'>
            Tijuana, Mexico/Las Americas Outlets -{' '}
          </span>
          Turn right from our driveway. At stop sign turn left onto 8 West to 5
          South. Take the last U.S. exit and park and walk across border (must
          have a passport).
        </div>
        <div>
          <span className='font-bold'>Zoo/Balboa Park - </span>
          Turn left from our driveway. Stay to your right and continue around
          Hotel Circle underneath the freeway to the south side. At stop sign
          turn right onto 8 East to 163 South and exit Park Blvd. For the Space
          Theatre and Balboa Park, turn left onto Space Theatre Way. For the
          Zoo, turn left at Zoo Place.
        </div>
        <div>
          <span className='font-bold'>Valley Liquor Market - </span>
          Turn left from our driveway. Stay to your right and continue around
          Hotel Circle underneath the freeway to the south side. Valley Liquor
          is to your left before you reach the stop sign.
        </div>
        <div>
          <p className='text-2xl italic font-bold'>{`"How do I get back to the Hotel?..."`}</p>
        </div>
        <div>
          <span className='font-bold'>Belmont Park/Mission Beach - </span>
          Go East on W. Mission Bay Drive. Exit right onto Sunset Cliffs Blvd.
          Turn left onto 8 East. Exit at Taylor Street/Hotel Circle. Turn left
          at the stop sign, and left again over the bridge. After crossing the
          bridge, stay to the left onto Hotel Circle North (be careful not to
          get onto the freeway). The Crowne Plaza San Diego is on the left.
        </div>
        <div>
          <span className='font-bold'>Downtown - </span>
          Head East on either Broadway or Market Street. Turn left on 11th Ave.
          This is the beginning of Highway 163 North. Exit at the 8 West/Hotel
          Circle off ramp. Stay to your right onto Hotel Circle. Turn left at
          the stop sign. Crowne Plaza San Diego is on the right.
        </div>
        <div>
          <span className='font-bold'>Mission Valley Mall - </span>
          Exit parking lot and turn right on Camino Del Rio North. Turn left
          onto 8 West. Exit at Taylor Street/Hotel Circle (the second Hotel
          Circle exit) and turn right. The Crowne Plaza San Diego is on the
          left.
        </div>
        <div>
          <span className='font-bold'>Old Town - </span>
          Turn right on Taylor Street. Turn left and cross over bridge at the
          Hotel Circle North sign. After you cross the bridge, stay to the left
          onto Hotel Circle North.
        </div>
        <div>
          <span className='font-bold'>
            San Diego Airport (Lindberg Field) -{' '}
          </span>
          as you leave the airport, follow the signs directing you to downtown.
          This will put you southbound on Harbor Drive. Turn left on Laurel
          Street, go across railroad tacks and turn left on India Street and
          left again onto 5 North. Take 8 East and stay in the right lane and
          exit at Taylor Street/ Hotel Circle. Turn left at the stop light and
          left again over the bridge. After crossing the bridge, stay to the
          left onto Hotel Circle North (be careful not to get onto the freeway).
          The Crowne Plaza San Diego is on the left.
        </div>
        <div>
          <span className='font-bold'>SeaWorld - </span>
          Exit the SeaWorld parking lot and turn left on Sea World Drive. Turn
          right on 5 South and exit onto 8 East. Stay in the right hand lane and
          exit at Taylor Street/Hotel Circle. Turn left at the stop sign and
          left again over the bridge. Stay to the left onto Hotel Circle North
          (be careful not to get onto the freeway). The Crowne Plaza San Diego
          is on the left.
        </div>
        <div>
          <span className='font-bold'>San Diego Safari Park - </span>
          Exit the parking lot, right on Highway 78. Turn left on San Pasqual
          Road. Turn left on Via Rancho Parkway. Turn left on 15 South. Continue
          on 15 South past Miramar Naval Air Station. Exit right onto Highway
          163 South (downtown). Exit right onto 8 West. Exit at Taylor
          Street/Hotel Circle (the second Hotel Circle exit) and turn right. The
          Crowne Plaza San Diego is on the left.
        </div>
        <div>
          <span className='font-bold'>Zoo - </span>
          Exit the zoo parking lot and turn right on Park Blvd. Turn right on
          Russ Blvd. and after one block turn right on 11th Ave. This is the
          beginning of Highway 163 North. Exit at 8 West/Hotel Circle off ramp.
          Stay to your right onto Hotel Circle. Turn left at the stop sign. The
          Crowne Plaza San Diego is on your right.
        </div>
        <div>
          <p className='text-2xl italic font-bold'>{`If you get lost ... Call Us! (619) 297-1101 `}</p>
        </div>
        <div>2270 Hotel Circle North San Diego, CA 92108 </div>
        <div className='flex flex-wrap justify-center'>
          <SanDiegoStyledImg
            fixed={data.allFile.edges[0].node.childImageSharp.fixed}
            alt={data.allFile.edges[0].node.base.split('.')[0]}
          />
        </div>
      </SpacedStyledSection>
    </Layout>
  )
}

const SanDiegoStyledImg = styled(Img)`
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
