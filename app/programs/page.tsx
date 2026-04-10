import ProgramCard from "@/components/ProgramCard";
import Link from "next/link";

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Self-paced online courses designed for students at every level. Learn at your own speed, 
            track your progress, and earn certificates - all completely free!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ProgramCard
            title="Elementary Explorers"
            gradeRange="K-5"
            description="An introduction to business concepts and AI through fun, interactive activities and games."
            features={[
              "Basic business concepts through storytelling",
              "Introduction to AI with kid-friendly tools",
              "Creative problem-solving activities",
              "Team collaboration projects",
              "Age-appropriate ethics discussions"
            ]}
            href="/programs#k-5"
          />

          <ProgramCard
            title="Middle School Innovators"
            gradeRange="6-8"
            description="Hands-on learning experiences that combine entrepreneurship with practical AI applications."
            features={[
              "Business plan development",
              "AI tool workshops and projects",
              "Ethical decision-making scenarios",
              "Pitch presentation basics",
              "Real-world case studies"
            ]}
            href="/programs#6-8"
          />

          <ProgramCard
            title="High School Entrepreneurs"
            gradeRange="9-12"
            description="Advanced curriculum preparing students for real-world business and AI challenges."
            features={[
              "Complete startup development",
              "Advanced AI integration",
              "Ethics and social responsibility",
              "Professional pitch competitions",
              "Mentorship and networking"
            ]}
            href="/programs#9-12"
          />
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16 mt-16">
          {/* K-5 Section */}
          <section id="k-5" className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full mr-4">
                K-5
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Elementary Explorers</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Our Elementary Explorers program introduces young minds to the exciting world of business and AI 
              through age-appropriate activities, stories, and hands-on projects. Students learn fundamental 
              concepts while having fun and building confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Learning Areas:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Business basics through interactive stories and games
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Introduction to AI with visual and hands-on tools
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Creative problem-solving and critical thinking
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Format:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Self-paced online lessons
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Interactive activities and games
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Progress tracking and badges
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6-8 Section */}
          <section id="6-8" className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full mr-4">
                6-8
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Middle School Innovators</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Middle School Innovators dive deeper into business and AI concepts through practical projects 
              and real-world applications. Students develop critical thinking skills and learn to work 
              collaboratively on meaningful challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Learning Areas:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Business plan creation and market research
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hands-on AI tool workshops and projects
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ethics discussions and decision-making frameworks
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Format:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Self-paced online courses
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hands-on projects and interactive exercises
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real-world case studies and examples
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9-12 Section */}
          <section id="9-12" className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full mr-4">
                9-12
              </span>
              <h2 className="text-3xl font-bold text-gray-900">High School Entrepreneurs</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              High School Entrepreneurs engage with advanced business and AI concepts, preparing them for 
              college and career success. Students work on real projects, build portfolios, and connect 
              with industry professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Learning Areas:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete startup development from idea to launch
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced AI integration and machine learning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional pitch competitions and networking
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Format:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced self-paced online courses
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive capstone projects
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Portfolio building and certificate programs
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-primary-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Create your free account and start your first course today. All courses are self-paced and completely free!
          </p>
          <Link
            href="/enroll"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  );
}

