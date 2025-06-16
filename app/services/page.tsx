"use client"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceVertical } from "@/components/services/service-vertical"
import { InteractiveBackground } from "@/components/ui/interactive-background"
import { Navigation } from "@/components/ui/navigation"
import {
  Brain,
  Zap,
  Users,
  Bot,
  Workflow,
  Link2,
  Wrench,
  GraduationCap,
  FileText,
  Target,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import { InteractiveStrategySection } from "@/components/services/interactive-strategy-section"
import { AIVisibilitySection } from "@/components/services/ai-visibility-section"

const serviceVerticals = [
  {
    id: "strategy",
    icon: Brain,
    title: "AI Strategy & Roadmapping",
    description: "Build your foundation with comprehensive AI strategy that aligns with your business goals.",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    glowColor: "violet",
    services: [
      {
        title: "Deep-dive business audit",
        description: "Comprehensive analysis of your current operations, identifying AI opportunities and gaps.",
        icon: Brain,
      },
      {
        title: "Tech stack planning",
        description: "Strategic technology roadmap tailored to your infrastructure and scalability needs.",
        icon: Brain,
      },
      {
        title: "Governance & risk mitigation",
        description: "Establish AI governance frameworks, compliance protocols, and risk management strategies.",
        icon: Brain,
      },
      {
        title: "Executive briefings",
        description: "C-suite presentations and strategic planning sessions to align leadership on AI initiatives.",
        icon: Brain,
      },
    ],
  },
  {
    id: "deployment",
    icon: Zap,
    title: "AI Deployment & Automation",
    description: "Transform your operations with intelligent automation and AI-powered workflows.",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    glowColor: "cyan",
    services: [
      {
        title: "Automate Repetitive Work with AI Agents",
        description:
          "Deploy custom agents to handle support, sales, and back-office tasks so your team can focus on strategy.",
        icon: Bot,
      },
      {
        title: "Turn Manual Tasks Into Smart Workflows",
        description: "Convert SOPs and checklists into automated systems that run 24/7 without human oversight.",
        icon: Workflow,
      },
      {
        title: "Seamlessly Connect and Automate Your Tools",
        description: "Link your apps (CRM, email, project tools) to eliminate switching and data duplication.",
        icon: Link2,
      },
      {
        title: "AI-assisted internal tools",
        description: "Custom internal applications powered by AI for enhanced productivity and decision-making.",
        icon: Wrench,
      },
    ],
  },
  {
    id: "enablement",
    icon: Users,
    title: "Team Enablement & Adoption",
    description: "Empower your team with the knowledge and tools to leverage AI effectively.",
    gradient: "from-purple-500 via-blue-500 to-violet-600",
    glowColor: "purple",
    services: [
      {
        title: "Comprehensive AI Training Programs",
        description: "Interactive workshops and seminars tailored to your team's roles and skill levels.",
        icon: GraduationCap,
      },
      {
        title: "Operational Prompt Frameworks & Modules",
        description: "Industry-specific prompt collections and templates optimized for your business needs.",
        icon: FileText,
      },
      {
        title: "Department-Specific AI Implementation",
        description: "Targeted AI solutions for sales, marketing, operations, and customer success teams.",
        icon: Target,
      },
      {
        title: "Self-Paced Learning Resources",
        description: "Comprehensive onboarding kits and continuous learning materials for ongoing development.",
        icon: BookOpen,
      },
    ],
  },
]

// App data for the sliding carousel
const apps = [
  { name: "Slack", logo: "/images/slack-logo.png", color: "purple" },
  { name: "Teams", logo: "/images/teams-logo.png", color: "blue" },
  {
    name: "Gmail",
    logo: null,
    color: "red",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#4285F4"
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        />
        <path
          fill="#34A853"
          d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548v7.091L1.636 21.002A1.636 1.636 0 0 1 0 19.366V5.457z"
        />
        <path
          fill="#FBBC04"
          d="M12 16.64l6.545-4.91v9.273h3.819A1.636 1.636 0 0 0 24 19.366V5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548v7.091z"
        />
        <path
          fill="#EA4335"
          d="M12 9.548l-8.073-6.055C2.309 2.28 0 3.434 0 5.457v.727L12 16.64l12-10.456v-.727c0-2.023-2.309-3.178-3.927-1.964L12 9.548z"
        />
      </svg>
    ),
  },
  {
    name: "Outlook",
    logo: null,
    color: "blue",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    name: "Zoom",
    logo: null,
    color: "blue",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect x="1" y="1" width="22" height="22" rx="5" ry="5" fill="#4A90E2" />
        <rect x="4" y="8" width="11" height="8" rx="2" ry="2" fill="white" />
        <path d="M16 10 L20 7 L20 17 L16 14 Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    logo: null,
    color: "green",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <linearGradient id="shopify-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#95BF47" />
            <stop offset="100%" stopColor="#7AB55C" />
          </linearGradient>
          <linearGradient id="shopify-side" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5E8E3E" />
            <stop offset="100%" stopColor="#7AB55C" />
          </linearGradient>
        </defs>

        {/* Shopping bag main face */}
        <path
          fill="url(#shopify-gradient)"
          d="M4 6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h1c.55 0 1 .45 1 1v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6z"
        />

        {/* Shopping bag side/depth */}
        <path fill="url(#shopify-side)" d="M18 7v11c0 1.1-.9 2-2 2h2c1.1 0 2-.9 2-2V8c0-.55-.45-1-1-1h-1z" />

        {/* Handles */}
        <path
          fill="none"
          stroke="#95BF47"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M8 6V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1"
        />

        {/* Letter S */}
        <path
          fill="white"
          d="M12 9c-1.1 0-2 .4-2 1.2 0 .6.4 1 1.2 1.2l1.6.4c.7.2 1.2.6 1.2 1.4 0 1-.9 1.8-2 1.8s-2-.8-2-1.8M12 9c1.1 0 2-.4 2-1.2 0-.6-.4-1-1.2-1.2L11.2 6.2C10.5 6 10 5.6 10 4.8c0-1 .9-1.8 2-1.8s2 .8 2 1.8"
          transform="translate(0, 4)"
        />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    logo: null,
    color: "orange",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#FF7A59"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.794a3.588 3.588 0 0 1-3.569 3.569 3.588 3.588 0 0 1-3.569-3.569 3.588 3.588 0 0 1 3.569-3.569 3.588 3.588 0 0 1 3.569 3.569z"
        />
      </svg>
    ),
  },
  {
    name: "Notion",
    logo: null,
    color: "gray",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#000000"
          d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    logo: null,
    color: "blue",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="#0061FF" d="M7.71 0L0 4.88 7.71 9.76 7.71 0z" />
        <path fill="#0061FF" d="M9.76 0v9.76l7.71-4.88L9.76 0z" />
        <path fill="#0061FF" d="M0 6.24L7.71 11.12v9.76L0 16L0 6.24z" />
        <path fill="#0061FF" d="M9.76 11.12L17.47 6.24V16l-7.71 4.88V11.12z" />
        <path fill="#0061FF" d="M9.76 22.24L17.47 17.36L24 20.88L16.29 24L9.76 22.24z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    logo: null,
    color: "pink",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <radialGradient id="instagram-gradient" cx="0.5" cy="1" r="1">
            <stop offset="0%" stopColor="#FED373" />
            <stop offset="15%" stopColor="#F15245" />
            <stop offset="40%" stopColor="#D92E7F" />
            <stop offset="70%" stopColor="#9B2FAE" />
            <stop offset="95%" stopColor="#8B3DFF" />
            <stop offset="100%" stopColor="#4C63D2" />
          </radialGradient>
        </defs>
        <path
          fill="url(#instagram-gradient)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
        />
      </svg>
    ),
  },
  {
    name: "X",
    logo: null,
    color: "gray",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#000000"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
]

// Duplicate the apps array to create seamless loop
const duplicatedApps = [...apps, ...apps]

export default function ServicesPage() {
  const colorClasses = {
    purple:
      "border-purple-400/40 hover:border-purple-300/80 hover:shadow-purple-400/40 group-hover:from-purple-900/30 group-hover:to-purple-800/20",
    blue: "border-blue-400/40 hover:border-blue-300/80 hover:shadow-blue-400/40 group-hover:from-blue-900/30 group-hover:to-blue-800/20",
    red: "border-red-400/40 hover:border-red-300/80 hover:shadow-red-400/40 group-hover:from-red-900/30 group-hover:to-red-800/20",
    green:
      "border-green-400/40 hover:border-green-300/80 hover:shadow-green-400/40 group-hover:from-green-900/30 group-hover:to-green-800/20",
    cyan: "border-cyan-400/40 hover:border-cyan-300/80 hover:shadow-cyan-400/40 group-hover:from-cyan-900/30 group-hover:to-cyan-800/20",
    orange:
      "border-orange-400/40 hover:border-orange-300/80 hover:shadow-orange-400/40 group-hover:from-orange-900/30 group-hover:to-orange-800/20",
    gray: "border-gray-400/40 hover:border-gray-300/80 hover:shadow-gray-400/40 group-hover:from-gray-900/30 group-hover:to-gray-800/20",
    pink: "border-pink-400/40 hover:border-pink-300/80 hover:shadow-pink-400/40 group-hover:from-pink-900/30 group-hover:to-pink-800/20",
  }
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <InteractiveBackground />
      <Navigation currentPage="services" />
      <ServicesHero />

      {/* Services Verticals */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-24 sm:space-y-32">
            {/* Interactive AI Strategy Section - Right Panel */}
            <InteractiveStrategySection />

            {/* Service 2: AI Deployment & Automation - Left Panel */}
            <ServiceVertical key={serviceVerticals[1].id} vertical={serviceVerticals[1]} index={1} isReversed={true} />

            {/* Service 3: Team Enablement & Adoption - Right Panel */}
            <ServiceVertical key={serviceVerticals[2].id} vertical={serviceVerticals[2]} index={2} isReversed={false} />

            {/* Service 4: AI Visibility - Custom Section with Left Panel */}
            <AIVisibilitySection />
          </div>
        </div>
      </section>

      {/* App Ecosystem Integration Section */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-8 sm:space-y-12 mb-16 sm:mb-20">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-4xl mx-auto">
                Seamless AI Integration Across{" "}
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Your Entire App Ecosystem
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                We connect AI capabilities to the tools your team already uses, creating intelligent workflows that
                enhance productivity without disrupting your existing processes.
              </p>
            </div>
          </div>

          {/* Sliding App Carousel */}
          <div className="relative overflow-hidden mb-12 sm:mb-16">
            {/* Gradient masks for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            {/* Sliding container */}
            <div className="flex animate-slide-infinite space-x-6">
              {duplicatedApps.map((app, index) => {
                return (
                  <div
                    key={`${app.name}-${index}`}
                    className={`group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300 aspect-square flex items-center justify-center flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 shadow-xl ${colorClasses[app.color as keyof typeof colorClasses]} hover:bg-gradient-to-br hover:shadow-2xl hover:scale-105`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
                    <div className="relative flex flex-col items-center space-y-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                        {app.logo ? (
                          <Image src={app.logo || "/placeholder.svg"} alt={app.name} fill className="object-contain" />
                        ) : (
                          app.svg
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                        {app.name}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
