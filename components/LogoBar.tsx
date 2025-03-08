"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface LogosLoopProps {
  logos: string[];
}

export function LogoBar({ logos }: LogosLoopProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`logos-loop mb-8 flex w-full items-center justify-center bg-white opacity-0 transition-opacity duration-700 ease-out ${
        inView ? "animate-fadeIn opacity-100" : ""
      }`}
    >
      <div className="logos-container flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => {
          // Extracting the file name from the logo URL
          const fileName =
            logo.split("/").pop()?.split(".")[0] ?? `logo-${index}`;

          return (
            <div
              key={index}
              className="logo-item flex flex-shrink-0 flex-col justify-center"
            >
              <Image
                src={logo}
                alt={fileName} // Using the extracted file name as alt text
                layout="intrinsic"
                width={150}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
