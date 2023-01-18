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
		<div>
			<Headroom>
				<div className={c(Styles.header)} id="main-header" role="banner">
					<div className="container containerAlignCenter">
						<div className="col col-xs-1-1 col-md-1-6">
							<div className={Styles.brand}>
								<a href="/" className={Styles.brandLogo}>
									<img src="https://pockettraveller.co.uk/wp-content/uploads/2023/01/logo.svg" alt="Petted logo" className={'logo'} />
									<img src="https://www.petted.com/wp-content/themes/petted/compiled/images/petted-logo-dark-alt.svg" alt="Petted logo" className={Styles.menuLogo} />
								</a>
							</div>
							<div className={Styles.hamburgerContainer}>
								<button aria-label="Toggle mobile menu" className={Styles.hamburger} id="menu-toggle" onClick={toggleExpand}>
									<span className={Styles.hamburgerBar}></span>
								</button>
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