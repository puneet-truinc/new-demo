import React, { Component, Fragment } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'

export default class Header extends Component {
    render() {
        return (
            <Fragment>
            <Container value='container'>
                <div className="header">
                    <Link to="#" className="logo">CompanyLogo</Link>
                    <div className="header-right">
                        <Link className="active" to="Home">Home</Link>
                        <Link to="Contact">Contact</Link>
                        <Link to="About">About</Link>
                                    <Link to="Blog">Blog</Link>
                    </div>
                </div>
            </Container>
            </Fragment>
        )
    }
}
