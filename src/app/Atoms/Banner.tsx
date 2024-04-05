import Image from "next/image";

export interface BannerProps {
  image: string;
  width?: number;
  height?: number;
  alt: string;
}

const Banner = ({ image, width = 1200, height = 400, alt }: BannerProps) => {
  return (
    <section className="mb-12">
      <Image
        width={width}
        height={height}
        src={image}
        alt={alt}
        className="rounded w-full"
      />
    </section>
  );
};

export default Banner;
