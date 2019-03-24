import React from 'react'

import LayoutInner from '../components/layoutInner'

const AppetizersIndex = () => (
  <LayoutInner>
    <h1 className="top">Appetizers</h1>

    <table className="table table-menu">
      <tbody>
        <tr>
          <td>
            <p className="menu-title">Spring Rolls (2)</p>
          </td>
          <td className="menu-price">$2.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Chicken Wings (6)</p>
          </td>
          <td className="menu-price">$6.35</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Beef Skewer (4)</p>
          </td>
          <td className="menu-price">$6.35</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Crab Cheese Wonton (6)</p>
          </td>
          <td className="menu-price">$6.35</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Fried or Steam Dumplings (6)</p>
          </td>
          <td className="menu-price">$6.35</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Fried Shrimp (6)</p>
          </td>
          <td className="menu-price">$6.35</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Jade Appetizers</p>
            <p>
              <em>
                Spring roll, crab cheese wonton, fried shrimp served w/ egg
                drop, hot &amp; sour, or wonton soup.
              </em>
            </p>
          </td>
          <td className="menu-price">$6.35</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Jade Platter (for two)</p>
            <p>
              <em>
                Spring rolls, crab cheese wonton. fried dumplings, fried shrimp,
                chicken wings, beef skewer.
              </em>
            </p>
          </td>
          <td className="menu-price">$14.95</td>
        </tr>
        <tr>
          <td colSpan="2">
            <h2>Soup</h2>
          </td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Egg Drop Soup</p>
          </td>
          <td className="menu-price">
            $2.25 (Small)
            <br /> $5.89 (Large)
          </td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Hot &amp; Sour Soup<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">
            $2.25 (Small)
            <br /> $5.89 (Large)
          </td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Wonton Soup</p>
          </td>
          <td className="menu-price">
            $2.25 (Small)
            <br /> $5.89 (Large)
          </td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">War Wonton Soup (for two)</p>
          </td>
          <td className="menu-price">$7.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Hot &amp; Sour Seafood Soup<strong className="text-red">*</strong>{' '}
              (for two)
            </p>
          </td>
          <td className="menu-price">$7.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Vegetable Tofu Soup (for two)</p>
          </td>
          <td className="menu-price">$7.25</td>
        </tr>
      </tbody>
    </table>

    <p>
      <em>
        <strong className="text-red">*</strong> indicates spicy
      </em>
    </p>
  </LayoutInner>
)

export default AppetizersIndex
