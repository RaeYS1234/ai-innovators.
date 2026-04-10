import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Enroll() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Create Your Free Account
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sign up to start learning today! All courses are free and you can learn at your own pace. 
            Get started in seconds - no credit card required.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign Up to Start Learning</h2>
          <ContactForm />
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Create Your Account</h3>
                <p className="text-gray-700">
                  Sign up with your name, email, and grade level. It takes less than a minute!
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Choose Your Course</h3>
                <p className="text-gray-700">
                  Browse our courses and pick the one that interests you most. You can start multiple courses!
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Learn at Your Own Pace</h3>
                <p className="text-gray-700">
                  Work through interactive lessons, complete projects, and track your progress. 
                  Learn whenever you want!
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Earn Certificates</h3>
                <p className="text-gray-700">
                  Complete courses and earn certificates to showcase your new skills!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Want to learn more first?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View Our Programs →
            </Link>
            <Link
              href="/curriculum"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Explore Curriculum →
            </Link>
            <Link
              href="/about"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Learn About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

