import React, {useState} from 'react';
import styled from 'styled-components'
import searchLogo from '../assets/img/searchLogo.png'
import { NavLink } from "react-router-dom";
import {useParams} from 'react-router'

const SearchBar = ({searchValue, setSearchValue, setSearchResult, searchResult  }) => {
    const params = useParams()
    const [isOpen, setIsOpen] = useState(true)


    const getInputValue = (e) => {
        setSearchValue(e.target.value)
        searchItem()
    }

    const resetInputField = () => {
        setSearchValue('');
    };

    const searchItem = async () => {
        const fetchData = await fetch(`https://623c659f8e9af58789508891.mockapi.io/products?title=${searchValue}`)
        const jsonData = await fetchData.json()
        setSearchResult(jsonData)
        resetInputField()
    }
    
    const toggle = () => {
        setIsOpen(false)
        resetInputField()
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            setIsOpen(false)
        }  
    }

    return (
            <SearchContainer>
                    <Input 
                        placeholder='Поиск'
                        onKeyUp={getInputValue}
                        onKeyPress={handleKeyPress}
                    />
                    <NavItem onClick={()=>{setIsOpen(false)}} style={{border:'none'}} to='/search'> 
                            <img onClick={toggle} style={{padding: '13px', cursor:'pointer',}} src={searchLogo} alt="searchLogo"/>
                    </NavItem>
                <Results style={{ visibility: isOpen ? 'visible': 'hidden'}}> 
                    {
                        searchResult.slice(0,10).map((item) => {
                            return (
                                <List>
                                    <NavItem to={`/collection/${params.id}/product/`+item.id}>
                                        <Items onClick={toggle}>{item.title} </Items>
                                    </NavItem>
                                </List>
                            )
                        })
                    }
                </Results>
            </SearchContainer>
    );
};

export default SearchBar;

const NavItem = styled(NavLink) `
    display: flex; 
    justify-content: space between;
    font-weight: 400;
    font-size: 17px;
    &:visited,&:link { color: black}
    text-decoration: none;
    &:hover {background: #ECECEC;
    };
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
    width: 100%;

`
const SearchContainer = styled.div `
    display: flex; 
    align-items: center; 
    width: 662px;
    border: 1px solid #E0E0E0;  
    background-color: #F8F8F8;
    position: relative;
    @media screen and (max-width: 390px) 
    { 
        display: none;
    }

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