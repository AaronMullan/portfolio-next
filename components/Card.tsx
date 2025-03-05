import Image from "next/image";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
}

export function Card({
  image = "https://placebear.com/200/200",
  title = "title",
  description = "description",
}: CardProps) {
  return (
    <div className="border-primary border-2 p-4">
      <Image src={image} alt={title} width={200} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
