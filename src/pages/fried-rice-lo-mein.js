import React from 'react'

import LayoutInner from '../components/layoutInner'

const FriedRiceIndex = () => (
  <LayoutInner>
    <h1 className="top">Fried Rice &amp; Lo Mein!</h1>

    <table className="table table-menu">
      <tbody>
        <tr>
          <td>
            <p className="menu-title">Chicken Fried Rice</p>
          </td>
          <td className="menu-price">$9.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Pork Fried Rice</p>
          </td>
          <td className="menu-price">$9.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Beef Fried Rice</p>
          </td>
          <td className="menu-price">$9.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Vegetable Fried Rice</p>
          </td>
          <td className="menu-price">$9.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Shrimp Fried Rice</p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Combination Fried Rice</p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Volcano Fried Rice<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>

        <tr>
          <td colspan="2">
            <h2>Lo Mein</h2>
          </td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Chicken Lo Mein</p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Pork Lo Mein</p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Beef Lo Mein</p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Vegetable Lo Mein</p>
          </td>
          <td className="menu-price">$10.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Shrimp Lo Mein</p>
          </td>
          <td className="menu-price">$11.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Combination Lo Mein</p>
          </td>
          <td className="menu-price">$11.45</td>
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

export default FriedRiceIndex
