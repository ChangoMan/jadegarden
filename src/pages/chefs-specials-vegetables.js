import React from 'react'

import LayoutInner from '../components/layoutInner'

const ChefsSpecialsIndex = () => (
  <LayoutInner>
    <h1 className="top">Chef's Specials &amp; Vegetables</h1>

    <table className="table table-menu">
      <tbody>
        <tr>
          <td>
            <p className="menu-title">
              Sesame Chicken<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$13.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              General Tso's Chicken<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$13.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Tangerine Chicken<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$13.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Combination Egg Foo Young</p>
          </td>
          <td className="menu-price">$14.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Sweet &amp; Sour Triple</p>
          </td>
          <td className="menu-price">$14.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Kung Pao Triple<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$14.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Tangerine Double<strong className="text-red">*</strong>
            </p>
            <p>Deep fried chicken and shrimp in special orange sauce.</p>
          </td>
          <td className="menu-price">$14.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Happy Family</p>
            <p>
              Chicken, beef, shrimp, zucchini, mushroom, carrot, broccoli,
              waterchestnut, cooked in chef's special sauce.
            </p>
          </td>
          <td className="menu-price">$15.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Sizzling Beef and Scallop</p>
            <p>
              Beef and scallop with snow peas, waterchestnut in chef's special
              sauce.
            </p>
          </td>
          <td className="menu-price">$15.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Dragon and Phoenix<strong className="text-red">*</strong>
            </p>
            <p>Hunan shrimp and sesame chicken, two favorites.</p>
          </td>
          <td className="menu-price">$15.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Seafood Delight</p>
            <p>
              Shrimp, scallop, imitation crab, and mixed vegetables cooked in
              chef's special sauce.
            </p>
          </td>
          <td className="menu-price">$15.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Shrimp, Scallop with Garlic Sauce
              <strong className="text-red">*</strong>
            </p>
            <p>
              Shrimp, scallop, bamboo, waterchestnut, zucchini, mushroom,
              broccoli, onions cooked in special garlic sauce.
            </p>
          </td>
          <td className="menu-price">$15.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Sesame Beef<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$15.45</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Sesame Shrimp<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$15.45</td>
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

export default ChefsSpecialsIndex
