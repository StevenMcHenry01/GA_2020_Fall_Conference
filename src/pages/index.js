import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <section className='text-center'>
        <div>
          <h2>
            Welcome to the San Diego 2020 Fall Conference October 16 – 19, 2020
            At the Crowne Plaza Resort
          </h2>
        </div>
        <div className='py-8 px-16'>
          <p className='text-xl italic text-indigo-700'>I sought my soul,</p>
          <p className='text-xl italic text-indigo-700'>But count not see,</p>
          <p className='text-xl italic text-indigo-700'>I sought my God,</p>
          <p className='text-xl italic text-indigo-700'>But he eluded me,</p>
          <p className='text-xl italic text-indigo-700'>I sought my brothers and sisters,</p>
          <p className='text-xl italic text-indigo-700'>And found all three.</p>
        </div>
        <div>
          <p>
            Should you have any questions please contact Betsy M at{` `}
            <a
              className='text-main'
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:intconfsd2020@gmail.com'
            >
              intconfsd2020@gmail.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
