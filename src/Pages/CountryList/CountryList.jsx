import axios from "axios";
import React, { useState, useEffect } from "react";
import CountryCard from "../../Components/CountryCard/CountryCard";
import "./CountryList.css";
import Pagination from "../../Components/Pagination/Paginate";

export default function CountryList() {
  const [country, setCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(24);

  const fetchCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountry(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // creates search filter by continent
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // creates search input
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = country
    .sort((a, b) => a.name.common.localeCompare(b.name.common)) // Sort countries alphabetically
    .filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (selectedFilter ? country.region === selectedFilter : true)
    )
    .slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="country-list-intro">
        <h2 className="country-list-heading">Country List</h2>
        <div className="filter-search-container">
          <div className="select-continent">
            <label htmlFor="country-select" id="country-select-label">
              Filter by continent{" "}
              <select className="select-input" onChange={handleSelectChange}>
                <option value="">---</option>
                {Array.from(new Set(country.map((country) => country.region)))
                  .map((continent, id) => (
                    <option key={id} value={continent}>
                      {continent}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div className="search-input-container">
            <label htmlFor="search">Browse countries:</label>
            <input
              className="select-input"
              type="search"
              placeholder="Your favorite country"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="country-cards-container">
        {currentCountries.map((country, index) => (
          <div key={index}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {country.length > countriesPerPage && (
          <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={country.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}