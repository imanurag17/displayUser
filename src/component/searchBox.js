import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Search} from './button'
import {Close} from './button'
import {search} from '../Action/action'

class SearchBox extends Component {
    constructor(props){
        super(props)
    }
    state = { 
        id: '',
        isAvailable: false,
        isSearch: false
    } 
    handleInput = (e)=>{
        let id = e.target.value;
        if(id !== ''){
            this.setState({id})
        }
    }
    searchUserWithId = ()=>{
        //this.props.data.updateState(this.state.id, this.state.isAvailable, this.state.isSearch) 
        let listOfId = []
        this.props.data.map((data)=>{
            return listOfId.push(data.id)
         })
        if(listOfId.find(id => id == this.state.id)){
            this.props.searchUser(this.state.id)
            this.setState({...this.state, isSearch: true})
        }
        // else{
        //     this.setState({...this.state, isAvailable: false})
        //     }
        
        }
        render() { 
        return (
            <>
            <div className='top_nav'>
                {this.state.isSearch ? 
                <span className='currentUserId'>viewing ID: {this.props.currentUserId} 
                <Close/>
                </span>
                
                : null
                }
                <div className='search_container'>
                    <form action="#" >
                        <input type="text" placeholder='Search...' onChange={this.handleInput} />
                        <Search searchUser={this.searchUserWithId}/>
                        {/* <Search /> */}
                    </form>
                </div>
            </div>
            </>
        );
    }
}
 
const mapStateToProps = state => {
    return{
        data: state.user_data,
        currentUserId: state.currentUserId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchUser: (id) => dispatch(search(id))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)

//export default SearchBox;