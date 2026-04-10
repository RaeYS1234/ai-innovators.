import Link from "next/link";

interface ProgramCardProps {
  title: string;
  gradeRange: string;
  description: string;
  features: string[];
  href: string;
}

export default function ProgramCard({
  title,
  gradeRange,
  description,
  features,
  href,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
            {gradeRange}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors text-center w-full"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}


