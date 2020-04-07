/* eslint-disable react/prop-types */
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { RegistrationFormLink } from '../components/RegistrationFormLink'

function RegistrationPage() {
  return (
    <Layout banner={true}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Registration'
      />
      <section className='text-center'>
        <p className='font-bold underline'>
          2020 Fall International Conference
        </p>
        <p className='font-bold underline'>October 16 – 18, 2020</p>
        <div className='py-4'>
          <RegistrationFormLink />
        </div>
      </section>
      <section className='px-8 flex justify-center'>
        <table className='table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Plan</th>
              <th className='px-4 py-2'>Package</th>
              <th className='px-4 py-2'>Cash/Check</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              planLetter='A'
              description='Registration for 2 Persons, 8 Meals'
              descriptionSub='(Friday & Saturday Dinners, Saturday Lunch and Sunday
                  Breakfast)'
              cash='$445.00'
            />
            <TableRow
              planLetter='B'
              description='Registration for 1 Person, 4 Meals'
              descriptionSub='(Friday & Saturday Dinners, Saturday Lunch and Sunday Breakfast)'
              cash='$222.50'
            />
            <TableRow
              planLetter='C'
              description='Registration for 2 Persons, 4 Meals'
              descriptionSub='(Saturday Dinner & Sunday Breakfast)'
              cash='$315.00'
            />
            <TableRow
              planLetter='D'
              description='Registration for 1 Persons, 2 Meals'
              descriptionSub='(Saturday Dinner & Sunday Breakfast)'
              cash='$157.00'
            />
            <TableRow
              planLetter='E'
              description='1 Registration & Saturday Dinner'
              descriptionSub=''
              cash='$125.00'
            />
            <TableRow
              planLetter='F'
              description='1 Registration & Saturday Lunch'
              descriptionSub=''
              cash='$75.00'
            />
            <TableRow
              planLetter='G'
              description='1 Registration Only'
              descriptionSub=''
              cash='$50.00'
            />
            <TableRow
              planLetter='H'
              description='Saturday Evening Dinner Only'
              descriptionSub=''
              cash='$75.00'
            />
          </tbody>
        </table>
      </section>
      <section>
        <div className='p-4'>
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
        <div className='p-4'>
          <span className='font-bold underline'>Golf</span> will be held on
          Wednesday, 10/14/2020 at Admiral Baker Golf Course. Green fees are
          $55.00. Club Rentals are $25.00. Fees include (1) round of golf, golf
          cart and transportation. All golf fees and bag rentals must be paid in
          full prior to 10/1/2020 to secure your spot. After this date, please
          contact at{' '}
          <a
            className='text-main'
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:golfsd2020@gmail.com'
          >
            golfsd2020@gmail.com
          </a>
        </div>
        <div className='p-4'>
          <span className='font-bold underline'>Walk-A-Thon</span> will be held
          on Saturday, 10/17/2020. Please meet in the lobby of the hotel at
          6:00am. Please let us know on the conference registration form if you
          are participating. You will be contacted by Walk-A-Thon chairperson
          for more information on how you can coordinate a sponsorship to raise
          money for ISO.
        </div>
        <div className='p-4'>
          <span className='font-bold underline'>Keepsake Memory Books:</span> Do
          you have a story or a poem about your recovery that you would like to
          share… Please contact at{' '}
          <a
            className='text-main'
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:SDFCKeepsake@gmail.com'
          >
            SDFCKeepsake@gmail.com
          </a>{' '}
          for more information.{' '}
          <span className='italic'>
            (submissions do not guarantee placement in our keepsake book)
          </span>
        </div>
        <div className='text-center'>
          <RegistrationFormLink />
        </div>
        <div className='p-4 font-bold text-center'>
          For additional information or questions contact at
          <a
            className='text-main'
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:intconfsd2020@gmail.com'
          >
            {` `}intconfsd2020@gmail.com
          </a>
        </div>
      </section>
    </Layout>
  )
}

const TableRow = ({ planLetter, description, descriptionSub, cash }) => {
  return (
    <tr>
      <td className='border px-4 py-2 text-center font-bold'>{planLetter}</td>
      <td className='border px-4 py-2'>
        {description}
        <div className='italic text-sm'>{descriptionSub}</div>
      </td>
      <td className='border px-4 py-2 text-center'>{cash}</td>
    </tr>
  )
}



export default RegistrationPage
