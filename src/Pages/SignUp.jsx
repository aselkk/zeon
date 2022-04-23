import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from 'react-router-dom';


function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

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
        <div className="App">
        <div>
            <h3> Register User </h3>
            <input
            placeholder="Email..."
            onChange={(event) => {
                setRegisterEmail(event.target.value);
            }}
            />
            <input
            placeholder="Password..."
            onChange={(event) => {
                setRegisterPassword(event.target.value);
            }}
            />

            <Link to='/'>
                <button onClick={register}> Create User</button>
            </Link>
        </div>
        <Link to='/login'>
            войти
        </Link>
        </div>
    );
}

export default SignUp;