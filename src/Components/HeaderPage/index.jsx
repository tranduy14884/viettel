import React from 'react';
import PropTypes from 'prop-types';
import header from '../../asset/img/header.jpg';
HeaderPage.propTypes = {

};

function HeaderPage(props) {
    return (
        <div className="container">
            <img src={header} alt="#" width="90%"/>
        </div>
    );
}

export default HeaderPage;