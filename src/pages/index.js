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
	let noContainer = '';

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Syne&display=swap" rel="stylesheet" />
      </Helmet>
        <Layout data={data.wpPage.seo}></Layout>
		{
			<Hero section={data.wpPage.hero} title={data.wpPage.title}></Hero>
		}
        <main className={c('main', {'container': noContainer != true}, {'container--full': noContainer != true})}>
			<Cards></Cards>
			<TwoCol title="What we do" image="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/hesam-link-W9bT1tKbdcI-unsplash-scaled.jpg" content="<p>Formed in 2022, we are a team of highly skilled developers, designers, and project managers who are dedicated to creating state-of-the-art websites. With over 10 years of experience in the industry, we have the knowledge and expertise to bring your vision to fruition.</p><p>We work closely with our clients to understand their specific needs and deliver a website that exceeds their expectations. We specialise in creating custom websites using the latest technologies and design principles. Whether you require a simple brochure website or a complex e-commerce platform, we have the experience and expertise to deliver a high-quality product.</p>" link="#" linkText="Get in touch" flip={true}></TwoCol>
			<Partners></Partners>
			<TwoCol title="Why we do it" image="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/01/diego-ph-qKAto00u4og-unsplash-scaled.jpg" content="<p>We take pride in our attention to detail and commitment to customer satisfaction. Our team will work with you every step of the way to ensure that your website meets your requirements.</p><p>From initial consultations to final launch, we will be there to guide you through the process and ensure that your website is a success.</p>" link="#" linkText="Get a quote" flip={true}></TwoCol>
        </main>
        <Footer></Footer>
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