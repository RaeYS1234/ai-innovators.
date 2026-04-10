"use client";

import Link from "next/link";
import { useState } from "react";

interface Course {
  id: string;
  title: string;
  description: string;
  gradeRange: string;
  lessons: number;
  duration: string;
  progress: number;
  category: string;
}

export default function Courses() {
  const [selectedGrade, setSelectedGrade] = useState<string>("all");

  const courses: Course[] = [
    {
      id: "intro-business-k5",
      title: "Introduction to Business",
      description: "Learn what businesses are and how they work through fun stories and activities.",
      gradeRange: "K-5",
      lessons: 12,
      duration: "2-3 hours",
      progress: 0,
      category: "Entrepreneurship"
    },
    {
      id: "ai-basics-k5",
      title: "AI Basics for Kids",
      description: "Discover AI through interactive games and kid-friendly tools.",
      gradeRange: "K-5",
      lessons: 10,
      duration: "2 hours",
      progress: 0,
      category: "AI Tools"
    },
    {
      id: "being-fair-k5",
      title: "Being Fair and Kind",
      description: "Learn about making good choices and treating others fairly.",
      gradeRange: "K-5",
      lessons: 8,
      duration: "1.5 hours",
      progress: 0,
      category: "Ethics"
    },
    {
      id: "sharing-ideas-k5",
      title: "Sharing Your Ideas",
      description: "Practice presenting your ideas with confidence and creativity.",
      gradeRange: "K-5",
      lessons: 6,
      duration: "1 hour",
      progress: 0,
      category: "Pitching & Business"
    },
    {
      id: "business-plan-68",
      title: "Create Your Business Plan",
      description: "Learn how to turn your idea into a real business plan.",
      gradeRange: "6-8",
      lessons: 15,
      duration: "4-5 hours",
      progress: 0,
      category: "Entrepreneurship"
    },
    {
      id: "ai-tools-68",
      title: "AI Tools Workshop",
      description: "Hands-on projects using real AI tools and technologies.",
      gradeRange: "6-8",
      lessons: 18,
      duration: "5-6 hours",
      progress: 0,
      category: "AI Tools"
    },
    {
      id: "ethical-decisions-68",
      title: "Making Ethical Decisions",
      description: "Explore ethical frameworks and learn to make responsible choices.",
      gradeRange: "6-8",
      lessons: 12,
      duration: "3-4 hours",
      progress: 0,
      category: "Ethics"
    },
    {
      id: "pitch-presentation-68",
      title: "Pitch Presentation Skills",
      description: "Master the art of presenting your ideas effectively.",
      gradeRange: "6-8",
      lessons: 10,
      duration: "3 hours",
      progress: 0,
      category: "Pitching & Business"
    },
    {
      id: "startup-development-912",
      title: "Startup Development",
      description: "Build a complete startup from idea to launch.",
      gradeRange: "9-12",
      lessons: 25,
      duration: "8-10 hours",
      progress: 0,
      category: "Entrepreneurship"
    },
    {
      id: "advanced-ai-912",
      title: "Advanced AI Integration",
      description: "Learn to integrate AI into real business applications.",
      gradeRange: "9-12",
      lessons: 20,
      duration: "7-8 hours",
      progress: 0,
      category: "AI Tools"
    },
    {
      id: "ai-ethics-912",
      title: "AI Ethics & Governance",
      description: "Deep dive into ethical AI practices and responsible innovation.",
      gradeRange: "9-12",
      lessons: 15,
      duration: "5-6 hours",
      progress: 0,
      category: "Ethics"
    },
    {
      id: "professional-pitch-912",
      title: "Professional Pitch Development",
      description: "Create investor-ready pitches and presentations.",
      gradeRange: "9-12",
      lessons: 14,
      duration: "4-5 hours",
      progress: 0,
      category: "Pitching & Business"
    },
  ];

  const filteredCourses = selectedGrade === "all" 
    ? courses 
    : courses.filter(course => course.gradeRange === selectedGrade);

  const categories = ["All", "Entrepreneurship", "AI Tools", "Ethics", "Pitching & Business"];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Courses
          </h1>
          <p className="text-xl text-gray-600">
            Continue your learning journey. Pick up where you left off or start a new course!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGrade("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedGrade === "all"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setSelectedGrade("K-5")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedGrade === "K-5"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            K-5
          </button>
          <button
            onClick={() => setSelectedGrade("6-8")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedGrade === "6-8"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            6-8
          </button>
          <button
            onClick={() => setSelectedGrade("9-12")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedGrade === "9-12"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            9-12
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.gradeRange}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.lessons} lessons</span>
                  <span>{course.duration}</span>
                </div>

                {course.progress > 0 ? (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Progress</span>
                      <span className="text-gray-700 font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 text-sm text-gray-500">
                    Not started yet
                  </div>
                )}

                <Link
                  href={`/courses/${course.id}`}
                  className="block w-full bg-primary-600 text-white text-center px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
                >
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No courses found for this grade level.</p>
          </div>
        )}
      </div>
    </div>
  );
}


