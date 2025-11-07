export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900">MahaYatri</h4>
            <p className="mt-2 text-gray-600">Travel smarter across Maharashtra with verified guides and AI planning.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#ai" className="hover:underline">AI Planner</a></li>
              <li><a href="#get-started" className="hover:underline">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="mt-2 text-gray-600">support@mahayatri.app</p>
            <p className="text-gray-600">Mumbai, Maharashtra</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MahaYatri. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
