import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styles from './footerNav.module.scss'
import c from 'classnames'

const DocsSidebar = ({ title }) => {


  return (
    <div>
		<ul id="main-nav" className={c(Styles.navSec)}>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#">Home</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#">About Us</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#">Our Work</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#">Get a quote</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#">Contact</a>
			</li>
		</ul>
    </div>
  )
}

export default DocsSidebar