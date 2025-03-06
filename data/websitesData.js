export const websitesData = [
  {
    title: "curately.co",
    url: "https://curately.co",
    description: (
      <div className="flex flex-col justify-between">
        <p className="mb-4">
          <strong className="text-red">Problem:</strong> A Denver-based PR
          agency wanted to monetize its role as a matchmaker between clients and
          service providers (photographers, videographers, etc.). The goal was
          to build a curated marketplace where clients could find, hire,
          communicate with, and pay providers—all within a single platform that
          takes a fee.
        </p>
        <p className="mb-4">
          <strong className="text-blue">Solution:</strong> Collaborating with
          the business and design teams, we built a Next.js app using the shadcn
          component library, with Strapi as the backend. We integrated Clerk for
          authentication, Stripe for payments, Mailchimp for transactional
          emails, Algolia for search, and Stream for chat.
        </p>
        <p className="mb-4">
          <strong className="text-green">Result:</strong> The client received a
          polished, fully functional freelancer marketplace, now being populated
          with Denver-area creatives.
        </p>
      </div>
    ),
    image: "/curately.png",
    reverse: false,
  },
  {
    title: "Google",
    url: "https://google.com",
    description: "Search engine",
    reverse: true,
  },
];
export const sprinklrWebsitesData = [
  {
    title: "sprinklr.com",
    description: (
      <div className="flex flex-col justify-between">
        <p className="mb-4">
          <strong className="text-red">Problem:</strong> Sprinklr, a leading
          enterprise software company, needed to enhance its Gatsby-powered
          marketing website with new features and multilingual support to better
          serve its global audience.
        </p>
        <p className="mb-4">
          <strong className="text-blue">Solution:</strong> As part of the
          development team, I helped expand the site's capabilities by building
          a blog, a news page, and new components, all integrated with the
          Contentful CMS. We implemented i18next for seamless multilingual
          translations and integrated HubSpot forms to optimize lead capture.
        </p>
        <p className="mb-4">
          <strong className="text-green">Result:</strong> Collaborating closely
          with the design and marketing technology teams, we successfully
          delivered a more dynamic and accessible website. Our improvements
          boosted Ahrefs and Google PageSpeed scores significantly while
          increasing sales leads.
        </p>
      </div>
    ),
    image: "/sprinklr.png",
    url: "https://sprinklr.com",
    reverse: false,
  },
];
