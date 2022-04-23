import React, {useState} from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";


const LogInPage = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            } catch (error) {
            console.log(error.message);
            }
        };
        

    return (
        <Wrapper>
            <form >
                <label>Почта</label>
                <input onChange={(event) => {
                    setLoginEmail(event.target.value);
                }} type="text"/>

                <label>Пароль</label>
                <input onChange={(event) => {
                    setLoginPassword(event.target.value);
                }} type="password"/>
                <Link to='/'>
                    <button onClick={login} >Войти</button>
                </Link>
                
            </form>
            <div>
                <Link to='/signup'>
                    Зарегистрироваться
                </Link>
            </div>
        </Wrapper>
    );
};


export default LogInPage;

const Wrapper = styled.div `
    height: 51vh;
    width: 100%;
    background: #ECECEC;
`
