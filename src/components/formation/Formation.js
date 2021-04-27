import React, { Component } from 'react'

export default class Formation extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">Liste des Formation</h3>
                        <div className="box-tools pull-right">
                            <br>
                            </br>
                           </div>
                    </div>
                </div>
                <div className="box-body">
                    <ul className="products-list product-list-in-box">
                        <li className="item">
                            <div className="product-img">
                                <img src="dist/img/android.jpg" alt="Product Image" />
                            </div>
                            <div className="product-info">
                                <a href="javascript:void(0)" className="product-title">Android
          <span className="label label-warning pull-right">$1800</span></a>
                                <span className="product-description">
                                    Samsung 32" 1080p 60Hz LED Smart HDTV.
        </span>
                            </div>
                        </li>
                        {/* /.item */}
                        <li className="item">
                            <div className="product-img">
                                <img src="dist/img/laravel.png" alt="Product Image" />
                            </div>
                            <div className="product-info">
                                <a href="javascript:void(0)" className="product-title">laravel
          <span className="label label-info pull-right">$700</span></a>
                                <span className="product-description">
                                    26" Mongoose Dolomite Men's 7-speed, Navy Blue.
        </span>
                            </div>
                        </li>
                        {/* /.item */}
                        <li className="item">
                            <div className="product-img">
                                <img src="dist/img/angular.png" alt="Product Image" />
                            </div>
                            <div className="product-info">
                                <a href="javascript:void(0)" className="product-title">Angular js <span className="label label-danger pull-right">$350</span></a>
                                <span className="product-description">
                                    Xbox One Console Bundle with Halo Master Chief Collection.
        </span>
                            </div>
                        </li>
                        {/* /.item */}
                        <li className="item">
                            <div className="product-img">
                                <img src="dist/img/react.png" alt="Product Image" />
                            </div>
                            <div className="product-info">
                                <a href="javascript:void(0)" className="product-title">React js
          <span className="label label-success pull-right">$399</span></a>
                                <span className="product-description">
                                    PlayStation 4 500GB Console (PS4)
        </span>
                            </div>
                        </li>
                        {/* /.item */}
                    </ul>
                </div>
                <div className="box-footer text-center">
                    <a href="javascript:void(0)" className="uppercase">View All Products</a>
                </div>


            </div>



        )
    }
}