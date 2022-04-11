import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import searchLogo from '../assets/img/searchLogo.png'
import { NavLink } from "react-router-dom";
import {useParams} from 'react-router'


const NavItem = styled(NavLink) `
    display: flex; 
    justify-content: space between;
    font-weight: 400;
    font-size: 17px;
    &:visited,&:link { color: black}
    text-decoration: none;
    &:hover {color:gray};
    border-top: 1px solid #d3d3d3;
    

`
const Results = styled.div`
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 45px;  
    border: 1px solid #D3D3D3;
    z-index: 5;
    border-top: none;
`
const List = styled.ul`
`
const Items = styled.li`
    padding: 16px 0;
    list-style: none;
    margin: 0 24px;
`
const SearchContainer = styled.div `
    display: flex; 
    align-items: center; 
    width: 662px;
    border: 1px solid #E0E0E0;  
    background-color: #F8F8F8;
    position: relative

`
const Input = styled.input `
    height: 45px;
    width: 100%;
    border:none;
    background: #f8f8f8;
    font-size: 16px;
    font-family: 'Montserrat';
    padding-left: 22px; 
    &:focus {outline:none}
`

const SearchBar = ({searchValue, setSearchValue, setSearchResult, searchResult  }) => {

    // const [searchResult, setSearchResult] = useState([])
    // const [inputValue, setInputValue] = useState('')
    const params = useParams()


    const getInputValue = (e) => {
        setSearchValue(e.target.value)
        searchItem()
    }

    const searchItem = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products?title=${searchValue}`)
        const jsonData = await fetchData.json()
        setSearchResult(jsonData)
    }

    return (
            <SearchContainer>
                <Input 
                    placeholder='Поиск'
                    onKeyUp={getInputValue}
                />
                <Results>
                    {
                        searchResult.slice(0,4).map((item) => {
                            return (
                                <List>
                                    <NavItem to={`/collection/${params.id}/product/`+item.id}>
                                        <Items>{item.title}</Items>
                                    </NavItem>
                                </List>
                            )
                        })
                    }
                </Results>
                <NavItem style={{border:'none'}} to='/search'> 
                    <button style={{border:'none',background: '#f8f8f8', cursor:'pointer', height: '42px'}}>
                        <img style={{padding: '13px'}} src={searchLogo} alt="searchLogo"/>
                    </button> 
                </NavItem>
            </SearchContainer>
    );
};

export default SearchBar;