import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {ImYoutube2} from "react-icons/im";
import {BsSearch} from "react-icons/bs"
import {RiMenu5Fill} from "react-icons/ri"
const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];
    return (
        <>
        <header className="header">
            <div className="header-top d-flex justify-content-between align-items-center border-bottom">
                <div className="text-secondary d-flex align-items-center">
                    <img src="https://cdn.beta.qalampir.uz/assets/dbca5ed6/img/svg/calendar.svg" alt="Calendar"/>
                    <span className="ml-1"> {d.getDate() + "/" + month + "/" + d.getFullYear()} |</span>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Sayt haqida</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Biznes</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Aloqa</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Arxiv</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Murojaatlar</a></li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <select className="main_language text-danger form-control">
                        <option value="uz">O'z</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select>

                    <div className="d-flex align-items-center">
                        <FaFacebookF className="ml-2 text-secondary"/>
                        <FaTelegramPlane className="ml-2 text-secondary"/>
                        <AiFillInstagram className="ml-2 text-secondary"/>
                        <ImYoutube2 className="ml-2 text-secondary"/>
                    </div>
                </div>
            </div>
            <div className="header-main d-flex justify-content-between align-items-center border-bottom">
                <div className="navbar-brand d-flex align-items-center">

                    <Link to="/"><img src="/assets/images/logo_n.png" className="logo" alt="Qalampir"/></Link>
                    <ul className="nav">
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p>Jamiyat</p></Link></li>
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p>Olam</p></Link></li>
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p>Madanyat-sanati</p></Link></li>
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p>Intervyu</p></Link></li>
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p>Foydali </p></Link></li>
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p> Sport</p></Link></li>
                        <li className="nav-item"><Link to="" className="nav-link text-dark"><p> Taxlil</p></Link></li>


                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <BsSearch className="icons-01"/>
                    <RiMenu5Fill className="icons-02"/>
                </div>


            </div>
        </header>



            <main>
                <div className="container">
                   <div className="row">
                       <div className="col-7">
                           <div className="main-body">
                               <img className="img-01" src="/assets/images/migrant.jpg" alt="iib"/>
                           </div>
                       </div>
                       <div className="col-5">
                           <div className="main-right">
                               <div className="body-01">
                                   <img src="/assets/images/oshagap.jpg" alt=""/>
                                   <p>Қирол Чарльз III Трасс билан келишолмай қолди – ОАВ</p>
                               </div>
                           </div>
                           <div className="main-right">
                               <div className="body-01">
                                   <img src="/assets/images/iib.jpg" alt=""/>
                                   <p>Қирол Чарльз III Трасс билан келишолмай қолди – ОАВ</p>
                               </div>
                           </div>
                           <div className="main-right">
                               <div className="body-01">
                                   <img src="/assets/images/prz.jpg" alt=""/>
                                   <p>Қирол Чарльз III Трасс билан келишолмай қолди – ОАВ</p>
                               </div>
                           </div>
                           <div className="main-right">
                               <div className="body-01">
                                   <img src="/assets/images/vayna.jpg" alt=""/>
                                   <p>Қирол Чарльз III Трасс билан келишолмай қолди – ОАВ</p>
                               </div>
                           </div>
                           <div className="main-right">
                               <div className="body-01">
                                   <img src="/assets/images/chegara.jpg" alt=""/>
                                   <p>Қирол Чарльз III Трасс билан келишолмай қолди – ОАВ</p>
                               </div>
                           </div>
                       </div>

                   </div>
                </div>

            </main>
        </>

    );
};

export default Header;