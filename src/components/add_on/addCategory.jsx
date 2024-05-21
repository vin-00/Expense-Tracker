
import {useState} from "react";


import hex from "../../utils/getColor"

import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';

import {TextField , Grid , Button , FormControl , InputLabel , Select , MenuItem} from "@mui/material"

const initial = {type : "",
    amount:0,
    color : ''
}

export default function Category_Form({handleClose}){

    const {incategory , excategory , addInCategory , addExCategory} = useContext(ExpenseTrackerContext);

    const [  type , setType] = useState("Income");
    const[formData , setFormData] = useState(initial);

    const [text ,setText] = useState("Add")

    const handleSubmit=()=>{
        if(!formData.type){
            setText("Please fill the fields properly");
            return;
        }

        if(type=="Income"){
            for(let i of incategory){
                if(i.type==formData.type){
                    setText("Category Already Exists");
                    return;
                }
            }
        }
        else{
            for(let  i of excategory){
                if(i.type==formData.type){
                    setText("Category Already Exists");
                    return;
                }
            }
        }

        

        formData.color = hex();
        while(formData.color=="#ffffff"){
            formData.color = hex();
        }

        if(type=="Income"){
            addInCategory(formData);
        }
        else{
            addExCategory(formData);
        }

        
        setFormData(initial);
        handleClose();

    }

    return(
        <Grid container spacing={2} mt="20px">

            <Grid item xs={6}>
                <FormControl fullWidth variant="filled" >
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={(e)=>{
                    setText("Add");
                    setType(e.target.value);

                    } }>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth variant="filled">
                    <TextField type="text" label="Category"  fullWidth value={formData.type} onChange={(e)=>{
                    setText("Add");
                    setFormData({...formData,type:e.target.value})
                    
                    }} />
                </FormControl>
            </Grid>
            
            <Grid item  xs={11}> <Button  style={{marginTop:"20px" , marginBottom:"15px" ,marginLeft:"20px" }} fullWidth variant="contained" color={text=="Add"?"primary":"error"} onClick={()=>{handleSubmit()}}>
                {text}
            </Button></Grid>
            

        </Grid>
    )
}