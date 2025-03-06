import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section
      className={`animate-fadeIn-slow flex h-full w-full flex-col items-center justify-center`}
    >
      <Container>
        <div className="flex w-full flex-col py-20 md:grid md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col">
            <p className="text-9xl leading-40">💻 🎛</p>
            <p className="text-9xl leading-40">🎚 💾</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-green z-10 mb-8 text-center font-mono text-7xl">
              Aaron Mullan <br />
              <span className="text-cyan text-4xl">
                Multi-Faceted Software Developer
              </span>
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
