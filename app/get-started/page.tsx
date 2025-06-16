"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { InteractiveBackground } from "@/components/ui/interactive-background"
import { Navigation } from "@/components/ui/navigation"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Zap, Brain, TrendingUp } from "lucide-react"

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    employees: "",
    industry: "",
    aiExperience: "",
    primaryGoal: "",
    challenges: "",
    timeline: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <InteractiveBackground />
        <Navigation />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative">
              {/* Success Animation */}
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-400" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Welcome to Your AI Journey!
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Thank you for taking the first step. We're analyzing your information and will contact you within 24
                hours with a personalized AI strategy roadmap.
              </p>

              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Your AI Strategy Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">1. Strategy Call</h4>
                    <p className="text-sm text-gray-300">
                      Deep-dive consultation to understand your unique needs and opportunities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">2. Custom Roadmap</h4>
                    <p className="text-sm text-gray-300">
                      Tailored AI implementation plan with clear milestones and ROI projections
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">3. Implementation</h4>
                    <p className="text-sm text-gray-300">
                      Hands-on deployment and team training to ensure successful AI adoption
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Return to Home
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center border border-gray-600/50 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500 font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <InteractiveBackground />
      <Navigation />

      <div className="relative z-10 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 mb-8">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-4 py-2 border-0"
              >
                GET STARTED
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Start Your AI
              <br />
              Transformation
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Tell us about your business and goals. We'll create a personalized AI strategy that delivers measurable
              results.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white border-b border-gray-700/50 pb-3">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white border-b border-gray-700/50 pb-3">
                  Company Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="cto">CTO/Tech Lead</option>
                      <option value="coo">COO/Operations</option>
                      <option value="marketing">Marketing Director</option>
                      <option value="sales">Sales Director</option>
                      <option value="hr">HR Director</option>
                      <option value="finance">Finance Director</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail/E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* AI Goals & Experience */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white border-b border-gray-700/50 pb-3">
                  AI Goals & Experience
                </h2>

                <div>
                  <label htmlFor="aiExperience" className="block text-sm font-medium text-gray-300 mb-2">
                    Current AI Experience Level
                  </label>
                  <select
                    id="aiExperience"
                    name="aiExperience"
                    value={formData.aiExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="none">No AI experience</option>
                    <option value="basic">Basic (using ChatGPT, etc.)</option>
                    <option value="intermediate">Intermediate (some AI tools implemented)</option>
                    <option value="advanced">Advanced (multiple AI solutions in use)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary AI Goal *
                  </label>
                  <select
                    id="primaryGoal"
                    name="primaryGoal"
                    required
                    value={formData.primaryGoal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Primary Goal</option>
                    <option value="automate-processes">Automate repetitive processes</option>
                    <option value="improve-customer-service">Improve customer service</option>
                    <option value="increase-sales">Increase sales and lead generation</option>
                    <option value="reduce-costs">Reduce operational costs</option>
                    <option value="data-insights">Gain better data insights</option>
                    <option value="competitive-advantage">Gain competitive advantage</option>
                    <option value="team-productivity">Improve team productivity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenges" className="block text-sm font-medium text-gray-300 mb-2">
                    Biggest Business Challenges
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={4}
                    value={formData.challenges}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What are the main challenges or pain points you're hoping AI can help solve?"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white border-b border-gray-700/50 pb-3">Project Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP (within 1 month)</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Investment Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-10k">Under $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k-250k">$100k - $250k</option>
                      <option value="over-250k">$250k+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      Creating Your AI Strategy...
                    </>
                  ) : (
                    <>
                      Get My Custom AI Strategy
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  We'll analyze your information and contact you within 24 hours with a personalized roadmap.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
