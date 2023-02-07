import * as React from 'react'
import * as Styles from './partnersBlock.module.scss'
import c from 'classnames'
import { Parallax } from 'react-parallax';

const Layout = ({ section, images }) => {
	return (
		<div id="clients" className={c("section")}>
			<div className={c(Styles.textImageBlock,  "container full shadow")}> 
				<div className={c("col col-md-1-2 align-text-center", Styles.rightCol)}>
					<div className={c(Styles.textBlockWrap)}>
						<h2 className={c(Styles.textBlockTitle)}>You're in safe hands.</h2> 
						<div className="textBlockInner">
							<p>Our employees have worked some of the leading names in the tech industry, whatever your problem we can handle it.</p>
						</div>
						<ul className="flex list--unstyled flexwrap justify-center no-bm">
							<li className={c("partner-logo")}>
								<a href="https://www.aperolspritzsocials.com/" className={Styles.logo} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/share-1.jpeg" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="https://www.lg.com/uk/lg-gram/index.html" className={c(Styles.logo2, Styles.logo)} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/LG-logo.png" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="javascript:void(0);" className={c(Styles.logo3, Styles.logo)}><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/cravendale_logo_cropped_large.png" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="https://media.betway.net/en/2020-04/gaming-hollywood/" className={c(Styles.logo4, Styles.logo)} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/betway-logo-white-large.png" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="https://ao.com/athome/cookbook/farm-to-fridge" className={c(Styles.logo5, Styles.logo)} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/AO-logo-green-exclusion.png" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="https://www.petted.com/" className={c(Styles.logo7, Styles.logo)} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/petted-logo.svg" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="javascript:void(0);" className={c(Styles.logo6, Styles.logo)}><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/Staples-Logo-1994.png" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="https://www.bigchange.com/" className={c(Styles.logo8, Styles.logo)} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/Primary_horizontal_RGB.webp" alt=""/></a>
							</li>
							<li className={c("partner-logo")}>
								<a href="https://lifesciences.stickyeyes.com/" className={c(Styles.logo9, Styles.logo)} target='_blank'><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/lf.png" alt=""/></a>
							</li>
						</ul>
					</div>
				</div>
				<div className={c("col col-md-1-2 align-text-center med-up", Styles.leftCol)}>
					<Parallax style={{height: '100%'}} blur={0} bgImage="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/smartmockups_ldrfkosm.jpg" bgImageAlt="Background image" strength={100}></Parallax>
				</div>
			</div>
		</div>
	)
}

export default Layout