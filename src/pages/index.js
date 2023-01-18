import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/header/header'
import Steps from '../components/steps/steps'
import Partners from '../components/partnersBlock/partnersBlock'
import Testimonials from '../components/testimonials/testimonials'
import TextAccordion from '../components/textAccordion/textAccordion'
import Hero from '../components/hero/hero'
import Footer from '../components/footer/footer'


const WpPost = ({data}) => {
    const pageData = JSON.parse(data.wpPage.blocksJSON);
    const images = data.allWpMediaItem.edges;

	setTimeout(() => {
		console.log(data);
	}, 1000);
    const LoadSection = ({ val, imageArray }) => {
		switch (val.attributes.name) {
			case "acf/steps" :
				return <Steps section={val} images={imageArray} />;
			case "acf/testimonials" :
				return <Testimonials section={val} images={imageArray} />;
      case "acf/partners-block" :
        return <Partners section={val} images={imageArray} />;
			case "acf/text-accordion" :
				return <TextAccordion section={val} images={imageArray} />;
		  default:
			return "Block (" + val.attributes.name + ") not found. ";
		}
	};
  return (
    <div>
        <Layout></Layout>
        <Hero section={data.wpPage.hero} title={data.wpPage.title}></Hero>
        <main className="main container container--full">
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
    query {
		wpPage(uri: {eq: "/"}) {
		id
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