import { nextButton, prevButton } from '../Action/action';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../Action/types';

const initialState = {
    user_data: [],
    currentPage: 1,
    UserPerPage: 8,
    isAvailable: false,
    currentUserId: '',
    isEditMode: false,
    goingToEditdata: [],
    isAddUser: false,
    isDefault: true,
    pageNumber: '',
    isViewMode: false,
    viewModeData: []
}


export function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.NEXT_BUTTON:
            //case nextButton.type:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }

        case actions.PREV_BUTTON:
            //case prevButton.type:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }

        case actions.USER_DATA:
            return {
                ...state,
                user_data: action.payload
            }

        case actions.SEARCH_USER:
            return {
                ...state,
                isAvailable: state.isAvailable = true,
                currentUserId: action.payload

            }

        case actions.EDIT_USER:
            return {
                ...state,
                isEditMode: state.isEditMode = true,
                goingToEditdata: action.payload


            }

        case actions.SAVE_DETAILS:
            const data = [...state.user_data]
            const index = data.findIndex((x => x.id == action.payload.id))
            data[index] = action.payload
            //const newData = data.splice(index, 1, action.payload);
            return {
                ...state,
                isEditMode: state.isEditMode = false,
                user_data: data

            }

        case actions.CLOSE_POPUP:
            return {
                ...state,
                isEditMode: state.isEditMode = false,
                goingToEditdata: []

            }

        case actions.ADD:
            return {
                ...state,
                isAddUser: state.isAddUser = true,

            }

        case actions.ADD_USER:
            const newUser_data = [...state.user_data]
            newUser_data.push(action.payload)
            return {
                ...state,
                user_data: newUser_data,
                isAddUser: state.isAddUser = false

            }

        case actions.VIEW_MODE:
            return {
                ...state,
                isDefault: !state.isDefault
            }

        case actions.PAGE_NUMBER:
            return {
                ...state,
                pageNumber: state.pageNumber = action.payload
            }

        case actions.HANDLE_PAGE:
            return {
                ...state,
                currentPage: state.pageNumber
            }

        case actions.CHANGE_LIMIT:
            return {
                ...state,
                UserPerPage: action.payload == 50 ? 50 : 8
            }

        case actions.VIEW_MODALPOPUP:
            return {
                ...state,
                isViewMode: !state.isViewMode,
                viewModeData: action.payload
            }
        default:
            return state;
    }
}

// export default createReducer(initialState, {
//     //key: value
//     //action: function
//     [nextButton.type]: (state, action) => {
//         state = state.currentPage + 1
//     },
//     [prevButton.type]: (state, action) => {
//         state = state.currentPage + 1
//     }
// })