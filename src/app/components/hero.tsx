import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center space-y-6 py-20 px-6">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg z-0"></div>

      <h1 className="text-5xl font-bold text-[#4d96a6] relative z-10">Next-Gen AI Assistant</h1>
      <p className="text-lg text-gray-300 max-w-2xl relative z-10">
        Experience the power of AI & Machine Learning with real-time analytics and automation.
      </p>

      <Image
        src="/ai-illustration.svg"
        alt="AI Assistant"
        width={500}
        height={500}
        className="relative z-10"
      />

      <button className="relative z-10 px-6 py-3 bg-[#4d96a6] text-white rounded-lg shadow-md hover:bg-[#253745] transition">
        Get Started
      </button>
    </section>
  );
}
