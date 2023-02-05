import * as React from 'react'
import * as Styles from './quoteBuilder.module.scss'
import c from 'classnames'

const Layout = ({ section, images }) => {
	return (
		<div id="quote" className={c('section container full shadow', Styles.quote)}>
			<h2>Build your quote</h2>
			<div className={Styles.quoteInner}>
				<div className={Styles.quoteInnerSlide} id="slide1">
					<h3>What type of website or service are you looking for?</h3>
					<div className={Styles.quoteInnerItems}>
						<button className={Styles.quoteItem}>
							<p className="icon">face</p>
							<h4>Brochure</h4>
							<p>A collection of pages that display information.</p>
						</button>
						<button className={Styles.quoteItem}>
							<p className="icon">store</p>
							<h4>E-Commerce</h4>
							<p>A site for selling your goods or services</p>
						</button>
						<button className={Styles.quoteItem}>
							<p className="icon">important_devices</p>
							<h4>Infographic</h4>
							<p>A single page that displays information in a visual way.</p>
						</button>
						<button className={Styles.quoteItem}>
							<p className="icon">feedback</p>
							<h4>Updates & security</h4>
							<p>Keep your site up to date and secure.</p>
						</button>
						<button className={Styles.quoteItem}>
							<p className="icon">help</p>
							<h4>Other</h4>
							<p>Any other work you require, e.g. content updates, new blocks etc.</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout