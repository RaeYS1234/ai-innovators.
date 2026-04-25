"use client";

import IconSprite, { KidIcon } from "@/components/home/IconSprite";
import NovaMascot from "@/components/home/NovaMascot";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SPEECH = [
  "Hi friend!",
  "Ready to learn?",
  "Let's go!",
  "You got this!",
  "Become a founder!",
];

type GradeTheme = "orange" | "green" | "purple";

type KidCourse = {
  title: string;
  desc: string;
  iconId: string;
  subject: string;
  steps: string;
  time: string;
  badges: string;
  progress: number;
  href: string;
  cta: "Start" | "Continue";
};

const k5Courses: KidCourse[] = [
  {
    title: "Starting a Business 101",
    desc: "Learn what a business is, who entrepreneurs are, and how money works.",
    iconId: "i-briefcase",
    subject: "Business",
    steps: "14 steps",
    time: "20 min",
    badges: "6 badges",
    progress: 25,
    href: "/courses/intro-business-k5/lesson/1",
    cta: "Continue",
  },
  {
    title: "Money Math",
    desc: "Add up revenue, subtract costs, and find profit. Real entrepreneur math!",
    iconId: "i-money",
    subject: "Business",
    steps: "12 steps",
    time: "18 min",
    badges: "5 badges",
    progress: 0,
    href: "/courses/intro-business-k5",
    cta: "Start",
  },
  {
    title: "What is AI?",
    desc: "Discover how AI works, where you see it every day, and why it's so cool.",
    iconId: "i-robot",
    subject: "AI",
    steps: "10 steps",
    time: "15 min",
    badges: "5 badges",
    progress: 0,
    href: "/courses/ai-basics-k5",
    cta: "Start",
  },
  {
    title: "My First Business Idea",
    desc: "Brainstorm your own business. Learn how to find a great idea kids love.",
    iconId: "i-bulb",
    subject: "Business",
    steps: "8 steps",
    time: "12 min",
    badges: "4 badges",
    progress: 0,
    href: "/courses/sharing-ideas-k5",
    cta: "Start",
  },
  {
    title: "Making Pictures with AI",
    desc: "Use kid-safe AI tools to draw, color, and design your business logo.",
    iconId: "i-pencil",
    subject: "AI",
    steps: "9 steps",
    time: "15 min",
    badges: "4 badges",
    progress: 0,
    href: "/courses/ai-basics-k5",
    cta: "Start",
  },
];

const midCourses: KidCourse[] = [
  {
    title: "Writing a Business Plan",
    desc: "Turn your idea into a real plan with goals, audience, and pricing.",
    iconId: "i-pages",
    subject: "Business",
    steps: "15 steps",
    time: "30 min",
    badges: "7 badges",
    progress: 0,
    href: "/courses/business-plan-68",
    cta: "Start",
  },
  {
    title: "Marketing & Branding",
    desc: "Reach customers, design a brand, and stand out from competitors.",
    iconId: "i-megaphone",
    subject: "Business",
    steps: "13 steps",
    time: "25 min",
    badges: "6 badges",
    progress: 0,
    href: "/courses/pitch-presentation-68",
    cta: "Start",
  },
  {
    title: "AI Tools Workshop",
    desc: "Hands-on with ChatGPT, Canva, and other AI tools. Learn smart prompts.",
    iconId: "i-tools",
    subject: "AI",
    steps: "18 steps",
    time: "40 min",
    badges: "8 badges",
    progress: 0,
    href: "/courses/ai-tools-68",
    cta: "Start",
  },
  {
    title: "Pricing & Profit Strategy",
    desc: "Find the sweet spot for prices that customers love and you profit from.",
    iconId: "i-target",
    subject: "Business",
    steps: "11 steps",
    time: "22 min",
    badges: "5 badges",
    progress: 0,
    href: "/courses/business-plan-68",
    cta: "Start",
  },
  {
    title: "Building Your First Pitch",
    desc: "Make a slide deck and practice pitching your idea like a real founder.",
    iconId: "i-mic",
    subject: "Business",
    steps: "12 steps",
    time: "25 min",
    badges: "6 badges",
    progress: 0,
    href: "/courses/pitch-presentation-68",
    cta: "Start",
  },
];

const highCourses: KidCourse[] = [
  {
    title: "Startup Fundamentals",
    desc: "How real startups work: founders, funding, market fit, and growth.",
    iconId: "i-rocket",
    subject: "Business",
    steps: "20 steps",
    time: "60 min",
    badges: "10 badges",
    progress: 0,
    href: "/courses/startup-development-912",
    cta: "Start",
  },
  {
    title: "Prompt Engineering",
    desc: "Master the art of writing AI prompts that get perfect results every time.",
    iconId: "i-brain",
    subject: "AI",
    steps: "16 steps",
    time: "50 min",
    badges: "8 badges",
    progress: 0,
    href: "/courses/advanced-ai-912",
    cta: "Start",
  },
  {
    title: "Financial Modeling",
    desc: "Build spreadsheets to forecast revenue, costs, and growth like a CFO.",
    iconId: "i-chart",
    subject: "Business",
    steps: "18 steps",
    time: "55 min",
    badges: "9 badges",
    progress: 0,
    href: "/courses/startup-development-912",
    cta: "Start",
  },
  {
    title: "Building MVPs with AI",
    desc: "Use AI to build a real working prototype of your business idea fast.",
    iconId: "i-tools",
    subject: "AI",
    steps: "22 steps",
    time: "75 min",
    badges: "11 badges",
    progress: 0,
    href: "/courses/advanced-ai-912",
    cta: "Start",
  },
  {
    title: "Pitching to Investors",
    desc: "Pitch decks, valuation, and how to talk to real investors with confidence.",
    iconId: "i-mic",
    subject: "Business",
    steps: "14 steps",
    time: "45 min",
    badges: "7 badges",
    progress: 0,
    href: "/courses/professional-pitch-912",
    cta: "Start",
  },
  {
    title: "Market Research with AI",
    desc: "Use AI to study customers, find competitors, and spot business opportunities.",
    iconId: "i-target",
    subject: "Business",
    steps: "15 steps",
    time: "50 min",
    badges: "8 badges",
    progress: 0,
    href: "/courses/advanced-ai-912",
    cta: "Start",
  },
];

function CourseCard({ course, theme }: { course: KidCourse; theme: GradeTheme }) {
  const tier = theme === "orange" ? "t-orange" : theme === "green" ? "t-green" : "t-purple";
  const grade = theme === "orange" ? "K-5" : theme === "green" ? "6-8" : "9-12";
  return (
    <div className={`course-card ${tier}`}>
      <div className="course-illustration">
        <KidIcon id={course.iconId} size={80} />
      </div>
      <div className="course-tags">
        <span className={`tag ${tier}`}>{grade}</span>
        <span className="tag subject">{course.subject}</span>
      </div>
      <h4>{course.title}</h4>
      <p className="desc">{course.desc}</p>
      <div className="course-meta">
        <span>
          <KidIcon id="i-pages" size={14} />
          {course.steps}
        </span>
        <span>
          <KidIcon id="i-clock" size={14} />
          {course.time}
        </span>
        <span>
          <KidIcon id="i-trophy" size={14} />
          {course.badges}
        </span>
      </div>
      <div className="course-progress">
        <div className="course-progress-fill" style={{ width: `${course.progress}%` }} />
      </div>
      <Link href={course.href} className="start-btn">
        <KidIcon id="i-play" size={14} />
        {course.cta}
      </Link>
    </div>
  );
}

export default function HomeKidFriendly() {
  const spaceRef = useRef<HTMLDivElement>(null);
  const [speech, setSpeech] = useState(SPEECH[0]);

  useEffect(() => {
    const bg = spaceRef.current;
    if (!bg) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 35; i++) {
      const s = document.createElement("div");
      s.className = "pointer-events-none absolute rounded-full";
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      const size = 2 + Math.random() * 3;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.background = Math.random() > 0.5 ? "#fbbf24" : "#0ea5e9";
      const dur = 2 + Math.random() * 3;
      s.style.animation = `kidTwinkle ${dur}s ease-in-out infinite`;
      s.style.animationDelay = `${Math.random() * 3}s`;
      frag.appendChild(s);
    }
    bg.appendChild(frag);
    return () => {
      bg.replaceChildren();
    };
  }, []);

  useEffect(() => {
    let i = 0;
    const t = window.setInterval(() => {
      i = (i + 1) % SPEECH.length;
      setSpeech(SPEECH[i]);
    }, 4000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="kid-home">
      <IconSprite />

      <div ref={spaceRef} className="space-bg" aria-hidden />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <KidIcon id="i-star" size={16} />
              Free for kids K-12!
            </div>
            <h1>
              Hi! I&apos;m Nova!
              <br />
              Let&apos;s build a{" "}
              <span className="highlight">
                business
              </span>
              <br />
              using AI!
            </h1>
            <p className="lead">
              Real lessons that teach you what businesses are, how to make profit, and how to use AI tools —
              designed for your grade level.
            </p>
            <div className="hero-cta">
              <Link href="/courses/intro-business-k5/lesson/1" className="btn-big">
                Start Lesson 1
                <KidIcon id="i-arrow" size={18} />
              </Link>
              <Link href="#k5" className="btn-big white">
                Browse Courses
              </Link>
            </div>
          </div>

          <div className="nova-stage">
            <div className="speech-bubble" role="status" aria-live="polite">
              {speech}
            </div>
            <div className="nova-glow" />
            <div className="nova-mascot">
              <NovaMascot />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats-bar">
          {[
            { icon: "i-flame" as const, bg: "fire", num: "7", label: "Day Streak" },
            { icon: "i-star" as const, bg: "xp", num: "240", label: "Total XP" },
            { icon: "i-heart" as const, bg: "heart", num: "5", label: "Hearts" },
            { icon: "i-trophy" as const, bg: "badge", num: "3", label: "Badges" },
          ].map((s) => (
            <div key={s.label} className="stat">
              <div className={`stat-icon ${s.bg}`}>
                <KidIcon id={s.icon} size={32} />
              </div>
              <div className="stat-text">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="container">
          <div className="continue-card">
            <div className="continue-bg-icon">
              <KidIcon id="i-rocket" size={180} />
            </div>
            <div>
              <div className="label">Pick up where you left off</div>
              <h3>Starting a Business 101 — Lesson 1</h3>
              <div className="meta">
                <span>
                  <KidIcon id="i-pages" size={16} />
                  Step 4 of 14
                </span>
                <span>
                  <KidIcon id="i-star" size={16} />
                  +40 XP
                </span>
              </div>
              <div className="progress-mini">
                <div className="progress-mini-fill" />
              </div>
            </div>
            <Link href="/courses/intro-business-k5/lesson/1" className="btn-big yellow">
              Continue
              <KidIcon id="i-arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="k5" className="grade-section k5">
        <div className="grade-header">
          <div className="grade-pill k5">K-5</div>
          <div className="grade-info">
            <h2>Starter Missions</h2>
            <p>For ages 5-10. Learn what business and AI are with fun, simple lessons.</p>
          </div>
        </div>
        <div className="container course-grid">
          {k5Courses.map((c) => (
            <CourseCard key={c.title} course={c} theme="orange" />
          ))}
        </div>
      </section>

      <section id="middle" className="grade-section middle">
        <div className="grade-header">
          <div className="grade-pill middle">6-8</div>
          <div className="grade-info">
            <h2>Builder Missions</h2>
            <p>For middle schoolers. Build real business plans and learn AI tools you can actually use.</p>
          </div>
        </div>
        <div className="container course-grid">
          {midCourses.map((c) => (
            <CourseCard key={c.title} course={c} theme="green" />
          ))}
        </div>
      </section>

      <section id="high" className="grade-section high">
        <div className="grade-header">
          <div className="grade-pill high">9-12</div>
          <div className="grade-info">
            <h2>Innovator Missions</h2>
            <p>For high schoolers. Real startup skills and advanced AI techniques used by professionals.</p>
          </div>
        </div>
        <div className="container course-grid">
          {highCourses.map((c) => (
            <CourseCard key={c.title} course={c} theme="purple" />
          ))}
        </div>
      </section>
    </div>
  );
}
