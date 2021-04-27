import React, { Component } from 'react'
import Header from './Header' ;
import Footer from './Footer' ;
import Menu from './Menu' ;
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                
        <Header/>
        <Menu/>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard Admin</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard Admin</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <div className="content">
                        <div className="container-fluid">
                            {/* */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-users" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Formateur</span>
                                            <span className="info-box-number">
                                                10
          <small>%</small>
                                            </span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
                                        <div className="info-box-content">
                                            <span className="info--text">Formation</span>
                                            <span className="info-box-number">41,410</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                {/* fix for small devices only */}
                                <div className="clearfix hidden-md-up" />
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Formations</span>
                                            <span className="info-box-number">760</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Candidats</span>
                                            <span className="info-box-number">2,000</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}


                            {/**/}
                            <div className="row">


                                {/**/}
                                <div className="col-lg-6">
                                    <div className="card">


                                        <div className="card-body table-responsive p-0">
                                            <table className="table table-striped table-valign-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Formation</th>
                                                        <th>Prix</th>
                                                        <th>Sales</th>
                                                        <th>More</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="dist/img/react.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                       React
                      </td>
                                                        <td>$13 USD</td>
                                                        <td>
                                                            <small className="text-success mr-1">
                                                                <i className="fas fa-arrow-up" />
                          12%
                        </small>
                        12,000 Sold
                      </td>
                                                        <td>
                                                            <a href="#" className="text-muted">
                                                                <i className="fas fa-search" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="dist/img/angular.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                        Angular
                      </td>
                                                        <td>$29 USD</td>
                                                        <td>
                                                            <small className="text-warning mr-1">
                                                                <i className="fas fa-arrow-down" />
                          0.5%
                        </small>
                        123,234 Sold
                      </td>
                                                        <td>
                                                            <a href="#" className="text-muted">
                                                                <i className="fas fa-search" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="dist/img/laravel.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                      Laravel
                      </td>
                                                        <td>$1,230 USD</td>
                                                        <td>
                                                            <small className="text-danger mr-1">
                                                                <i className="fas fa-arrow-down" />
                          3%
                        </small>
                        198 Sold
                      </td>
                                                        <td>
                                                            <a href="#" className="text-muted">
                                                                <i className="fas fa-search" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="dist/img/android.jpg" alt="Product 1" className="img-circle img-size-32 mr-2" />
                      Android
                        <span className="badge bg-danger">NEW</span>
                                                        </td>
                                                        <td>$199 USD</td>
                                                        <td>
                                                            <small className="text-success mr-1">
                                                                <i className="fas fa-arrow-up" />
                          63%
                        </small>
                        87 Sold
                      </td>
                                                        <td>
                                                            <a href="#" className="text-muted">
                                                                <i className="fas fa-search" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* /.card */}
                                </div>

                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* /.content */}
                </div>
                <Footer/>
            </div>

        )
    }
}