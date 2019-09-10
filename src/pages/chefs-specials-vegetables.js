import React from 'react'
import LayoutInner from '../components/layoutInner'

const ChefsSpecialsIndex = () => (
  <LayoutInner>
    <h1 className="top">Chef's Specials &amp; Vegetables</h1>

    <table className="table table-menu">
      <tbody>
        <tr>
          <td>
            <p className="menu-title">Combination Egg Foo Young</p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Sweet &amp; Sour Triple</p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Kung Pao Triple<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Tangerine Double<strong className="text-red">*</strong>
            </p>
            <p>
              <small>
                Deep fried chicken and shrimp in special orange sauce
              </small>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Happy Family</p>
            <p>
              <small>
                Chicken, beef, shrimp, zucchini, mushroom, carrot, broccoli,
                waterchestnut, cooked in chef's special sauce
              </small>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Sizzling Beef and Scallop</p>
            <p>
              <small>
                Beef and scallop with snow pea, waterchestnut in chef's special
                sauce
              </small>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Dragon &amp; Phoenix<strong className="text-red">*</strong>
            </p>
            <p>
              <small>Hunan shrimp and sesame chicken, two favorites</small>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Seafood Delight</p>
            <p>
              <small>
                Shrimp, scallop, imitation crab, mixed vegetables, cooked in
                chef's brown sauce
              </small>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Shrimp, Scallop with Garlic Sauce
              <strong className="text-red">*</strong>
            </p>
            <p>
              <small>
                Shrimp, scallop, bamboo, waterchestnut, zucchini, mushroom,
                broccoli, onion cooked in special garlic sauce
              </small>
            </p>
          </td>
          <td className="menu-price">$16.95</td>
        </tr>
      </tbody>
    </table>

    <table className="table table-menu">
      <tbody>
        <tr>
          <td colspan="3">
            <h2>Vegetables</h2>
          </td>
        </tr>
        <tr>
          <td></td>
          <td className="menu-price">Lunch</td>
          <td className="menu-price">Dinner</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Mixed Chinese Vegetables</p>
          </td>
          <td className="menu-price">$9.25</td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Kung Pao Tofu<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$9.25</td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Snow Pea With Waterchestnut</p>
          </td>
          <td className="menu-price"></td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Tofu Home Style</p>
          </td>
          <td className="menu-price">$9.25</td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Sesame Tofu<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$9.25</td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">
              Broccoli with Garlic Sauce<strong className="text-red">*</strong>
            </p>
          </td>
          <td className="menu-price">$9.25</td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Vegetable Egg Foo Young</p>
          </td>
          <td className="menu-price"></td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Thai Peanut Tofu</p>
          </td>
          <td className="menu-price">$9.25</td>
          <td className="menu-price">$11.25</td>
        </tr>
        <tr>
          <td>
            <p className="menu-title">Mu Shu Vegetable</p>
          </td>
          <td className="menu-price"></td>
          <td className="menu-price">$11.25</td>
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
