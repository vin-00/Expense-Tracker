import { useContext } from "react";

import { ExpenseTrackerContext } from "./context/context";

import {resetCategories} from "./utils/resetCategories";

const useTransactions = (title)=>{
    
    const {transactions , incategory , excategory} = useContext(ExpenseTrackerContext);
    resetCategories(incategory);
    resetCategories(excategory)

    const transactionsPerType = transactions.filter((t)=>t.type==title);

    const total = transactionsPerType.reduce((aux,t)=>aux+=t.amount,0);
    const categories = title=='Income'?incategory:excategory;

    transactionsPerType.forEach((t)=>{
        const category = categories.find((c)=>c.type==t.category);

        if(category){
            category.amount+=t.amount;
        }
    })

    const filteredCategories = categories.filter((c)=>c.amount>0);

    const chartData = {
        datasets : [{
            data : filteredCategories.map((c)=>c.amount),
            backgroundColor : filteredCategories.map((c)=>c.color)
        }],
        labels : filteredCategories.map((c)=>c.type)
    }

    return { total , chartData };

}

export default useTransactions;