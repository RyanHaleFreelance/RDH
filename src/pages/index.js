import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/header/header'
import Hero from '../components/hero/hero'
import Footer from '../components/footer/footer'
import TwoCol from '../components/twoColumn/twoColumn'
import Cards from '../components/cards/cards'
import Partners from '../components/partnersBlock/partnersBlock'
import FormBlock from '../components/formBlock/formBlock'
import Quote from '../components/quoteBuilder/quoteBuilder'
import c from 'classnames'
import {Helmet} from "react-helmet";

const WpPost = ({data}) => {
	let noContainer = '';

	let script = "var EhAPI = EhAPI || {}; EhAPI.after_load = function(){ EhAPI.set_account('8rh0iuu75o0bt2i1n1ps76dgbm', 'rdh'); EhAPI.execute('rules');};(function(d,s,f) { var sc=document.createElement(s);sc.type='text/javascript'; sc.async=true;sc.src=f;var m=document.getElementsByTagName(s)[0]; m.parentNode.insertBefore(sc,m); })(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours());";

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Syne&display=swap" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
		<title>Building innovative websites that drive business success. | RDH Digital</title>
		<meta name="description" content="Elevate your online presence with our expert web development services. From custom website design to seamless functionality, we bring your vision to life." />
  		<meta name="keywords" content="HTML, CSS, JavaScript, Web Development, Leeds, Web Development Leeds, Web Design, Web Design Leeds, Web, Design, development, SEO, SEO Leeds, SEO Services" />
		<meta name="author" content="Ryan Hale" />
		<link rel="apple-touch-icon" sizes="180x180" href="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/favicon-32x32-1.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/favicon.ico" />
		<link rel="mask-icon" href="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/safari-pinned-tab.svg" color="#5bbad5" />
		<meta name="msapplication-TileColor" content="#da532c" />
		<meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
        <Layout data={data.wpPage.seo}></Layout>
		{
			<Hero section={data.wpPage.hero} title={data.wpPage.title}></Hero>
		}
        <main className={c('main', {'container': noContainer != true}, {'container--full': noContainer != true})}>
			<TwoCol title="What we do" image="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/daniel-korpai-pKRNxEguRgM-unsplash-1.jpg" content="<p>Formed in 2022, we are a team of highly skilled developers, designers, and project managers who are dedicated to creating state-of-the-art websites. With over 10 years of experience in the industry, we have the knowledge and expertise to bring your vision to fruition.</p><p>We work closely with our clients to understand their specific needs and deliver a website that exceeds their expectations. We specialise in creating custom websites using the latest technologies and design principles. Whether you require a simple brochure website or a complex e-commerce platform, we have the experience and expertise to deliver a high-quality product.</p>" link="#contact" linkText="Get in touch" flip={true} id="what-we-do"></TwoCol>
			<Cards></Cards>
			<Partners></Partners>
			<TwoCol title="Why we do it" image="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/smartmockups_ldrg3iu8.jpg" content="<p>We take pride in our attention to detail and commitment to customer satisfaction. Our team will work with you every step of the way to ensure that your website meets your requirements.</p><p>From initial consultations to final launch, we will be there to guide you through the process and ensure that your website is a success.</p>" link="#quote" linkText="Get a quote" flip={true} id="why-we-do-it"></TwoCol>
			{/* <Quote></Quote> */}
			<FormBlock image="https://dev-rdhbackend.pantheonsite.io/wp-content/uploads/2023/02/austin-chan-ukzHlkoz1IE-unsplash.jpg"></FormBlock>
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