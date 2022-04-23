import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'
import logo from '../assets/img/logo.png'
import favorites from '../assets/img/favorites.png'
import cart from '../assets/img/cart.png'
import { NavLink } from "react-router-dom";
import SearchBar from './SearchBar';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";




const Navbar = ({searchValue, setSearchValue, setSearchResult,searchResult}) => {

    const [loaded, setLoaded] = useState(false)
    const [fav, setFav] = useState([])
    const [render,reRender] = useState()
    const [cartt, setCart] = useState([])
    const [user, setUser] = useState({});


    const forceRender = useCallback(()=>{
        reRender({})
    },[])
    console.log('component was rendered')


    // useEffect(() => {
    //         setFav(JSON.parse(localStorage.getItem('favorite')))
    //         setCart(JSON.parse(localStorage.getItem('cartItem')))
    // }, [render])

    // useEffect(() => {
    //     forceRender()
    // }, [fav, cartt])

    // console.log(fav)

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        console.log(user);
        } catch (error) {
        console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };


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
                        <p > <span style={{color:'#979797'}}> Тел: </span><Link style={{textDecoration:'none', }} href="tel:+996707191199">+996 707 191 199 </Link></p>
                        <NavLink style={{textDecoration:'none'}} to="/login">
                        <h4> User Logged In: </h4>
                            {user?.email}
                            <Button  onClick={logout}>
                                Выйти
                            </Button>
                        </NavLink>
                    </TopRight>
                    <Line></Line>
                </Top>
                <Bottom>
                    <NavItem to='/'> <Logo src={logo} alt="logo" /> </NavItem>   
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setSearchResult={setSearchResult} searchResult={searchResult}/>
                    <InnerWrapper>
                        <NavItem style={{marginRight:'10px'}} to='/favorites'>
                            <Icon className='logo' src={favorites} alt="favorites" />
                            {/* {localStorage.getItem('favorite') && JSON.parse(localStorage.getItem('favorite')).length ? <Indicator/> : null} */}
                            {fav.length ? <Indicator/> : null}
                            <CartFav>Избранное</CartFav>
                        </NavItem>
                        <p style={{color: '#EEEEEE'}}>|</p>
                        <NavItem style={{marginLeft:'10px'}} to='/cart'>
                            <Icon src={cart} alt="cart"/>
                                {/* {localStorage.getItem('cartItem') && JSON.parse(localStorage.getItem('cartItem')).length ? <IndicatorTwo/> : null} */}
                                {cartt.length ? <IndicatorTwo/> : null}
                            <CartFav>Корзина</CartFav>
                        </NavItem>  
                    </InnerWrapper>
                </Bottom>
            </Wrapper>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.div `
    height: 153px; 

    @media screen and (max-width: 390px) 
    { height: 64px }
`
const Wrapper = styled.div `
    padding: 22px 99px;
    @media screen and (max-width: 390px) 
    { 
        padding: 0
    }
`
const Top = styled.div `
    display: flex;
    justify-content: space-between;
`
const TopLeft = styled.div `
    display: flex;
    @media screen and (max-width: 390px) 
    { 
        display: none;
    }
    
`
const TopRight = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`
const NavItem = styled(NavLink) `
display: flex; 
justify-content: space between;
font-weight: 400;
font-size: 17px;
&:visited,&:link { color: black}
text-decoration: none;
&:hover {color:gray}

@media screen and (max-width: 390px) 
    { 
        padding: 10px;
    }
`
const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 390px) 
    { 
        margin: 0;
        justify-content:center;
    }
`
const Link = styled.a`
    line-height: 17px;
    text-decoration: none;
    &:visited,&:link { color: black}
`
const CartFav = styled.p`
    margin-left: 10px;
    @media screen and (max-width: 390px) 
    { 
        display: none;
    }
`
const Line = styled.div`
    position: absolute;
    height: 1px;
    background: #EEEEEE;
    width: 100%;
    right: 0;
    top: 59px;
    z-index: 1;
    @media screen and (max-width: 390px) 
    { 
        display: none;
    }
`
const Icon = styled.img`
    @media screen and (max-width: 390px)
    { 
        display: none;
    }
`
const Logo = styled.img `
    
    @media screen and (max-width: 390px) 
    { 
        height: 43px; 
        width: 99px;
    }
`
const Indicator = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background: red;
    position: absolute;
    left: 14px;
    top: 0px;
`
const IndicatorTwo = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background: red;
    position: absolute;
    right: 87px;
    top: 0px;
`
const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const Button = styled.div`
    width: 95px;
    height: 30px;
    color: #393939;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ECECEC;
    margin-left: 10px;
    cursor: pointer;
`
