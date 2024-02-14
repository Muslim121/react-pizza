import React from "react";

function Categories() {
  const [ActiveIndex, setActiveIndex] = React.useState(0);

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
      <ul>
        {categories.map((value, i) => (
          <li
            key={value}
            onClick={() => setActiveIndex(i)}
            className={ActiveIndex == i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
