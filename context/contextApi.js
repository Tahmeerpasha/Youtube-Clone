'use client'
import { React, createContext, useState, useEffect } from 'react';
import { fetchDataFromAPI } from '../utils/api';

export const Context = createContext();
export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setsearchResults] = useState([]);
    const [selectedCategories, setselectedCategories] = useState('new');
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategories);
    }, [selectedCategories])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromAPI(`search/?q=${query}`)
            .then(({ contents }) => {
                console.log(contents);
                setsearchResults(contents);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setsearchResults,
                selectedCategories,
                setselectedCategories,
                mobileMenu,
                setmobileMenu
            }}
        >
            {children}
        </Context.Provider>
    )

}