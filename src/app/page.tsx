import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <main className="py-section flex flex-1 items-center">
      <Container>
        <Reveal className="max-w-2xl">
          <h1 className="font-display text-[38px] leading-tight font-semibold sm:text-[51px] lg:text-[67px]">
            Discover digital art &amp; collect NFTs
          </h1>
          <p className="text-ink-subtle mt-5 text-lg sm:text-xl">
            Collect, buy and sell art from more than 20k NFT artists.
          </p>
          <Button href="#" size="lg" className="mt-8">
            Get Started
          </Button>
        </Reveal>
      </Container>
    </main>
  );
}
