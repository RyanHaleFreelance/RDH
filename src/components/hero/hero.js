import * as React from 'react'
import * as Styles from './hero.module.scss'
import c from 'classnames'
// import Ratings from '../ratings/ratings'

const Layout = ({ section, title, ratings }) => {
	setTimeout(() => {
		console.log(section);
	}, 1000);
	return (
		<header className={c(Styles.pageHeader, Styles.home)} id="page-header">
			<div className="container">
				<div className="col col-lg-1-2">
				<h1 className={Styles.pageHeaderTitle} dangerouslySetInnerHTML={{__html: section.heroTitle}}></h1>
				<h2 dangerouslySetInnerHTML={{__html: section.heroText}}></h2>
					<a href={section.heroButtonLink} className="btn btn--trans btn--small">{section.heroButtonText}</a>
				</div>
				<div className="col col-lg-1-2">
					<video src={section.video} muted autoPlay loop></video>
				</div>
			</div>
		</header>  
	)
}

export default Layout