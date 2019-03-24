import React from 'react'

import Layout from '../components/layout'

const LocationIndex = () => (
  <Layout>
    <div className="row">
      <div className="col-md-8">
        <iframe
          title="iframe-map"
          className="iframe-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12429.740074935107!2d-106.13645655296646!3d38.845398141446694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8715354a1bf260e7%3A0x8e2035bea8ac5739!2sJade+Garden!5e0!3m2!1sen!2sus!4v1394906471776"
          frameBorder="0"
        />
      </div>
      <div className="col-md-4">
        <h3 className="title-line">Address:</h3>
        <h4>
          527 North Hwy. 24
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
