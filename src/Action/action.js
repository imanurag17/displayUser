//import { createAction } from "@reduxjs/toolkit";
import * as action from './types'
import { createAction } from "@reduxjs/toolkit";

// export const nextButton = createAction("nextButton")
// export const prevButton = createAction("prevButton")
// console.log('hi',nextButton({id: 1}));


export const next = description => ({
    type: action.NEXT_BUTTON,
    payload: {
        //should contain minimum info about action
    }
})

export const prev = description => ({
    type: action.PREV_BUTTON,
    payload: {}
})

export const userData = data => ({
    type: action.USER_DATA,
    payload: data
})

export const search = id => ({
    type: action.SEARCH_USER,
    payload: id,
})

export const editUser = data => ({
    type: action.EDIT_USER,
    payload: data
    
})
export const saveDetails = data => ({
    type: action.SAVE_DETAILS,
    payload: data
    
})

export const closePopup = data => ({
    type: action.CLOSE_POPUP,    
})

export const add = data => ({
    type: action.ADD,   
})

export const addUser = data => ({
    type: action.ADD_USER,
    payload: data   
})

export const viewMode = data => ({
    type: action.VIEW_MODE,  
})

export const pageNumber = page => ({
    type: action.PAGE_NUMBER,
    payload: page  
})

export const handlePage = data => ({
    type: action.HANDLE_PAGE,
 
})

export const changeLimit = data => ({
    type: action.CHANGE_LIMIT,
    payload: data
 
})

export const viewModalPopup = data => ({
    type: action.VIEW_MODALPOPUP,
    payload: data
 
})

 
console.log(userData());
