import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import axios from "axios";
// import {AvForm, AvField} from 'availity-reactstrap-validation'

const PersonalBooks = (props) => {
    const [modal, setModal] = useState(false)
    const [forFile, setforFile] = useState("")
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
    const toggle = () => {
        setModal(!modal)
    }


    const pic = (e) => {

        console.log(e.target.files[0])
        axios.post("http://localhost:8055/items/files", {"file": e.target.files[0]} , {headers: {Authorization: "Bearer " + localStorage.getItem("Authorization")}})
            .then(res => {
                console.log(res)
                setforFile(res.data)
            })

    }
    const postBook = (data) => {

        axios.post("http://localhost:8055/items/books", {
            "name": document.getElementById('n1').value,
            "content": document.getElementById("n2").value,
            "src": forFile,
            "date" : date
        })
            .then(res => {
                console.log(res)
            })
    }
    useEffect(() => {
        console.log(date)
    }, [])
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
                            <option disabled={true} selected={true} className="d-none" value="0">Yo'nalish tanlang
                            </option>
                            <option value="1">Lorem ipsum dolor.</option>
                            <option value="2">Lorem ipsum.</option>
                            <option value="3">Lorem ipsum dolor.</option>
                        </select>
                    </div>

                </div>

                <div className="add-btn">
                    <button className="" onClick={toggle}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-plus-square" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>

                    </button>
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
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxes">
                                    <img src="./img/item1.jpg"/>
                                    <p>11-263-2021</p>
                                    <div>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
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
                                    <img src="./img/item1.jpg"/>
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"/>
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"/>
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"/>
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"/>
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mini-boxes">
                                    <img src="./img/item1.jpg"/>
                                    <div>
                                        <p>11-263-2021</p>
                                        <Link to='/'>ЭКОНОМИЧЕСКОЕ ОБОЗРЕНИЕ</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <Modal isOpen={modal} toggle={toggle} className={props.className}>

                <div className="d-flex justify-content-between w-100 pl-3 pt-2 pr-3 align-items-center">
                    <h4 className="m-0">Kitobni kiriting</h4>
                    <button onClick={toggle} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <ModalBody>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        required
                        id="n1"
                    />
                    <textarea
                        name="content"
                        type="text"
                        className="form-control mt-3"
                        required
                        id="n2"
                    />
                    <input
                        name="src"
                        className="form-control mt-3"
                        type="file"
                        required
                        onChange={pic}
                        id="n3"
                    />
                </ModalBody>
                <ModalFooter>
                    <button type="submit" color="primary" onClick={postBook}>Saqlash</button>
                    {' '}
                    <button type="button" color="danger" onClick={toggle}>Bekor qilish</button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default PersonalBooks;