import React from 'react';

// App Components
import NavBar from '../components/NavBar'
import HotelCards from '../components/HotelCards'
// State components
import { connect } from 'react-redux';
import { set_data, google_login } from '../store/actions';

function Home(props) {
    const user = {
                name: "ameer ali",
                email: "ameer@gmail.com"
    }

    console.log('first Rander ==>>',props.cuser)
    return (
        <div id="home_section">
        <NavBar user={props.cuser} />
        <div className="text-center mt-5 ">
        <h1 > Home component </h1>   
       {/* <div className="row">
           <div className="col-sm-6 col-md-4 my-3  ">
            <HotelCards />
           </div>
           <div className="col-sm-6 col-md-4 my-3  ">
            <HotelCards />
           </div>
           <div className="col-sm-6 col-md-4 my-3  ">
            <HotelCards />
           </div>
            <div className="col-sm-6 col-md-4 my-3  ">
            <HotelCards />
           </div> <div className="col-sm-6 col-md-4 my-3  ">
            <HotelCards />
           </div> <div className="col-sm-6 col-md-4 my-3  ">
            <HotelCards />
           </div>
       </div> */}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users,
    cuser: state.current_user
})

// const mapDispatchToProps = (dispatch) => ({
//         set_data: (data) => dispatch(set_data(data)),
//         google_login: () => dispatch(google_login())
       
// })

export default connect(mapStateToProps, null) (Home);