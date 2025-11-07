import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Bot, Sparkles } from "lucide-react";

function AISection() {
  return (
    <section id="ai" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <Bot size={28} /> Gemini-powered planning
            </h2>
            <p className="mt-3 text-gray-600">Ask anything about Maharashtra, generate day-by-day itineraries, and translate on demand. Built with a modular AI adapter so we can swap models without changing the UI.</p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-6">
              <li>Deterministic itinerary JSON with schema validation</li>
              <li>Chat-first interface with actions</li>
              <li>Offline-friendly caching</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
              <Sparkles size={16} /> Demo prompt
            </div>
            <p className="mt-2 text-gray-600">Plan a 3-day trip to Pune focused on forts and food, budget-friendly, in Marathi.</p>
            <div className="mt-4 rounded-lg bg-gray-900 text-gray-100 p-4 text-sm whitespace-pre-wrap">
{`{
  "origin": "Mumbai",
  "days": 3,
  "interests": ["forts", "food"],
  "preferred_language": "mr"
}`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AISection />
        <section id="get-started" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-indigo-50 to-sky-50">
              <h3 className="text-2xl font-bold text-gray-900">Ready to explore?</h3>
              <p className="mt-2 text-gray-700">This web preview showcases the design and flow of MahaYatri. The full mobile app is being built with Flutter and Firebase per spec.</p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 hover:bg-gray-800">Join the waitlist</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
