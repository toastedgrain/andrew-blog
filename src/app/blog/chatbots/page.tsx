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
        <p></p>
      </article>
    </main>
  );
}
