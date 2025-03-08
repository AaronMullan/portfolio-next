"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ContentBlockProps {
  image?: string;
  title?: string;
  subtitle?: string;
  problem: string;
  solution: string;
  result: string;
  reverse?: boolean;
  url?: string;
}

export function ContentBlock({
  image = "https://placebear.com/200/200",
  title = "title",
  subtitle,
  problem,
  solution,
  result,
  reverse = false,
  url = "#",
}: ContentBlockProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.3, // Trigger when 30% of the element is visible
  });
  const animationValue = reverse
    ? "animate-slideInLeft"
    : "animate-slideInRight";

  return (
    <div
      ref={ref}
      className={`bg-lightgray border-darkgray shadow-lightgray mb-16 flex w-full flex-col lg:rounded-lg ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${inView ? animationValue : "opacity-0"} transition-all duration-700 ease-out`}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className={`w-full object-cover object-bottom ${
          reverse ? "lg:rounded-r-lg" : "lg:rounded-l-lg"
        }`}
      />
      <div className="flex h-full w-full flex-col justify-center p-4">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="hover:text-red text-green mb-1 text-3xl underline">
            {title}
          </h3>
        </a>
        {subtitle && <h4 className="mb-6 text-xl text-white">{subtitle}</h4>}
        <div className="flex flex-col">
          <p className="mb-4">
            <strong className="text-red">Problem:</strong> {problem}
          </p>
          <p className="mb-4">
            <strong className="text-cyan">Solution:</strong> {solution}
          </p>
          <p className="mb-4">
            <strong className="text-green">Result:</strong> {result}
          </p>
        </div>
      </div>
    </div>
  );
}
