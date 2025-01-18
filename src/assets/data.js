import logoSmall from "@/assets/Images/Logo.webp";
import logoFull from "@/assets/Images/Logo-Full.webp";
import heroImage from "@/assets/Images/hero.webp";
import homeSec1Heading from "@/assets/Images/homeSec1Heading.webp";
import homeSec1Img1 from "@/assets/Images/homeSec1Img1.webp";
import homeSec1Img2 from "@/assets/Images/homeSec1Img1.webp";
import contactPageImage from "@/assets/Images/contact.webp";

import { galleryExports } from "./Images/gallery/exports";

import revaZachThumb from "@/assets/Images/weddings/reva-zach/thumb.webp";
import manishaChristopherThumb from "@/assets/Images/weddings/manisha-christopher/thumb.webp";
import aliaRanbirThumb from "@/assets/Images/weddings/alia-ranbir/thumb.webp";
import kiaraSidharthThumb from "@/assets/Images/weddings/kiara-sidharth/thumb.webp";

import fineArtSecImg from "@/assets/Images/fine-art-sec_img.webp";
import { revaZachImagesExports } from "./Images/weddings/reva-zach/exports";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default {
  logo: {
    small: logoSmall,
    full: logoFull,
  },
  navLinks: [
    {
      title: "Home",
      handle: "/",
    },
    {
      title: "Weddings",
      handle: "/weddings",
    },
    {
      title: "Cinematography Investment",
      handle: "/cinematography-investment",
    },
    {
      title: "Photography Investment",
      handle: "/photography-investment",
    },
    {
      title: "About",
      handle: "/about",
    },
    {
      title: "FAQs",
      handle: "/faqs",
    },
    {
      title: "Contact",
      handle: "/contact",
    },
  ],
  socials: {
    instagram: {
      title: "Instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    facebook: {
      title: "Facebook",
      href: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    twitter: {
      title: "Twitter",
      href: "https://www.x.com",
      icon: <FaTwitter />,
    },
  },
  fineArtSecImg,
  home: {
    hero: {
      image: heroImage,
    },
    sec1: {
      image1: homeSec1Img1,
      image2: homeSec1Img2,
      headingImg: homeSec1Heading,
      heading: "A Modern Approach to an Age Old Tradition",
      descriptions: [
        "Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis. For almost a decade House On The Clouds has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.",
        "Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards HOTC is the only company listed on IMDB for its award winning films.",
      ],
    },
  },
  contact: {
    image: contactPageImage,
    paras: [
      "Please fill in the form below and provide as much details as possible to help us create an accurate quote.",
      "We will try to get back within 48hrs , give us a call on the number below if you don’t hear from us or if its a last minute enquiry.",
      "Please go through our FAQ section to find answers to some common questions.",
    ],
    form: {
      items: [
        { label: "Name", id: "name", type: "text", required: true },
        { label: "Email", id: "email", type: "email", required: true },
        { label: "Phone", id: "phone", type: "number", required: true },
        {
          label: "Estimated Guest Count",
          id: "guest-count",
          type: "number",
          required: true,
        },
        {
          label: "Tell us more about your wedding - event flow, venues.",
          id: "more-info",
          type: "textarea",
          required: true,
        },
        {
          label: "Location of the wedding",
          id: "wedding-location",
          type: "text",
          required: true,
        },
        {
          label: "Event Dates",
          id: "event-dates",
          type: "text",
          required: true,
        },
        {
          label: "What services are you looking for?",
          id: "service",
          type: "checkbox",
          options: ["Photography", "Films", "Both Photography and Films"],
          required: true,
        },
      ],
    },
    number: "+91 99647 87383",
    email: "hello@example.com",
    location: "Mumbai . Banglore",
  },
  faqs: [
    {
      question: "What is your approach towards making a wedding film?",
      answer:
        "We would like to present our wedding films as if a family member has shot the wedding with a handy cam. Our films are deeply personal.",
    },
    {
      question:
        "Do you do both Photography and Films? Do you offer photography and film separately ?",
      answer:
        "Yes we offer both photography and films as part of our service portfolio. It works best when we are doing both photography and film as there is",
    },
    {
      question: "What are your delivery timelines?",
      answer:
        "We deliver a small set of preview images within 48 hrs. The full set is delivered between 2-3 months. Creating a wedding film is a highly creative process and we take around 6 months to prepare the film. Every film goes through multiple iterations to ensure the film truly justifies the soul of the wedding.",
    },
    {
      question: "What is the length of the wedding film?",
      answer:
        "Length of the wedding film depends on . We try to keep the duration of our films between 20-30 minutes so the are crisp and rewatchable.",
    },
  ],
  gallery: [...galleryExports],
  weddings: [
    {
      title: "Reva & Zach",
      handle: "reva-zach",
      date: "Oct 7, 2024",
      description:
        "This dream wedding captures the true emotion and personalities expressed through the lens of our camera. This elegant, timeless wedding truly reflects our photographic style of elegant, organic and nostalgic photography.",
      thumb: revaZachThumb,
      images: [...revaZachImagesExports],
    },
    {
      title: "Manisha & Christopher",
      handle: "manisha-christopher",
      date: "Aug 25, 2024",
      description:
        "This captivating portrayal of love truly honors the deep connection between our couple. The mist that hung in the air created an almost mystical atmosphere, enveloping the couple as they wandered deeper into the enchanting landscape.",
      thumb: manishaChristopherThumb,
      images: [],
    },
    {
      title: "Alia & Ranbir",
      handle: "alia-ranbir",
      date: "Aug 8, 2024",
      description:
        "This captivating portrayal of love truly honors the deep connection between our couple. The mist that hung in the air created an almost mystical atmosphere, enveloping the couple as they wandered deeper into the enchanting landscape.",
      thumb: aliaRanbirThumb,
      images: [],
    },
    {
      title: "Kiara & Sidharth",
      handle: "kiara-sidharth",
      date: "Apr 24, 2024",
      description:
        "This captivating portrayal of love truly honors the deep connection between our couple. The mist that hung in the air created an almost mystical atmosphere, enveloping the couple as they wandered deeper into the enchanting landscape.",
      thumb: kiaraSidharthThumb,
      images: [],
    },
  ],
  cinematographyInvestments: [
    {
      name: "Classic",
      benifits: [
        {
          title: "16 Hours Of Wedding Coverage + One Location Eshoot.",
          isBold: false,
        },
        { title: "Two Cinematographers For Main Events", isBold: false },
        { title: "Creative Planning Consultation", isBold: false },
        { title: "4k NDE Cinematic Highlight Film", isBold: false },
        { title: "4k Full Feature Film Of Each Event", isBold: false },
        { title: "Drone Shots + Beauty Shots", isBold: false },
      ],
      price: "$6200",
    },
    {
      name: "Elite",
      benifits: [
        {
          title: "18 Hours Of Wedding Coverage + Two Locations Eshoot.",
          isBold: false,
        },
        { title: "14-Hours Of Pre-Event Coverage", isBold: false },
        {
          title:
            "Video Crane And Live Projector Streaming During The Reception Night.",
          isBold: true,
        },
        { title: "Two Cinematographers For Main Events", isBold: false },
        { title: "4k NDE Cinematic Highlight Film (EXTENDED)", isBold: false },
        { title: "4k Full Feature Film Of Each Event", isBold: false },
        { title: "Drone Shots + Beauty Shots", isBold: false },
      ],
      price: "$11200",
    },
    {
      name: "Premium",
      benifits: [
        {
          title: "18 Hours Of Wedding Coverage  +  Two Locations Eshoot.",
          isBold: false,
        },
        { title: "8-Hours Of Pre-Event Coverage", isBold: false },
        { title: "Two Cinematographers For Main Events", isBold: false },
        { title: "4k NDE Cinematic Highlight Film (EXTENDED)", isBold: false },
        { title: "4k Full Feature Film Of Each Event", isBold: false },
        { title: "Drone Shots + Beauty Shots", isBold: false },
      ],
      price: "$7600",
    },
  ],
  photographyInvestments: [
    {
      name: "Classic",
      benifits: [
        {
          title:
            "16 Hours Of Wedding & Reception Coverage + One Location Eshoot.",
          isBold: false,
        },
        { title: "Two Photographers For Main Events", isBold: false },
        { title: "Creative Planning Consultation", isBold: false },
        { title: "All High-Resolution Edited Photos", isBold: false },
        { title: "Online Gallery For Viewing And Sharing", isBold: false },
      ],
      price: "$6200",
    },
    {
      name: "Elite",
      benifits: [
        {
          title:
            "18 Hours Of Wedding & Reception Coverage + Two Locations Eshoot.",
          isBold: false,
        },
        { title: "14-Hours Of Pre-Event Coverage", isBold: false },
        {
          title: "Two Photographers For Main Events",
          isBold: false,
        },
        { title: "Creative Planning Consultation", isBold: false },
        { title: "All High-Resolution Edited Photos", isBold: false },
        { title: "Online Gallery For Viewing And Sharing", isBold: false },
      ],
      price: "$9600",
    },
    {
      name: "Premium",
      benifits: [
        {
          title:
            "18 Hours Of Wedding & Reception Coverage + Two Locations Eshoot.",
          isBold: false,
        },
        { title: "8-Hours Of Pre-Event Coverage", isBold: false },
        { title: "Two Photographers For Main Events", isBold: false },
        { title: "Creative Planning Consultation", isBold: false },
        { title: "All High-Resolution Edited Photos", isBold: false },
        { title: "Online Gallery For Viewing And Sharing", isBold: false },
      ],
      price: "$7600",
    },
  ],
};
