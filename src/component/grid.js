import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedEditBtn } from './button'
//editCard
import ModalPopup from './modalPopup';

class Grid extends Component {
    constructor(props) {
        super(props)
    }
    // state = {
    //     isEditGrid: false,
    //     goingToEditData: []
    // }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ...this.state,
            // id: this.props.data.id,
            // image: this.props.data.image,
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log('this.props.data', this.props.data);
        return (
            <>
                <div className = 'main_grid' >
                    <p className='para_id'>ID: {this.props.data.id}</p>
                    <p className='para_name'>Name: <span className='span'>{this.props.data.name}</span></p>
                    <p className='para_head'>Email : <span className='span'>{this.props.data.email}</span></p>
                    <p className='para_head'>Gender: <span className='span'>{this.props.data.Gender}</span></p>
                    <p className={this.props.data.status == 'active' ? 'active' : 'inactive'}>{this.props.data.status}</p>
                    <ConnectedEditBtn data={this.props.data}/>
                </div> 

                
            </>
        );
    }
}


export default Grid;