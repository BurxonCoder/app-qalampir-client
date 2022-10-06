import React from 'react';
import {Link} from "react-router-dom";
import {BsSearch } from "react-icons/bs"
import {RiMenu5Fill} from "react-icons/ri"
import "../Footer/footer.scss"
import {BsFacebook} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {FaTelegram} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
const Footer = () => {
    return (
        <>
            <hr className="bg-danger"/>
            <div className="header-main d-flex justify-content-between align-items-center">
                <div className="navbar-brand d-flex align-items-center">

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
            <hr className="bg-danger h-25"/>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="img-001">
                            <img src="/assets/images/logo_n.png" alt=""/>
                        </div>
                        <div className="pp-01">
                            <p>QALAMPIR.UZ.<br></br>
                                Веб-сайт ОАВ сифатида 2018 йил 26 октябрь куни Ўзбекистон <br></br>
                                Республикаси Президенти Администрацияси ҳузуридаги Ахборот ва<br></br>
                                оммавий коммуникациялар агентлигидан 1089 рақам билан рўйхатга <br></br>
                                олинган. Муассис: “QALAMPIR” МЧЖ. Бош муҳаррир: С.Абдуллаев<br></br>
</p>
                        </div>

                    </div>

                    <div className="col-5">
                        <div className="icons-002">
<BsFacebook/>
<FaTelegram/>
<FaInstagramSquare/>
<AiFillYoutube/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;