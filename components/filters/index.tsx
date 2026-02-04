"use client";
import React from 'react';
import Dropdown from '../dropdown';
import Categories from '@/data/categories.json';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { categoryHandler, searchHandler, sortByHandler } from '@/store/productsSlice';
import { ProductCategory, ProductSortOption } from '@/utils/enum';

const Filters = () => {
    const { search, sortBy, category } = useSelector((state: RootState) => state.products);
    const dispatch: AppDispatch = useDispatch();
    const filterChangeHandler = (value: string) => {
        dispatch(categoryHandler(value as ProductCategory));
    }
    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(searchHandler(value));
    }

    const sortChangeHandler = (value: string) => {
        dispatch(sortByHandler(value as ProductSortOption));
    }

    return (
        <section className='filters-container'>
            <Dropdown value={category} changeHandler={filterChangeHandler} options={Categories} label='Filter' />
            <input className='input-field' placeholder='Search...' value={search} onChange={searchChangeHandler} />
            <Dropdown value={sortBy} changeHandler={sortChangeHandler} options={Object.values(ProductSortOption)} label='Sort By' />
        </section>
    )
}

export default Filters