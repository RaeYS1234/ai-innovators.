export default function Curriculum() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Curriculum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive, age-appropriate curriculum designed to build real-world skills 
            in business and AI.
          </p>
        </div>

        <div className="space-y-8">
          {/* Core Pillars */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Learning Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrepreneurship</h3>
                <p className="text-gray-700">
                  From ideation to execution, students learn the fundamentals of starting and running a business.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Tools</h3>
                <p className="text-gray-700">
                  Hands-on experience with cutting-edge AI technologies and their practical applications.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ethics</h3>
                <p className="text-gray-700">
                  Understanding the ethical implications of AI and responsible innovation practices.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pitching & Business</h3>
                <p className="text-gray-700">
                  Developing presentation skills and learning essential business fundamentals.
                </p>
              </div>
            </div>
          </section>

          {/* Curriculum by Grade Level */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum by Grade Level</h2>
            
            {/* K-5 Curriculum */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  K-5
                </span>
                Elementary Explorers Curriculum
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entrepreneurship</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• What is a business?</li>
                    <li>• Identifying problems and solutions</li>
                    <li>• Creating simple business ideas</li>
                    <li>• Understanding customers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Tools</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Introduction to AI concepts</li>
                    <li>• Kid-friendly AI tools exploration</li>
                    <li>• AI in everyday life</li>
                    <li>• Creative AI projects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ethics</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Being fair and kind</li>
                    <li>• Understanding right and wrong</li>
                    <li>• Respecting others&apos; ideas</li>
                    <li>• Using technology responsibly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pitching & Business</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Sharing ideas with confidence</li>
                    <li>• Simple presentation skills</li>
                    <li>• Working in teams</li>
                    <li>• Celebrating achievements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6-8 Curriculum */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  6-8
                </span>
                Middle School Innovators Curriculum
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entrepreneurship</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Business plan development</li>
                    <li>• Market research and analysis</li>
                    <li>• Product/service design</li>
                    <li>• Basic financial concepts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Tools</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• AI tool workshops</li>
                    <li>• Building AI-powered projects</li>
                    <li>• Data analysis basics</li>
                    <li>• Automation concepts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ethics</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Ethical decision-making frameworks</li>
                    <li>• Privacy and data protection</li>
                    <li>• Bias in AI systems</li>
                    <li>• Social responsibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pitching & Business</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Presentation skills development</li>
                    <li>• Creating effective pitches</li>
                    <li>• Business communication</li>
                    <li>• Team leadership</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 9-12 Curriculum */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  9-12
                </span>
                High School Entrepreneurs Curriculum
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entrepreneurship</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Complete startup development</li>
                    <li>• Advanced business strategy</li>
                    <li>• Financial planning and management</li>
                    <li>• Scaling and growth strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Tools</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Advanced AI integration</li>
                    <li>• Machine learning fundamentals</li>
                    <li>• AI in business applications</li>
                    <li>• Building AI solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ethics</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Advanced ethics frameworks</li>
                    <li>• AI governance and regulation</li>
                    <li>• Ethical leadership</li>
                    <li>• Social impact assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pitching & Business</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Professional pitch development</li>
                    <li>• Investor presentations</li>
                    <li>• Business networking</li>
                    <li>• Portfolio building</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Methodology */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Teaching Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project-Based Learning</h3>
                <p className="text-gray-700">
                  Students work on real projects that solve actual problems, making learning meaningful and engaging.
                </p>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Approach</h3>
                <p className="text-gray-700">
                  Teamwork and peer learning are emphasized, preparing students for real-world collaboration.
                </p>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On Experience</h3>
                <p className="text-gray-700">
                  Learning by doing ensures students gain practical skills they can apply immediately.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


