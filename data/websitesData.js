export const websitesData = [
  {
    title: "Frameflow",
    subtitle: "Walled Garden Marketplace",
    url: "https://frameflow.co/",
    problem:
      "A Denver-based PR agency wanted to monetize its role as a matchmaker between clients and service providers. They needed a platform where clients could easily find, hire, communicate with, and pay providers, all within a single system that takes a fee.",

    solution:
      "We built a Next.js app with the shadcn component library, using Strapi as the backend to manage listings and transactions. Integrated Clerk for authentication, Stripe for payments, Mailchimp for emails, Algolia for search, and Stream for real-time chat.",

    result:
      "The polished marketplace is now live, offering a seamless experience for clients and providers. It's being populated with Denver-area creatives and is set up for future growth.",
    image: "/frameflow.png",
    reverse: false,
  },
  {
    title: "First Place Supply",
    subtitle: "Headless eCommerce",
    url: "https://firstplacesupply.com",
    problem:
      "Avalore Agency's clients on BigCommerce struggled with slow load times, limited customization, and integration challenges. They required a more flexible, high-performance solution that could scale with their growing needs, improve user engagement, and streamline the overall experience.",

    solution:
      "We developed a headless eCommerce architecture using Next.js for a dynamic, high-speed front-end, Strapi as a flexible CMS, and Algolia for instant, intelligent search functionality. BigCommerce continued to serve as the backend, handling product management, inventory, and transactions seamlessly.",

    result:
      "The redesigned storefront significantly improved page speed, SEO rankings, and user experience. Clients gained full creative control over the design, enhanced third-party integrations, and a future-proof platform ready for expansion.",
    image: "/first-place-supply.png",
    reverse: true,
  },
  {
    title: "Distributor Wire & Cable",
    subtitle: "Epic Refactor",
    url: "https://www.distributorwire.com/",
    problem:
      "DWC wanted to offer customers an online portal for quick product quotes, integrating with Acumatica. When the Acumatica API couldn't handle the traffic, a Firebase database was used as a workaround. The resulting codebase was fragile and messy, with redundant logic. One file had 6,000 lines containing 20 misnamed functions.",

    solution:
      "I broke the code out into individual function files, and the logic into shared utilities.  I moved the data source to a Snowflake mirror of Acumatica, allowing for more stability in data fetching, using SQL queries to replace difficult-to read, long REST query params. Overall the codebase got a much-needed glow up.",

    result:
      "The site became more stable and maintainable, allowing us to respond to business needs and  implement new features efficiently and with fewer issues.",
    image: "/dwc.png",
    reverse: false,
  },
];

export const sprinklrWebsitesData = [
  {
    title: "Sprinklr",
    subtitle: "Enterprise Marketing Site",
    url: "https://sprinklr.com",
    problem:
      "Sprinklr, a leading enterprise software company, needed to enhance their Gatsby-powered marketing website with new features and multilingual support to better serve their global audience. The existing platform lacked flexibility and scalability to meet evolving needs.",

    solution:
      "I worked as part of the development team to build a blog, news page, and new components integrated with Contentful CMS. We used i18next for multilingual translations and integrated HubSpot forms to streamline lead capture across regions.",

    result:
      "Collaborating with design and marketing teams, we delivered a dynamic, accessible website that improved performance, boosting Ahrefs and Google PageSpeed scores. These improvements led to a significant increase in sales leads and user engagement.",
    image: "/sprinklr.png",
    reverse: true,
  },
];
