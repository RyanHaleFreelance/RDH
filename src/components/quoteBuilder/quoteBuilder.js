import * as React from 'react'
import * as Styles from './quoteBuilder.module.scss'
import c from 'classnames'
import { useState } from "react"

const Layout = ({ section, images }) => {
	const [price, setPrice] = React.useState(1000);
	const [basic, setbasic] = React.useState(1000);
	const [cms, setcms] = React.useState(0);
	const [cmstype, setcmstype] = React.useState(0);
	const [payment, setpayment] = React.useState(0);
	const [features, setfeatures] = React.useState(0);
	const [pages, setpages] = React.useState(0);

	const [innerworktype, setinnerworktype] = React.useState(false);
	const [innerrequired, setinnerrequired] = React.useState(false);
	const [innercms, setinnercms] = React.useState(false);
	const [innercmstype, setinnercmstype] = React.useState(false);
	const [innerpayment, setinnerpayment] = React.useState(false);
	const [innerpages, setinnerpages] = React.useState(false);
	const [innerfeatures, setinnerfeatures] = React.useState(false);

	setTimeout(() => {
		if (typeof window !== 'undefined') {
			document.querySelector('#scrollable').addEventListener('wheel', preventScroll, {passive: false});

			function preventScroll(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		}
	}, 1000);

	function goToSlide(slide, cost, type, value) {
		if (typeof window !== 'undefined') {
			let item = document.getElementById('scrollable');
			document.getElementById('slide' + slide).style.opacity = 1;
			document.getElementById('slide' + slide).style.pointerEvents = "all";
			let scroll = document.getElementById('slide' + slide).offsetTop;
			item.scrollTo({
				left: 0, 
				top: scroll, 
				behavior: 'smooth'
			});
		}

		if(type == 'type') {
			setinnerworktype(value);
		} else if(type == 'required') {
			setinnerrequired(value);
		} else if(type == 'cms') {
			setinnercms(value);
		} else if(type == 'cmstype') {
			setinnercmstype(value);
		} else if(type == 'payment') {
			setinnerpayment(value);
		}

		if(cost) {
			if(type == 'cms') {
				setcms(cost);
			} else if(type == 'cmstype') {
				setcmstype(cost);
			} else if(type == 'payment') {
				setpayment(cost);
			} else if(type == 'features') {
				setfeatures(cost);
			} else if(type == 'pages') {
				setpages(cost);
			}

			let current = price;
			setPrice(current + cost);
		}
	}

	function getSelected(id, slide, type, value) {
		if (typeof window !== 'undefined') {
			let items = document.getElementById(id).querySelectorAll('input');
			let cost = 0;
			let string = '';
			for (let index = 0; index < items.length; index++) {
				const element = items[index];
				if(element.checked) {
					cost += parseInt(element.value);
					string += element.id + ', ';
				}
			}
			if(id == 'features') {
				setinnerfeatures(string);
			} else if(id == 'pages') {
				setinnerpages(string);
			}

			goToSlide(slide, cost, id, value);
		}
	}

	function getDetails(id) {
		if (typeof window !== 'undefined') {
			let missing = 0;
			let items = document.getElementById(id).querySelectorAll('input');
			let name = '';
			let email = '';
			let phone = '';
			let company = '';
			let website = '';

			for (let index = 0; index < items.length; index++) {
				const element = items[index];
				if(element.dataset.required == 'true' && element.value == '') {
					missing++;
				} else {
					if(element.id == 'name') {
						name = element.value;
					} 
					if(element.id == 'email') {
						email = element.value;
					}
					if(element.id == 'phone') {
						phone = element.value;
					}
					if(element.id == 'company') {
						company = element.value;
					}
					if(element.id == 'website') {
						website = element.value;
					}
				}
			}
			if(missing == 0) {
				goToSlide(9);
				window.gtag("event", "QUOTE SUBMISSION", {
					website_type: innerworktype,
					work_type: innerrequired,
					cms_required: innercms,
					cms_type: innercmstype,
					payment_required: innerpayment,
					features: innerfeatures,
					extra_pages: innerpages,
					name: name,
					email: email,
					phone: phone,
					company: company,
					website: website
				});
				document.getElementById('error').style.opacity = 0;
			} else {
				document.getElementById('error').style.opacity = 1;
			}
		}
	}

	return (
		<div id="quote" className={c('section container full shadow', Styles.quote)}>
			<div className={Styles.quoteInner} id="scrollable">
				<div className={Styles.quoteInnerSlide} id="slide1">
					<div className={Styles.quoteInnerTitle}>
						<h2>How much could your project cost?</h2>
						<p>Answer a few questions to get a rough estimate of how much your project could cost.</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<button onClick={() => goToSlide(2, 0, 'type', 'brochure')} className={Styles.quoteItem}>
							<p className="icon">important_devices</p>
							<h4>Brochure</h4>
							<p>A collection of pages that display information.</p>
						</button>
						<button onClick={() => goToSlide(2, 0, 'type', 'e-commerce')} className={Styles.quoteItem}>
							<p className="icon">store</p>
							<h4>E-Commerce</h4>
							<p>A site for selling your goods or services</p>
						</button>
					</div>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide2">
					<div className={Styles.quoteInnerTitle}>
						<h3>What services do you require?</h3>
						<p>Let us know if you need us to design your website, development it or both!</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<button onClick={() => goToSlide(3, 800, 'required', 'design')} className={Styles.quoteSmallItem}>
							<p className="icon">design_services</p>
							<h4>Design</h4>
						</button>
						<button onClick={() => goToSlide(3, 0, 'required', 'development')} className={Styles.quoteSmallItem}>
							<p className="icon">computer</p>
							<h4>Development</h4>
						</button>
						<button onClick={() => goToSlide(3, 800, 'required', 'both')} className={Styles.quoteSmallItem}>
							<p className="icon">device_hub</p>
							<h4>Both</h4>
						</button>
					</div>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide3">
					<div className={Styles.quoteInnerTitle}>
						<h3>Are you wanting to be able to update content yourself?</h3>
						<p>We can build your site using a content management system (CMS), this gives you the freedom to edit and create content at anytime.</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<button onClick={() => goToSlide(4, 1000, 'cms', 'yes')} className={Styles.quoteSmallItem}>
							<p className="icon">thumb_up_off_alt</p>
							<h4>Yes</h4>
						</button>
						<button onClick={() => goToSlide(5, 0, 'cms', 'no')} className={Styles.quoteSmallItem}>
							<p className="icon">thumb_down_off_alt</p>
							<h4>No</h4>
						</button>
					</div>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide4">
					<div className={Styles.quoteInnerTitle}>
						<h3>Any particular CMS you are interested in?</h3>
						<p>RDH Specialises in Wordpress, but we have used many in the past so we will always try to accomodate your requests! For E-commerce we would recommend Wordpress.</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<button onClick={() => goToSlide(5, 0, 'cmstype', 'Wordpress')} className={Styles.quoteSmallItem}>
							<p className="icon">content_paste_search</p>
							<h4>Wordpress</h4>
						</button>
						<button onClick={() => goToSlide(5, 1000, 'cmstype', 'Drupal')} className={Styles.quoteSmallItem}>
							<p className="icon">dynamic_feed</p>
							<h4>Drupal</h4>
						</button>
						<button onClick={() => goToSlide(5, 500, 'cmstype', 'Shopify')} className={Styles.quoteSmallItem}>
							<p className="icon">attach_money</p>
							<h4>Shopify</h4>
						</button>
						<button onClick={() => goToSlide(5, 0, 'cmstype', 'N/a')} className={Styles.quoteSmallItem}>
							<p className="icon">close</p>
							<h4>No Preference</h4>
						</button>
						<button onClick={() => goToSlide(5, 1000, 'cmstype', 'Other')} className={Styles.quoteSmallItem}>
							<p className="icon">question_mark</p>
							<h4>Other</h4>
						</button>
					</div>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide5">
					<div className={Styles.quoteInnerTitle}>
						<h3>Do you need a payment gateway?</h3>
						<p>If you currently have a payment gateway we will use the same one to ensure continuity of your service and analytics, if not we can work with you to set one up!</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<button onClick={() => goToSlide(6, 500, 'payment', 'Stripe')} className={Styles.quoteSmallItem}>
							<p className="icon">payment</p>
							<h4>Stripe</h4>
						</button>
						<button onClick={() => goToSlide(6, 500, 'payment', 'Wordpress')} className={Styles.quoteSmallItem}>
							<p className="icon">payment</p>
							<h4>Wordpress Payments</h4>
						</button>
						<button onClick={() => goToSlide(6, 500, 'payment', 'Shopify')} className={Styles.quoteSmallItem}>
							<p className="icon">payment</p>
							<h4>Shopify Payments</h4>
						</button>
						<button onClick={() => goToSlide(6, 1000, 'payment', 'Other')} className={Styles.quoteSmallItem}>
							<p className="icon">question_mark</p>
							<h4>Other</h4>
						</button>
						<button onClick={() => goToSlide(6, 500, 'payment', 'Need one')} className={Styles.quoteSmallItem}>
							<p className="icon">lightbulb</p>
							<h4>I need you to pick one!</h4>
						</button>
						<button onClick={() => goToSlide(6, 0, 'payment', 'None')} className={Styles.quoteSmallItem}>
							<p className="icon">close</p>
							<h4>Not Needed</h4>
						</button>
					</div>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide6">
					<div className={Styles.quoteInnerTitle}>
						<h3>What other features do you need?</h3>
						<p>Select any or all other functions you may need for your web site. Many of these can always be added later, however, others might be easier to design straight into the first offering of your website or web app.</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<ul id="features">
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="reviews" name="reviews" value="200"/>
								<label for="reviews">Reviews</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="calendar" name="calendar" value="200"/>
								<label for="calendar">Calendar/Booking system</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="search" name="search" value="150"/>
								<label for="search">Search</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="coupons" name="coupons" value="100"/>
								<label for="coupons">Coupons</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="testimonials" name="testimonials" value="300"/>
								<label for="testimonials">Testimonials</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="blog" name="blog" value="750"/>
								<label for="blog">Blog</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="faqs" name="faqs" value="300"/>
								<label for="faqs">FAQs</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="maps" name="maps" value="100"/>
								<label for="maps">Maps</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="analytics" name="analytics" value="100"/>
								<label for="analytics">Analytics</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="forms" name="forms" value="250"/>
								<label for="forms">Forms</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="chat" name="chat" value="200"/>
								<label for="chat">Live Chat</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="accounts" name="accounts" value="1000"/>
								<label for="accounts">User Accounts</label>
							</li>
						</ul>
					</div>
					<button onClick={() => getSelected('features', 7)} className={c('btn', Styles.button)}>Next</button>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide7">
					<div className={Styles.quoteInnerTitle}>
						<h3>Any extra pages?</h3>
						<p>Are there any extra pages you would like adding to the site?</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<ul id="pages">
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="contact" name="contact" value="300"/>
								<label for="contact">Contact us</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="landing" name="landing" value="600"/>
								<label for="landing">Optimised landing page</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="casestudy" name="casestudy" value="600"/>
								<label for="casestudy">Case Studies</label>
							</li>
							<li>
								<input className={Styles.styledCheckbox} type="checkbox" id="email" name="email" value="300"/>
								<label for="email">Email Marketing</label>
							</li>
						</ul>
					</div>
					<button onClick={() => getSelected('pages', 8)} className={c('btn', Styles.button)}>Next</button>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide8">
					<div className={Styles.quoteInnerTitle}>
						<h3>Enter your details</h3>
						<p>You are one step away from getting your quote, please enter a couple of details below.</p>
					</div>
					<div className={Styles.quoteInnerItems}>
						<ul id="form" className={Styles.form}>
							<li>
								<label for="text">Your Name*</label>
								<input type="text" id="name" name="name" data-required='true' placeholder="Name"/>
							</li>
							<li>
								<label for="email">Your email*</label>
								<input type="text" id="email" name="email" data-required='true' placeholder="Email"/>
							</li>
							<li>
								<label for="phone">Phone*</label>
								<input type="text" id="phone" name="phone" data-required='true' placeholder="Phone"/>
							</li>
							<li>
								<label for="company">Company name</label>
								<input type="text" id="company" name="company" data-required='false' placeholder="Company"/>
							</li>
							<li>
								<label for="website">Website <span>(if you have one)</span></label>
								<input type="text" id="website" name="website" data-required='false' placeholder="Website"/>
							</li>
						</ul>
					</div>
					<p id="error" className={Styles.error}>Please ensure all required fields are filled in.</p>
					<button onClick={() => getDetails('form', 9)} className={c('btn', Styles.button)}>Get Quote</button>
				</div>
				<div className={Styles.quoteInnerSlide} id="slide9">
					<div className={Styles.quoteInnerTitle}>
						<div className={Styles.priceWrap}>
							<h3>We think your quote will be approximately</h3>
							<p className={Styles.price}>£{price}.00</p>
							<p className={Styles.disclaimer}>Please note this is a rough estimate from the information given, a final quote will be given once the full project specifications are figured out.</p>
							<h4>Price Breakdown</h4>
							<p>CMS setup - <span>£{cms}.00</span></p>
							<p className={Styles.small}>Set up for a content management system, user accounts, training etc.</p>
							<p>CMS type - <span>£{cmstype}.00</span></p>
							<p className={Styles.small}>Surcharge for larger and more complex CMS's.</p>
							<p>E-commerce - <span>£{payment}.00</span></p>
							<p className={Styles.small}>Set up charge for payment gateways.</p>
							<p>Features - <span>£{features}.00</span></p>
							<p className={Styles.small}>These features are integral to your product based on the responses you have previously selected.</p>
							<p>Extra Pages - <span>£{pages}.00</span></p>
							<p className={Styles.small}>Additional pages that are not included in the basic package.</p>
							<p>Basic cost - <span>£{basic}.00</span></p>
							<p className={Styles.small}>This is the basic cost of the website, this includes all of the elements we know are integral to a website. This includes but it is not limited to: <strong>navigation, blocks, header, hero & footer</strong>. This also includes <strong>project management, quality assurance and project setup costs</strong>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout