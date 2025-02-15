import {create }  from 'zustand';
import {axiosInstance} from '../lib/axios.js'
import toast from 'react-hot-toast';

export const useChatStore = create((set) =>({
    messages :[],
    users:[],
    selectedUser :null,
    isUserLoading :false,
    isMessagesLoading :false,

    getUser :async () =>{
        set({isUserLoading:true});
        try {
            const res = await axiosInstance.get("/messages/users");
            set({users: res.data});
        } catch (error) {
            console.log("the err in the get getuser",error);
            toast.error(error.response.data.message);
        }finally{
        set({isUserLoading:false});
         }
    },


    getMessage :async (userId) =>{
        set({isMessagesLoading:true});
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({users: res.data});
        } catch (error) {
            console.log("the err i nget getmsg",error);
            toast.error(error.response.data.message);
        }finally{
        set({isMessagesLoading:false});
         }
    },

    setSelectedUser : (selectedUser)=> set({selectedUser}),

    
}))