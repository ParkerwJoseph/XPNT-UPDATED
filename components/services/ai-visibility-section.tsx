"use client"
import { useState } from "react"
import type React from "react"
import { ArrowRight, Search, Code, MessageSquare, Star, ChevronDown, ExternalLink } from "lucide-react"
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
    id: "ai-recommendations",
    stage: "OPTIMIZE",
    icon: Search,
    title: "Ensure AI tools recommend your business first",
    originalTitle: "Answer Engine Optimization (AEO)",
    description: "Position your brand as the go-to answer when customers ask AI chatbots about your industry.",
    benefits: [
      "Appear as the top recommendation in ChatGPT, Claude, and Perplexity",
      "Capture customers before they even visit search engines",
      "Build authority as the definitive source in your field",
    ],
    useCase: "Legal firm now appears in 80% of AI responses for 'business lawyer near me'",
    outcome: "Your business becomes the default AI recommendation for your services",
    microCta: "See how we'd position your business in AI responses",
  },
  {
    id: "ai-understanding",
    stage: "STRUCTURE",
    icon: Code,
    title: "Add behind-the-scenes info that helps AI understand your site",
    originalTitle: "Schema markup & structured data",
    description: "Make your website speak AI's language so it can accurately represent your business.",
    benefits: [
      "Help AI tools understand your services, pricing, and location",
      "Ensure accurate representation in AI-generated summaries",
      "Improve chances of being featured in AI recommendations",
    ],
    useCase: "Restaurant chain saw 150% increase in AI-driven reservations after optimization",
    outcome: "AI tools accurately describe and recommend your business every time",
    microCta: "Discover how we'd make your site AI-readable",
  },
  {
    id: "ai-content",
    stage: "CREATE",
    icon: MessageSquare,
    title: "Shape your content so it ranks well in AI chat tools",
    originalTitle: "Content tuned for ChatGPT, Perplexity, SGE",
    description: "Create content that AI systems love to quote and reference in their responses.",
    benefits: [
      "Content designed to be cited by AI as authoritative sources",
      "Strategic keyword placement for AI discovery algorithms",
      "Format optimization for AI comprehension and quotability",
    ],
    useCase: "SaaS company's blog posts now cited in 60% of relevant AI conversations",
    outcome: "Your content becomes the source AI tools consistently reference and quote",
    microCta: "Learn how we'd optimize your content for AI discovery",
  },
  {
    id: "branded-snippets",
    stage: "DOMINATE",
    icon: Star,
    title: "Make sure AI-generated answers highlight your brand—never competitors",
    originalTitle: "Branded AI snippets & FAQs",
    description: "Control the narrative by ensuring AI tools present your brand favorably in every response.",
    benefits: [
      "Branded responses that showcase your unique value proposition",
      "Strategic FAQ optimization for common customer questions",
      "Competitive positioning that highlights your advantages",
    ],
    useCase: "Marketing agency now mentioned by name in 90% of AI responses about their specialty",
    outcome: "AI tools consistently present your brand as the preferred choice over competitors",
    microCta: "See how we'd make AI highlight your brand advantages",
  },
]

export function AIVisibilitySection() {
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
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-300">Service 4 of 4</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-4xl mx-auto">
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                AI Visibility & AEO
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Make sure your brand is visible where customers are now searching—on ChatGPT, Grok, Perplexity, and
              Google's AI answers.
            </p>
          </div>

          {/* Data-Driven Why It Matters */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-4">Why AI Visibility Matters Now</h3>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      <span className="font-bold text-indigo-300">13 million U.S. adults</span> used generative AI as
                      their primary search method in 2023, growing to over{" "}
                      <span className="font-bold text-purple-300">90 million by 2027</span>.
                    </p>

                    <p>
                      <span className="font-bold text-indigo-300">72% click on Google's AI overview</span> when shown,
                      and retail traffic from generative AI sources spiked{" "}
                      <span className="font-bold text-purple-300">1,300–1,950%</span> during the 2024 holiday
                      season—with visitors staying <span className="font-bold text-indigo-300">23% longer</span> and
                      browsing <span className="font-bold text-purple-300">12% more pages</span>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 text-xs text-gray-400">
                    <span className="bg-gray-800/50 px-2 py-1 rounded">semrush.com</span>
                    <span className="bg-gray-800/50 px-2 py-1 rounded">tomsguide.com</span>
                    <span className="bg-gray-800/50 px-2 py-1 rounded">gibion.ai</span>
                    <span className="bg-gray-800/50 px-2 py-1 rounded">barrons.com</span>
                    <span className="bg-gray-800/50 px-2 py-1 rounded">linkedin.com</span>
                    <span className="bg-gray-800/50 px-2 py-1 rounded">emarketer.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Content Grid - Left Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:grid-flow-col-dense">
          {/* Left Side - Interactive Service Tiles */}
          <div className="space-y-6 lg:col-start-2">
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
                    "shadow-2xl shadow-indigo-500/20",
                    isActive
                      ? "border-indigo-400/80 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-indigo-900/40 shadow-indigo-400/40 scale-[1.02] shadow-2xl"
                      : "border-indigo-500/30 hover:border-indigo-400/60 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:via-purple-900/15 hover:to-indigo-900/20 hover:shadow-indigo-400/30",
                  )}
                >
                  {/* Number Badge */}
                  <div className="flex items-center justify-end mb-4">
                    <div
                      className={cn(
                        "text-xs font-medium font-mono relative transition-all duration-300",
                        isActive ? "text-indigo-300" : "text-gray-500 group-hover:text-indigo-400",
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
                          ? "bg-gradient-to-br from-indigo-500/60 via-purple-500/50 to-indigo-600/60 border-indigo-300/60 shadow-indigo-400/50"
                          : "bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-indigo-700/40 border-indigo-400/40 group-hover:border-indigo-300/60 group-hover:shadow-indigo-400/40",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6 transition-all duration-300",
                          isActive ? "text-indigo-400" : "text-gray-400 group-hover:text-indigo-400",
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
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Side - Content Panel */}
          <div className="lg:sticky lg:top-8 lg:col-start-1">
            <div
              className={cn(
                "relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-2xl border-2 border-indigo-400/40 rounded-2xl p-6 sm:p-8 transition-all duration-300",
                "shadow-2xl shadow-indigo-500/30",
                isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100",
              )}
            >
              {/* Enhanced Liquid Glass Background */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-purple-500/20 to-indigo-500/15 opacity-60 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-purple-400/15 to-indigo-400/10 opacity-40"></div>
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{activeServiceData.title}</h3>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-white">What You'll Gain</h4>
                  <div className="space-y-2">
                    {activeServiceData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2" />
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
                <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Your Outcome</h4>
                  <p className="text-sm text-indigo-200 mb-3">{activeServiceData.outcome}</p>

                  {/* Micro CTA */}
                  <button className="group inline-flex items-center space-x-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                    <span>{activeServiceData.microCta}</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/25 to-indigo-600/20 border-2 border-indigo-400/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/30 backdrop-blur-xl">
              <h4 className="text-xl font-bold text-white mb-3">Curious how visible your business is in AI?</h4>
              <p className="text-gray-300 mb-6">
                Get a free analysis of how AI tools currently represent your brand—and discover opportunities to
                improve.
              </p>
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Run a Free AI Visibility Check</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <span>Explore all our services</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll Encouragement */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-col items-center space-y-3 group cursor-pointer">
            <span className="text-sm font-medium text-gray-400 group-hover:text-indigo-400 transition-colors duration-300">
              Scroll down to explore our other services
            </span>
            <div className="w-6 h-6 rounded-full border border-gray-600 group-hover:border-indigo-500 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-500/10">
              <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-indigo-400 animate-bounce-gentle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
