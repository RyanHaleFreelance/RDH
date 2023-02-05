import * as React from 'react'
import c from 'classnames'
import { useEffect } from "react"
import {Helmet} from "react-helmet";
import * as Styles from './formBlock.module.scss'

const Layout = ({ image }) => {
	return (
		<div id="contact" className={c(Styles.form)}>
			<Helmet>
				<link href="https://d2p078bqz5urf7.cloudfront.net/jsapi/css/engagebay-source-forms-min.v01.css" rel="stylesheet" />
			</Helmet>
			<div className={c('section', Styles.twoColContent)}>
				<div className={c('container', 'full', 'jc-sb', 'shadow')}> 
					<div className={c(Styles.leftCol, 'leftColHelper')}>
						<div className='redUnder'>
							<h3>Leave us a message</h3>
						</div>
						<p>Seen something you like? use the form below and we will get back to you as soon as we can!</p>
						<div class="engage-bay-source-form engagebay-forms" data-id="5699013368610816">
							<form action="https://getform.io/f/4b001a48-6b48-433b-887c-ffe86109b0f3" method="POST"> 
								<fieldset> 
									<div class="form-group"> 
									<label class="control-label" for="name"><p>First Name</p> <span class="text-danger">*</span></label> 
										<div class="controls"> 
											<input data-ebay_field="name" data-ebay_add_as="" id="name" title="" name="name" type="text" placeholder="Enter your first name" class="form-control" required="true" /> 
										</div> 
									</div>  
									<div class="form-group"> 
										<label class="control-label" for="last_name"><p>Last Name</p> </label> 
										<div class="controls"> 
											<input data-ebay_field="last_name" data-ebay_add_as="" id="last_name" title="" name="last_name" type="text" placeholder="Enter your last name" class="form-control" /> 
										</div> 
									</div>  
									<div class="form-group"> 
										<label class="control-label" for="email"><p>Email</p> <span class="text-danger">*</span></label> 
										<div class="controls"> 
											<input data-ebay_field="email" data-ebay_add_as="" id="email" title="" name="email" type="email" placeholder="Enter your email" class="form-control" required="true" /> 
										</div> 
									</div>  
									<div class="form-group"> 
									<label class="control-label" for="message"><p>Message</p> </label> 
										<div class="controls"> 
											<textarea rows="3" data-ebay_field="" data-ebay_add_as="-- Select --" id="message" name="message" type="textarea" placeholder="Enter your message here" class="form-control"></textarea> 
										</div> 
									</div> 
									<div class="form-group"> 
										<div> 
											<button data-ebay_field="" data-ebay_add_as="-- Select --" type="submit" class="btn--important"><p>Submit</p></button> 
											<br />
											<span id="error-msg"></span> 
										</div> 
									</div> 
								</fieldset> 
								<div class="error-success-container"></div> 
							</form> 
						</div>
					</div>
					<div className={c(Styles.colOffset, 'rightColHelper')} style={{ backgroundImage: `url('${image}')`}}>
					
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout