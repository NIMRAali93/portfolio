import airport24x7Preview from '../assets/airport24x7-preview.png'
import d2dTaxiPreview from '../assets/d2d-taxi-preview.png'
import synergySecurityManagementPreview from '../assets/synergy-security-management-preview.png'
import jjsPrivateHirePreview from '../assets/jjs-private-hire-preview.png'

const projects = [
  {
    number: '01',
    title: 'Airport24x7',
    category: 'Airport Transfer Website',
    technologies: ['PHP', 'HTML/CSS', 'JavaScript'],
    description:
      'Premium airport transfer site with an instant quote form, city pages, route pricing and a fleet showcase.',
    result:
      'Quotes from any page, plus a landing page for every city served.',
    liveUrl: 'https://airport24x7.com/',
    preview: airport24x7Preview,
    caseStudy: {
      problem:
        'The business needed a website that felt premium enough for airport customers, showed prices up front and could win local searches in several cities.',
      built:
        'A custom PHP site with a quote form above the fold, dedicated city landing pages, clear route pricing cards and a fleet section, all built mobile-first.',
      result:
        'A fast, fully responsive site where the quote form is always one tap away, with a page structure ready to grow into new cities.',
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
      'Local taxi site with online booking, service area pages, a fleet section and app download links.',
    result:
      'Structured for High Wycombe taxi searches, with booking on the homepage.',
    liveUrl: 'https://d2dtaxi.co.uk/',
    preview: d2dTaxiPreview,
  },
  {
    number: '03',
    title: 'Synergy Security Management',
    category: 'Business Website',
    technologies: ['WordPress', 'Custom Development'],
    description:
      'Corporate WordPress site for facilities, cleaning, security and maintenance services.',
    result:
      'A clear page per service, with a call to action on every page.',
    liveUrl: 'https://synergysecuritymanagement.co.uk/',
    preview: synergySecurityManagementPreview,
  },
  {
    number: '04',
    title: 'Manchester Airport Taxis',
    category: 'Airport Transfer Website',
    technologies: ['WordPress', 'Booking System'],
    description:
      'Booking-focused WordPress site with a fixed-price quote flow and fleet options up to 16-seat minibuses.',
    result:
      'Visitors can get a price and book in a few taps on any device.',
    liveUrl: 'https://manchester-airporttaxis.co.uk/',
    preview: 'https://image.thum.io/get/width/1200/crop/900/https://manchester-airporttaxis.co.uk/',
  },
  {
    number: '05',
    title: 'JJS Private Hire',
    category: 'Private Hire Website',
    technologies: ['WordPress', 'Booking System'],
    description:
      'Friendly local WordPress site with a booking widget and sections for every service.',
    result:
      'Booking starts on the first screen, with every service one click away.',
    liveUrl: 'https://jjsprivatehire.co.uk/',
    preview: jjsPrivateHirePreview,
  },
]

export default projects
