import {Card, CardHeader , CardContent,Box ,Typography , Grid , Divider} from "@mui/material"

import Form from "./Form/Form"
import List from "./List/List"

import { useContext } from "react"

import Add_on from "../add_on/Add_on";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { ExpenseTrackerContext } from "../../context/context"
import "./style.css"


export default function Main(){

    const {balance} = useContext(ExpenseTrackerContext)

    return (
        <Card >
            <CardHeader align="center" title="Money Tracker" subheader="Your Path to Financial Clarity" sx={{padding:'10px 0 0 0'}} />
            
            <CardContent>
            <Typography align="center" variant="h5" mb="10px" >Total Balance ₹{balance} {balance!=0 ? balance>0 ? <ArrowUpwardIcon color="primary" fontSize="large" /> : <ArrowDownwardIcon color="error" fontSize="large" /> : <></>} </Typography>
            
            <div className="feature"><Add_on sx={{}}></Add_on></div>
                <Divider className="divider" />
                <Form />
            </CardContent>
            <CardContent className="cartContent">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}