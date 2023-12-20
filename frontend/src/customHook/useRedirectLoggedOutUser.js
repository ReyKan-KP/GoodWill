import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getLoginStatus } from "../services/authService"
import { SET_LOGIN_USER } from "../redux/features/auth/authSlice"
import { toast } from "react-toastify"

const useRedirectLoggedOutUser = (path) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const redirectLoggedOutUser = async()=>{
            const isLoggedIn = await getLoginStatus();
            dispatch(SET_LOGIN_USER(isLoggedIn));

            if(!isLoggedIn){
                toast.info("Session Expired. Please Login in to continue")
                navigate(path);
                return;
            }

        }
        redirectLoggedOutUser();
    },[dispatch,navigate,path])
}

export default useRedirectLoggedOutUser
