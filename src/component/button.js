import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePopup, editUser, saveDetails, addUser } from '../Action/action';


export class Close extends Component {
    state = {  } 
    render() { 
        return (<button className='close' onClick={()=>{this.props.close(this.props.data)}}>&times;</button>);
    }
}

export class SaveBtn extends Component {
    state = {  } 
    render() { 
        return (<button className='saveBtn' onClick={this.props.saveDetails.bind(this, this.props.data)}>Save</button>);
    }
}

export class AddBtn extends Component {
    state = {  } 
    render() { 
        return (<button className='saveBtn' onClick={this.props.addUser.bind(this, this.props.data)}>Add User</button>);
    }
}

export class Search extends Component {
    state = {  } 
    render() { 
        return (
            <button className='search_button' onClick={() => {this.props.searchUser()}}>search</button>
        );
    }
}

class EditBtn extends Component {
    state = {  } 
    render() { 
        return (
            <button className='edit_btn' onClick={this.props.editUser.bind(this, this.props.data)}>edit</button>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (data) => dispatch(editUser(data)),
        saveDetails: (data) => dispatch(saveDetails(data)),
        closePopup: () => dispatch(closePopup()),
        addUser: (data) => dispatch(addUser(data))
    }
} 

export const ConnectedEditBtn = connect(null, mapDispatchToProps)(EditBtn)
export const ConnectedSaveBtn = connect(null, mapDispatchToProps)(SaveBtn)
export const ConnectedAddBtn = connect(null, mapDispatchToProps)(AddBtn)
 
