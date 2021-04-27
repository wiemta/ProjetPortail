import React, { Component } from 'react'
import {


  Link
} from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <div >
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <div>

            <div className="container d-flex align-items-center">
              <h1 className="logo me-auto"><a href="/">EDUCINFO</a></h1>

            </div>

          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">

              <div className="info">
                <a href="#" className="d-block">BÃ©jaoui Mariem </a>
              </div>
            </div>

            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}


                <li className="nav-item">

                  <i className="nav-icon fas fa-th" />
                  <p>
                    <Link to="/liste">Liste de formations </Link>
                    <span className="right badge badge-danger">New</span>
                  </p>

                </li>




                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-calendar-alt" />
                    <p>
                      Calendier
                    <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/profil" className="nav-link">
                    <i className="nav-icon fas fa-calendar-alt" />
                    <p>
                      Profil
                    <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>

      </div>
    )
  }
}