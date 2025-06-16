"use client"
import { useState } from "react"
import type React from "react"
import { ArrowRight, Search, Cpu, Shield, Users, ChevronDown, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  id: string
  stage: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  originalTitle: string
  description: string
  benefits: string[]
  useCase: string
  outcome: string
  microCta: string
}

const services: Service[] = [
  {
    id: "audit",
    stage: "ASSESS",
    icon: Search,
    title: "Uncover Hidden AI Opportunities",
    originalTitle: "Deep-dive business audit",
    description:
      "Comprehensive analysis revealing exactly where AI can transform your operations and eliminate inefficiencies.",
    benefits: [
      "Uncover high-leverage areas for AI implementation",
      "Define strategic priorities with measurable ROI",
      "Align technical planning with business objectives",
    ],
    useCase: "Identified 14 automation opportunities, reducing manual workload by 18% within 90 days",
    outcome: "A prioritized roadmap of AI opportunities with clear ROI projections",
    microCta: "See what opportunities we'd find in your business",
  },
  {
    id: "planning",
    stage: "PLAN",
    icon: Cpu,
    title: "Build Your AI-Ready Infrastructure",
    originalTitle: "Tech stack planning",
    description: "Strategic technology roadmap that ensures your systems can scale with AI without costly rebuilds.",
    benefits: [
      "Future-proof architecture that grows with your needs",
      "Seamless integration with existing tools and workflows",
      "Cost-optimized tech stack preventing expensive migrations",
    ],
    useCase: "Ecommerce brand increased conversion rate by 4.2% without additional ad spend",
    outcome: "A bulletproof technical foundation ready for any AI implementation",
    microCta: "Discover how we'd optimize your tech stack",
  },
  {
    id: "governance",
    stage: "ALIGN",
    icon: Shield,
    title: "Establish AI Governance That Scales",
    originalTitle: "Governance & risk mitigation",
    description:
      "Comprehensive frameworks that ensure responsible AI use while maintaining compliance and competitive advantage.",
    benefits: [
      "Bulletproof compliance protocols for your industry",
      "Risk mitigation strategies that prevent costly mistakes",
      "Ethical AI guidelines that protect your brand reputation",
    ],
    useCase: "Legal firm implemented AI while maintaining client confidentiality",
    outcome: "Complete peace of mind with bulletproof AI governance frameworks",
    microCta: "Learn how we'd secure your AI implementation",
  },
  {
    id: "alignment",
    stage: "GOVERN",
    icon: Users,
    title: "Align Leadership on AI Strategy",
    originalTitle: "Executive briefings",
    description:
      "Strategic sessions that get your entire C-suite excited about AI and aligned on implementation priorities.",
    benefits: [
      "Executive buy-in that accelerates AI adoption timelines",
      "Clear communication of AI ROI to stakeholders and board",
      "Aligned leadership team with shared AI vision and goals",
    ],
    useCase: "CEO secured $2M AI budget after our executive presentation",
    outcome: "Unified leadership team driving AI transformation from the top down",
    microCta: "See how we'd present AI strategy to your leadership",
  },
]

export function InteractiveStrategySection() {
  const [activeService, setActiveService] = useState<string>(services[0].id)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === activeService) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveService(serviceId)
      setIsAnimating(false)
    }, 150)
  }

  const activeServiceData = services.find((s) => s.id === activeService) || services[0]

  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Service Indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-300">Service 1 of 4</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-4xl mx-auto">
              <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
                Strategic AI Advisory
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Custom guidance to align AI with your unique business goals.
            </p>
          </div>
        </div>

        {/* Why It Matters Box - For Strategic AI Advisory */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Why Strategic AI Advisory Matters</h3>

                <div className="space-y-4 text-gray-300 leading-relaxed text-center">
                  <p>
                    <span className="font-bold text-violet-300">91% of companies are investing in AI</span> — but only{" "}
                    <span className="font-bold text-purple-300">
                      21–25% have embedded it with a clear strategy and structure
                    </span>
                  </p>

                  <p>
                    <span className="font-bold text-violet-300">94% are increasing AI spend</span>, yet just{" "}
                    <span className="font-bold text-purple-300">21% have successfully operationalized it</span>
                  </p>

                  <p>
                    Organizations that set strategic AI KPIs are{" "}
                    <span className="font-bold text-violet-300">3x more likely to achieve financial benefits</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 text-xs text-gray-400 justify-center">
                  <span className="bg-gray-800/50 px-2 py-1 rounded">businessinsider.com</span>
                  <span className="bg-gray-800/50 px-2 py-1 rounded">businesswire.com</span>
                  <span className="bg-gray-800/50 px-2 py-1 rounded">linkedin.com</span>
                  <span className="bg-gray-800/50 px-2 py-1 rounded">mckinsey.com</span>
                  <span className="bg-gray-800/50 px-2 py-1 rounded">mitsloan.mit.edu</span>
                  <span className="bg-gray-800/50 px-2 py-1 rounded">sloanreview.mit.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Left Side - Interactive Service Tiles */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = activeService === service.id
              const serviceNumber = String(index + 1).padStart(2, "0")

              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={cn(
                    "group relative cursor-pointer transition-all duration-300 ease-out",
                    "bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border rounded-2xl p-6 sm:p-8",
                    "shadow-2xl shadow-violet-500/20",
                    isActive
                      ? "border-violet-400/80 bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-900/40 shadow-violet-400/40 scale-[1.02] shadow-2xl"
                      : "border-violet-500/30 hover:border-violet-400/60 hover:bg-gradient-to-br hover:from-violet-900/20 hover:via-purple-900/15 hover:to-violet-900/20 hover:shadow-violet-400/30",
                  )}
                >
                  {/* Number Badge */}
                  <div className="flex items-center justify-end mb-4">
                    <div
                      className={cn(
                        "text-xs font-medium font-mono relative transition-all duration-300",
                        isActive ? "text-violet-300" : "text-gray-500 group-hover:text-violet-400",
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
                        "shadow-lg backdrop-blur-sm",
                        isActive
                          ? "bg-gradient-to-br from-violet-500/60 via-purple-500/50 to-violet-600/60 border-2 border-violet-300/60 shadow-violet-400/50"
                          : "bg-gradient-to-br from-violet-600/40 via-purple-600/30 to-violet-700/40 border border-violet-400/40 group-hover:border-violet-300/60 group-hover:shadow-violet-400/40",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6 transition-all duration-300",
                          isActive ? "text-violet-400" : "text-gray-400 group-hover:text-violet-400",
                        )}
                      />
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
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-violet-500 to-purple-500 rounded-r-full" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Side - Compact Dynamic Content Panel */}
          <div className="lg:sticky lg:top-8">
            <div
              className={cn(
                "relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-2xl border-2 border-violet-400/40 rounded-2xl p-6 sm:p-8 transition-all duration-300",
                "shadow-2xl shadow-violet-500/30",
                isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100",
              )}
            >
              {/* Enhanced Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/15 to-violet-500/10 rounded-2xl blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 via-purple-400/8 to-violet-400/5 rounded-2xl"></div>
              {/* Content */}
              <div className="relative space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
                    <span className="text-sm font-semibold text-violet-400 uppercase tracking-wider">
                      {activeServiceData.stage} PHASE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{activeServiceData.title}</h3>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-white">What You'll Gain</h4>
                  <div className="space-y-2">
                    {activeServiceData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-violet-400 rounded-full mt-2" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Single Use Case */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Real Result</span>
                  </div>
                  <p className="text-sm text-gray-300">{activeServiceData.useCase}</p>
                </div>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Your Outcome</h4>
                  <p className="text-sm text-violet-200 mb-3">{activeServiceData.outcome}</p>

                  {/* Micro CTA */}
                  <button className="group inline-flex items-center space-x-2 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors duration-200">
                    <span>{activeServiceData.microCta}</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <span>Scroll or select another to explore more</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-violet-400 rounded-full" />
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll Encouragement */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-col items-center space-y-3 group cursor-pointer">
            <span className="text-sm font-medium text-gray-400 group-hover:text-violet-400 transition-colors duration-300">
              Explore Our Other Services
            </span>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>Next: AI Deployment & Automation</span>
            </div>
            <div className="w-6 h-6 rounded-full border border-gray-600 group-hover:border-violet-500 flex items-center justify-center transition-all duration-300 group-hover:bg-violet-500/10">
              <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-violet-400 animate-bounce-gentle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
