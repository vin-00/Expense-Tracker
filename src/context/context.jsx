
import React , {useReducer , createContext } from 'react';
import transactionReducer from "./transactionReducer";

import categoryReducer from './categoryReducer';
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

const inCategory =  JSON.parse(localStorage.getItem("incategory")) || [
    { type: 'Business', amount: 0, color: '#123123' },
    { type: 'Investments', amount: 0, color: '#154731' },
    { type: 'Extra income', amount: 0, color: '#165f40' },
    { type: 'Deposits', amount: 0, color:'#16784f' },
    { type: 'Lottery', amount: 0, color: '#14915f' },
    { type: 'Gifts', amount: 0, color: '#10ac6e' },
    { type: 'Salary', amount: 0, color: '#0bc77e' },
    { type: 'Savings', amount: 0, color: '#04e38d' },
    { type: 'Other', amount: 0, color: '#00ff9d' },
];

const exCategory = JSON.parse(localStorage.getItem("excategory")) || [
    { type: 'Bills', amount: 0, color: '#b50d12' },
    { type: 'Car', amount: 0, color: '#bf2f1f' },
    { type: 'Clothes', amount: 0, color: '#c9452c' },
    { type: 'Travel', amount: 0, color: '#d3583a' },
    { type: 'Food', amount: 0, color: '#dc6a48' },
    { type: 'Shopping', amount: 0, color: '#e57c58' },
    { type: 'House', amount: 0, color: '#ee8d68' },
    { type: 'Entertainment', amount: 0, color:'#f79d79' },
    { type: 'Phone', amount: 0, color: '#ffae8a' },
    { type: 'Pets', amount: 0, color: '#cc474b' },
    { type: 'Other', amount: 0, color: '#f55b5f' },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) =>{

    const [transactions , transactionDispatch] = useReducer(transactionReducer , initialState);
    
    const [incategory , incategoryDispatch] = useReducer(categoryReducer , inCategory);
    
    const [excategory , excategoryDispatch] = useReducer(categoryReducer , exCategory )
    
    //Action creators
    const deleteTransaction =(id)=> transactionDispatch({type:'DELETE_TRANSACTION' , payload:id});
    const addTransaction =(transaction) => transactionDispatch({type : 'ADD_TRANSACTION' , payload: transaction})
    const addInCategory = (category) => incategoryDispatch({type:"ADD_INCATEGORY" , payload : category})
    const addExCategory = (category) => excategoryDispatch({type:'ADD_EXCATEGORY' , payload : category})

    const delInCategory = (type) => incategoryDispatch({type:"DELETE_INCATEGORY" , payload : type})
    const delExCategory = (type) =>excategoryDispatch({type:"DELETE_EXCATEGORY" , payload : type})

    const balance = transactions.reduce((acc , curr) =>{
        return curr.type=="Income" ? acc+=curr.amount : acc-=curr.amount ;
    },0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            incategory,
            excategory,
            addInCategory,
            addExCategory,
            delInCategory,
            delExCategory,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}