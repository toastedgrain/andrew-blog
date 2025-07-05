export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-8">Resume</h1>
      <img
        src="/resume.png"
        alt="Andrew Zhao's Resume"
        className="w-full max-w-2xl rounded-xl shadow-xl border"
        draggable={false}
      />
    </main>
  );
}
