import * as React from 'react'
import * as Styles from './header.module.scss'
import Nav from '../nav/nav'
import c from 'classnames'
import { useState } from "react"
import Headroom from 'react-headroom'
import {Helmet} from "react-helmet";

const Layout = ({ data }) => {

	console.log(data);
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = (elem) => {
		if (typeof window !== 'undefined') {
			let nav = document.querySelector('.nav-module--nav--b7415');
			let html = document.querySelector('html');

			if(nav.classList.contains('navActive')) {
				nav.classList.remove('navActive');
				html.classList.remove('menuOpen');
				setExpanded(false);
			} else {
				nav.classList.add('navActive');
				html.classList.add('menuOpen');
				setExpanded(true);
			}
		}
	}

	return (
		<div className='overflow'>
			<Headroom>
				<div className={c(Styles.header)} id="main-header" role="banner">
					<div className="container containerAlignCenter">
						<div className="col col-xs-1-1 col-md-1-3">
							<div className={Styles.hamburgerContainer}>
								<button aria-label="Toggle mobile menu" className={Styles.hamburger} id="menu-toggle" onClick={toggleExpand}>
									<span className={Styles.hamburgerBar}></span>
								</button>
							</div>
						</div>
						<div className="col col-xs-1-1 col-md-1-3">
							<div className={Styles.brand}>
								<a href="/" className={Styles.brandLogo}>
									<img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/logo-outlined.svg" alt="Petted logo" className={'logo'} />
								</a>
							</div>
						</div>
						<nav role="navigation"className={c(Styles.header__nav, "col col-xs-1-1 col-md-5-6")}>
							<div className={Styles.menuBg}></div>
							<Nav></Nav>
						</nav>
					</div>
				</div>
			</Headroom>
		</div>
	)
}

export default Layout