import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinitialize from "../Component/Firebase/firebase.init";

firebaseinitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setIsLoading] = useState(true);
    
    const auth = getAuth();
    
    const signInWithGoogle = () => {

        setIsLoading(true)

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            
        
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)             
            } else {
                setUser('')
            }
            setIsLoading(false)
        });
    }, [])
    
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {})
            
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        signInWithGoogle,
        logOut,
        isloading,
        setIsLoading
    }
}

export default useFirebase;