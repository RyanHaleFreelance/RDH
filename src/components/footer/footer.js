import * as React from 'react'
import * as Styles from './footer.module.scss'
import c from 'classnames'
import FooterNav from '../footerNav/footerNav'

const Layout = ({ data }) => {

	return (
		<footer id="footer" className={Styles.footer} role="contentinfo">
			<div className={c('container', Styles.footerMain)}>
				<div className="col col-xs-1-1 col-md-1-3">
					<div className={Styles.footerLogo}>
						<a href="#">
							<img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/logo-outlined.svg" alt="Petted logo" className={Styles.logo} />
						</a>
						<p><strong>Copyright 2023 RDH Digital Ltd</strong></p>
						<p>Company Number: 14419844</p>
						<a href="mailto:ryanhalebusiness@gmail.com">Email us</a>
					</div>
				</div>
				<div className="col col-xs-1-1 col-md-1-3">
					<FooterNav></FooterNav>
				</div>
				<div className={c('col col-xs-1-1 col-md-1-3', Styles.third)}>
					<a href="https://www.linkedin.com/company/rdhbackend/" target="_blank" rel="noopener noreferrer" className={Styles.socialLink}>
						<img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/linkedin.svg" alt="LinkedIn" />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Layout