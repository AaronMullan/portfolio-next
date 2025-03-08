import { ContentBlock } from "@/components/ContentBlock";
import { Container } from "@/components/Container";
import { Headline } from "@/components/Headline";
import { websitesData, sprinklrWebsitesData } from "@/data/websitesData";

export function Websites() {
  return (
    <section className="h-full w-full bg-white lg:py-16">
      <Container>
        <Headline
          title="Lead Software Engineer"
          subtitle="At Avalore Agency, I led the development of greenfield projects and the maintenance of legacy codebases."
        />
        {websitesData.map((website) => (
          <ContentBlock
            key={website.title}
            image={website.image}
            title={website.title}
            subtitle={website.subtitle}
            problem={website.problem}
            solution={website.solution}
            result={website.result}
            reverse={website.reverse}
            url={website.url}
          />
        ))}
        <Headline
          title="Software Engineer"
          subtitle="At Sprinklr, I was part of a team of 5 developers working on a large-scale React application."
        />
        {sprinklrWebsitesData.map((website) => (
          <ContentBlock
            key={website.title}
            image={website.image}
            title={website.title}
            subtitle={website.subtitle}
            problem={website.problem}
            solution={website.solution}
            result={website.result}
            reverse={website.reverse}
            url={website.url}
          />
        ))}
      </Container>
    </section>
  );
}
