"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface FormData {
  email: string
  firstName: string
  lastName: string
  company: string
  jobTitle: string
  teamSize: string
  consentMarketing: boolean
}

export function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    teamSize: "",
    consentMarketing: false,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const showToast = (title: string, description: string) => {
    // Simple toast implementation - in production use proper toast library
    alert(`${title}: ${description}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        showToast(
          "Welcome to Impetus Global!",
          "Check your email for your free iDrive assessment link."
        )
        
        // Track analytics event
        await fetch("/api/analytics/event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventType: "form_submit",
            eventData: {
              leadId: result.id,
              source: "podcast-landing",
            },
          }),
        })
        
        // Reset form
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          company: "",
          jobTitle: "",
          teamSize: "",
          consentMarketing: false,
        })
      } else {
        const error = await response.json()
        showToast(
          "Error",
          error.error || "Something went wrong. Please try again."
        )
      }
    } catch (error) {
      showToast(
        "Error",
        "Network error. Please check your connection and try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-zinc-800 bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-wider text-white">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-zinc-400">
            Get exclusive insights and early access to new episodes
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Join Our Community</h3>
            <p className="text-zinc-400">
              Over 10,000 leaders receive our weekly insights
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-zinc-300">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-zinc-300">
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="teamSize" className="block text-sm font-medium text-zinc-300">
                Team Size
              </label>
              <select
                id="teamSize"
                value={formData.teamSize}
                onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
              >
                <option value="">Select team size</option>
                <option value="1-10">1-10 people</option>
                <option value="11-50">11-50 people</option>
                <option value="51-200">51-200 people</option>
                <option value="201-500">201-500 people</option>
                <option value="500+">500+ people</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consentMarketing}
                onChange={(e) => setFormData({...formData, consentMarketing: e.target.checked})}
                className="rounded border-zinc-700 text-[#00A291]"
              />
              <label htmlFor="consent" className="text-sm text-zinc-400">
                I agree to receive marketing communications from Impetus Global
              </label>
            </div>

            <button 
              type="submit" 
              className="flex w-full items-center justify-center gap-2 rounded bg-[#00A291] py-3 font-semibold text-white transition hover:bg-[#00635a]" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}