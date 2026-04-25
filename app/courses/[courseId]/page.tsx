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

function lessonList(
  items: Array<{ title: string; description: string; duration: string }>
): Lesson[] {
  return items.map((item, index) => ({
    id: index + 1,
    completed: false,
    ...item,
  }));
}

function moduleLessons(count: number, label: string): Lesson[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `${label}: Module ${i + 1}`,
    description: "Practice concepts, complete activities, and check your understanding.",
    completed: false,
    duration: `${10 + ((i * 7) % 25)} min`,
  }));
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
  "being-fair-k5": {
    title: "Being Fair and Kind",
    description: "Learn about making good choices and treating others fairly.",
    gradeRange: "K-5",
    category: "Ethics",
    lessons: lessonList([
      { title: "What Does Fair Mean?", description: "Explore fairness in games, school, and home.", duration: "10 min" },
      { title: "Sharing and Taking Turns", description: "Practice sharing and why it matters.", duration: "12 min" },
      { title: "Listening to Others", description: "How listening helps everyone feel respected.", duration: "10 min" },
      { title: "Kind Words and Actions", description: "Spot kind choices and try your own.", duration: "12 min" },
      { title: "Mistakes and Sorry", description: "What to do when we mess up.", duration: "10 min" },
      { title: "Standing Up for Friends", description: "Be brave and kind when someone needs help.", duration: "15 min" },
      { title: "Fair Rules", description: "Why rules exist and how to make fair ones.", duration: "12 min" },
      { title: "My Kindness Plan", description: "Set a small goal to practice this week.", duration: "15 min" },
    ]),
  },
  "sharing-ideas-k5": {
    title: "Sharing Your Ideas",
    description: "Practice presenting your ideas with confidence and creativity.",
    gradeRange: "K-5",
    category: "Pitching & Business",
    lessons: lessonList([
      { title: "Your Idea Matters", description: "Everyone can have ideas worth sharing.", duration: "10 min" },
      { title: "Show and Tell Skills", description: "Organize what you want to say.", duration: "12 min" },
      { title: "Using Pictures and Props", description: "Make your idea easy to understand.", duration: "15 min" },
      { title: "Speaking Clearly", description: "Volume, pace, and eye contact basics.", duration: "12 min" },
      { title: "Answering Questions", description: "Listen and respond when others are curious.", duration: "10 min" },
      { title: "Mini Pitch Day", description: "Share a short idea with a friend or family.", duration: "20 min" },
    ]),
  },
  "ai-tools-68": {
    title: "AI Tools Workshop",
    description: "Hands-on projects using real AI tools and technologies.",
    gradeRange: "6-8",
    category: "AI Tools",
    lessons: moduleLessons(18, "AI Tools Workshop"),
  },
  "ethical-decisions-68": {
    title: "Making Ethical Decisions",
    description: "Explore ethical frameworks and learn to make responsible choices.",
    gradeRange: "6-8",
    category: "Ethics",
    lessons: lessonList([
      { title: "What Is Ethics?", description: "Right, wrong, and why it can be tricky.", duration: "15 min" },
      { title: "Stakeholders", description: "Who is affected by a decision?", duration: "18 min" },
      { title: "Privacy and Data", description: "Personal information and trust online.", duration: "20 min" },
      { title: "Bias and Fairness", description: "How bias shows up in tech and life.", duration: "20 min" },
      { title: "Case Study: School Rules", description: "Weigh fairness vs. safety.", duration: "18 min" },
      { title: "Case Study: Social Media", description: "Kindness, rumors, and responsibility.", duration: "20 min" },
      { title: "AI and Responsibility", description: "Using AI tools thoughtfully.", duration: "22 min" },
      { title: "Ethical Frameworks", description: "Simple tools for harder choices.", duration: "20 min" },
      { title: "Group Decisions", description: "Discuss and disagree respectfully.", duration: "18 min" },
      { title: "Your Ethics Journal", description: "Reflect on a choice you made this week.", duration: "15 min" },
      { title: "Community Impact", description: "How decisions ripple beyond yourself.", duration: "18 min" },
      { title: "Capstone Scenario", description: "Apply what you learned to a new situation.", duration: "25 min" },
    ]),
  },
  "pitch-presentation-68": {
    title: "Pitch Presentation Skills",
    description: "Master the art of presenting your ideas effectively.",
    gradeRange: "6-8",
    category: "Pitching & Business",
    lessons: lessonList([
      { title: "What Is a Pitch?", description: "Hook, problem, and solution in plain language.", duration: "15 min" },
      { title: "Know Your Audience", description: "Tailor your message to who is listening.", duration: "18 min" },
      { title: "Structure Your Talk", description: "Beginning, middle, and strong ending.", duration: "20 min" },
      { title: "Slides That Help", description: "Less text, clearer visuals.", duration: "18 min" },
      { title: "Practice Out Loud", description: "Rehearsal habits that build confidence.", duration: "15 min" },
      { title: "Body Language", description: "Posture, gestures, and eye contact.", duration: "15 min" },
      { title: "Handling Nerves", description: "Breathing and pacing before you present.", duration: "12 min" },
      { title: "Q&A Basics", description: "Listen, pause, then answer.", duration: "15 min" },
      { title: "Team Presentations", description: "Handoffs and shared speaking roles.", duration: "18 min" },
      { title: "Final Pitch Practice", description: "Deliver a short pitch and get feedback.", duration: "25 min" },
    ]),
  },
  "advanced-ai-912": {
    title: "Advanced AI Integration",
    description: "Learn to integrate AI into real business applications.",
    gradeRange: "9-12",
    category: "AI Tools",
    lessons: moduleLessons(20, "Advanced AI Integration"),
  },
  "ai-ethics-912": {
    title: "AI Ethics & Governance",
    description: "Deep dive into ethical AI practices and responsible innovation.",
    gradeRange: "9-12",
    category: "Ethics",
    lessons: lessonList([
      { title: "Ethics of Automation", description: "Jobs, access, and who benefits.", duration: "22 min" },
      { title: "Transparency and Explainability", description: "Why black-box decisions worry people.", duration: "24 min" },
      { title: "Surveillance and Consent", description: "Cameras, data, and permission.", duration: "22 min" },
      { title: "Algorithmic Fairness", description: "Metrics, tradeoffs, and audits.", duration: "26 min" },
      { title: "Regulation Overview", description: "How laws and policies are evolving.", duration: "24 min" },
      { title: "Corporate Responsibility", description: "Incentives and accountability.", duration: "22 min" },
      { title: "Misinformation and AI", description: "Deepfakes, labels, and verification.", duration: "25 min" },
      { title: "Environmental Impact", description: "Energy use and sustainable AI.", duration: "20 min" },
      { title: "Global Perspectives", description: "Different cultures, same tech.", duration: "22 min" },
      { title: "Designing a Policy", description: "Draft guidelines for a school or club use case.", duration: "28 min" },
      { title: "Risk Assessment", description: "Identify harms before they scale.", duration: "24 min" },
      { title: "Human in the Loop", description: "When automation needs oversight.", duration: "22 min" },
      { title: "Stakeholder Mapping", description: "Who must be at the table?", duration: "20 min" },
      { title: "Case Study: Hiring Tools", description: "Fairness vs. efficiency debates.", duration: "26 min" },
      { title: "Governance Simulation", description: "Run a mock review board decision.", duration: "30 min" },
    ]),
  },
  "professional-pitch-912": {
    title: "Professional Pitch Development",
    description: "Create investor-ready pitches and presentations.",
    gradeRange: "9-12",
    category: "Pitching & Business",
    lessons: moduleLessons(14, "Professional Pitch"),
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


