import React, { Component } from 'react';
import {ConnectedAddBtn} from './button';

class AddUser extends Component {
    state = { 
        id: '',
        name: '',
        Gender: 'male',
        email: '',
        status: 'active'
     } 
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() { 
        return (
            <>
                <div className='modal_container'>
                    <div className='modal'>
                        <div>
                            <button className='close_popup' onClick={() => { this.props.closeAddUser() }}>&times;</button>
                        </div>
                        <div>
                            <label htmlFor="">ID: 
                            <input type="text" name='id' id="" defaultValue='' onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Name: 
                            <input type="text" name='name' id="" defaultValue='' onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Email: 
                            <input type="text" name='email' id="" defaultValue='' onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Gender: 
                            <select name='Gender' id="" onChange={this.handleChange}>
                                <option value='male' selected>Male</option>
                                <option value='female'>female</option>
                            </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Status: 
                            <select name='status' id="" onChange={this.handleChange}>
                                <option value='active' selected>active</option>
                                <option value='inactive'>inactive</option>
                            </select>
                            </label>
                        </div>
                        <ConnectedAddBtn data={this.state} />
                        
                    </div>
                </div>
            </>
        );
    }
}
 
export default AddUser;