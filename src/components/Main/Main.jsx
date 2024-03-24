import {Card, CardHeader , CardContent ,Typography , Grid , Divider} from "@mui/material"

import Form from "./Form/Form"
import List from "./List/List"

import "./style.css"

export default function Main(){
    return (
        <Card >
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography variant="subtitle1" style={{lineHeight:"1.5em",marginTop:'20px'}}>
                    {/* {InfoCard} */}
                    Try saying : Add income for $100 in category salary for monday..
                </Typography>
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