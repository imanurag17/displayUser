import logo from './logo.svg';
import './Sass/main.css'
import { Component } from 'react';
import { users } from './mock';
import { ConnectedEditBtn } from './component/button';
import Pagination from './component/pagination';
import SearchBox from './component/searchBox';
import ModalPopup from './component/modalPopup';
import ViewModal from './component/viewModal';
import AddUser from './component/addUser';
import Grid from './component/grid';


class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {}
  componentDidMount() {
    const data = users.map((data) => { return data })
    this.props.userData(data)
  }
  displayLimit = (e)=>{
    this.props.changeLimit(e.target.value)
  }
  render() {
    const indexOfLastUser = this.props.currentPage * this.props.UserPerPage
    const indexOfFirstUser = indexOfLastUser - this.props.UserPerPage
    const currentUsers = this.props.data.slice(indexOfFirstUser, indexOfLastUser)
    console.log('currentUsers', currentUsers);
    console.log('this.props.data =>', this.props.data);

    let filterWith = ''
    if (this.props.available == true) {
      filterWith = this.props.data
    } else {
      filterWith = currentUsers
    }
    return (
      <>
        <SearchBox />
        <div className='select_view'>
          <button className='add_user' onClick={this.props.add}>Add User</button>
          <label className='view_mode' htmlFor="">View Mode
            <select name="" id="" onChange={this.props.viewMode}>
              <option value="Card View">Card View</option>
              <option value="Grid View">Grid View</option>
            </select>
          </label>
        </div>
        {this.props.isViewMode ? <ViewModal/> : null}
        {this.props.isEditMode ? <ModalPopup /> : null}
        {this.props.isAddUser ? <AddUser /> : null}
        {
          filterWith.filter((val) => {
            if (this.props.currentUserId === '') {
              return currentUsers
            } else if (val.id == this.props.currentUserId) {
              return val
            }
          }).map((data) => {
            return (
              <>
                {this.props.isDefault ?
                  <>
                    <div className='card' >
                      <div className='main_card' >
                        <div className='image_section'>
                          <img className='image' src={data.image} />
                          <div className={data.status == 'active' ? 'active' : 'inactive'}>{data.status}</div>
                        </div>
                        <div className='details_section'>
                          <div onClick={this.props.viewModalPopup.bind(this, data)}>
                            <p className='para_head'>ID: {data.id}</p>
                            <p className='para_head'>Name:</p>
                            <p className='para'>{data.name}</p>
                            <p className='para_head'>Email</p>
                            <p className='para'>{data.email}</p>
                            <p className='para_head'>Gender: <span className='span'>{data.Gender}</span></p>
                          </div>
                          <ConnectedEditBtn data={data} />
                        </div>
                      </div>
                    </div>
                  </>
                  : <Grid data={data} />
                }

              </>
            )
          })
        }
        {this.props.UserPerPage == 50 ? null : <Pagination />}
        {!this.state.isDefault ?
          <>
            <lable htmlFor='' className="display_limit">Record Per Page
              <select onChange={this.displayLimit}>
                <option value="8" >Default</option>
                <option value="50">50</option>
              </select>
            </lable>
            <div></div>
          </>
          : null}
      </>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

//export default App;
