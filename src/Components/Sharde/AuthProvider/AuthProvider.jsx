import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = ()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscriber = onAuthStateChanged(auth, currenUsers =>{
            setUsers(currenUsers);
            setLoading(false);
        })
        return ()=>{
            unSubscriber();
        }
    },[])


    const info = {
        users,
        loading,
        createUser,
        loginUser,
        googleLogin,
        loading,
        logOut

    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;