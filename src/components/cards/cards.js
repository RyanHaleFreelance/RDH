import * as React from 'react'
import * as Styles from './cards.module.scss'

const Layout = ({ section, images }) => {
	let pagedata = section.attributes.data;

	let cardsArray = [];

	for (var i=0; i < pagedata.cards_cards; i++) {
		let imageString = 'cards_cards_' + i + '_image';
		let textString = 'cards_cards_' + i + '_text';
		let titleString = 'cards_cards_' + i + '_title';
		let linkString = 'cards_cards_' + i + '_link';
		cardsArray.push({
			title: pagedata[titleString],
			text: pagedata[textString],
			image: getImageUrl(pagedata[imageString]),
			link: pagedata[linkString],
		});
	}

	console.log(cardsArray);

	function getImageUrl(id) {
		for (var i = 0; i < images.length; i++){
			if (images[i].node.databaseId === id){
			   return images[i].node.sourceUrl;
			}
		}
	}
	return (
		<section className='section bg-alt'>
			<div className='container full container--no-flex'>
				{
					(pagedata.cards_title) ?
						<div className="redUnder">
							<h2 className="textBlockTitle" dangerouslySetInnerHTML={{__html: pagedata.cards_title}}></h2>
						</div>
					: ''
				}
				{
					(pagedata.cards_text) ? 
						<div className="textBlockInner">
							<p dangerouslySetInnerHTML={{__html: pagedata.cards_text}}></p>
						</div>
					: ''
				}
				{
					(pagedata.cards_cards) ?
						<div className={Styles.cards}>
							{
								cardsArray.map((card, index) => {
									console.log(card);
									return (
										<a href={card.link} className={Styles.card} key={index}>
											<div className={Styles.cardImage} style={{ backgroundImage: `url('${card.image}')`}}></div>
											<div className={Styles.cardText}>
												<h3>{card.title}</h3>
												<p>{card.text}</p>
												<p className={Styles.readmore}>Read more</p>
											</div>
										</a>
									)
								})
							}
						</div>
					: ''
				}
			</div>
		</section>
	)
}

export default Layout