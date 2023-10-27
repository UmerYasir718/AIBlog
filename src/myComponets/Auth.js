import React from 'react'
import Form from './Form';
import { Link } from "react-router-dom";
export default function Auth() {
    return (
        <div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </Link>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                                    <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="/menu">
                                        <li class="w-100">
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></Link>
                                </li>
                                <li>
                                    <Link to="/submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></Link>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="/menu">
                                        <li class="w-100">
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </Link>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="/menu">
                                        <li class="w-100">
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </Link>
                                </li>
                            </ul>
                            <hr />
                            <div class="dropdown pb-4">
                                <Link to="/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                                    <span class="d-none d-sm-inline mx-1">loser</span>
                                </Link>
                                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><Link class="dropdown-item" to="/">New project...</Link></li>
                                    <li><Link class="dropdown-item" to="/">Settings</Link></li>
                                    <li><Link class="dropdown-item" to="/">Profile</Link></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><Link class="dropdown-item" to="/">Sign out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
