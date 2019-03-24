import React from 'react'

import Layout from '../components/layout'
import bannerChefsSpecialties from '../assets/img/banner-chefs-specialties.jpg'

const LocationIndex = () => (
  <Layout>
    <h1 class="top">Chef's Specials &amp; Vegetables</h1>

    <table className="table table-menu">
      <tbody>
        <tr>
          <td>
            <p className="menu-title">
              Lemon Chicken{' '}
              <a href="/img/menu/lemonchicken.jpg">
                <img src="/img/icon-camera.png" alt="" />
              </a>
            </p>
            <p>
              <em>
                (Breaded chicken w/ steamed broccoli &amp; a sweet &amp; sour
                lemon sauce)
              </em>
            </p>
          </td>
          <td className="menu-price">$10.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Honey Vinegar Pork</p>
            <p>
              Tender pork, bell peppers &amp; onions w/ a sweet and tangy sauce
            </p>
          </td>
          <td className="menu-price">$11.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Salt &amp; Pepper<strong className="text-red">*</strong> Pork
              Chops
            </p>
            <p>
              bell peppers, onions, &amp; jalapeños w/ salt &amp; pepper
              seasoning
            </p>
          </td>
          <td className="menu-price">$11.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Jing Jang Pork or Chicken</p>
            <p>with a sweet brown sauce and 3 steamed buns. Beef add $1.00.</p>
          </td>
          <td className="menu-price">$11.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Pepper Steak</p>
            <p>Stir fried steak with bell peppers and onions</p>
          </td>
          <td className="menu-price">$11.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Sizzling Chicken, Pork or Beef</p>
            <p>
              w/ onions &amp; bell peppers in a Chinese BBQ sauce. Lamb add
              $3.00
            </p>
          </td>
          <td className="menu-price">$11.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Happy Family</p>
            <p>Mixed veggies with chicken, pork, beef, shrimp, and scallops</p>
          </td>
          <td className="menu-price">$12.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Volcano Shrimp<strong className="text-red">*</strong>{' '}
              <a href="/img/menu/volcanoshrimp.jpg">
                <img src="/img/icon-camera.png" alt="" />
              </a>
            </p>
            <p>Mixed veggies with chicken, pork, beef, shrimp, and scallops</p>
          </td>
          <td className="menu-price">$12.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Shrimp w/ Lobster Sauce</p>
            <p>Shrimp w. peas, carrots, and egg whites in a cream sauce</p>
          </td>
          <td className="menu-price">$12.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Walnut Shrimp</p>
            <p>Crispy shrimp with a sweet coconut mayonnaise sauce</p>
          </td>
          <td className="menu-price">$13.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Salt &amp; Pepper Shrimp<strong className="text-red">*</strong>{' '}
              <a className="fancybox" href="/img/menu/saltpeppershrimp.jpg">
                <img src="/img/icon-camera.png" alt="" />
              </a>
            </p>
            <p>Crispy shrimp seared with onions and bell peppers</p>
          </td>
          <td className="menu-price">$13.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Seafood Delight</p>
            <p>Mixed veggies with shrimp, scallops, and crab meat</p>
          </td>
          <td className="menu-price">$14.95</td>
        </tr>
      </tbody>
    </table>

    <p>
      <em>
        <strong className="text-red">*</strong> indicates spicy
      </em>
    </p>
  </Layout>
)

export default LocationIndex
