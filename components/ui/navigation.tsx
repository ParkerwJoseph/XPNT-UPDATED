"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest("[data-mobile-menu]")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
  ]

  const actionItems = [
    { href: "/contact", label: "CONTACT", variant: "outline" as const },
    { href: "/get-started", label: "GET STARTED", variant: "primary" as const },
  ]

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 border-b border-gray-800/30 backdrop-blur-md bg-black/20">
        <div className="flex items-center space-x-6 sm:space-x-12">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300 px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800/20"
            onClick={handleMobileLinkClick}
          >
            XPNT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-300",
                  currentPage === item.label.toLowerCase()
                    ? "bg-gray-800/60 text-white"
                    : "text-gray-400 hover:bg-gray-800/40 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Action Items */}
        <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {actionItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-all duration-300 px-4 py-2 rounded-full",
                item.variant === "outline"
                  ? "text-gray-300 hover:text-white border border-gray-600/50 hover:bg-gray-800/40 hover:border-gray-500"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-xl",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/40 transition-all duration-300 z-50 relative"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          data-mobile-menu
        >
          <div className="relative w-6 h-6">
            <Menu
              className={cn(
                "absolute inset-0 w-6 h-6 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100",
              )}
            />
            <X
              className={cn(
                "absolute inset-0 w-6 h-6 transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        data-mobile-menu
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "relative bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 ml-auto h-full w-80 max-w-[85vw] shadow-2xl transition-all duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          data-mobile-menu
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              onClick={handleMobileLinkClick}
            >
              XPNT
            </Link>
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/40 transition-all duration-300"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="p-6 space-y-6">
            {/* Main Navigation */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  className={cn(
                    "block px-4 py-3 rounded-xl transition-all duration-300 text-base font-medium",
                    currentPage === item.label.toLowerCase()
                      ? "bg-gray-800/60 text-white border border-gray-700/50"
                      : "text-gray-300 hover:bg-gray-800/40 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Action Items */}
            <div className="pt-6 border-t border-gray-700/30 space-y-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Actions</div>
              {actionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  className={cn(
                    "block px-4 py-3 rounded-xl transition-all duration-300 text-base font-medium text-center",
                    item.variant === "outline"
                      ? "text-gray-300 hover:text-white border border-gray-600/50 hover:bg-gray-800/40 hover:border-gray-500"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-xl",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="pt-6 border-t border-gray-700/30">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Contact</div>
              <div className="space-y-3">
                <a
                  href="mailto:Jake@xpntsolutions.com"
                  className="block text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  onClick={handleMobileLinkClick}
                >
                  Jake@xpntsolutions.com
                </a>
                <a
                  href="tel:+15198191135"
                  className="block text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  onClick={handleMobileLinkClick}
                >
                  (519) 819-1135
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs text-gray-500 text-center">© 2025 XPNT Solutions</div>
          </div>
        </div>
      </div>
    </>
  )
}
