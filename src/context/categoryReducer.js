
const categoryReducer = (state ,action)=>{
    let category;

    switch (action.type){

        case 'DELETE_INCATEGORY':
            category = state.filter((c)=>c.type!=action.payload);
            localStorage.setItem("incategory" , JSON.stringify(category));
            return category;

        case 'ADD_INCATEGORY':
            category= [action.payload , ...state];
            localStorage.setItem("incategory" , JSON.stringify(category));
            return category;
            
        case 'ADD_EXCATEGORY':
            category= [action.payload , ...state];
            localStorage.setItem("excategory" , JSON.stringify(category));
            return category;

        case 'DELETE_EXCATEGORY':
            category = state.filter((c)=>c.type!=action.payload);
            localStorage.setItem("excategory" , JSON.stringify(category));
            return category;

        default:
            return state;
    }
}

export default categoryReducer; 