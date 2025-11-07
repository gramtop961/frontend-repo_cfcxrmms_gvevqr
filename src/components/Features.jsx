import { ShieldCheck, MapPin, Bot, CreditCard, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Offline Maps & POIs",
    desc: "Cache regions for low connectivity. Navigate with confidence across Maharashtra.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Local Guides",
    desc: "Trusted professionals with ratings, reviews, and admin verification.",
  },
  {
    icon: Bot,
    title: "AI Trip Planner",
    desc: "Gemini-powered itineraries tailored to your interests and time.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Razorpay test-mode integrated with refunds and receipts.",
  },
  {
    icon: LifeBuoy,
    title: "SOS & Live Tracking",
    desc: "Real-time location sharing and emergency alerts with SMS fallback.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need for unforgettable trips</h2>
          <p className="mt-3 text-gray-600">Designed for reliability, privacy, and ease. Built with Flutter + Firebase under the hood.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
