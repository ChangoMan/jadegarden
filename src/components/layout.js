import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import '../assets/scss/main.scss'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Jade Garden Chinese Restaurant - Buena Vista Colorado"
      meta={[
        {
          name: 'description',
          content:
            'Jade Garden Chinese restaurant offers classic Chinese food, located in Buena Vista Colorado.',
        },
      ]}
    >
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Asul|Ubuntu"
        rel="stylesheet"
      />
    </Helmet>
    <div>
      <Header />
      <div className="wrap container content">{children}</div>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
