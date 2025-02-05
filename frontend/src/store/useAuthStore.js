/* eslint-disable no-unused-vars */
import {create }  from 'zustand';
import {axiosInstance} from '../lib/axios.js'

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
    

    signup: async (data)=>{}
}))