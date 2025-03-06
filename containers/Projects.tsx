import { Cardgrid } from "../components/Cardgrid";
import { Container } from "../components/Container";
import { Headline } from "../components/Headline";

export function Projects() {
  return (
    <section className="border-primary h-full w-full border-2 p-4">
      <Container>
        <Headline
          title="Projects"
          subtitle="Here are some of the projects I've worked on."
          textColor="cyan"
        />
        <Cardgrid />
      </Container>
    </section>
  );
}
