import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/5H9LMa0LX8ElX3Rj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">Explore Maharashtra with MahaYatri</h1>
          <p className="mt-4 text-lg text-gray-600">Connect with verified local guides, get AI-designed itineraries, and travel confidently with live tracking and SOS.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Get Started</a>
            <a href="#features" className="px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-200 hover:bg-white">Learn More</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
