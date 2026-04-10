import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About AI Innovators
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation with the skills they need to thrive in an AI-driven world.
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At AI Innovators, we believe that every student deserves the opportunity to learn about 
            business and artificial intelligence in an engaging, age-appropriate way. Our mission is 
            to prepare K-12 students for the future by teaching them:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Entrepreneurship skills</strong> to turn ideas into reality</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>AI tools and technologies</strong> that are shaping our world</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Ethical thinking</strong> to use technology responsibly</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Business fundamentals</strong> including pitching and presentation skills</span>
            </li>
          </ul>
        </section>

        {/* Why Us Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Innovators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Paced Learning</h3>
              <p className="text-gray-700">
                Learn at your own speed, whenever and wherever you want. No deadlines or pressure - 
                just progress at a pace that works for you.
              </p>
            </div>
            <div className="p-6 bg-primary-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Courses</h3>
              <p className="text-gray-700">
                Engaging, hands-on lessons with real projects and challenges. Build actual skills 
                you can use right away.
              </p>
            </div>
            <div className="p-6 bg-primary-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-700">
                Track your learning journey, earn badges, and see your achievements grow. 
                Stay motivated with visual progress indicators.
              </p>
            </div>
            <div className="p-6 bg-primary-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Free</h3>
              <p className="text-gray-700">
                All courses are completely free forever. No hidden fees, no credit card required. 
                Quality education accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace new ideas and technologies, constantly evolving our curriculum to stay 
                  at the forefront of education.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusivity</h3>
                <p className="text-gray-700">
                  We believe that everyone should have access to quality education in business and AI, 
                  regardless of background or experience.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We maintain high standards in everything we do, from curriculum design to student support.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsibility</h3>
                <p className="text-gray-700">
                  We teach students to be responsible innovators who consider the impact of their 
                  work on society and the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-xl mb-6 text-primary-100">
            Ready to start your journey with AI Innovators? Create your free account and begin learning right away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enroll"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Sign Up Free
            </Link>
            <Link
              href="/programs"
              className="bg-transparent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors border-2 border-white"
            >
              Browse Courses
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

