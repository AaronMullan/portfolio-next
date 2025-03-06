"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ContentBlockProps {
  image?: string;
  title?: string;
  description?: string | React.ReactNode;
  reverse?: boolean;
  url?: string;
}

export function ContentBlock({
  image = "https://placebear.com/200/200",
  title = "title",
  description = "description",
  reverse = false,
  url = "#",
}: ContentBlockProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.3, // Trigger when 50% of the element is visible
  });
  const animationValue = reverse
    ? "animate-slideInLeft"
    : "animate-slideInRight";

  return (
    <div
      ref={ref}
      className={`bg-lightgray border-darkgray shadow-lightgray mb-16 flex w-full flex-col rounded-lg ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${inView ? animationValue : "opacity-0"} transition-all duration-700 ease-out`}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className={`h-[30rem] w-full object-cover object-bottom sm:h-[35rem] md:h-[30rem] ${
          reverse ? "rounded-r-lg" : "rounded-l-lg"
        }`}
      />
      <div className="h-auto w-full p-4">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="hover:text-red text-green mb-4 text-3xl underline">
            {title}
          </h3>
        </a>
        <>{description}</>
      </div>
    </div>
  );
}
