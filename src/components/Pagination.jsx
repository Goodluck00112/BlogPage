import React from "react";
import { NavLink } from "react-router";

function Pagination({ currentPage, totalPages, next, prev, gotoPage }) {
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, "...");
      } else if (currentPage >= totalPages - 1) {
        pages.push("...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
      }
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <nav>
      <ul className="pagination">
        {/* Previous Button */}
        <li className="page-item">
          <NavLink className="page-link" to="#" onClick={() => prev()}>
            Previous
          </NavLink>
        </li>

        {/* Page Numbers */}
        {pages.map((page, idx) =>
          page === "..." ? (
            <li key={idx} className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          ) : (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <NavLink
                className="page-link"
                to="#"
                onClick={() => gotoPage(page)}
              >
                {page}
              </NavLink>
            </li>
          )
        )}

        {/* Next Button */}
        <li className="page-item">
          <NavLink className="page-link" to="#" onClick={() => next()}>
            Next
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
