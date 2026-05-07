/** @format */

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const steps = [
  {
    number: "1",
    title: "Create & Verify",
    description:
      "Start by creating your account and setting up your profile. Upload required details and get verified to unlock full platform access. Once approved, you’re ready to explore matches, teams, and fields.",
  },
  {
    number: "2",
    title: "Subscribe & Access",
    description:
      "Choose your plan to unlock features like ranked matches and team creation. Browse available sessions, join a team, and book your slot. Premium users get access to rankings, advanced stats, and priority features.",
  },
  {
    number: "3",
    title: "Work & Track",
    description:
      "Join your scheduled match and play at your selected field. Field owners submit match results, and rankings update automatically. Track your performance, match history, and leaderboard progress in real-time.",
  },
];

const HowItWorksSections = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-transparent  py-16 sm:py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

       <MotionReveal>
          <SectionHeading
            title="How It Works"
            description="A simple flow to connect players, field owners, and teams without adding extra friction to the process."
            className="max-w-4xl text-center"
            descriptionClassName="mx-auto"
          />
        </MotionReveal>
        

        {/* Steps */}
        <div className="relative mt-8 md:mt-16">

          {/* Dashed connector line (desktop only) */}
          <div
            className="absolute top-[28px] hidden md:block"
            style={{
              left: "calc(16.666% + 24px)",
              right: "calc(16.666% + 24px)",
              height: "2px",
              backgroundImage:
                "repeating-linear-gradient(to right, #c8a020 0px, #c8a020 10px, transparent 10px, transparent 18px)",
            }}
          />

          <MotionStagger className="grid gap-12 md:grid-cols-3 md:gap-6">
            {steps.map((step) => (
              <MotionStaggerItem key={step.number} className="relative text-center">

                {/* Circle */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white"
                    style={{
                      background: "radial-gradient(circle at 40% 35%, #e84040, #b01818)",
                      boxShadow: "0 0 0 3px #1a1a1a, 0 0 0 5px #b01818",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto max-w-xs text-sm leading-7 text-gray-400 sm:text-[15px]">
                  {step.description}
                </p>

              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSections;