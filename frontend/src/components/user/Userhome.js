import React from 'react'
import './userstyle.css'
import ngos from './ngoscard'
import { Link, useNavigate } from "react-router-dom";
import { selectName } from '../../redux/features/auth/authSlice';
import store from '../../redux/store';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../services/authService';
import GetUserNGO from '../NGO/GetUserNGO'


function Userhome() {

    const navigate = useNavigate();

    const logout = async () => {
        await logoutUser("logout");
        navigate('/');
    }


    const result = store.getState();
    console.log(result.auth.name)
    console.log(store.getState())
    return (
        <div class='body'>

            <div class="row profile">

                {/* sidebar */}
                <div class="col-md-3">
                <div class="col-md-3" style={{position:'fixed'}}>
                    <div class="profile-sidebar">
                        <div class="profile-userpic">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" class="img-responsive" alt="" />
                        </div>
                        <div class="profile-usertitle">
                            <div class="profile-usertitle-name">
                                {result.auth.name}

                            </div>
                            <div class="profile-usertitle-job">
                                Developer
                            </div>
                        </div>
                        {/* <div class="profile-userbuttons">
                            <button type="button" class="btn btn-success btn-sm">Donation</button>
                            <button type="button" class="btn btn-danger btn-sm">Message</button>
                        </div> */}



                        <div class="portlet light bordered">

                            <div class="row list-separated profile-stat">
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <div class="uppercase profile-stat-title"> 37 k </div>
                                    <div class="uppercase profile-stat-text"> Donation </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-6">
                                    <div class="uppercase profile-stat-title"> 12 </div>
                                    <div class="uppercase profile-stat-text"> Campaigns </div>
                                </div>

                            </div>

                            <div>
                                <h4 class="profile-desc-title">About Me</h4>
                                <span class="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                <div class="margin-top-20 profile-desc-link">
                                    <i class="fa fa-globe"></i>
                                    <a href="https://www.apollowebstudio.com" className='link'>{result.auth.user.email}</a>
                                </div>
                                <div class="margin-top-20 profile-desc-link">
                                    <i class="fa fa-twitter"></i>
                                    <a href="https://www.twitter.com/jasondavisfl/" className='link'>@jasondavisfl</a>
                                </div>
                    
                            </div>

                            <div class="profile-userbuttons">
                                <button type="button" class="btn btn-danger thm-btn" onClick={logout} >Log out</button>
                            </div>

                        </div>

                    </div>
                </div>
                </div>



                <div class="col-md-9">
                    <div class="profile-content">
                        <GetUserNGO />

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Userhome
