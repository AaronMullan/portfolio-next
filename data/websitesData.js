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
