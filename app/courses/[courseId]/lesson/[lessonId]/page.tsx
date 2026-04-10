"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LessonPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/courses/${courseId}`}
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← Back to Course
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Lesson {lessonId}
          </h1>
          <p className="text-gray-600 mb-8">
            This is a placeholder lesson page. In a full implementation, this would contain:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Interactive lesson content</li>
            <li>Videos and multimedia</li>
            <li>Quizzes and exercises</li>
            <li>Progress tracking</li>
            <li>Completion certificates</li>
          </ul>

          <div className="flex gap-4">
            <Link
              href={`/courses/${courseId}`}
              className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Complete Lesson
            </Link>
            <Link
              href={`/courses/${courseId}`}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
            >
              Back to Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


