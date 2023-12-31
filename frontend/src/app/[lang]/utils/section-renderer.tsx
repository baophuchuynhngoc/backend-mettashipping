import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import Introduce from "../components/Introduce";
import Article from "../components/Article";
import ContactForm from "../components/ContactForm";
import RequestARate from "../components/RequestARate";
import TheyChooseUs from "../components/TheyChooseUs";
import Banner from "../components/Banner";
import PaymentInfomation from "../components/PaymentInfomation";
import EmbedLogin from "../components/EmbedLogin";
import TestimonialForm from "../components/TestimonialForm";
import Terminologies from "../components/Terminology";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.introduce":
      return <Introduce key={index} data={section} />;
    case "sections.news":
      return <Article key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.contact-form":
      return <ContactForm key={index} data={section} />;
    case "sections.request-a-rate":
      return <RequestARate key={index} data={section} />;
    case "sections.choose-us":
      return <TheyChooseUs key={index} data={section} />;
    case "sections.banner":
      return <Banner key={index} data={section} />;
    case "sections.payment-infomation":
      return <PaymentInfomation key={index} data={section} />;
    case "sections.embed-login":
      return <EmbedLogin key={index} data={section} />;
    case "sections.testimonial":
      return <TestimonialForm key={index} data={section} />;
    case "sections.terminologies":
      return <Terminologies key={index} data={section} />;
    default:
      return null;
  }
}
