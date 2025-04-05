import Image from "next/image";

type SlideProps = {
  title: string;
  description: string;
  image: string;
};

export default function Slide({ title, description, image }: SlideProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg">
      <h1 className="text-5xl font-bold text-[#4d96a6]">{title}</h1>
      <p className="text-lg text-gray-300 max-w-2xl">{description}</p>
      <Image src={image} alt={title} width={500} height={500} />
    </div>
  );
}
