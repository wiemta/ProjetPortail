import React, { Component } from 'react'
import {
    BrowserRouter as Router,
   
    Link
} from "react-router-dom";
export default class Menu extends Component {
    render() {

        return (
            <div >
                <div>
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        {/* Brand Logo */}
                        <a href="/" className="brand-link">
                            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">EDUCINFO</span>
                        </a>
                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">NOM USER</a>
                                </div>
                            </div>

                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link to="/"> Home</Link>
                                        </a>
                                    </li>




                                    <li className="nav-item">
                                        <a href="pages/widgets.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>
                                                <Link to="/form2"> Liste Formateurs</Link>

                                            </p>

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link to="/candidat">  Liste Candidats</Link>
                                        </a>
                                    </li>



                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link to="/form1">     Liste Formation</Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <Link to="/calendrier">     Calendrier</Link>
                                        </a>
                                    </li>





                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}
                    </aside>
                </div>

            </div>

        )
    }
}