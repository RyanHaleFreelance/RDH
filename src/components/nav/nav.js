import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styles from './nav.module.scss'
import c from 'classnames'
import { useState } from "react"

const DocsSidebar = ({ title }) => {
    const { wpMenu } = useStaticQuery(graphql`
    {
        wpMenu(locations: {eq: GATSBY_HEADER_MENU}) {
          name
          menuItems {
            nodes {
              label
              url
              databaseId
              childItems {
                nodes {
                  url
				  label
                  databaseId
				  cssClasses
                }
              }
              parentId
			  cssClasses
            }
          }
        }
    }
  `)

  function closeNav() {
	let nav = document.querySelector('.nav-module--nav--b7415');
	let html = document.querySelector('html');

	if(nav.classList.contains('navActive')) {
	  nav.classList.remove('navActive');
	  html.classList.remove('menuOpen');
	}
  }

  const [mobExpanded, setMobExpanded] = useState(false);
  const toggleMobExpand = () => setMobExpanded(!mobExpanded);

  return (
	<div className={Styles.menuHeaderMenuContainer}>	
		<ul id="main-nav" className={c(Styles.nav, Styles.navHeader)}>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} onClick={closeNav} href="#">Home</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} onClick={closeNav} href="#what-we-do">About Us</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} onClick={closeNav} href="#cards">Our Values</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} onClick={closeNav} href="#clients">Our Work</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} onClick={closeNav} href="#quote">Get a quote</a>
			</li>
			<li className={c(Styles.menuItem)}>
				<a className={c(Styles.menuLink, Styles.subMenuLink)} onClick={closeNav} href="#contact">Contact</a>
			</li>
		</ul>
		<a href="#quote" className={c("btn-arrow", Styles.headerMobileBtn)}>Get a quote</a>
	</div>
  )
}

export default DocsSidebar