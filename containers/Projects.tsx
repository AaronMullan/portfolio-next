import { Cardgrid } from "../components/Cardgrid";
import { Container } from "../components/Container";
import { Headline } from "../components/Headline";

export function Projects() {
  return (
    <section className="mt-16 h-full w-full">
      <Container>
        <Headline title="Projects" textColor="cyan" />
        <Cardgrid />
      </Container>
    </section>
  );
}
