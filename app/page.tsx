"use client"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Users, TrendingUp, ExternalLink } from "lucide-react"
import { InteractiveBackground } from "@/components/ui/interactive-background"
import { Navigation } from "@/components/ui/navigation"
import { LoopingText } from "@/components/ui/looping-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import Link from "next/link"
import { MazeStylePerformanceChart } from "@/components/ui/maze-style-performance-chart"
import { AnimatedProgressRing } from "@/components/ui/animated-progress-ring"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <InteractiveBackground />
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <div className="relative z-10">
        {/* Content */}
        <div className="px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          {/* Logo/Brand */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                XPNT Solutions
              </h1>
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 border-0"
              >
                AI
              </Badge>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-6xl mx-auto text-center mb-20 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8 bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Build Your AI
              <br />
              Advantage
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-3xl mx-auto px-4">
              <LoopingText
                text="We help businesses and creators implement custom AI strategy that drives growth, efficiency, and scale."
                className="text-lg sm:text-xl lg:text-2xl text-gray-300"
                speed={80}
                pauseDuration={3000}
              />
            </p>
          </div>

          {/* Impact Outcomes Section - Enhanced Hover Effects */}
          <div className="max-w-7xl mx-auto mb-32 sm:mb-40 px-4 sm:px-6">
            {/* Impact Metrics Grid - Enhanced Micro-interactions */}
            {/* Impact Metrics Grid - Uniform Design */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
              {/* Lead Conversion Card */}
              <div className="group relative aspect-square bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:scale-105 sm:hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(160,100,255,0.25)] hover:border-purple-400/50">
                {/* Dot Grid Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Gradient Border Ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 p-[1px]">
                  <div className="w-full h-full bg-gray-900/60 rounded-2xl"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4 z-10">
                  {/* Stat */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent leading-none">
                    ↑ 240%
                  </div>

                  {/* Title */}
                  <div className="text-sm font-medium text-gray-300 leading-tight px-2">Lead Conversion Increase</div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                  <div className="h-full flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg">
                        <div className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-2">
                          ↑ 240%
                        </div>
                        <div className="text-sm font-medium text-white mb-3">Lead Conversion Increase</div>
                        <div className="text-xs text-gray-200 leading-relaxed">
                          From multi-agent follow-up automation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Workload Card */}
              <div className="group relative aspect-square bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:scale-105 sm:hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(6,182,212,0.25)] hover:border-cyan-400/50">
                {/* Dot Grid Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Gradient Border Ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 p-[1px]">
                  <div className="w-full h-full bg-gray-900/60 rounded-2xl"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4 z-10">
                  {/* Stat */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent leading-none">
                    ↓ 70%
                  </div>

                  {/* Title */}
                  <div className="text-sm font-medium text-gray-300 leading-tight px-2">Support Workload Reduction</div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                  <div className="h-full flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg">
                        <div className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                          ↓ 70%
                        </div>
                        <div className="text-sm font-medium text-white mb-3">Support Workload Reduction</div>
                        <div className="text-xs text-gray-200 leading-relaxed">
                          From AI agents trained on internal documentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Card */}
              <div className="group relative aspect-square bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:scale-105 sm:hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(99,102,241,0.25)] hover:border-indigo-400/50">
                {/* Dot Grid Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Gradient Border Ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 p-[1px]">
                  <div className="w-full h-full bg-gray-900/60 rounded-2xl"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4 z-10">
                  {/* Stat */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent leading-none">
                    ↑ 4.6X
                  </div>

                  {/* Title */}
                  <div className="text-sm font-medium text-gray-300 leading-tight px-2">Return on Investment</div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                  <div className="h-full flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg">
                        <div className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-2">
                          ↑ 4.6X
                        </div>
                        <div className="text-sm font-medium text-white mb-3">Return on Investment</div>
                        <div className="text-xs text-gray-200 leading-relaxed">
                          Tracked 90 days after automation & AEO deployment
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Saved Card */}
              <div className="group relative aspect-square bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:scale-105 sm:hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(168,85,247,0.25)] hover:border-violet-400/50">
                {/* Dot Grid Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Gradient Border Ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 p-[1px]">
                  <div className="w-full h-full bg-gray-900/60 rounded-2xl"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4 z-10">
                  {/* Stat */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent leading-none">
                    ↓ 18 Hrs
                  </div>

                  {/* Title */}
                  <div className="text-sm font-medium text-gray-300 leading-tight px-2">Hours Saved Per Employee</div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                  <div className="h-full flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg">
                        <div className="text-xl font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent mb-2">
                          ↓ 18 Hrs
                        </div>
                        <div className="text-sm font-medium text-white mb-3">Hours Saved Per Employee</div>
                        <div className="text-xs text-gray-200 leading-relaxed">
                          Through automation of reporting, task routing, and comms
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Removed */}
            <div className="flex justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Services Section - Enhanced mobile layout */}
          <div className="max-w-7xl mx-auto mb-32 sm:mb-40 px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Side - Headline */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  We don't sell tools.{" "}
                  <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    We help you adopt AI intelligently.
                  </span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                  From strategic planning to full deployment, we provide comprehensive AI solutions that transform how
                  your business operates, competes, and grows.
                </p>
              </div>

              {/* Right Side - Services */}
              <div className="space-y-4 sm:space-y-6">
                <Link href="/services#strategy" className="group block">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl hover:bg-gray-900/30 transition-all duration-300 border border-transparent hover:border-violet-500/20">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 flex items-center justify-center group-hover:border-violet-500/50 transition-all duration-300">
                        <Brain className="h-5 sm:h-6 w-5 sm:w-6 text-violet-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                        AI Strategy & Advisory
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Comprehensive business audits, tech stack planning, and governance frameworks to build your AI
                        foundation.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/services#deployment" className="group block">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl hover:bg-gray-900/30 transition-all duration-300 border border-transparent hover:border-cyan-500/20">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-300">
                        <Zap className="h-5 sm:h-6 w-5 sm:w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        AI Deployment & Automation
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Custom AI agents, workflow automation, and seamless integrations that transform your operations.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/services#enablement" className="group block">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl hover:bg-gray-900/30 transition-all duration-300 border border-transparent hover:border-purple-500/20">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-300">
                        <Users className="h-5 sm:h-6 w-5 sm:w-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Team Enablement & Adoption
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Training seminars, custom prompt libraries, and onboarding programs to empower your team.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/services#visibility" className="group block">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl hover:bg-gray-900/30 transition-all duration-300 border border-transparent hover:border-indigo-500/20">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:border-indigo-500/50 transition-all duration-300">
                        <TrendingUp className="h-5 sm:h-6 w-5 sm:w-6 text-indigo-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                        AI Visibility & AEO
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Answer Engine Optimization and AI-first content strategies to dominate the future of search.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Quote with Looping Text */}
          <div className="text-center mb-32 sm:mb-40 px-4">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light max-w-2xl mx-auto">
              <LoopingText
                text="From strategy to execution, we cover every layer of AI adoption."
                className="bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent"
              />
            </blockquote>
          </div>

          {/* AI Statistics Section - Clean Version 50 Style */}
          <div
            id="data-section"
            className="max-w-7xl mx-auto space-y-16 sm:space-y-20 mb-24 sm:mb-32 relative px-4 sm:px-6"
          >
            {/* Section Header */}
            <div className="text-center space-y-6 sm:space-y-8 relative">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-4xl mx-auto">
                AI adoption is accelerating, and businesses without strategy are{" "}
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  falling behind fast
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                The competitive landscape is shifting rapidly. Companies that implement AI strategically are seeing
                unprecedented growth, while others struggle to keep pace.
              </p>
            </div>

            {/* Main Adoption Statistic - Clean and Clear */}
            <div className="text-center space-y-6 sm:space-y-8 relative">
              <div className="relative inline-block">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  <AnimatedCounter end={78} suffix="%" />
                </div>
                <div className="absolute -top-2 sm:-top-4 -right-4 sm:-right-8 text-xs sm:text-sm text-gray-400 bg-gray-900/80 px-2 sm:px-3 py-1 rounded-full border border-gray-700/50">
                  +23%
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-xl sm:text-2xl text-white font-medium px-4 max-w-2xl mx-auto">
                  of organizations used AI in at least one business function in 2024
                </div>
                <div className="text-base sm:text-lg text-gray-400">up from 55% in 2022</div>
                <a
                  href="https://mckinsey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs sm:text-sm text-gray-500 hover:text-purple-400 transition-colors duration-300"
                >
                  <span>McKinsey Global Institute</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Key Metrics Grid - Clean Layout with Proper Spacing */}
            {/* Key Metrics - Vertically Integrated Flow */}
            <div className="space-y-32 sm:space-y-40 max-w-4xl mx-auto">
              {/* ROI Investment Section */}
              <div className="text-center space-y-12">
                <div className="space-y-8">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-white">Return on AI Investment</h4>

                  <div className="flex items-center justify-center space-x-6 sm:space-x-8">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-300 mb-2">$1</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">Invested</div>
                    </div>

                    <svg
                      className="w-12 sm:w-16 h-6 sm:h-8 text-purple-400"
                      fill="none"
                      viewBox="0 0 64 32"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h40m0 0l-8-8m8 8l-8 8" />
                    </svg>

                    <div className="flex flex-col items-center">
                      <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        <AnimatedCounter end={3.7} prefix="$" />
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">Returns</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                      <AnimatedCounter end={370} suffix="%" />
                    </div>
                    <div className="text-xl sm:text-2xl font-semibold text-gray-300">ROI</div>
                  </div>
                </div>

                <a
                  href="https://mckinsey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-purple-400 transition-colors duration-300"
                >
                  <span>McKinsey</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Performance Impact Section */}
              <div className="text-center space-y-12">
                <div className="space-y-8">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-white">Immediate Performance Impact</h4>

                  <div className="space-y-8">
                    <div className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                      <AnimatedCounter end={30} suffix="%" />
                    </div>
                    <div className="text-lg sm:text-xl text-gray-400">Performance gains in 2024</div>
                  </div>

                  <div className="max-w-2xl mx-auto">
                    <MazeStylePerformanceChart />
                  </div>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Companies with AI fully integrated into core business strategy see consistent year-over-year
                    performance gains
                  </p>
                </div>

                <a
                  href="https://pwc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300"
                >
                  <span>PwC</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Executive Confidence Section */}
              <div className="text-center space-y-12">
                <div className="space-y-8">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-white">Executive Confidence</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-20 max-w-2xl mx-auto">
                    {/* CFOs Report - 90% */}
                    <div className="space-y-6">
                      <div className="relative">
                        <AnimatedProgressRing
                          percentage={90}
                          size={160}
                          strokeWidth={10}
                          color="from-violet-400 to-purple-400"
                          delay={200}
                          duration={3500}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-white">CFOs report</div>
                        <div className="text-base text-gray-300">very positive ROI</div>
                        <a
                          href="https://journalofaccountancy.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-purple-400 transition-colors duration-300"
                        >
                          <span>Journal of Accountancy</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    {/* Senior Leaders - 97% */}
                    <div className="space-y-6">
                      <div className="relative">
                        <AnimatedProgressRing
                          percentage={97}
                          size={160}
                          strokeWidth={10}
                          color="from-purple-400 to-violet-400"
                          delay={800}
                          duration={3500}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-white">Senior leaders see</div>
                        <div className="text-base text-gray-300">positive returns</div>
                        <a
                          href="https://ey.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-purple-400 transition-colors duration-300"
                        >
                          <span>EY</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    Leadership across all levels reports strong confidence in AI investment returns
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Box - Moved up with proper spacing */}
          <div className="max-w-2xl mx-auto mb-32 sm:mb-40 px-4 sm:px-6">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>

              {/* Main CTA container */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 sm:p-10 text-center hover:border-purple-500/50 transition-all duration-500">
                {/* Top accent dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    Ready to Join the Leaders?
                  </h4>

                  <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto">
                    Don't let your competitors gain the AI advantage. Start building your strategic implementation
                    today.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Get Your AI Strategy
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center border border-gray-600/50 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500 font-medium text-lg px-8 py-4 rounded-full transition-all duration-300"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>

                {/* Bottom accent bars */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-2 h-1 bg-purple-400/40 rounded-full"></div>
                  <div className="w-4 h-1 bg-purple-400/60 rounded-full"></div>
                  <div className="w-2 h-1 bg-purple-400/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* XPNT Solutions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">XPNT Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through innovative AI solutions and cutting-edge technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link href="/services" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <div className="space-y-3">
                <div className="text-gray-300">AI Development</div>
                <div className="text-gray-300">Process Automation</div>
                <div className="text-gray-300">Advanced Analytics</div>
                <div className="text-gray-300">AI Consulting</div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Connect With Us</h3>
              <div className="space-y-6">
                {/* XPNT Solutions / Jake Schincariol */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-semibold text-white">XPNT SOLUTIONS</span>
                  </div>
                  <div className="font-semibold text-white text-sm">JAKE SCHINCARIOL</div>
                  <div className="text-gray-300 text-sm">
                    Email:{" "}
                    <a href="mailto:Jake@xpntsolutions.com" className="hover:text-white transition-colors duration-300">
                      Jake@xpntsolutions.com
                    </a>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Phone:{" "}
                    <a href="tel:+15198191135" className="hover:text-white transition-colors duration-300">
                      (519) 819-1135
                    </a>
                  </div>
                </div>

                {/* Parker Joseph */}
                <div className="space-y-2">
                  <div className="font-semibold text-white">Parker Joseph</div>
                  <div className="text-gray-300 text-sm">
                    Email:{" "}
                    <a
                      href="mailto:Parker@xpntsolutions.com"
                      className="hover:text-white transition-colors duration-300"
                    >
                      Parker@xpntsolutions.com
                    </a>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Phone:{" "}
                    <a href="tel:+12263404388" className="hover:text-white transition-colors duration-300">
                      (226) 340-4388
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2025 XPNT Solutions. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
