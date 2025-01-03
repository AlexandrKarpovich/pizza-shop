import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {useDispatch, useSelector} from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlices"
import Skeleton from "../components/pizzaBlock/Skeleton";
import PizzaBlock from "../components/pizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";


const Home = () => {
    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector((state) => state.filter)
    const sortType = sort.sortProperty

    const {searchValue} = useContext(SearchContext)

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeCategory = (id) => {
        // console.log(id)
        dispatch(setCategoryId(id))
    }

    // console.log(sortType)

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const sort = sortType.replace('-', '')
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://6733ad38a042ab85d117a401.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`)
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                // console.log('массив пицц', arr)
                setItems(Array.isArray(arr) ? arr : []);
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
                setIsLoading(false);
            });
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
    const pizzas = items
        // фильтрация на фронте
        // .filter(obj => {
        //     if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        //        return true;
        //     }
        //     return false;
        // })
        .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? (
                    skeletons
                ) : items.length > 0 ? (
                    pizzas
                ) : (
                    <p>В данной категории пицц нет.</p>
                )}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
    );
};

export default Home;