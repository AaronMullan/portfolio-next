import { Container } from "@/components/Container";

export function About() {
  return (
    <section className="animate-fadeIn-slow animate-slideInRight h-full w-full pb-16 opacity-0">
      <Container>
        <div className="border-cyan bg-lightgray space-y-6 rounded-lg border-4 px-16 py-16 text-justify text-xl text-white">
          <p>
            <span className="text-red mr-2 text-7xl">Hello, World!</span> I'm a
            Full Stack Software Developer with a Front End focus. Before
            transitioning to coding in 2019 I built a career as an Audio
            Engineer, touring with rock bands. That experience sharpened my
            ability to collaborate under pressure, solve problems creatively,
            and navigate big personalities—skills that now serve me well in
            software development.
          </p>
          <p>
            I bring the same passion for craftsmanship and teamwork to coding;
            pairing relentless curiosity with strong communication to translate
            stakeholder visions into technically excellent, user-focused
            products.
          </p>
          <p>
            As a Developer, I work closely with the business and design teams to
            scope projects, and select technologies. In a leadership role I
            establish code patterns, plan development sprints, and assign tasks.
            I thrive at the intersection of learning and collaboration—diving
            deep into technologies, then working with people knowledgeable in
            other areas to create something greater than the sum of its parts.
          </p>
        </div>
      </Container>
    </section>
  );
}
