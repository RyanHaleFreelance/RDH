import * as React from 'react'
import * as Styles from './classic.module.scss'
import reactStringReplace from 'react-string-replace';

const Layout = ({ section, images, reviews, versus, comparison, title, value }) => {
	let compData = '';
	if(comparison) {
		compData = comparison.insurerCoverage;
	}

	function getData(incoming) {
		for (let i = 0; i < reviews.length; i++) {
			const element = reviews[i];
			let title = element.node.insurerReview.insurer.title;
			if(title.toLowerCase() == incoming.toLowerCase()) {
				return element;
			}
		}
	}

	function getCompData(incoming) {
		for (let i = 0; i < compData.length; i++) {
			const element = compData[i];
			let title = element.insurer.title;
			if(title.toLowerCase() == incoming.toLowerCase()) {
				return element;
			}
		}
	}
	//sort out shortcodes
	let content; 

	content = reactStringReplace(content, /\[purple(?: text="(.*)")?\]/gi, (match, i) => (
		'<span class="purple" style="font-size: 22px; color: #7452ff;">' + match + '</span>'
	));

	return (
		<div className="section main-content">
			{ content.map( (piece,i) => {
				return typeof(piece)==='object' ? piece : 
				(piece == '</p>\n<p>' || piece == '\r\n\r\n' || piece == '\n\n' || piece == '<p></p>' || piece == '<p></p><p></p>' || piece == '</p><p>' || piece == '\r\n') ? '' : <div dangerouslySetInnerHTML={{__html:piece}}></div>
			})}
		</div>
	)
}

export default Layout