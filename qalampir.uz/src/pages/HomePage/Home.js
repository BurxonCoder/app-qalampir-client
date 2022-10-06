import React from 'react';
import './home.scss';
import Header from "../../components/Header/Header";
import Down from "../../components/Main/Down";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <Down/>
            <Footer/>
        </div>
    );
};

export default Home;