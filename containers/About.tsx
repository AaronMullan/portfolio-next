import { Container } from "@/components/Container";

export function About() {
  return (
    <section className="animate-fadeIn-slow animate-slideInRight -mt-12 h-full w-full pb-16 opacity-0">
      <Container>
        <div className="border-cyan bg-lightgray space-y-6 rounded-lg border-4 px-2 py-4 text-xl text-white lg:px-16 lg:py-16">
          <p>
            <span className="text-red mr-2 text-7xl">Hello, World!</span> I'm a
            Full Stack Software Developer with a Product focus. Before
            transitioning to coding in 2019 I built a career as an Audio
            Engineer. Touring with rock bands sharpened my ability to
            collaborate under pressure, solve problems creatively, and navigate
            big personalities—skills that now serve me well in software
            development.
          </p>
          <p>
            I bring the same passion for craftsmanship and teamwork to coding;
            pairing relentless curiosity with strong communication to translate
            stakeholder visions into technically excellent, user-focused
            products. As a Developer, I work closely with the business and
            design teams to scope projects and select technologies. In a
            leadership role I establish code patterns, plan development sprints,
            and assign tasks.
          </p>
          <p>
            At it's best, creating software or music exists where I thrive: at
            the intersection of learning and collaboration; where I can dive
            deep into technologies, then work with people knowledgeable in other
            areas to create something greater than the sum of its parts.
          </p>
        </div>
      </Container>
    </section>
  );
}
