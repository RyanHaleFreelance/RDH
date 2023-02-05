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
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#what-we-do">About Us</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#cards">Our Values</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#clients">Our Work</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#quote">Get a quote</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} href="#contact">Contact</a>
			</li>
		</ul>
    </div>
  )
}

export default DocsSidebar