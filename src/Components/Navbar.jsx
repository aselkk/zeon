import React from 'react';
import styled from 'styled-components'
import logo from '../assets/img/logo.png'
import searchLogo from '../assets/img/searchLogo.png'
import favorites from '../assets/img/favorites.png'
import cart from '../assets/img/cart.png'
import { NavLink } from "react-router-dom";
import SearchBar from './SearchBar';

const Nav = styled.div `
    height: 153px; 
`
const Wrapper = styled.div `
    padding: 22px 99px;
`
const Top = styled.div `
    display: flex;
    justify-content: space-between;
`
const TopLeft = styled.div `
    display: flex;
`
const TopRight = styled.div ``
const NavItem = styled(NavLink) `
display: flex; 
justify-content: space between;
font-weight: 400;
font-size: 17px;
&:visited,&:link { color: black}
text-decoration: none;
&:hover {color:gray}
`
const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`
const Link = styled.a`
line-height: 17px;
text-decoration: none;
&:visited,&:link { color: black}
`

const Navbar = ({searchValue, setSearchValue, setSearchResult,searchResult}) => {
    return (
        <Nav>
            <Wrapper>
                <Top>
                    <TopLeft  >
                        <NavItem to='/about'> О нас </NavItem>
                        <NavItem to='/collection' style={{marginLeft: '24px'}}> Коллекции </NavItem>
                        <NavItem to='/news' style={{marginLeft: '24px'}}> Новости </NavItem>
                    </TopLeft>
                    <TopRight>
                        <p> <span style={{color:'#979797'}}> Тел: </span><Link style={{textDecoration:'none', }} href="tel:+996707191199">+996 707 191 199 </Link></p>
                    </TopRight>
                </Top>
                    <Bottom>
                    <NavItem to='/'> <img src={logo} alt="logo" /> </NavItem>   
                    {/* <SearchContainer>
                        <Input placeholder='Поиск'/>
                        <Results>
                            <List>
                                <Items>Adidas Light Exo</Items>
                                <Items>Adidas Light Exo</Items>
                                <Items>Adidas Light Exo</Items>
                                <Items>Adidas Light Exo</Items>
                                <Items>Adidas Light Exo</Items>
                            </List>
                        </Results>
                        <NavItem to='/search'> <button style={{border:'none',background: '#f8f8f8', cursor:'pointer', height: '42px'}}><img style={{padding: '13px'}} src={searchLogo} alt="searchLogo"/></button> </NavItem>
                    </SearchContainer> */}
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setSearchResult={setSearchResult} searchResult={searchResult}/>
                    <NavItem to='/favorites'>
                        <img className='logo' src={favorites} alt="favorites" />
                        <p style = {{marginLeft: '10px'}}>Избранное</p>
                    </NavItem>
                    <NavItem to='/cart'>
                        <img src={cart} alt="cart"/>
                        <p style = {{marginLeft: '10px'}}>Корзина</p>
                    </NavItem>
                </Bottom>
            </Wrapper>
        </Nav>
    );
};

export default Navbar;