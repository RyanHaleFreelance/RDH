import * as React from 'react'
import * as Styles from './hero.module.scss'
import c from 'classnames'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react"

const Layout = ({ section, title, ratings }) => {
	setTimeout(() => {
		console.log(section);
	}, 1000);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [auto, setAuto] = useState(true);
	const [slideOne, setslideOne] = useState(true);
	const [slideTwo, setslideTwo] = useState(false);
	const [slideThree, setslideThree] = useState(false);

	const updateCurrentSlide = (index) => {
		setCurrentSlide(index);
		console.log(currentSlide);

		if(index == 0) {
			setslideOne(true);
			setslideTwo(false);
			setslideThree(false);
		} else if (index == 1) {
			setslideOne(false);
			setslideTwo(true);
			setslideThree(false);
		} else if (index == 2) {
			setslideOne(false);
			setslideTwo(false);
			setslideThree(true);
		}
	}

	function goTo(slide) {
		setCurrentSlide(slide);
		setAuto(false);
	}

	return (
		<header className={c(Styles.pageHeader, Styles.home, {[Styles.slideOne]: slideOne == true}, {[Styles.slideTwo]: slideTwo == true}, {[Styles.slideThree]: slideThree == true})} id="page-header">
			<div className="container">
				<Carousel selectedItem={currentSlide} onChange={updateCurrentSlide} showArrows={true} showIndicators={false} infiniteLoop={true} showStatus={false} interval={7000} autoPlay={auto} renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (<button type="button" onClick={onClickHandler} title={label} className={Styles.next}></button>)} renderArrowPrev={(onClickHandler, hasNext, label) => hasNext && (<button type="button" onClick={onClickHandler} title={label} className={Styles.prev}></button>)}>
					<div className={c('col', 'col-lg-1-1', Styles.headerWrap)}>
						<div className={Styles.heroNumbers}>
							<p><span id="current">01</span>/03</p>
						</div>
						<h1 className={Styles.pageHeaderTitle}><div class="redUnder redUnderEdit">Level up</div> your <br/>business</h1>
						<h2>RDH Digital is a leading innovator in creating <br/>award-winning digital experiences.</h2>
						<a href="#" className="btn btn--trans btn--small">Let's Chat</a>
					</div>
					<div className={c('col', 'col-lg-1-1', Styles.headerWrap)}>
						<div className={Styles.heroNumbers}>
							<p><span id="current">02</span>/03</p>
						</div>
						<h2 className={Styles.pageHeaderTitle}>Your users will<br/><div class="redUnder redUnderEdit">thank you</div></h2>
						<h3 className={Styles.actash2}>Fine tune your site's user experience to <br/>increase conversion rates and drive sales.</h3>
						<a href="#" className="btn btn--trans btn--small">Let's Chat</a>
					</div>
					<div className={c('col', 'col-lg-1-1', Styles.headerWrap)}>
						<div className={Styles.heroNumbers}>
							<p><span id="current">03</span>/03</p>
						</div>
						<h2 className={Styles.pageHeaderTitle}>Signed, sealed and<br/>delivered. <div class="redUnder redUnderEdit">Securely.</div></h2>
						<h3 className={Styles.actash2}>We use the latest tech to provide a seamless, safe experience <br/>for you and your user. Your brand's reputation is our brands reputation.</h3>
						<a href="#" className="btn btn--trans btn--small">Let's Chat</a>
					</div>
				</Carousel>
				<div className={Styles.slidesWrap}>
					<div className={Styles.scroll}>
						<button className={Styles.prompt}>
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="40.05px" height="35.69px" viewBox="-8.369 -3.009 40.05 35.69" enable-background="new -8.369 -3.009 40.05 35.69" className={Styles.svgScroll}>
								<g>
									<path d="M12.406,32.394l7.6-7.601l0,0l11.301-11.2c0.5-0.5,0.5-1.199,0-1.699l-2.301-2.301c-0.5-0.5-1.199-0.5-1.699,0l-14.9,14.9
									c-0.5,0.5-1.2,0.5-1.701,0l-14.8-14.9c-0.5-0.5-1.2-0.5-1.7,0l-2.199,2.2c-0.5,0.5-0.5,1.2,0,1.7l11.199,11.2l0,0l7.601,7.6
									C11.206,32.793,12.006,32.793,12.406,32.394"/>
								<path d="M12.031,8.565l3.795-3.795l0,0l5.643-5.593c0.25-0.25,0.25-0.599,0-0.849L20.32-2.821c-0.25-0.25-0.599-0.25-0.849,0
									L12.031,4.62c-0.25,0.25-0.599,0.25-0.849,0L3.791-2.821c-0.25-0.25-0.599-0.25-0.849,0L1.844-1.723c-0.25,0.25-0.25,0.6,0,0.849
									L7.436,4.72l0,0l3.795,3.795C11.431,8.764,11.831,8.764,12.031,8.565"/>
								</g>
							</svg>
							<div className={Styles.mouse}></div>
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40.05px" height="35.69px" viewBox="-8.369 -3.009 40.05 35.69" enable-background="new -8.369 -3.009 40.05 35.69" className={Styles.svgScroll}>
								<g>
									<path d="M12.406,32.394l7.6-7.601l0,0l11.301-11.2c0.5-0.5,0.5-1.199,0-1.699l-2.301-2.301c-0.5-0.5-1.199-0.5-1.699,0l-14.9,14.9
									c-0.5,0.5-1.2,0.5-1.701,0l-14.8-14.9c-0.5-0.5-1.2-0.5-1.7,0l-2.199,2.2c-0.5,0.5-0.5,1.2,0,1.7l11.199,11.2l0,0l7.601,7.6
									C11.206,32.793,12.006,32.793,12.406,32.394"/>
								<path d="M12.031,8.565l3.795-3.795l0,0l5.643-5.593c0.25-0.25,0.25-0.599,0-0.849L20.32-2.821c-0.25-0.25-0.599-0.25-0.849,0
									L12.031,4.62c-0.25,0.25-0.599,0.25-0.849,0L3.791-2.821c-0.25-0.25-0.599-0.25-0.849,0L1.844-1.723c-0.25,0.25-0.25,0.6,0,0.849
									L7.436,4.72l0,0l3.795,3.795C11.431,8.764,11.831,8.764,12.031,8.565"/>
								</g>
							</svg>
						</button>
					</div>
					<div className={Styles.slides}>
						<a href="javascript:void(0);" onClick={() => goTo(0)} className={c(Styles.slide, Styles.slide1,  {'hide': slideOne == true})}>
							<div className={Styles.slideInner}>
								<p className={Styles.slideNum}>01</p>
								<p className={Styles.slideTitle}>Level Up</p>
								<p className={Styles.slideDesc}>Create an award-winning digital experiences.</p>
							</div>
						</a>
						<a href="javascript:void(0);" onClick={() => goTo(1)} className={c(Styles.slide, Styles.slide2,  {'hide': slideTwo == true})}>
							<div className={Styles.slideInner}>
								<p className={Styles.slideNum}>02</p>
								<p className={Styles.slideTitle}>User Experience</p>
								<p className={Styles.slideDesc}>UX is our thing, let's make it yours.</p>
							</div>
						</a>
						<a href="javascript:void(0);" onClick={() => goTo(2)} className={c(Styles.slide, Styles.slide3,  {'hide': slideThree == true})}>
							<div className={Styles.slideInner}>
								<p className={Styles.slideNum}>03</p>
								<p className={Styles.slideTitle}>Security</p>
								<p className={Styles.slideDesc}>Signed, sealed and delivered securely.</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>  
	)
}

export default Layout