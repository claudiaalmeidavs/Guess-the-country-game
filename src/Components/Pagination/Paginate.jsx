import "./Paginate.css"

export default function Pagination ({ countriesPerPage, totalCountries, paginate, currentPage }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination-item${currentPage === number ? "active" : ""}`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    );
  };