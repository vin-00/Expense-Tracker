
import {TextField , Typography , Grid , Button , FormControl , InputLabel , Select , MenuItem} from "@mui/material"

import "./formStyle.css"

import { ExpenseTrackerContext } from "../../../context/context";
import { useContext } from "react";

import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import formatDate from "../../../utils/formatDate";

import { incomeCategories , expenseCategories } from "../../../constants/categories";

const initialState = {
    amount : '',
    category:'',
    type : 'Income',
    date : formatDate(new Date()),
}

export default function Form(){

    const {addTransaction} = useContext(ExpenseTrackerContext);
    const [formData , setFormData] = useState(initialState);

    const createTransaction = ()=>{
        const transaction = {...formData , amount : Number(formData.amount) , id :uuidv4()}
        addTransaction(transaction);
        setFormData(initialState);
    }   

    const selectedCaategories = formData.type =="Income" ? incomeCategories : expenseCategories;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth variant="filled">
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e)=> setFormData({...formData , type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth variant="filled">
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e)=> setFormData({...formData ,category: e.target.value})}>
                        {selectedCaategories.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e)=>setFormData({...formData,amount:e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e)=>setFormData({...formData,date:formatDate(e.target.value)})} />
            </Grid>

            <Button  style={{marginTop:"20px" , marginLeft:"15px"}} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}