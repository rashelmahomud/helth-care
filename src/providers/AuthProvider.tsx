"use client"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

// set code all type here
interface AuthContextType {
    user: User | null;
    loading: boolean;
    register: (
        email: string,
        password: string
    ) => Promise<UserCredential>;

    login: (
        email: string,
        password: string
    ) => Promise<UserCredential>


    logout: () => Promise<void>


}



export const AuthContext =
    createContext<AuthContextType | null>(null);




export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const register = (
        email: string,
        password: string
    ): Promise<UserCredential> => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email: string, password: string): Promise<UserCredential> => {
        return signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
    }


    const logout = async () => {

        setLoading(true)
        await signOut(auth)
    }






    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);
    const authInfo = {
        user,
        loading,
        register,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};