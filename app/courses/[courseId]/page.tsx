"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Lesson {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  duration: string;
}

const courseData: Record<string, {
  title: string;
  description: string;
  gradeRange: string;
  category: string;
  lessons: Lesson[];
}> = {
  "intro-business-k5": {
    title: "Introduction to Business",
    description: "Learn what businesses are and how they work through fun stories and activities.",
    gradeRange: "K-5",
    category: "Entrepreneurship",
    lessons: [
      { id: 1, title: "What is a Business?", description: "Learn the basics of what businesses do", completed: false, duration: "10 min" },
      { id: 2, title: "Types of Businesses", description: "Explore different kinds of businesses", completed: false, duration: "15 min" },
      { id: 3, title: "Customers and Products", description: "Understand who customers are and what products are", completed: false, duration: "12 min" },
      { id: 4, title: "Making Money", description: "Learn how businesses make money", completed: false, duration: "10 min" },
      { id: 5, title: "Your First Business Idea", description: "Come up with your own business idea", completed: false, duration: "20 min" },
    ]
  },
  "ai-basics-k5": {
    title: "AI Basics for Kids",
    description: "Discover AI through interactive games and kid-friendly tools.",
    gradeRange: "K-5",
    category: "AI Tools",
    lessons: [
      { id: 1, title: "What is AI?", description: "Introduction to artificial intelligence", completed: false, duration: "10 min" },
      { id: 2, title: "AI in Everyday Life", description: "See how AI helps us every day", completed: false, duration: "15 min" },
      { id: 3, title: "Fun AI Games", description: "Play games that use AI", completed: false, duration: "20 min" },
    ]
  },
  "business-plan-68": {
    title: "Create Your Business Plan",
    description: "Learn how to turn your idea into a real business plan.",
    gradeRange: "6-8",
    category: "Entrepreneurship",
    lessons: [
      { id: 1, title: "Understanding Business Plans", description: "What is a business plan and why do you need one?", completed: false, duration: "15 min" },
      { id: 2, title: "Your Business Idea", description: "Develop and refine your business idea", completed: false, duration: "20 min" },
      { id: 3, title: "Target Customers", description: "Identify who your customers are", completed: false, duration: "18 min" },
      { id: 4, title: "Products and Services", description: "Define what you'll offer", completed: false, duration: "15 min" },
      { id: 5, title: "Pricing Strategy", description: "Learn how to price your products", completed: false, duration: "20 min" },
    ]
  },
  "startup-development-912": {
    title: "Startup Development",
    description: "Build a complete startup from idea to launch.",
    gradeRange: "9-12",
    category: "Entrepreneurship",
    lessons: [
      { id: 1, title: "From Idea to Startup", description: "Introduction to startup development", completed: false, duration: "20 min" },
      { id: 2, title: "Market Research", description: "Research your target market", completed: false, duration: "25 min" },
      { id: 3, title: "Business Model Design", description: "Design your business model", completed: false, duration: "30 min" },
      { id: 4, title: "Financial Planning", description: "Plan your startup finances", completed: false, duration: "25 min" },
      { id: 5, title: "Launch Strategy", description: "Plan your product launch", completed: false, duration: "20 min" },
    ]
  },
};

export default function CourseDetail() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = courseData[courseId];
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">This course doesn&apos;t exist yet.</p>
            <Link
              href="/courses"
              className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalLessons = course.lessons.length;
  const completedCount = completedLessons.size;
  const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const toggleLesson = (lessonId: number) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← Back to Courses
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                {course.gradeRange}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600">{course.description}</p>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">
              {course.category}
            </span>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 font-medium">Course Progress</span>
              <span className="text-gray-700 font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-primary-600 h-3 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {completedCount} of {totalLessons} lessons completed
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons</h2>
          <div className="space-y-4">
            {course.lessons.map((lesson) => {
              const isCompleted = completedLessons.has(lesson.id);
              return (
                <div
                  key={lesson.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start flex-1">
                      <button
                        onClick={() => toggleLesson(lesson.id)}
                        className={`w-6 h-6 rounded-full border-2 mr-4 mt-1 flex-shrink-0 flex items-center justify-center ${
                          isCompleted
                            ? "bg-primary-600 border-primary-600"
                            : "border-gray-300"
                        }`}
                      >
                        {isCompleted && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Lesson {lesson.id}: {lesson.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{lesson.description}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {lesson.duration}
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/courses/${courseId}/lesson/${lesson.id}`}
                      className="ml-4 bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Start
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


