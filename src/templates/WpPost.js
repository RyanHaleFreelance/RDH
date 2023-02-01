import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/header/header'
import Steps from '../components/steps/steps'
import Testimonials from '../components/testimonials/testimonials'
import TextAccordion from '../components/textAccordion/textAccordion'
import Hero from '../components/hero/hero'
import RegHero from '../components/regHero/regHero'
import Footer from '../components/footer/footer'
import SingleText from '../components/singleText/singleText'
import TwoCol from '../components/twoColumn/twoColumn'
import TwoColBlock from '../components/twoColumnBlock/twoColumnBlock'
import Blockquote from '../components/blockQuote/blockQuote'
import Classic from '../components/classic/classic'
import FormBlock from '../components/formBlock/formBlock'
import TextImage from '../components/textImage/textImage'
import MapBlock from '../components/mapBlock/mapBlock'
import GenericText from '../components/genericText/genericText'
import Banner from '../components/bannerBlock/bannerBlock'
import AccordionBlock from '../components/accordionBlock/accordionBlock'
import c from 'classnames'
import {Helmet} from "react-helmet";
import reactStringReplace from 'react-string-replace';
import { useState, useEffect } from "react"

const wpPost = ({data}) => {
	const pageData = JSON.parse(data.wpPost.blocksJSON);
	const images = data.allWpMediaItem.edges;
	let title = data.wpPost.title;
	let toc = [];
	let content; 

	let featured = data.allWpPost.edges;
	let path = 'node';

	if (data?.wpPost?.blogPost?.postFeaturedArticles) {
		featured = data.wpPost.blogPost.postFeaturedArticles;
		path = 'post';
	}

	const LoadSection = ({ val, imageArray }) => {
		let name = (val.attributes.name) ? val.attributes.name : (val.name) ? val.name : undefined
		switch (name) {
			case "acf/steps" :
			return <Steps section={val} images={imageArray} />;
			case "acf/testimonials" :
			return <Testimonials section={val} images={imageArray} ratings={data.wp.themeGeneralSettings.ratingsWidget} />;
			case "acf/text-accordion" :
			return <TextAccordion section={val} images={imageArray} />;
			case "acf/single-column-text-block" :
			return <SingleText section={val} images={imageArray} />;
			case "acf/two-column-content" :
			return <TwoCol section={val} images={imageArray} />;
			case "acf/blockquote-block" :
			return <Blockquote section={val} images={imageArray} />;
			case "core/freeform" :
			return <Classic section={val} images={imageArray} />;
			case "acf/form-block" :
			return <FormBlock section={val} images={imageArray} />;
			case "acf/text-image-block" :
			return <TextImage section={val} images={imageArray} />;
			case "acf/map-block" :
			return <MapBlock section={val} images={imageArray} />;
			case "acf/accordions-block" :
			return <AccordionBlock section={val} images={imageArray} />;
			case "acf/generic-text-block" :
			return <GenericText section={val} images={imageArray} />;
			case "acf/two-column-block" :
			return <TwoColBlock section={val} images={imageArray} />;
			case "acf/banner-block" :
			return <Banner section={val} images={imageArray} />;
			default:
			return "Block (" + name + ") not found. ";
		}
	};

	let pageurl = data.wpPost.uri;

	let shareurl = 'https://www.petted.com' + pageurl;

	// let noContainer = data.wpPost.pageSettings.noContainerOnMain;

  return (
	<div>
		<Helmet>
			<script id="petted-quote-engine" src="https://petinsurer.azurewebsites.net/Scripts/lib/widgets/petted/vertical/quote-form/widget.min.js" type="text/javascript"></script>

			<script>{`
				setTimeout(() => {QuoteEnginePetted.setOptions({
					targetId: "petted-quote-form",
					redirectUrl: "https://petinsurer.azurewebsites.net/quote",
					baseUrl: "https://petinsurer.azurewebsites.net/",
					urlParam: { source: "PettedWidgetSingle", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", utm_term: ""},
					refCode: "co",
				});
				QuoteEnginePetted.init();}, 500);
			`}</script>
		</Helmet>
        <Layout></Layout>
		<RegHero section={data.wpPost}></RegHero>
        <main className={c('main site-main single')}>
			<article className="post single type-single">
				<div class="post__wrapper container container--1300">
					<div class="post__content">
						<div class="post__featured">
							{
								(data.wpPost.featuredImage) ? 
								<img src={data.wpPost.featuredImage.node.sourceUrl} alt={data.wpPost.title} />
								: <img src="https://www.petted.com/wp-content/uploads/2022/01/hero-bg-mob.jpg" alt="Breed featured image" />
							}
							
						</div>
						<div class="post__upper">
							{/* <div class="post__author-image">
								<img src={data.wpPost.author.node.userOptions.customProfilePhoto.sourceUrl} alt={data.wpPost.author.node.name} />
							</div>
							<div class="post__author-name-date">    
								<p class="name"><a href="<?php echo get_author_posts_url(get_the_author_meta( 'ID' )); ?>" class="unstyled">{data.wpPost.author.node.name}</a></p>
								<div class="flex">
									<p>{data.wpPost.author.node.userOptions.jobTitle}</p>
									<p>{data.wpPost.date}</p>
								</div>
							</div> */}
							<div class="post__share">
								<a href={`https://www.facebook.com/sharer/sharer.php?u=${shareurl}`} target="_blank">
									<img src="https://www.petted.com/wp-content/uploads/2022/02/facebook.svg" alt="Facebook Icon" />
								</a>
								<a href={`https://twitter.com/intent/tweet?url=${shareurl}&text=Check out this blog post on Petted! ${data.wpPost.title}`} target="_blank">
									<img src="https://www.petted.com/wp-content/uploads/2022/02/twitter.svg" alt="Twitter Icon" />
								</a>
								<a href={`mailto:info@example.com?&subject=&body=${shareurl} Check out this blog post on Petted! ${data.wpPost.title}`} target="_blank">
									<img src="https://www.petted.com/wp-content/uploads/2022/02/email.svg" alt="Email Icon" />
								</a>
							</div>
						</div>
						<div class="entry-content">
							{
								pageData.map((section, i) => {
									return (section.name == 'core/freeform' || section.name == 'acf/generic-text-block') ? <LoadSection val={section} key={i} imageArray={images} /> : ''
								})
							}
						</div>
					</div>
					<div class="post__info">
						<div class="post__info-wrapper">
							<div id="petted-quote-form"></div>
						</div>
					</div>
				</div>
			</article>
		</main>
        {/* <Footer data={data.wp.acfOptionsFooter.footerOptions}></Footer> */}
    </div>
  )
}

export const query = graphql`
    query ($id: String) {
		wpPost(id: { eq: $id }) {
			id
			uri
			author {
				node {
					name
					description
				}
			}
			featuredImage {
				node {
				  sourceUrl
				}
			}
			date(formatString: "MMM DD, yyyy")
			title
			blocksJSON
		}
		allWpPost(limit: 3, filter: {id: {ne: $id}}) {
			edges {
			  node {
				title
				link
				date(formatString: "Do MMMM, yyyy")
				featuredImage {
					node {
					sourceUrl
					}
				}
			  }
			}
		}
		allWpMediaItem {
			edges {
				node {
					id
					sourceUrl
					databaseId
				}
			}
	  	}
	}
`

export default wpPost