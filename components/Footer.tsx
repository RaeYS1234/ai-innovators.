import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AI Innovators</h3>
            <p className="text-gray-400 mb-4">
              Empowering K-12 students with business and AI skills for the future.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AI Innovators. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-gray-400 hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/enroll" className="text-gray-400 hover:text-white transition-colors">
                  Enroll Now
                </Link>
              </li>
              <li>
                <a href="mailto:info@aiinnovators.com" className="text-gray-400 hover:text-white transition-colors">
                  info@aiinnovators.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


