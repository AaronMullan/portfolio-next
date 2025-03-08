import { Container } from "@/components/Container";

export function Hero() {
  return (
    <>
      <section
        className={`animate-fadeIn-slow relative flex h-full w-full flex-col items-center justify-center`}
      >
        <div className="absolute inset-0 bg-[url('/at-mixer.jpg')] bg-cover bg-center opacity-20 grayscale-100 saturate-0 filter"></div>
        <Container>
          <div className="flex w-full flex-col py-20 md:grid-cols-[1fr_2fr] lg:grid">
            <div className="hidden flex-col opacity-100 lg:flex">
              <p className="text-9xl leading-40">💻 🎛</p>
              <p className="text-9xl leading-40">🎚 💾</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <h1 className="text-green z-10 mb-8 w-full text-center font-mono text-7xl">
                Aaron Mullan <br />
                <span className="text-cyan text-4xl">
                  Multi-Faceted Software Developer
                </span>
              </h1>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
