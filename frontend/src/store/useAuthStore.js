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
    },

    login :async (data)=>{
            set({isLoggingIn :true});
            try {
                
                const res = await axiosInstance.post("/auth/login",data);
                set({authUser :res.data});
                toast.success("Successfully logged in");

            } catch (error) {
                console.log(`err i login authstore`,error.response.data.message);
                    toast.error(error.response.message);              
            }
            finally{
                set({isLoggingIn : false});
            }   

    },


    logout : async ()=>{
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Successfully logged out");
        } catch (error) {
            console.log(`the err in logout authstore` + error.response.message);
            toast.error(error.response.message);
        }
    },

    updateProfile : async (data)=>{
        set({isUpdatingProfile: true});
        try {
            const res= await axiosInstance.put("/auth/profile",data);
            set({authUser :res.data});
            toast.success("Successfully updated profile");
            
        } catch (error) {
            toast.error(error.response.message);
            console.log(`the err in updateProfile authstore`,error.message); 
        }
        finally{
            set({isUpdatingProfile: false});
        }
    },

   
}))