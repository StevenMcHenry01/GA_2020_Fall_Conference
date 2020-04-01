import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function RegistrationPage() {
  return (
    <Layout banner={true}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Registration'
      />
      <section className='text-center'>
        <p>registration</p>
      </section>
    </Layout>
  )
}

export default RegistrationPage
