import { Container } from "@/components/Container";

export function About() {
  return (
    <section className="about-gradient animate-fadeIn h-full w-full pb-16 opacity-0">
      <Container>
        <div className="border-cyan space-y-6 rounded-lg border-4 px-8 py-16 text-justify text-xl text-white">
          <p>
            <span className="text-red mr-2 text-4xl">Hello, World!</span>I am a
            Full Stack Software Developer with a Front End focus. Before
            pivoting to coding in 2019, I worked as an Audio Engineer. Touring
            with rock bands honed my teamwork, creative problem-solving, and
            ability to navigate big personalities under pressure.
          </p>
          <p>
            I bring that same passion for craftsmanship and collaboration to
            software development, combining relentless curiosity with strong
            communication skills to translate stakeholder visions into
            inspiring, technically excellent products. For the past few years,
            I've worked with Next.js, React, GraphQL, TypeScript, and Tailwind,
            using Strapi and Contentful on the backend and interfacing with SQL
            and no-SQL databases. I've managed version control with GitHub,
            project workflows in Jira, and CI/CD pipelines with Travis,
            following Agile/Scrum methodologies.
          </p>
          <p>
            Always eager to expand my knowledge, I've built projects with
            Python/Django, PHP/Laravel, Bootstrap, Material UI, Styled
            Components, MongoDB, and SQL. I've also written tests with Jest and
            Supertest, and managed projects using Trello, Notion, and GitHub
            Issues.
          </p>
        </div>
      </Container>
    </section>
  );
}
