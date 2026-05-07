/** @format */

import Image from "next/image";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const steps = [
  {
    number: "1",
    title: "Explore Fields",
    description:
      "Browse paintball arenas near you, view available sessions, and find the perfect match based on location and time.",
  },
  {
    number: "2",
    title: "Choose a Session",
    description:
      "Check session details including match type, available slots, and team requirements before joining the game.",
  },
  {
    number: "3",
    title: "Book Your Spot",
    description:
      "Secure your place in seconds with quick booking and instant confirmation for your selected session.",
  },
  {
    number: "4",
    title: "Play & Climb the Rankings",
    description:
      "Compete in matches, track your performance, and move up the leaderboard as you win ranked games.",
  },
];

const HowItWorksSections = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="From Finding a Field to Winning the Match — Here's How"
            description="A simple flow to connect players, field owners, and teams without adding extra friction to the process."
            className="max-w-4xl"
          />
        </MotionReveal>

        {/* Desktop layout: 4 cards around center phone with connecting lines */}
        <div className="relative mt-12 hidden lg:block" style={{ minHeight: "600px" }}>
          <MotionStagger className="relative w-full" style={{ minHeight: "600px" }}>

            {/* === Left Column Cards === */}

            {/* Card 1 — Top Left */}
            <MotionStaggerItem
              className="absolute"
              style={{ top: "0px", left: "0px", width: "280px" }}
            >
              <StepCard step={steps[0]} />
            </MotionStaggerItem>

            {/* Card 2 — Bottom Left */}
            <MotionStaggerItem
              className="absolute"
              style={{ bottom: "0px", left: "0px", width: "280px" }}
            >
              <StepCard step={steps[1]} />
            </MotionStaggerItem>

            {/* === Center Phone with connecting lines === */}
            <MotionStaggerItem
              className="absolute left-1/2 top-1/2"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="relative">
                {/* Left line image — connects left cards to phone */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "50%",
                    right: "100%",
                    transform: "translateY(-50%)",
                    width: "180px",
                    height: "400px",
                    marginRight: "-10px",
                  }}
                >
                  <Image
                    src="/images/left-line.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>

                {/* Right line image — connects right cards to phone */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "50%",
                    left: "100%",
                    transform: "translateY(-50%)",
                    width: "180px",
                    height: "400px",
                    marginLeft: "-10px",
                  }}
                >
                  <Image
                    src="/images/right-line.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>

                {/* Phone mockup */}
                <div className="relative w-[240px] h-[480px]">
                  <Image
                    src="/images/form-finding-phone.png"
                    alt="TacPlay app preview"
                    fill
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            </MotionStaggerItem>

            {/* === Right Column Cards === */}

            {/* Card 3 — Top Right */}
            <MotionStaggerItem
              className="absolute"
              style={{ top: "0px", right: "0px", width: "280px" }}
            >
              <StepCard step={steps[2]} />
            </MotionStaggerItem>

            {/* Card 4 — Bottom Right */}
            <MotionStaggerItem
              className="absolute"
              style={{ bottom: "0px", right: "0px", width: "280px" }}
            >
              <StepCard step={steps[3]} />
            </MotionStaggerItem>

          </MotionStagger>
        </div>

        {/* Mobile layout: cards only, no phone image */}
        <div className="mt-10 lg:hidden">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Step Card Component */
const StepCard = ({
  step,
}: {
  step: { number: string; title: string; description: string };
}) => {
  return (
    <article
      className="rounded-[20px] border border-[#1E1C2B] p-6"
      style={{ background: "#100F17" }}
    >
      {/* Step number badge */}
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold text-white"
        style={{
          background: "linear-gradient(135deg, #e84040, #b01818)",
          border: "2px solid rgba(255,255,255,0.1)",
        }}
      >
        {step.number}
      </div>

      <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
      <p className="text-sm leading-6 text-[#a7abc6]">{step.description}</p>
    </article>
  );
};

export default HowItWorksSections;