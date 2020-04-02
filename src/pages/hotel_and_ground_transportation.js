/* eslint-disable react/prop-types */
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function HotelTransportPage() {
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
        <div>
          Crowne Plaza Hotel Room: 2270 Hotel Circle North, San Diego, CA 92108.
          Room rate is $130.00 per room/night + hotel taxes. Prices are
          guaranteed 3 days pre/post based on availability. Contact hotel at
          1-888-233-9527 or https://book.passkey.com/e/49950216 Reference “2020
          SD Fall Conference” to secure your hotel room. Hotel room reservations
          must be made by 9/15/2020, After this date room rates are pending
          availability. The hotel does NOT provide transportation to and from
          Airport. Parking is $13.00 per day.
        </div>
        <div>
          Crowne Plaza website:
          https://www.ihg.com/crowneplaza/hotels/us/en/san-diego/sancp/hoteldetail/hotel-overview
        </div>
        <div>
          Airport Ground Transportation; It is recommended to use Uber and Lyft
          for your transportation to/from the San Diego International Airport to
          the Crowne Plaza Hotel. (estimated cost is $12.00 - $15.00 each way)
          Please follow signs outside baggage claim to direct you to your pick
          up for “shared rides”.{' '}
          <div>
            Local Taxi Companies which will be outside baggage claim at both
            terminals (estimated cost is $20.00 - $25.00 each way)
          </div>{' '}
          <div>
            Cloud 9/Super shuttle which were options from 2016 conference are no
            longer in business.
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HotelTransportPage
