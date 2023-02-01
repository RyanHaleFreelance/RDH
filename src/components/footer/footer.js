import * as React from 'react'
import * as Styles from './footer.module.scss'
import c from 'classnames'
import SecNav from '../footerSecNav/footerSecNav'
import FooterNav from '../footerNav/footerNav'
import { useState } from "react"

const Layout = ({ data }) => {

	return (
		<footer id="footer" className={Styles.footer} role="contentinfo">
			<div className={c('container', Styles.footerMain)}>

			</div>
		</footer>
	)
}

export default Layout