import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import '../assets/scss/main.scss'

const LayoutInner = ({ children }) => (
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
      <div className="wrap container content">
        <aside className="sidebar col-sm-3">
          <section className="widget nav_menu-2 widget_nav_menu">
            <div className="widget-inner">
              <h3>Menu</h3>
              <ul id="menu-sidebar-navigation" className="menu">
                <li className="menu-appetizers">
                  <Link to="/appetizers/">Appetizers</Link>
                </li>
                <li className="menu-fried-rice-lo-mein">
                  <Link to="/fried-rice-lo-mein/">
                    Fried Rice &amp; Lo Mein
                  </Link>
                </li>
                <li className="menu-pork-chicken">
                  <Link to="/pork-chicken/">Pork &amp; Chicken</Link>
                </li>
                <li className="menu-beef-shrimp">
                  <Link to="/beef-shrimp/">Beef &amp; Shrimp</Link>
                </li>
                <li className="menu-chefs-specials-vegetables">
                  <Link to="/chefs-specials-vegetables/">
                    Chef’s Specials &amp; Vegetables
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <p>
            <a
              className="btn btn-block btn-primary"
              href="tel:719-395-4950"
              target="blank"
            >
              (719) 395-4950
            </a>
          </p>
        </aside>
        <main className="main col-sm-9" role="main">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  </>
)

LayoutInner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutInner
