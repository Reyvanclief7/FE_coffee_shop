import React from "react";

function Search() {
  return (
    <div className="search-popup">
      <div className="search-popup-container">
        <form role="search" method="get" className="search-form" action>
          <input
            type="search"
            id="search-form"
            className="search-field"
            placeholder="Type and press enter"
            defaultValue
            name="s"
          />
          <button type="submit" className="search-submit">
            <svg className="search">
              <use xlinkHref="#search" />
            </svg>
          </button>
        </form>
        <h5 className="cat-list-title">Browse Categories</h5>
        <ul className="cat-list">
          <li className="cat-list-item">
            <a href="#" title="Mobile Phones">
              Mobile Phones
            </a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Smart Watches">
              Smart Watches
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
