"use client"
import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Bot,
  Workflow,
  Link2,
  Wrench,
  GraduationCap,
  FileText,
  Target,
  BookOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  title: string
  description: string
  icon?: LucideIcon
}

interface ServiceVerticalProps {
  vertical: {
    id: string
    icon: LucideIcon
    title: string
    description: string
    gradient: string
    glowColor: string
    services: Service[]
  }
  index: number
  isReversed?: boolean
}

// Enhanced service data with benefits, use cases, and outcomes
const enhancedServiceData = {
  deployment: {
    subServices: [
      {
        benefits: [
          "24/7 AI agents handling customer inquiries without human intervention",
          "Intelligent lead qualification and routing to appropriate sales reps",
          "Automated follow-up sequences that nurture prospects through your funnel",
        ],
        useCase:
          "SaaS company's AI agent now handles 78% of support tickets, reducing response time from 4 hours to 3 minutes",
        outcome: "Customer service that scales infinitely without adding headcount",
        microCta: "See how we'd deploy AI agents for your customer touchpoints",
      },
      {
        benefits: [
          "Smart workflows that adapt and optimize based on performance data",
          "Elimination of manual handoffs between departments and systems",
          "Automated quality checks and error detection before tasks complete",
        ],
        useCase:
          "Marketing agency automated client onboarding, reducing setup time from 2 weeks to 2 days while improving accuracy",
        outcome: "Bulletproof processes that run flawlessly while you focus on strategy",
        microCta: "Discover which of your workflows we'd automate first",
      },
      {
        benefits: [
          "Unified data flow between all your business applications",
          "Real-time synchronization that eliminates duplicate data entry",
          "Custom AI bridges that make incompatible systems work together seamlessly",
        ],
        useCase: "E-commerce brand connected 12 different tools, eliminating 15 hours of weekly manual data transfer",
        outcome: "A connected ecosystem where information flows automatically between all your tools",
        microCta: "Learn how we'd integrate your current software stack",
      },
      {
        benefits: [
          "Custom dashboards and reporting tools powered by AI insights",
          "Internal productivity apps that understand your specific business logic",
          "Employee-facing AI assistants trained on your company knowledge base",
        ],
        useCase:
          "Consulting firm built AI-powered project management tool, increasing team productivity by 35% and client satisfaction by 28%",
        outcome: "Proprietary internal tools that give your team superpowers",
        microCta: "Explore what custom AI tools we'd build for your team",
      },
    ],
  },
  enablement: {
    subServices: [
      {
        benefits: [
          "Role-specific AI training that matches your team's daily responsibilities",
          "Interactive workshops with hands-on practice using real business scenarios",
          "Ongoing support and advanced training modules as AI capabilities evolve",
        ],
        useCase:
          "11 of 12 employees at a lean DTC startup adopted AI tools through XPNT's training and saved an average of 10 hours per week",
        outcome: "Confident, AI-fluent team members who leverage AI tools effectively in their daily work",
        microCta: "See how we'd design training programs for your specific roles",
      },
      {
        benefits: [
          "Industry-specific prompt frameworks that deliver consistent, high-quality results",
          "Customizable prompt modules that adapt to your brand voice and standards",
          "Version control and performance tracking for continuous prompt optimization",
        ],
        useCase:
          "Marketing team reduced content creation time by 60% using our operational prompt frameworks and modules",
        outcome:
          "Standardized AI interactions that maintain quality while accelerating output across your organization",
        microCta: "Discover what operational frameworks we'd create for your industry",
      },
      {
        benefits: [
          "Tailored AI implementations that solve department-specific challenges",
          "Cross-functional AI strategies that improve collaboration between teams",
          "Measurable ROI tracking for each department's AI adoption initiatives",
        ],
        useCase:
          "Operations team automated 85% of routine tasks, freeing up 20 hours per week for strategic initiatives",
        outcome: "Every department equipped with AI solutions that directly impact their key performance metrics",
        microCta: "Learn how we'd implement AI solutions for your specific departments",
      },
      {
        benefits: [
          "Comprehensive learning paths that accommodate different learning styles and schedules",
          "Interactive modules with real-world scenarios and immediate feedback",
          "Continuous updates and new content as AI technology advances",
        ],
        useCase: "Remote team achieved 95% AI tool adoption rate using our self-paced learning platform",
        outcome:
          "Self-sufficient team members who can independently leverage new AI tools and stay current with innovations",
        microCta: "Explore how we'd create self-paced learning resources for your team",
      },
    ],
  },
  visibility: {
    benefits: [
      "Content optimized for next-generation AI search engines",
      "Technical implementation for maximum AI discoverability",
      "Strategic positioning as the authoritative source in your industry",
    ],
    useCase: "B2B client increased AI search visibility by 300% in 6 months",
    outcome: "Dominant presence in AI-powered search results and recommendations",
    microCta: "Learn how we'd optimize your content for AI discovery",
  },
}

// Icon mapping for deployment services
const deploymentIcons = [Bot, Workflow, Link2, Wrench]

// Icon mapping for enablement services
const enablementIcons = [GraduationCap, FileText, Target, BookOpen]

export function ServiceVertical({ vertical, index, isReversed = false }: ServiceVerticalProps) {
  const [activeSubService, setActiveSubService] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const IconComponent = vertical.icon
  const serviceNumber = index + 1
  const enhancedData = enhancedServiceData[vertical.id as keyof typeof enhancedServiceData]

  const handleSubServiceClick = (subIndex: number) => {
    if (subIndex === activeSubService) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveSubService(subIndex)
      setIsAnimating(false)
    }, 150)
  }

  const activeService = vertical.services[activeSubService]

  // Special handling for Team Enablement section
  const isEnablementSection = vertical.id === "enablement"

  // Special handling for Deployment/Automation section
  const isDeploymentSection = vertical.id === "deployment"

  // Color mappings for different service types
  const getColorClasses = (isActive: boolean, glowColor: string) => {
    const colorMap = {
      cyan: {
        text: isActive ? "text-cyan-300" : "text-gray-500 group-hover:text-cyan-400",
        bg: isActive
          ? "bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-500/50"
          : "bg-gray-800/40 border border-gray-700/50 group-hover:border-cyan-500/30",
        icon: isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-cyan-400",
        dot: "bg-cyan-400",
        textColor: "text-cyan-200",
        button: "text-cyan-400 hover:text-cyan-300",
      },
      purple: {
        text: isActive ? "text-purple-300" : "text-gray-500 group-hover:text-purple-400",
        bg: isActive
          ? "bg-gradient-to-br from-purple-600/30 to-violet-600/30 border border-purple-500/50"
          : "bg-gray-800/40 border border-gray-700/50 group-hover:border-purple-500/30",
        icon: isActive ? "text-purple-400" : "text-gray-400 group-hover:text-purple-400",
        dot: "bg-purple-400",
        textColor: "text-purple-200",
        button: "text-purple-400 hover:text-purple-300",
      },
    }
    return colorMap[glowColor as keyof typeof colorMap] || colorMap.purple
  }

  const colorClasses = getColorClasses(false, vertical.glowColor)

  // Get the current sub-service data for deployment and enablement sections
  const getCurrentSubServiceData = () => {
    if ((isDeploymentSection || isEnablementSection) && enhancedData?.subServices) {
      return enhancedData.subServices[activeSubService]
    }
    return enhancedData
  }

  const currentData = getCurrentSubServiceData()

  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Service Indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-full px-4 py-2">
            <div className={`w-2 h-2 bg-gradient-to-r ${vertical.gradient} rounded-full`}></div>
            <span className="text-sm font-medium text-gray-300">Service {serviceNumber} of 4</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-4xl mx-auto">
              <span className={`bg-gradient-to-r ${vertical.gradient} bg-clip-text text-transparent`}>
                {vertical.title}
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">{vertical.description}</p>
          </div>

          {/* Why It Matters Box - For Deployment/Automation Section */}
          {isDeploymentSection && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Why AI Automation Matters</h3>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Customer support agents resolve issues{" "}
                        <span className="font-bold text-cyan-300">15% faster</span> with generative AI assistance
                      </p>

                      <p>
                        AI agents can handle <span className="font-bold text-blue-300">13.8% more</span> customer
                        inquiries per hour
                      </p>

                      <p>
                        <span className="font-bold text-cyan-300">72% of top-performing companies</span> report higher
                        productivity after implementing AI agents
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 text-xs text-gray-400">
                      <span className="bg-gray-800/50 px-2 py-1 rounded">NBER, Harvard Study</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">Deloitte AI Report</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">kissflow.com</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">plivo.com</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">warmly.ai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Why It Matters Box - Only for Team Enablement */}
          {isEnablementSection && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600/10 to-violet-600/10 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Why Team AI Training Matters</h3>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        <span className="font-bold text-purple-300">73% of employees</span> report increased
                        productivity after using AI tools, with{" "}
                        <span className="font-bold text-violet-300">60% feeling more job satisfaction</span>.
                      </p>

                      <p>
                        Personalized, AI-driven corporate training boosts efficiency by{" "}
                        <span className="font-bold text-purple-300">57% for learners</span>.
                      </p>

                      <p>
                        Generative AI enables highly skilled professionals to perform up to{" "}
                        <span className="font-bold text-violet-300">40% better</span> than those without AI support.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 text-xs text-gray-400">
                      <span className="bg-gray-800/50 px-2 py-1 rounded">business.com</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">virtasant.com</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">ft.com</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">mitsloan.mit.edu</span>
                      <span className="bg-gray-800/50 px-2 py-1 rounded">apnews.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Content Grid - Alternating Layout */}
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 sm:mb-16 ${isReversed ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Left Side - Interactive Service Tiles */}
          <div className={`space-y-6 ${isReversed ? "lg:col-start-2" : ""}`}>
            {vertical.services.map((service, subIndex) => {
              const isActive = activeSubService === subIndex
              const serviceNumber = String(subIndex + 1).padStart(2, "0")
              const activeColorClasses = getColorClasses(isActive, vertical.glowColor)

              // Get the appropriate icon for deployment and enablement services
              let ServiceIcon = IconComponent
              if (isDeploymentSection) {
                ServiceIcon = deploymentIcons[subIndex]
              } else if (isEnablementSection) {
                ServiceIcon = enablementIcons[subIndex]
              }

              return (
                <div
                  key={subIndex}
                  onClick={() => handleSubServiceClick(subIndex)}
                  className={cn(
                    "group relative cursor-pointer transition-all duration-300 ease-out",
                    "bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border rounded-2xl p-6 sm:p-8",
                    "shadow-2xl",
                    isActive
                      ? "border-opacity-80 bg-gradient-to-br shadow-2xl scale-[1.02]"
                      : "border-gray-700/40 hover:bg-gradient-to-br hover:shadow-xl",
                  )}
                  style={{
                    borderColor: isActive ? `${vertical.glowColor === "cyan" ? "#22d3ee" : "#a855f7"}cc` : undefined,
                    boxShadow: isActive
                      ? `0 25px 50px ${vertical.glowColor === "cyan" ? "#06b6d4" : "#8b5cf6"}40, 0 0 0 1px ${vertical.glowColor === "cyan" ? "#22d3ee" : "#a855f7"}30`
                      : undefined,
                    background: isActive
                      ? `linear-gradient(135deg, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.15)" : "rgba(139, 92, 246, 0.15)"}, ${vertical.glowColor === "cyan" ? "rgba(34, 211, 238, 0.1)" : "rgba(168, 85, 247, 0.1)"}, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.15)" : "rgba(139, 92, 246, 0.15)"})`
                      : undefined,
                  }}
                >
                  {/* Number Badge */}
                  <div className="flex items-center justify-end mb-4">
                    <div
                      className={cn(
                        "text-xs font-medium font-mono relative transition-all duration-300",
                        activeColorClasses.text,
                      )}
                    >
                      <span className="relative">
                        {serviceNumber}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-px bg-current transform rotate-45 opacity-60"></div>
                        </div>
                      </span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4">
                    <div
                      className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                        "shadow-lg backdrop-blur-sm border-2",
                        isActive
                          ? `bg-gradient-to-br shadow-lg border-opacity-80`
                          : `bg-gradient-to-br border-opacity-50 group-hover:border-opacity-80 group-hover:shadow-lg`,
                      )}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.6)" : "rgba(139, 92, 246, 0.6)"}, ${vertical.glowColor === "cyan" ? "rgba(34, 211, 238, 0.5)" : "rgba(168, 85, 247, 0.5)"}, ${vertical.glowColor === "cyan" ? "rgba(8, 145, 178, 0.6)" : "rgba(147, 51, 234, 0.6)"})`
                          : `linear-gradient(135deg, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.4)" : "rgba(139, 92, 246, 0.4)"}, ${vertical.glowColor === "cyan" ? "rgba(34, 211, 238, 0.3)" : "rgba(168, 85, 247, 0.3)"}, ${vertical.glowColor === "cyan" ? "rgba(8, 145, 178, 0.4)" : "rgba(147, 51, 234, 0.4)"})`,
                        borderColor: isActive
                          ? `${vertical.glowColor === "cyan" ? "#22d3ee" : "#c084fc"}cc`
                          : `${vertical.glowColor === "cyan" ? "#06b6d4" : "#a855f7"}66`,
                        boxShadow: isActive
                          ? `0 8px 25px ${vertical.glowColor === "cyan" ? "#06b6d4" : "#8b5cf6"}40`
                          : undefined,
                      }}
                    >
                      <ServiceIcon className={cn("h-6 w-6 transition-all duration-300", activeColorClasses.icon)} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={cn(
                          "text-lg sm:text-xl font-semibold mb-2 transition-all duration-300",
                          isActive ? "text-white" : "text-gray-300 group-hover:text-white",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm leading-relaxed transition-all duration-300",
                          isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
                        )}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 rounded-r-full"
                      style={{
                        background: `linear-gradient(to bottom, ${vertical.glowColor === "cyan" ? "#06b6d4" : "#a855f7"}, ${vertical.glowColor === "cyan" ? "#3b82f6" : "#8b5cf6"})`,
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Side - Compact Dynamic Content Panel */}
          <div className={`lg:sticky lg:top-8 ${isReversed ? "lg:col-start-1" : ""}`}>
            <div
              className={cn(
                "relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-2xl border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300",
                "shadow-2xl",
                isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100",
              )}
              style={{
                borderColor: `${vertical.glowColor === "cyan" ? "#22d3ee" : "#a855f7"}60`,
                boxShadow: `0 25px 50px ${vertical.glowColor === "cyan" ? "#06b6d4" : "#8b5cf6"}30, 0 0 0 1px ${vertical.glowColor === "cyan" ? "#22d3ee" : "#a855f7"}20`,
              }}
            >
              {/* Enhanced Liquid Glass Background */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.3)" : "rgba(139, 92, 246, 0.3)"}, ${vertical.glowColor === "cyan" ? "rgba(34, 211, 238, 0.2)" : "rgba(168, 85, 247, 0.2)"}, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.3)" : "rgba(139, 92, 246, 0.3)"})`,
                  }}
                />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${vertical.glowColor === "cyan" ? "rgba(34, 211, 238, 0.4)" : "rgba(168, 85, 247, 0.4)"}, transparent, ${vertical.glowColor === "cyan" ? "rgba(6, 182, 212, 0.4)" : "rgba(139, 92, 246, 0.4)"})`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${vertical.gradient} rounded-full`} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{activeService.title}</h3>
                </div>

                {/* Benefits */}
                {currentData && (
                  <div className="space-y-3">
                    <h4 className="text-base font-semibold text-white">What You'll Gain</h4>
                    <div className="space-y-2">
                      {currentData.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-1.5 h-1.5 ${colorClasses.dot} rounded-full mt-2`} />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Single Use Case */}
                {currentData && (
                  <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Real Result</span>
                    </div>
                    <p className="text-sm text-gray-300">{currentData.useCase}</p>
                  </div>
                )}

                {/* Outcome */}
                {currentData && (
                  <div className="bg-gradient-to-r from-gray-800/20 to-gray-700/20 border border-gray-600/20 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Your Outcome</h4>
                    <p className={`text-sm ${colorClasses.textColor} mb-3`}>{currentData.outcome}</p>

                    {/* Micro CTA */}
                    <button
                      className={`group inline-flex items-center space-x-2 text-xs font-medium ${colorClasses.button} transition-colors duration-200`}
                    >
                      <span>{currentData.microCta}</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Optional CTA - Only for Deployment/Automation Service */}
        {vertical.id === "deployment" && (
          <div className="text-center mb-12 sm:mb-16">
            <div className="max-w-xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-600/15 to-blue-600/15 border border-cyan-500/25 rounded-2xl p-6 sm:p-8">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Curious where automation could save you the most time?
                </p>
                <button className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group">
                  <span>Run a workflow scan</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Optional CTA - Only for Team Enablement Service */}
        {vertical.id === "enablement" && (
          <div className="text-center mb-12 sm:mb-16">
            <div className="max-w-xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600/15 to-violet-600/15 border border-purple-500/25 rounded-2xl p-6 sm:p-8">
                <p className="text-gray-300 mb-4 leading-relaxed">Ready to see how AI-fluent your team could become?</p>
                <button className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 group">
                  <span>Get a team readiness assessment</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Hint */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <span>Scroll or select another to explore more</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={cn(
                    "w-2 h-2 rounded-full",
                    num === serviceNumber ? `bg-gradient-to-r ${vertical.gradient}` : "bg-gray-600",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Encouragement - Only show if not the last service */}
        {serviceNumber < 4 && (
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex flex-col items-center space-y-3 group cursor-pointer">
              <span className="text-sm font-medium text-gray-400 transition-colors duration-300">
                Explore Our Other Services
              </span>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>
                  Next:{" "}
                  {serviceNumber === 1
                    ? "AI Deployment & Automation"
                    : serviceNumber === 2
                      ? "Team Enablement & Adoption"
                      : "AI Visibility (AEO + Content Optimization)"}
                </span>
              </div>
              <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300">
                <ChevronDown className="h-4 w-4 text-gray-500 animate-bounce-gentle" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
