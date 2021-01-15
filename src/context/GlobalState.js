import React,{createContext , useReducer} from 'react';
import {reducer} from './AppReducer';

// Initial State
const initialState ={
    transactions :[]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) =>{
 const [state, dispatch ] = useReducer(reducer , initialState);

// Actions
// Delete transactions
function  deleteTransaction(id) 
{
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}

// Add Transactions
function addTransaction(transaction) {
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
    
    
}
 

 return    <GlobalContext.Provider value={{
      transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
    
        {children}
    
    </GlobalContext.Provider>
 }
 

 
 //Provider
