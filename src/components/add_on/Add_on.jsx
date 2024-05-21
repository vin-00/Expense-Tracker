
import { Button } from "@mui/material"

import Category_Form from "./addCategory"

import CategoryList from './categoryList';

import {useState} from "react"
import PropTypes from 'prop-types';

import ButtonGroup from '@mui/material/ButtonGroup';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';



function SimpleDialog(props) {

    const { onClose, open } = props;

    const [choice , setChoice] = useState("add");
    const [ ch , setCh] = useState("in");

    

    const buttons = [
        <Button key="add" onClick={()=>setChoice("add")}>Add a category</Button>,
        <Button key="del" onClick={()=>setChoice("del")}>Delete Category</Button>
    ];

    const opt = [
        <Button key="in" onClick={()=>setCh("in")} >Income</Button>,
        <Button key="ex" onClick={()=>setCh("ex")}>Expense</Button>
    ]

    

    const handleClose = () => {
        onClose();
    };

    return (


        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Category Section</DialogTitle>

            <ButtonGroup size="large" aria-label="Large button group" sx={{mt: '20px' , diplay : 'flex' , justifyContent:'center'}}>
                {buttons}
            </ButtonGroup>

            {
            choice=="add" 
            ?
                <Category_Form handleClose={handleClose}/>
            :
                <>
                    <ButtonGroup align="center" variant="text" size="large" aria-label="Large button group" sx={{mt: '20px' , diplay : 'flex' , justifyContent:'center'}} color="secondary">
                        {opt}
                    </ButtonGroup> 
                    
                    <CategoryList type={ch=='in'?"Income":"Expense"} />
                </>}

        </Dialog>
    );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default function Add_on() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Category Menu
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
