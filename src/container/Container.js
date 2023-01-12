import { connect } from 'react-redux'
import App from '../App';
import { next, prev, userData, add, viewMode, changeLimit, viewModalPopup } from '../Action/action';

const mapStateToProps = state => {
    return {
        data: state.user_data,
        currentPage: state.currentPage,
        UserPerPage: state.UserPerPage,
        available: state.isAvailable,
        currentUserId: state.currentUserId,
        isEditMode: state.isEditMode,
        isAddUser: state.isAddUser,
        isDefault: state.isDefault,
        isViewMode: state.isViewMode,
        viewModeData: state.viewModeData
    } 
} 
const mapDispatchToProps = (dispatch) => {
    return {
        userData: (data) => dispatch(userData(data)),
        nextButton: () => dispatch(next()),
        prevButton: () => dispatch(prev()),
        add: () => dispatch(add()),
        viewMode: () => dispatch(viewMode()),
        changeLimit: (data) => dispatch(changeLimit(data)),
        viewModalPopup: (data) => dispatch(viewModalPopup(data))
        
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(App)
//export const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
