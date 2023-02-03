import * as React from 'react'
import c from 'classnames'
import { useEffect } from "react"
import {Helmet} from "react-helmet";
import * as Styles from './formBlock.module.scss'

const Layout = ({ image }) => {
	return (
		<div className={c(Styles.form, 'container', 'full')}>
			<Helmet>
				<script src="https://js-eu1.hsforms.net/forms/v2.js"></script>
				<script>
					{`
					setTimeout(() => {
						window.hbspt.forms.create({
							region: "eu1",
							portalId: "26918753",
							formId: "436a8927-9199-4941-95c5-bc073c77681f",
							target: '#hubspotForm'
						});
					}, 1000);
					setTimeout(() => {
						document.querySelector('.hs-form-iframe').contentDocument.body.innerHTML = document.querySelector('iframe').contentDocument.body.innerHTML + '<style>.sproket {display:none !important;} h1,h2,h3,h4,h5,h6,p,span,div,input,textarea {color: white !important;} .hs-button{padding: 10px 36px !important; display: inline-block !important; color: white !important; background: #BA1B1D !important; border: 2px solid #BA1B1D !important; font-size: 14px !important; font-weight: 600 !important; text-decoration: none !important; text-align: center !important; border-radius: 20px !important; position: relative !important; transition: background-color .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out !important;}.hs-button:hover{color:#BA1B1D !important; background-color:transparent!important;}</style>';
					}, 3000);
					`}
				</script>
			</Helmet>
			<div className={c('section', Styles.twoColContent)}>
				<div className={c('container', 'full', 'jc-sb', 'shadow')}> 
					<div className={c(Styles.leftCol, 'leftColHelper')}>
						<div id="hubspotForm"></div>
					</div>
					<div className={c(Styles.colOffset, 'rightColHelper')} style={{ backgroundImage: `url('${image}')`}}>
					
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout