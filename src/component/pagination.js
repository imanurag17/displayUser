import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next, prev, pageNumber, handlePage } from '../Action/action';

class Pagination extends Component {
    constructor(props){
        super(props)
    }
    handleChange = (e)=>{
        this.props.pageNumber(e.target.value)
    }
    render() {
        return (
            <div className='pgn_div'>
            <div className="pagination">
                <a href="#" onClick={this.props.prevButton}>❮</a>
                <a href="#" onClick={this.props.nextButton}>❯</a>
            </div>
            <p>Total User: {this.props.data.length}</p>
            <div className='goto_section'>
            <button onClick={this.props.handlePage}>GoTo Page</button>
            <label htmlFor="">
                <input type="text" onChange={this.handleChange}/> /{Math.ceil(this.props.data.length/this.props.UserPerPage)}
            </label>
            </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.user_data,
        UserPerPage: state.UserPerPage
    } 
} 
const mapDispatchToProps = (dispatch) => {
    return {
        nextButton: () => dispatch(next()),
        prevButton: () => dispatch(prev()),
        pageNumber: (page) => dispatch(pageNumber(page)),
        handlePage: () => dispatch(handlePage())
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

//export default Pagination;
