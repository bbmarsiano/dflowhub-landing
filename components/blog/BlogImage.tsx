import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
};

export default function BlogImage({ src, alt = "" }: Props) {
  if (!src) return null;

  return (
    <figure className="blog-figure my-8 mx-auto w-full max-w-full">
      <div
        className="overflow-hidden rounded-2xl"
        style={{
          border: "1px solid var(--border)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          background: "var(--surface)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 720px"
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {alt ? (
        <figcaption
          className="mt-3 text-center text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
