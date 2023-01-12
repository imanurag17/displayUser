import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedSaveBtn, } from './button'
//import { SaveBtn } from './button'
import { closePopup } from '../Action/action';

class ModalPopup extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        id: this.props.data.id,
        name: '',
        Gender: '',
        email: '',
        status: '',
        status_class: '',
        image: this.props.data.image,
    }
    componentDidMount() {
        const { id, name, email, Gender, status, status_class } = this.props.data
        this.setState({ id, name, email, Gender, status, status_class })
    }

    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            ...this.state,
            // id: this.props.data.id,
            // image: this.props.data.image,
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        console.log(this.state);
        return (
            <>
                <div className='modal_container'>
                    <div className='modal'>
                        <div>
                            <button className='close_popup' onClick={this.props.closePopup}>&times;</button>
                        </div>
                        <div className='name'>
                            <label htmlFor="" className='label'>Name: 
                            <input type="text" name='name' className='input_name' defaultValue={this.state.name} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Email: 
                            <input type="text" name='email' className='input_email' defaultValue={this.state.email} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className='gender'>
                            <label htmlFor="" className='label'>Gender: 
                            <select name='Gender' className='input_gender' value={this.state.Gender} onChange={this.handleChange}>
                                <option value='male'>male</option>
                                <option value='female'>female</option>
                            </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Status: 
                            <select name='status' className='input_status' value={this.state.status} onChange={this.handleChange}>
                                <option value='active'>active</option>
                                <option value='inactive'>inactive</option>
                            </select>
                            </label>
                        </div>
                        {/* <SaveBtn saveDetails={() => { this.saveDetails() }} /> */}
                        <ConnectedSaveBtn  data={this.state} />
                        
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.goingToEditdata,
        user_data: state.user_data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
         closePopup: () => dispatch(closePopup())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);