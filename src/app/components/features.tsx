import { Sparkles, Brain, Code } from "lucide-react";

const features = [
  { icon: <Sparkles className="w-8 h-8 text-[#4d96a6]" />, title: "AI-Powered", desc: "Advanced deep learning capabilities" },
  { icon: <Brain className="w-8 h-8 text-[#4d96a6]" />, title: "Smart Insights", desc: "Real-time analytics & predictions" },
  { icon: <Code className="w-8 h-8 text-[#4d96a6]" />, title: "Seamless Integration", desc: "Works with your existing tech stack" },
];

export default function Features() {
  return (
    <section className="flex flex-wrap justify-center gap-6 px-6 py-12">
      {features.map((feature, index) => (
        <div key={index} className="w-64 p-6 bg-white/10 backdrop-blur-lg rounded-2xl text-center shadow-lg">
          {feature.icon}
          <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
          <p className="text-gray-300">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}
