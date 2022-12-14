import React from 'react';
import {Link} from "react-router-dom";

const Books = () => {
    return (
        <div className="books">
            <div className="container d-flex justify-content-between mt-5">
                <div className="w-50">
                    <div className="input-group  ">
                        <input type="text" className="form-control" placeholder="izlash"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                      width="16" height="16"
                                                                                      fill="currentColor"
                                                                                      className="bi bi-search"
                                                                                      viewBox="0 0 16 16">
                              <path
                                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></span>
                        </div>
                        <select className="form-control ml-3">
                            <option disabled={true} selected={true} className="d-none" value="0">Yo'nalish tanlang</option>
                            <option value="1">Lorem ipsum dolor.</option>
                            <option value="2">Lorem ipsum.</option>
                            <option value="3">Lorem ipsum dolor.</option>
                        </select>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="d-flex justify-content-between">
                            <h2 className="mt-3">Kitoblar</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"  />
                                    <p>11-263-2021</p>
                                   <div>
                                       <Link to='/'>?????????????????????????? ??????????????????</Link>
                                   </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-between">
                            <h2 className="mt-3">Top</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"  />
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>?????????????????????????? ??????????????????</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"  />
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>?????????????????????????? ??????????????????</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"  />
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>?????????????????????????? ??????????????????</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"  />
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>?????????????????????????? ??????????????????</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"  />
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>?????????????????????????? ??????????????????</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"  />
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>?????????????????????????? ??????????????????</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;