/* eslint-disable no-unused-vars */
import {create }  from 'zustand';
import {axiosInstance} from '../lib/axios.js'
import toast from 'react-hot-toast';

export const useAuthStore = create((set)=>({
    authUser: null,
    isLoggingIn: false,
    isSigningup :false,
    isUpdatingProfile: false,
    isCheckingAuth : true,

    checkAuth : async ()=>{
        try {
             const res = await axiosInstance.get("/auth/check");
             set({authUser: res.data});
        } catch (error) {
            console.log(`the err in checkauth, ${error.message}`);
            set({authUser: null});
        }
        finally{
            set({isCheckingAuth: false})
        }
    },
    

    signup: async (data)=>{
        set({isSigningup:true});
        try {
            const res= await axiosInstance.post("/auth/signup",data);
            set({authUser :res.data});
            toast.success("successfully account created");
            
        } catch (error) {
            toast.error(error.response.message);
            console.log("this is signup err",error.message); 
        }
        finally{
            set({isSigningup: false});
        }
    }
}))