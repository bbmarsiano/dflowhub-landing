import { MDXRemote } from "next-mdx-remote/rsc";
import BlogImage from "./BlogImage";

const components = {
  img: BlogImage,
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="blog-prose">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
