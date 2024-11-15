import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import PizzaBlock from "../components/pizzaBlock";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({name: 'популярности (desc)', sortProperty: 'rating'})

    console.log(sortType)

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const sort = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

        fetch(`https://6733ad38a042ab85d117a401.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`)
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                console.log('массив пицц', arr)
                setItems(Array.isArray(arr) ? arr : []);
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
                setIsLoading(false);
            });
        window.scrollTo(0, 0)
    }, [categoryId, sortType])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
                <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? (
                    [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                ) : items.length > 0 ? (
                    items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                ) : (
                    <p>В данной категории пицц нет.</p>
                )}
            </div>
        </div>
    );
};

export default Home;