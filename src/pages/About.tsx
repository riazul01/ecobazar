import type { BreadcrumbItem } from "components/common/BreadCrumb";
import Breadcrumb from "components/common/BreadCrumb";
import AboutIntro from "components/sections/about/AboutIntro";
import FastDelivery from "components/sections/about/FastDelivery";
import Features from "components/sections/about/Features";
import Testimonials from "components/sections/home/testimonials";
import Brands from "components/sections/home/Brands";

const breadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    icon: "mdi-light:home",
    link: "/",
  },
  {
    id: 3,
    title: "About",
    active: true,
  },
];

const About = () => {
  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <AboutIntro />
      <Features />
      <FastDelivery />
      <Testimonials />
      <Brands />
    </>
  );
};

export default About;
