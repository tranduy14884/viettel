import React from 'react';
import PropTypes from 'prop-types';
import HeaderPage from '../../../../Components/HeaderPage';
import FooterPage from '../../../../Components/FooterPage';
import Mainbar from '../../Components/Mainbar';
import MainContent from '../../Components/MainContent';
import { useEffect } from 'react';
import companyApi from '../../../../api/companyApi';
import familyApi from '../../../../api/familyApi';

MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <>
            <MainContent />
            <FooterPage />
        </>
    );
}

export default MainPage;