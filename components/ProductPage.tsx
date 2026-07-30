import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import OnPremise from "@/components/OnPremise";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import type { Product } from "@/lib/product";

export default function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <Nav activeProduct={product} />
      <main>
        <Hero product={product} />
        <Features product={product} />
        <Pricing product={product} />
        <OnPremise product={product} />
        <FAQ product={product} />
      </main>
      <Footer activeProduct={product} />
    </>
  );
}
