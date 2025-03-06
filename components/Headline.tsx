"use client";
import { useInView } from "react-intersection-observer";

interface HeadlineProps {
  title: string;
  subtitle?: string;
  textColor?: string;
}

export function Headline({
  title,
  subtitle,
  textColor = "darkgray",
}: HeadlineProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const colorClasses = colorMap[textColor] || colorMap["darkgray"];

  return (
    <div
      ref={ref}
      className={`mb-8 opacity-0 transition-opacity duration-700 ease-out ${
        inView ? "animate-fadeIn opacity-100" : ""
      }`}
    >
      <div className="mb-8 flex items-center gap-4">
        <div className={`flex-grow border-t ${colorClasses}`}></div>
        <h2 className={`text-4xl ${colorClasses}`}>{title}</h2>
        <div className={`flex-grow border-t ${colorClasses}`}></div>
      </div>

      {subtitle && (
        <h3 className={`mb-12 text-center text-xl ${colorClasses}`}>
          {subtitle}
        </h3>
      )}
    </div>
  );
}

const colorMap: Record<string, string> = {
  darkgray: "text-darkgray border-darkgray",
  red: "text-red border-red",
  cyan: "text-cyan border-cyan",
  purple: "text-purple border-purple",
  green: "text-green border-green",
  white: "text-white border-white",
};
