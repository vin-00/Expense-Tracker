
import {List as MUIList , ListItem , ListItemAvatar , ListItemText , Avatar , ListItemSecondaryAction , IconButton , Slide }  from "@mui/material";
import {Delete , MoneyOff} from "@mui/icons-material"
import "./listStyle.css"

import {useContext} from 'react';
import { ExpenseTrackerContext } from "../../../context/context";

export default function List(){

    const { deleteTransaction ,transactions} = useContext(ExpenseTrackerContext);
    return (
        <MUIList dense={false} className="list">
            {transactions.map((transaction)=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: `${transaction.type == "Income" ? "green" : "red"}`}}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
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