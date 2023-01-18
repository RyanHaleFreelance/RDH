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
import Cards from '../components/cards/cards'
import TwoColBlock from '../components/twoColumnBlock/twoColumnBlock'
import Blockquote from '../components/blockQuote/blockQuote'
import Partners from '../components/partnersBlock/partnersBlock'
import Classic from '../components/classic/classic'
import FormBlock from '../components/formBlock/formBlock'
import TextImage from '../components/textImage/textImage'
import MapBlock from '../components/mapBlock/mapBlock'
import GenericText from '../components/genericText/genericText'
import Banner from '../components/bannerBlock/bannerBlock'
import AccordionBlock from '../components/accordionBlock/accordionBlock'
import c from 'classnames'
import Seo from 'gatsby-plugin-wpgraphql-seo';
import {Helmet} from "react-helmet";

const WpPost = ({data}) => {
	const pageData = JSON.parse(data.wpPage.blocksJSON);
	const images = data.allWpMediaItem.edges;
	
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
			case "acf/two-col-block" :
			return <TwoCol section={val} images={imageArray} />;
			case "acf/cards-block" :
			return <Cards section={val} images={imageArray} />;
			case "acf/blockquote-block" :
			return <Blockquote section={val} images={imageArray} />;
			case "core/freeform" :
			return <Classic section={val} images={imageArray} />;
			case "acf/partners-block" :
        	return <Partners section={val} images={imageArray} />;
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

	let pageurl = data.wpPage.uri;

	let noContainer = '';

  return (
    <div>
        <Layout data={data.wpPage.seo}></Layout>
		{
			(pageurl == '/') ?
				<Hero section={data.wpPage.hero} title={data.wpPage.title}></Hero>
			: 
				<RegHero section={data.wpPage} title="" seo={data.wpPage.seo}></RegHero>
		}
        <main className={c('main', {'container': noContainer != true}, {'container--full': noContainer != true})}>
			{
				pageData.map((section, i) => (
					<LoadSection val={section} key={i} imageArray={images} />
				))
			}
        </main>
        {/* <Footer data={data.wp.acfOptionsFooter.footerOptions}></Footer> */}
    </div>
  )
}

export const query = graphql`
    query ($id: String) {
    wpPage(id: { eq: $id }) {
		id
		uri
		title
		blocksJSON
		hero {
			heroButtonLink
			heroButtonText
			heroText
			heroTitle
			video
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

export default WpPost