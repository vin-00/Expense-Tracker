
import React from 'react';


import {v4 as uuidv4} from 'uuid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import {useContext} from "react";
import { ExpenseTrackerContext } from '../../context/context';

import formatDate from '../../utils/formatDate';

export default function CategoryList({type}){

    const {incategory , excategory , delInCategory , addTransaction , deleteTransaction , transactions ,delExCategory} = useContext(ExpenseTrackerContext);

    let category = type=="Income" ? incategory : excategory;

    category = category.filter((cat)=>cat.type!="Other")

    const handleInDelete =(cat)=>{
        let amount = 0;
        let color ;
        let date = formatDate(new Date());


        for(let t of transactions){
            if(t.type==type && t.category==cat){
                amount+=t.amount;
                deleteTransaction(t.id);
            }

            if(t.type==type && t.category=="Other"){
                color = t.color;
                amount+=t.amount;
                deleteTransaction(t.id);
            }
        }

        if(amount!=0){
            addTransaction({amount , color , category : 'Other' , type , id :uuidv4() ,date})
        }

        
        if(type=="Income"){
            delInCategory(cat);
        }
        else{
            delExCategory(cat);
        }

    }

    return (

        <Grid item xs={12}>
            <Typography sx={{ ml: 4, mb: 1 }} variant="h6" component="div">
                {type}
            </Typography>
            <List >
                {category.map((cat)=>
                    
                        <ListItem key={cat.type}
                        secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={()=>handleInDelete(cat.type)}>
                            <DeleteIcon color="error" />
                        </IconButton>
                        }
                    >
                    <ListItemText
                        primary={cat.type}
                        />
                    </ListItem>
                    )

                }
            </List>
        </Grid>
    )
}
