import React from "react";

function Categories({ value, onClickCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul id="cat">
        {categories.map((cat, i) => (
          <li
            id="catteg"
            key={i}
            onClick={() => onClickCategory(i)}
            className={value == i ? "active" : ""}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
