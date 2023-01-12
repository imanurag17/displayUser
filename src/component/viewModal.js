import React, { Component } from 'react';
import { ConnectedEditBtn } from './button';
import { connect } from 'react-redux';
import { viewModalPopup } from '../Action/action';

class ViewModal extends Component {
    state = {  } 
    render() { 
        console.log('hi',this.props.viewData);
        return (
            <>
            <div className='modal-container'> 
                <div className='modals'>
                    <ConnectedEditBtn data={this.props.viewModeData}/>
                    <div className='modal_details'>
                    <h2 className='user_details'>User Details</h2>
                    <h2>ID:{this.props.viewModeData.id}</h2>
                    <h3>{this.props.viewModeData.name}</h3>
                    <p>Email: <span>{this.props.viewModeData.email}</span></p>
                    <p>Gender: <span>{this.props.viewModeData.Gender}</span></p>
                    <p>Status: <span>{this.props.viewModeData.status}</span></p>
                    </div>
                <button className='close_viewModal' onClick={this.props.viewModalPopup}>Close</button>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        viewModeData: state.viewModeData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        viewModalPopup: ()=>dispatch(viewModalPopup())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);