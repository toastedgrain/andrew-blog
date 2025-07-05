"use client";
import Link from "next/link";
import Image from "next/image";

export default function WebsitePost() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 bg-[#f8f8f3] min-h-screen">
      {/* Back button */}
      <Link
        href="/blog"
        className="font-bold inline-flex items-center text-black hover:underline mb-8"
      >
        &#8592; Back to Blog
      </Link>

      {/* Article Title */}
      <h1 className="text-4xl font-bold mb-4">How I made this website</h1>
      <p className="text-gray-500 mb-8 text-sm">July 2025</p>

      {/* Featured Image */}
      <div className="w-full rounded-xl overflow-hidden mb-8 border shadow">
        <Image
          src="/website-process.png"
          alt="Screenshot of this website"
          width={960}
          height={540}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-xl font-serif text-xl space-y-5 text-gray-800 gap-y-8">
        <p>
          I wanted to create a personal website that reflected both my
          personality and my passion for tech, and clean design. Initially, I
          chose Hugo and Netlify to quickly launch a static site, thinking it
          would simplify the entire process. However, my experience wasn't as
          smooth as anticipated. While Hugo allowed me to rapidly build the
          foundation, I quickly found myself tangled in a web of broken links,
          messy layouts, and deployment frustrations. Netlify amplified these
          problems due to misconfigured routes and failed deployments. After
          spending countless hours troubleshooting, I realized it was time for a
          complete restart.
        </p>
        <p>
          Determined to build something reliable and scalable, I researched and
          found Next.js combined with Tailwind CSS and Framer Motion. Next.js
          offered the structure and flexibility I needed, while Tailwind
          provided a sleek, intuitive styling approach, and Framer Motion added
          the dynamic touch that made the website feel alive. It allowed me to
          be even more creative and aesthetic with my ideas.
        </p>
        <p>
          In designing this new site, every detail mattered. I prioritized
          visual clarity and user comfort. Animations were thoughtfully placed
          to guide visitors without overwhelming them, ensuring every
          interaction was intuitive and satisfying. Even subtle details like the
          scroll indicator arrow were designed and iterated upon multiple times
          to achieve the perfect blend of elegance and functionality. After
          completing the website design, I will be deploying it on GitHub and
          hopefully being able to publish it online. I hope to buy my own domain
          perhaps.
        </p>
        <p>
          Reflecting on the process, I&apos;ve learned how crucial patience and
          iteration are in creating something truly polished. I have learnt my
          skill levels and abilities to code. I have continued to learn ways to
          become more efficient in my process and coding and I hope to
          accomplish more as time goes on.
        </p>
        <p>
          While this version of my website accomplishes many goals, I&apos;m
          already thinking ahead about future improvements. These include adding
          more interactive features, enhancing accessibility, incorporating a
          backend for dynamic blog posting, and optimizing for even better
          performance across devices. The website isn&apos;t finished, it will
          continue to evolve as I grow, learn, and refine my skills further.
        </p>
      </article>
    </main>
  );
}
