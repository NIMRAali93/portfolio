import airport24x7Preview from '../assets/airport24x7-preview.png'
import d2dTaxiPreview from '../assets/d2d-taxi-preview.png'
import synergySecurityManagementPreview from '../assets/synergy-security-management-preview.png'
import jjsPrivateHirePreview from '../assets/jjs-private-hire-preview.png'

const projects = [
  {
    number: '01',
    title: 'Airport24x7',
    category: 'Airport Transfer Website',
    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'Local SEO'],
    description:
      'A premium airport transfer website designed to make finding routes, checking prices and requesting a quote simple for customers.',
    result:
      'Clear quote journeys, dedicated location pages and a structure designed to support local search visibility.',
    liveUrl: 'https://airport24x7.com/',
    preview: airport24x7Preview,
    caseStudy: {
      problem:
        'The business needed a professional airport transfer website that could communicate trust, present route information clearly and make it easy for visitors to request a quote.',
      built:
        'I developed a custom PHP website with a prominent quote form, dedicated city landing pages, route pricing sections and a fleet showcase. The site was structured with mobile users and clear customer journeys in mind.',
      result:
        'A responsive airport transfer website with a straightforward quote journey and a scalable page structure for additional service areas.',
      // Add real PageSpeed Insights scores from pagespeed.web.dev, e.g.
      // { label: 'Performance (mobile)', value: '92' }
      scores: [],
    },
  },
  {
    number: '02',
    title: 'D2D Taxi',
    category: 'Taxi Booking Website',
    technologies: ['HTML/CSS', 'JavaScript', 'Local SEO'],
    description:
      'A local taxi website designed around online booking, service areas and clear information for customers searching for taxi services.',
    result:
      'A booking-focused homepage supported by dedicated service area content for local taxi searches.',
    liveUrl: 'https://d2dtaxi.co.uk/',
    preview: d2dTaxiPreview,
  },
  {
    number: '03',
    title: 'Synergy Security Management',
    category: 'Business Website',
    technologies: ['WordPress', 'Custom Development'],
    description:
      'A professional WordPress website for a facilities management company providing security, cleaning, maintenance and related business services.',
    result:
      'Dedicated service pages with clear information and calls to action throughout the website.',
    liveUrl: 'https://synergysecuritymanagement.co.uk/',
    preview: synergySecurityManagementPreview,
  },
  {
    number: '04',
    title: 'Manchester Airport Taxis',
    category: 'Airport Transfer Website',
    technologies: ['WordPress', 'Booking System'],
    description:
      'A booking-focused WordPress website for airport taxi customers, featuring fixed-price journeys and multiple vehicle options.',
    result:
      'Customers can quickly request a price and begin the booking process across desktop and mobile devices.',
    liveUrl: 'https://manchester-airporttaxis.co.uk/',
    preview: 'https://image.thum.io/get/width/1200/crop/900/https://manchester-airporttaxis.co.uk/',
  },
  {
    number: '05',
    title: 'JJS Private Hire',
    category: 'Private Hire Website',
    technologies: ['WordPress', 'Booking System'],
    description:
      "A local private hire website built with WordPress, featuring a booking journey and dedicated sections for the company's services.",
    result:
      'Customers can start a booking from the homepage and access individual services with minimal clicks.',
    liveUrl: 'https://jjsprivatehire.co.uk/',
    preview: jjsPrivateHirePreview,
  },
]

export default projects
