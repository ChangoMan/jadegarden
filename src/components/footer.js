import React from 'react'
// import { Link } from 'gatsby'

const Footer = () => (
  <footer className="content-info" role="contentinfo">
    <div className="container">
      <div className="row space-bottom20">
        <div className="col-sm-4">
          <div className="vcard">
            <h3>
              <a href="/">Jade Garden</a>
            </h3>
            <p>
              505 US Hwy 24 N.
              <br />
              Buena Vista, CO 81211
            </p>
          </div>
        </div>
        <div className="col-sm-4">
          <h3>Restaurant Hours</h3>
          <p>Tuesday - Sunday: 11am - 9:00pm</p>
          <p>Close 10:30pm during Summer</p>
        </div>
        <div className="col-sm-4">
          <h3>Phone</h3>
          <p>(719) 395-4950</p>
          <p>(719) 395-6538</p>
        </div>
      </div>
      <p>© 2019 Jade Garden</p>
    </div>
  </footer>
)

export default Footer
