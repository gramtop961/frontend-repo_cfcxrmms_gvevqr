import { Menu, Map, Bot } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 text-white">
              <Map size={18} />
            </div>
            <span className="font-semibold text-gray-900 tracking-tight">MahaYatri</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#ai" className="hover:text-gray-900 transition-colors flex items-center gap-1">
              <Bot size={16} /> AI Planner
            </a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a href="#get-started" className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800">Get Started</a>
          </nav>

          <button
            aria-label="Open Menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#features" className="py-1">Features</a>
            <a href="#ai" className="py-1 flex items-center gap-1"><Bot size={16}/> AI Planner</a>
            <a href="#contact" className="py-1">Contact</a>
            <a href="#get-started" className="py-2 text-center rounded-md bg-gray-900 text-white">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
