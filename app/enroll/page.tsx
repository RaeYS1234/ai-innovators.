"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ACCOUNTS_KEY = "aii_accounts";

type PendingProgress = Record<string, unknown> | null;

type AiiUser = {
  id: string;
  email: string;
  name: string;
  grade: string;
  createdAt: string;
  signedUpAt?: number;
  xp: number;
  streak: number;
  badges: number;
  completedLessons: string[];
  account: {
    progress: PendingProgress;
  };
};

type AccountRecord = {
  password: string;
  profile: AiiUser;
};

function readPendingProgress(): PendingProgress {
  const raw =
    typeof window === "undefined"
      ? null
      : localStorage.getItem("aii_pending_progress") || localStorage.getItem("aii_guest_progress");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function loadAccounts(): Record<string, AccountRecord> {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, AccountRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveAccounts(accounts: Record<string, AccountRecord>) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function mergePendingIntoUser(user: AiiUser, pending: PendingProgress): AiiUser {
  if (!pending) {
    return user;
  }
  const xpAdd = Number(pending.xp) || 0;
  const score = Number(pending.score) || 0;
  const badgeFromPending =
    typeof pending.badges === "number"
      ? pending.badges
      : Math.floor(score / 20);
  const lesson = typeof pending.lesson === "string" ? pending.lesson : null;

  const completed = [...user.completedLessons];
  if (lesson && !completed.includes(lesson)) {
    completed.push(lesson);
  }

  return {
    ...user,
    xp: user.xp + xpAdd,
    badges: Math.max(user.badges, badgeFromPending),
    completedLessons: completed,
    account: {
      ...user.account,
      progress: pending,
    },
  };
}

function clearPendingProgressKeys() {
  localStorage.removeItem("aii_pending_progress");
  localStorage.removeItem("aii_guest_progress");
}

function displayNameFromEmail(email: string) {
  const local = email.split("@")[0] || "friend";
  return local.charAt(0).toUpperCase() + local.slice(1);
}

export default function Enroll() {
  const router = useRouter();
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const pending = readPendingProgress();
      const accounts = loadAccounts();
      const existing = accounts[trimmedEmail];

      if (mode === "signup") {
        if (existing) {
          setError("That email is already signed up. Try Log In.");
          return;
        }

        const baseUser: AiiUser = {
          id: `user_${Date.now()}`,
          email: trimmedEmail,
          name: displayNameFromEmail(trimmedEmail),
          grade: "K-5",
          createdAt: new Date().toISOString(),
          signedUpAt: Date.now(),
          xp: 0,
          streak: 1,
          badges: 0,
          completedLessons: [],
          account: { progress: null },
        };

        const merged = mergePendingIntoUser(baseUser, pending);
        accounts[trimmedEmail] = { password, profile: merged };
        saveAccounts(accounts);
        localStorage.setItem("aii_user", JSON.stringify(merged));
        clearPendingProgressKeys();
        router.push("/");
        router.refresh();
        return;
      }

      if (!existing || existing.password !== password) {
        setError("Wrong email or password.");
        return;
      }

      let profile = { ...existing.profile };
      profile = mergePendingIntoUser(profile, pending);
      accounts[trimmedEmail] = { password, profile };
      saveAccounts(accounts);
      localStorage.setItem("aii_user", JSON.stringify(profile));
      clearPendingProgressKeys();
      router.push("/");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-8 shadow-md">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            {mode === "signup" ? "Create Your Account" : "Welcome Back"}
          </h1>
          <p className="mb-6 text-gray-600">
            {mode === "signup" ? "Sign up to start learning for free." : "Log in to keep your progress."}
          </p>

          <div className="mb-6 flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              className={`flex-1 rounded-md py-2 text-sm font-semibold transition ${
                mode === "signup" ? "bg-white text-primary-600 shadow" : "text-slate-600"
              }`}
              onClick={() => {
                setMode("signup");
                setError("");
              }}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`flex-1 rounded-md py-2 text-sm font-semibold transition ${
                mode === "login" ? "bg-white text-primary-600 shadow" : "text-slate-600"
              }`}
              onClick={() => {
                setMode("login");
                setError("");
              }}
            >
              Log In
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                placeholder="At least 6 characters"
                required
                minLength={6}
              />
            </div>

            {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Please wait..." : mode === "signup" ? "Sign Up" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
