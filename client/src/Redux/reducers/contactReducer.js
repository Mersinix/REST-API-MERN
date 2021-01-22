import {GET_CONTACTS} from "../constants/actionsTypes";


const initState={
    contacts:[]
}
export const contactReducer=(state=initState,{type,payload}) =>{
 switch (type) {
     case GET_CONTACTS:
         return {
             ...state,contacts:payload,
         };
        
     default:
         return state;
 }
}

export default contactReducer
