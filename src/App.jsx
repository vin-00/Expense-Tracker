import { useState } from 'react'
import Details from "./components/Details/Details"
import {Grid} from "@mui/material"
import Main from "./components/Main/Main"

import "./App.css"

function App() {

  return (
    <>
    <Grid container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
      <Grid item xs={12} sm={4} className="grid">
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={4} className="grid">
        <Main />
      </Grid>
      <Grid item xs={12} sm={4} className="grid">
        <Details title="Expense"/>
      </Grid>
    </Grid>
    </>
  )
}

export default App
