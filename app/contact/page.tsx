"use client"
import { useState } from "react"
import Image from "next/image"

import Link from "next/link"
import { InteractiveBackground } from "@/components/ui/interactive-background"
import { Navigation } from "@/components/ui/navigation"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, MapPin } from "lucide-react"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitMessage(result.message || "Thanks for reaching out. We'll be in touch shortly.")
        setIsSubmitted(true)
      } else {
        setSubmitError(result.error || "There was an error submitting your message. Please try again.")
      }
    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <InteractiveBackground />
        <Navigation currentPage="contact" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative">
              {/* Success Animation */}
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-400" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Thank You!
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{submitMessage}</p>

              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <p className="text-gray-300">We'll review your information and prepare a customized approach</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <p className="text-gray-300">Schedule a strategic consultation call within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">3</span>
                    </div>
                    <p className="text-gray-300">Discuss your AI opportunities and create an action plan</p>
                  </div>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Return to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <InteractiveBackground />
      <Navigation currentPage="contact" />

      <div className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 mb-8">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-4 py-2 border-0"
              >
                CONTACT
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Let's Build Your AI
              <br />
              Strategy Together
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to transform your business with AI? Share your details and we'll create a custom strategy that
              drives real results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h2>

                <form action={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Role</option>
                        <option value="ceo">CEO/Founder</option>
                        <option value="cto">CTO/Tech Lead</option>
                        <option value="coo">COO/Operations</option>
                        <option value="marketing">Marketing Director</option>
                        <option value="sales">Sales Director</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-10k">Under $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="over-100k">$100k+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your AI goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="What AI challenges are you looking to solve? What outcomes are you hoping to achieve?"
                    />
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Jake Schincariol */}
                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-400/60">
                      <Image
                        src="/images/jake-headshot.jpg"
                        alt="Jake Schincariol"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Jake Schincariol</h3>
                      <p className="text-gray-400 text-sm mb-3">President</p>
                      <div className="space-y-2">
                        <a
                          href="mailto:Jake@xpntsolutions.com"
                          className="block text-purple-400 hover:text-purple-300 transition-colors duration-300"
                        >
                          Jake@xpntsolutions.com
                        </a>
                        <a
                          href="tel:+15198191135"
                          className="block text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          (519) 819-1135
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parker Joseph */}
                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-400/60">
                      <Image
                        src="/images/parker-headshot.png"
                        alt="Parker Joseph"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Parker Joseph</h3>
                      <p className="text-gray-400 text-sm mb-3">Chief Growth Officer</p>
                      <div className="space-y-2">
                        <a
                          href="mailto:Parker@xpntsolutions.com"
                          className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          Parker@xpntsolutions.com
                        </a>
                        <a
                          href="tel:+12263404388"
                          className="block text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          (226) 340-4388
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Response Guarantee</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Custom AI strategy roadmap</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">
                      Toronto, Canada
                      <br />
                      <span className="text-sm text-gray-400">Serving clients globally</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
