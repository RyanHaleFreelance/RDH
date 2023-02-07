import * as React from 'react'
import * as Styles from './twoColumn.module.scss'
import c from 'classnames'
import { Parallax } from 'react-parallax';

const Layout = ({ title, image, content, link, linkText, flip, id }) => {

	return (
		<div id={id} className={c('section', Styles.twoColContent)}>
			<div className={c('container', 'full', {'flex-reverse': flip == 1}, 'jc-sb', 'shadow')}> 
				<div className={c(Styles.leftCol, 'leftColHelper')}>
					<div className={c('redUnder')}>
						<h2>{title}</h2>
					</div>
					<div className={c(Styles.colText)} dangerouslySetInnerHTML={{__html: content}}></div>
					<a href={link} className="btn btn--small">{linkText}</a>
				</div>
				<div className={c(Styles.colOffset, 'rightColHelper')}>
					<Parallax style={{height: '100%'}} blur={0} bgImage={image} bgImageAlt="Background image" strength={100}></Parallax>
				</div>
			</div>
		</div>
	)
}

export default Layout