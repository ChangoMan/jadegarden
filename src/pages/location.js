import React from 'react'

import Layout from '../components/layout'

const LocationIndex = () => (
  <Layout>
    <div className="row">
      <div className="col-md-8">
        <iframe
          title="iframe-map"
          className="iframe-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.4237943498338!2d-106.13521869734618!3d38.84565512784786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x871535361f59f15d%3A0xc3a21e5d1754673b!2s505+US+Hwy+24+N%2C+Buena+Vista%2C+CO+81211!5e0!3m2!1sen!2sus!4v1554511446969!5m2!1sen!2sus"
          frameBorder="0"
        />
      </div>
      <div className="col-md-4">
        <h3 className="title-line">Address:</h3>
        <h4>
          505 US Hwy 24 N.
          <br />
          Buena Vista, CO 81211
        </h4>
        <h3 className="title-line">Phone:</h3>
        <h4>
          (719) 395-4950
          <br />
          (719) 395-6538
        </h4>
        <h3 className="title-line">Hours:</h3>
        <h4>Tuesday - Sunday: 11am - 9:00pm</h4>
        <h4>Close 10:30pm during Summer</h4>
      </div>
    </div>
  </Layout>
)

export default LocationIndex
