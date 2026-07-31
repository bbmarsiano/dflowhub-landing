import { MDXRemote } from "next-mdx-remote/rsc";

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="blog-prose">
      <MDXRemote source={source} />
    </div>
  );
}
