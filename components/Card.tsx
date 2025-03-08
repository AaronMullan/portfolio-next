import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
  siteUrl?: string;
  codeUrl?: string;
}

export function Card({
  image = "https://placebear.com/200/200",
  title = "title",
  description = "description",
  siteUrl = "#",
  codeUrl = "#",
}: CardProps) {
  const isExternal = (url: string) => url !== "#";
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`bg-lightgray shadow-green border-lightgray border-2 opacity-0 shadow-lg transition-all duration-1200 ease-out lg:rounded-lg ${
        inView ? "opacity-100" : ""
      }`}
    >
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top lg:rounded-t-lg"
        />
      </div>
      <div className="flex h-48 flex-col justify-between p-4">
        <div>
          <h3 className="text-red text-xl font-semibold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <a
            href={siteUrl}
            {...(isExternal(siteUrl)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="bg-darkgray border-red hover:bg-darkgray hover:text-red rounded-lg border-2 px-4 py-2 shadow-lg transition"
          >
            Visit Site
          </a>
          <a
            href={codeUrl}
            {...(isExternal(codeUrl)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="bg-darkgray border-cyan shadow-jg hover:bg-darkgray hover:text-cyan rounded-lg border-2 px-4 py-2 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
