import * as React from 'react'
import * as Styles from './cards.module.scss'
import c from 'classnames'

const Layout = ({ section, images }) => {
	return (
		<section className='section'>
			<div className='container full container--no-flex'>
				<div>
					<h2 className="textBlockTitle">What can we do for you?</h2>
				</div>
				<div className="textBlockInner">
					<p>RDH Digital are specialists when it comes to what we offer as a service. With over 10 years experience in the business we are sure we can help you with your digital needs.</p>
				</div>
				<div className={Styles.cards}>
					<a href="#" className={c(Styles.card, 'card1')}>
						<div className={Styles.cardInnerWrapper}>
							<div className={Styles.cardTextWrap}>
								<div className={Styles.cardText}>
									<h3>Experience</h3>
									<p>Creating a great experience for your user is invaluable for conversion and user retention. We can help you create a great UX!</p>
									{/* <p className={Styles.readmore}>See why</p> */}
								</div>
								<div className={Styles.cardImage}><img src="https://www.pngarts.com/files/1/Abandoned-Dog-PNG-High-Quality-Image.png"/></div>
								<div className={c(Styles.innerWrapper, 'cardInnerWrapper')}></div>
							</div>
						</div>
					</a>
					<a href="#" className={c(Styles.card, 'card2')}>
						<div className={Styles.cardText}>
							<h3>Trustworthiness</h3>
							<p>Our staff have worked with major brands, and have a track record of delivering quality websites on time and within budget.</p>
							{/* <p className={Styles.readmore}>Our Brands</p> */}
						</div>
						<div className={Styles.cardImage}><img src="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/Group.png"/></div>
						<div className={c(Styles.innerWrapper, 'cardInnerWrapper')}></div>
					</a>
					<a href="#" className={c(Styles.card, 'card3')}>
						<div className={Styles.cardText}>
							<h3>Technology</h3>
							<p>We're constantly evolving to ensure every job we do is using the latest tech to ensure the speed and security of your website.</p>
							{/* <p className={Styles.readmore}>Read More</p> */}
						</div>
						<div className={Styles.cardImage}><img src="https://www.pngarts.com/files/1/Abandoned-Dog-PNG-High-Quality-Image.png"/></div>
						<div className={c(Styles.innerWrapper, 'cardInnerWrapper')}></div>
					</a>
					<a href="#" className={c(Styles.card, 'card4')}>
						<div className={Styles.cardText}>
							<h3>Personal</h3>
							<p>We offer a bespoke and personal experience to you and your needs. We understand not everyone is cut out of the same mould!</p>
							{/* <p className={Styles.readmore}>Build your quote</p> */}
						</div>
						<div className={Styles.cardImage}><img src="https://www.pngarts.com/files/1/Abandoned-Dog-PNG-High-Quality-Image.png"/></div>
						<div className={c(Styles.innerWrapper, 'cardInnerWrapper')}></div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Layout