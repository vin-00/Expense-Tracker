
import {List as MUIList , ListItem , ListItemAvatar , ListItemText , Avatar , ListItemSecondaryAction , IconButton , Slide }  from "@mui/material";
import {Delete } from "@mui/icons-material"

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./listStyle.css"

import {useContext} from 'react';
import { ExpenseTrackerContext } from "../../../context/context";

export default function List(){

    const { deleteTransaction ,transactions} = useContext(ExpenseTrackerContext);
    return (
        <MUIList dense={false} className="list">
            {transactions.map((transaction)=>(
                <Slide key={transaction.id} direction="down" in mountOnEnter unmountOnExit >
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: `${transaction.type == "Income" ? "green" : "red"}`}}>
                                <CurrencyRupeeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}