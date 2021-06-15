import React from 'react';
import PropTypes from 'prop-types';
import HeaderPage from '../../../../Components/HeaderPage';
import FooterPage from '../../../../Components/FooterPage';
import Mainbar from '../../Components/Mainbar';
import MainContent from '../../Components/MainContent';


MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <>
            <HeaderPage />
            <Mainbar />
            <MainContent />
            <FooterPage />
        </>
    );
}

export default MainPage;