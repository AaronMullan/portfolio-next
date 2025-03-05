import { ContentBlock } from "@/components/ContentBlock";
import { Container } from "@/components/Container";
import { websitesData } from "@/data/websitesData";

export function Websites() {
  return (
    <section className="h-full w-full bg-white py-4">
      <Container>
        <div className="mb-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="border-darkgray flex-grow border-t"></div>
            <h2 className="text-darkgray text-4xl">Lead Software Engineer</h2>
            <div className="border-darkgray flex-grow border-t"></div>
          </div>

          <h3 className="text-darkgray mb-12 text-center text-xl">
            At Avalore Agency, I led the development of greenfield projects and
            the maintenance of legacy codebases. Selected works below.
          </h3>
        </div>
        {websitesData.map((website) => (
          <ContentBlock
            key={website?.title}
            image={website?.image}
            title={website?.title}
            description={website?.description}
            reverse={website?.reverse}
            url={website?.url}
          />
        ))}
      </Container>
    </section>
  );
}
