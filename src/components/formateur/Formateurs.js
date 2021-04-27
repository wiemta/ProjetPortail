import React, { Component } from 'react'

export default class Formateurs extends Component {
    render() {
        return (
            <div>

                <div className="content-wrapper">
                    {/* USERS LIST */}
                    <div className="box box-danger">
                        <div className="box-header with-border">
                            <h3 className="box-title">Liste Formateurs</h3>
                            <div className="box-tools pull-right">
                                <span className="label label-danger">  </span>
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                </button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" />
                                </button>
                            </div>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body no-padding">
                            <ul className="users-list clearfix">
                                <li>
                                    <img src="dist/img/wiem.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Taamali wiem </a>
                                    <span className="users-list-date">Today</span>
                                </li>
                                <li>
                                    <img src="dist/img/mariem.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Mariem</a>
                                    <span className="users-list-date">Yesterday</span>
                                </li>
                                <li>
                                    <img src="dist/img/rania.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Rania</a>
                                    <span className="users-list-date">12 Jan</span>
                                </li>
                                <li>
                                    <img src="dist/img/firel.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Fereil</a>
                                    <span className="users-list-date">12 Jan</span>
                                </li>

                                <li>
                                    <img src="dist/img/user5-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Sarah</a>
                                    <span className="users-list-date">14 Jan</span>
                                </li>
                                <li>
                                    <img src="dist/img/user4-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Nora</a>
                                    <span className="users-list-date">15 Jan</span>
                                </li>
                                <li>
                                    <img src="dist/img/user3-128x128.jpg" alt="User Image" />
                                    <a className="users-list-name" href="#">Nadia</a>
                                    <span className="users-list-date">15 Jan</span>
                                </li>
                            </ul>
                            {/* /.users-list */}
                        </div>
                        {/* /.box-body */}
                        <div className="box-footer text-center">
                            <a href="javascript:void(0)" className="uppercase">View All Users</a>
                        </div>
                        {/* /.box-footer */}
                    </div>
                    {/*/.box */}
                </div>
            </div>



        )
    }
}