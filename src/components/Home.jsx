/**
 * @fileOverview This file is the home class which contains contact,
 *               Here included functionalities from
 *               constrcutor, component render and so on
 *
 * @author      Fernando Vazquez
 *
 * @requires    NPM: react, uuid, prop-types, react-bootstrap, react-icons
 * @requires    ../styles/home.css
 */
import React from 'react';
import '../styles/home.css'

class Home extends React.Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);
    }


    /**
     * @description   render the menu
     * @returns {*}
     */
    render() {
        return (
            <h1>Hello Brother Ganjooi</h1>
        );
    }
}

export default Home;

