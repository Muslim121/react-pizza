import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/Slices/filterSlice";
import { setItems } from "../redux/Slices/pizzasSlice";
import axios from "axios";

import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({ searchValue }) => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const items = useSelector((state) => state.pizza.items);
  const dispatch = useDispatch();

  const sortType = sort.sort;

  const [isLoading, setIsLoading] = React.useState(true);

  const pizzas = items
    .filter((obj) => {
      if (
        obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(async () => {
    setIsLoading(true);

    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? `asc` : `desc`;
    const categorie = categoryId > 0 ? `category=${categoryId}` : "";
    await axios.get(
      `https://65cc6b19dd519126b83e6b54.mockapi.io/items?&page=1&${categorie}&sortBy=${sortBy}&order=${order}`
    );

    try {
      dispatch(setItems());
    } catch (error) {
      alert("Ошибка при получении пицц");
      console.log("ERROR", error);
    } finally {
      setIsLoading(false);
    }

    window.scroll(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};

export default Home;
