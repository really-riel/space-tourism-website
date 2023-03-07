import React from "react";

const TechNavBtn = ({ pages, activePage, onClick }) => {
  return (
    <div className="techNavBtn">
      {pages
        ? pages.map((page, index) => (
            <button
              className={activePage === page ? "selected" : null}
              key={index}
              onClick={() => onClick(page)}
            >
              {page + 1}
            </button>
          ))
        : null}
    </div>
  );
};

export default TechNavBtn;
