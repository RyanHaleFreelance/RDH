import * as React from 'react'
import * as Styles from './partnersBlock.module.scss'
import c from 'classnames'

const Layout = ({ section, images }) => {
	setTimeout(() => {
		console.log(section);
	}, 1000);

	const pagedata = section.attributes.data;
	let dataArray = [];
	let title = pagedata.partners_title;
	let content = pagedata.partners_content;
	let image = getImageUrl(pagedata.partners_image);

	for (var i=0; i < pagedata.partners; i++) {
		let link = 'partners_' + i + '_link';
		let logo = 'partners_' + i + '_logo';
		let name = 'partners_' + i + '_name';
		dataArray.push({
			name: pagedata[name],
			link: pagedata[link],
			image: getImageUrl(pagedata[logo]),
		});
	}

	function getImageUrl(id) {
		for (var i = 0; i < images.length; i++){
			if (images[i].node.databaseId === id){
			   return images[i].node.sourceUrl;
			}
		}
	}

	setTimeout(() => {
		if (typeof window !== 'undefined') {
			let partner_logos = [...document.querySelectorAll('.partner-logo:not(.hide)')];
			let hidden_logos = document.querySelectorAll('.partner-logo.hide');
		
			if(partner_logos.length && hidden_logos.length) {
				shuffle(partner_logos);

				let logo_index = 0;
				let logo_max = partner_logos.length;
				let hidden_index = 0;
				let hidden_max = hidden_logos.length;
		
				for (let index = 0; index < 50; index++) {
					setTimeout(function(){
						let partner_logo = partner_logos[logo_index];

						// find image within random
						let image = partner_logo.getElementsByTagName('img')[0];
						let image_src = image.src;
						let image_swap = hidden_logos[hidden_index].getElementsByTagName('img')[0];
						let image_swap_src = image_swap.src;
						// Fade out logo
						partner_logo.classList.add('fade-out');
		
						setTimeout(function(){
							// Swap image src
							image.src = image_swap_src;
							image.dataset.src = image_swap_src;
							image_swap.src = image_src;  
							image_swap.dataset.src = image_src;  
						}, 500);
		
						setTimeout(function(){
							// Fade in logo
							partner_logo.classList.remove('fade-out');
						}, 750);
		
						if(hidden_index === (hidden_max - 1)) {
							hidden_index = 0;
						} else {
							hidden_index++;
						}
		
						if(logo_index === (logo_max - 1)) {
							logo_index = 0;
						} else {
							logo_index++;
						}
		
					}, 1000 + (2700 * index));
				}
			}
		}
	}, 1000);



	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}

	return (
		<div className={c("section bg-alt")}>
			<div className={c("text-image-block container items-center flex-reverse")}> 
				<div className={c("col col-md-1-2 align-text-center")}>
					{
						(title) ? 
							<h2 className={c(Styles.textBlockTitle)}>{title}</h2> 
						: ''
					}
					<div className="textBlockInner">
						{
							(content) ? 
								<div dangerouslySetInnerHTML={{__html: content}}></div>
							: ''
						}
						{
							(dataArray.length > 0) ? 
								<ul className="flex list--unstyled flexwrap justify-center items-center no-bm">
									{
										dataArray.map((section, i) => (
											<li className={c("partner-logo", {'hide': i > 9})}>
												<a href={section.link} target='_blank'><img src={section.image} alt={section.name} loading="lazy"  /></a>
											</li>
										))
									}
								</ul>
							: ''
						}
					</div>
				</div>
				<div className="col col-md-1-2 align-text-center med-up">
					<div className="image-mask">
						<img src={image} alt="Dog image" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout