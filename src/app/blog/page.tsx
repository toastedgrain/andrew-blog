import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="container mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {/* RECENT BLOG POSTS */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        {/* Placeholder posts until we add Markdown support */}
        <ul className="space-y-4">
          <li className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <Link
              href="/blog/my-first-post"
              className="text-xl font-semibold text-blue-400 hover:underline"
            >
              How I made this website
            </Link>
            <div className="text-gray-500 text-sm">July 2025</div>
            <p className="mt-2 text-gray-700">
              I quick peek into why and how I chose to make this website
            </p>
          </li>
          <li className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <Link
              href="/blog/balancing-life"
              className="text-xl font-semibold text-blue-400 hover:underline"
            >
              Creating a Chatbot User Interface
            </Link>
            <div className="text-gray-500 text-sm">August 2025</div>
            <p className="mt-2 text-gray-700">
              Sharing how I created a Gemini powered chatbot interface for
              personal fun
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
