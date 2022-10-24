import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = { user, createUser, logIn, logOut, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;