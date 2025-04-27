import React from "react";
import "../styles/Chart.css";
import Header from "../components/Homepage/Header";

function Chart() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Product Purchase History</h1>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iPhone 13</td>
                <td>Mobile Phone</td>
                <td>$799</td>
                <td>2</td>
                <td>$1598</td>
              </tr>
              <tr>
                <td>Galaxy Watch 4</td>
                <td>Watches</td>
                <td>$250</td>
                <td>1</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Apple Watch Series 7</td>
                <td>Watches</td>
                <td>$399</td>
                <td>1</td>
                <td>$399</td>
              </tr>
              <tr>
                <td>OnePlus 9 Pro</td>
                <td>Mobile Phone</td>
                <td>$969</td>
                <td>1</td>
                <td>$969</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
