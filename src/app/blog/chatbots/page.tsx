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
      <h1 className="text-4xl font-bold mb-4">
        Creating a Chatbot User Interface
      </h1>
      <p className="text-gray-500 mb-8 text-sm">August 2025</p>

      {/* Featured Image */}
      <div className="w-full rounded-xl overflow-hidden mb-8 border shadow">
        <Image
          src="/chatbot.png" //need to edit this
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
          Recently, I built my own chatbot that works a lot like ChatGPT.
          It&apos;s powered by Gemini PRO, though since I used the free version,
          there are some limitations. I also added a login feature through
          Google Firestore, which means the chatbot can store information for
          each user individually. That was something I really wanted because it
          makes the experience more personalized, and it also gave me some
          practice with authentication and databases.
        </p>
        <div className="w-full rounded-xl overflow-hidden mb-8 border shadow">
          <Image
            src="/login.png" //need to edit this
            alt="Screenshot of this website"
            width={960}
            height={540}
            className="w-full object-cover"
            priority
          />
        </div>
        <p>
          I decided to use Streamlit with Python to build everything, and
          honestly, I really enjoyed the process. Streamlit made it super simple
          to put together a clean, user-friendly interface. At the same time, I
          ran into a lot of trouble with the code. This was by far one of the
          biggest projects I&apos;ve worked on, and debugging took me hours on
          end. I eventually had to restructure the project so I could actually
          follow what was going on. Streamlit also had some limitations like not
          being able to handle multiple pages or anything complicated on the
          interface. It made me think harder about how to organize my work.
        </p>
        <div className="w-full rounded-xl overflow-hidden mb-8 border shadow">
          <Image
            src="/chat.png" //need to edit this
            alt="Screenshot of this website"
            width={960}
            height={540}
            className="w-full object-cover"
            priority
          />
        </div>
        <p>
          In the end, I learned that not every package or framework can do
          everything you want. Sometimes you run into walls that the tool just
          isn&apos;t built to solve. The hardest part was pushing through those
          moments, taking breaks, then coming back until I found a solution. It
          was frustrating at times, but it taught me a lot about problem solving
          and persistence. And honestly, seeing my chatbot actually work made
          all that effort worth it. Although it probably wont ever amount to
          anything, I had fun experimenting with streamlit and its use cases. I
          think that it's a really simple but in depth library that people
          should 100% use if they want to learn something.
        </p>
      </article>
    </main>
  );
}
