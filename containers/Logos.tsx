import { LogoBar } from "../components/LogoBar";
import { Container } from "../components/Container";
import { Headline } from "@/components/Headline";

const coreLogos = [
  "/logos/node.svg",
  "/logos/react.png",
  "/logos/tailwind.svg",
  "/logos/next.svg",
  "/logos/algolia.svg",
  "/logos/sql.png",
  "/logos/firebase.svg",
  "/logos/stripe.svg",
  "/logos/stream.png",
  "/logos/clerk.svg",
  "/logos/contentful.svg",
  "/logos/mailchimp.svg",
  "/logos/strapi.svg",
];
const integrationLogos = [];

export function Logos() {
  return (
    <div className="w-full bg-white pt-16">
      <Container>
        <LogoBar logos={coreLogos} />
      </Container>
    </div>
  );
}
