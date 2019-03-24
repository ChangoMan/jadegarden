import React from 'react'

import Layout from '../components/layout'
import slideOrangeChicken from '../assets/img/slide-orange-chicken.jpg'

const IndexPage = () => (
  <Layout>
    <p>
      <img
        style={{ border: '3px solid #fff' }}
        src={slideOrangeChicken}
        alt="Orange Chicken"
      />
    </p>
    {/* <div className="flexslider">
      <ul className="slides">
        <li>
          <a href="/chefs-specials-vegetables/">
            <img src="/img/slide-orange-chicken.jpg" alt="Orange Chicken" />
          </a>
          <h4>Tangerine Chicken</h4>
        </li>
        <li>
          <a href="/chefs-specials-vegetables/">
            <img
              src="/img/slide-shrimp-fried-rice.jpg"
              alt="Shrimp Fried Rice"
            />
          </a>
          <h4>Shrimp Fried Rice</h4>
        </li>
        <li>
          <a href="/chefs-specials-vegetables/">
            <img src="/img/slide-vegetables.jpg" alt="Shrimp Fried Rice" />
          </a>
          <h4>Mixed Chinese Vegetable</h4>
        </li>
        <li>
          <a href="/chefs-specials-vegetables/">
            <img src="/img/slide-shrimp.jpg" alt="Shrimp Fried Rice" />
          </a>
          <h4>Sweet &amp; Sour Shrimp</h4>
        </li>
      </ul>
    </div> */}

    <div className="row">
      <div className="col-sm-8">
        <h1>Welcome to Jade Garden</h1>
        <p>
          Located in Buena Vista, Colorado, Jade Garden specializes in a wide
          variety of Asian cuisines. We aim to provide delicious food in a warm
          and inviting restaurant atmosphere.
        </p>

        <p>
          Stop by or give us a call today for a taste of the finese Asian
          cuisine in the Buena Vista area!
        </p>
      </div>
      <div className="col-sm-4 text-center">
        <div className="hours">
          <h2>Restaurant Hours</h2>
          <p>Tuesday - Sunday: 11am - 9:00pm</p>
          <p>Close 10:30pm in Summer</p>
        </div>
        <h3>(719) 395-4950</h3>
      </div>
    </div>
  </Layout>
)

export default IndexPage
