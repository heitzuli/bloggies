import Header from "@/app/components/header";
import ContentfulImage from "@/lib/contentful-image";

export default async function Page() {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-[80vh] px-5">
        <article className="prose min-w-fit">
          <h2 className="text-4xl md:text-6xl">About me</h2>
          <div className="block md:flex">
            <div className="mr-0 md:mr-8">
              <ContentfulImage
                alt="Heidi Poels"
                priority
                width={1000}
                height={1000}
                src="https://images.ctfassets.net/2dv8znn6i2ff/1MXqEcjqzmtQEEJsk2g4Og/563b363ae1d9d01407833d538666cf25/heidi.jpg"
              />
            </div>
            <div>
              <p>
                Hello everyone! I&rsquo;m Heidi, and I live in Tampere, Finland.
                Ever since I can remember, I&rsquo;ve had a passion for all
                things crafty. Whether it&rsquo;s knitting, sewing, painting, or
                working with clay, I love the feeling of creating something
                beautiful with my hands. There&rsquo;s something so special
                about taking raw materials and transforming them into something
                unique. Lately, though, my heart has been captured by a
                particular art form—pottery. There&rsquo;s just something about
                working with clay that feels deeply satisfying and grounding.
              </p>
              <p>
                Pottery has allowed me to explore a new side of myself, one that
                values patience and detail. The process can be a bit messy, but
                I love every bit of it, from kneading the clay to shaping it on
                the wheel and eventually firing it into a solid form. I think
                one of the reasons I&rsquo;m so drawn to pottery is because it
                connects me to Japanese culture, which has been a huge influence
                on me for years. Japanese pottery, with its understated beauty
                and attention to detail, inspires me to approach my work with a
                similar level of respect and mindfulness.
              </p>
              <p>
                Japan has always felt like a second home to my imagination. I
                adore everything from the traditional art forms to the adorable
                and playful kawaii culture that brings so much joy and
                brightness into everyday life. Kawaii culture, with its emphasis
                on cute, whimsical, and colorful designs, has found its way into
                nearly every aspect of my craft. When I&rsquo;m not making more
                traditional pottery pieces, I love to experiment with cute
                characters and pastel glazes, bringing a bit of that kawaii
                charm to each piece. It&rsquo;s a perfect blend of my two
                passions—Japanese aesthetics and playful design.
              </p>
              <p>
                One of my favorite projects recently was creating a series of
                tiny ceramic animals with round eyes, rosy cheeks, and soft,
                pastel glazes. Inspired by kawaii characters, they&rsquo;re
                simple yet adorable and bring a smile to anyone who sees them.
                Each piece, whether it&rsquo;s a bowl, a mug, or a tiny animal
                figurine, holds a bit of my heart and reflects my love for all
                things cute and creative.
              </p>
              <p>
                Living in Tampere gives me a lot of inspiration, too. Surrounded
                by nature and the calmness of Finnish life, I feel like I have
                the perfect environment to let my creativity flow. Every time I
                visit a local pottery studio or sit down at my own little
                crafting corner at home, I feel so grateful to be able to do
                what I love. Crafting has given me a way to connect not only
                with other cultures but also with people who appreciate handmade
                beauty.
              </p>
              <p>
                As I continue exploring pottery, I&rsquo;m excited to see where
                this journey will take me. Maybe one day, I&rsquo;ll visit Japan
                and see the art and culture that has inspired me for so long.
                Until then, I&rsquo;ll keep making things, one clay creation at
                a time, with love, creativity, and a sprinkle of kawaii! Thank
                you for reading and sharing in my crafty journey.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
