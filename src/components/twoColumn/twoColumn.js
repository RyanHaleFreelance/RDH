import * as React from 'react'
import * as Styles from './twoColumn.module.scss'
import c from 'classnames'

const Layout = ({ section, images }) => {
	const pagedata = section.attributes.data;
	let flip = pagedata.tc_flip;

	let image = getImageUrl(pagedata.tc_image);

	function getImageUrl(id) {
		for (var i = 0; i < images.length; i++){
			if (images[i].node.databaseId === id){
			   return images[i].node.sourceUrl;
			}
		}
	}

	return (
		<div className={c('section', Styles.twoColContent, 'section--no-pad')}>
			<div className={c('container', 'full', {'flex-reverse': flip == 1})}> 
				<div className={c('col', 'col-md-1-2', Styles.leftCol, 'leftColHelper')}>
					<div className={c('redUnder')}>
						<h2>{pagedata.tc_title}</h2>
					</div>
					<div className={c(Styles.colText)} dangerouslySetInnerHTML={{__html: pagedata.tc_text}}></div>
					<a href={pagedata.tc_button_link} className="btn btn--small">{pagedata.tc_button_text}</a>
				</div>
				<div className={c('col', 'col-md-1-2', Styles.colOffset)} style={{ backgroundImage: `url('${image}')`}}>
				
				</div>
			</div>
		</div>
	)
}

export default Layout