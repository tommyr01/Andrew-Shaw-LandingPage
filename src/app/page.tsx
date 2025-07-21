import { ChevronRight, Quote, Star, Users, Target, TrendingUp } from "lucide-react"

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Richardson",
      role: "HR Director",
      company: "TechCorp UK",
      content: "The iDrive assessment completely transformed how we approach team development. We've seen a 40% improvement in team performance.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Innovation Labs",
      content: "Impetus Global helped us unlock potential we didn't know existed. The ROI has been exceptional - worth every penny.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Team Leader",
      company: "FinanceHub",
      content: "The practical strategies from the podcast have made an immediate impact. My team is more engaged and productive than ever.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold text-[#00A291]">IMPETUS</div>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="text-zinc-400 transition hover:text-[#00A291]">About</a>
            <a href="#testimonials" className="text-zinc-400 transition hover:text-[#00A291]">Success Stories</a>
            <a href="#idrive" className="text-zinc-400 transition hover:text-[#00A291]">iDrive</a>
            <a href="#contact" className="text-zinc-400 transition hover:text-[#00A291]">Contact</a>
          </div>
          <button className="rounded-full bg-[#00A291] px-6 py-2 text-white transition hover:bg-[#00635a]">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />
          {/* Particle effect simulation */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 animate-pulse rounded-full bg-[#00A291]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 inline-block rounded-full border border-[#00A291] bg-[#00A291]/10 px-3 py-1 text-sm text-[#00A291]">
              New Episode Every Week
            </div>
            
            <h1 className="mb-6 text-5xl font-bold uppercase tracking-wider md:text-7xl lg:text-8xl text-white">
              Unlock Elite<br />
              Performance
            </h1>
            
            <p className="mb-12 max-w-3xl text-lg text-zinc-400 md:text-xl">
              Join industry leaders as we explore the science of motivation, behavior, and 
              communication. Discover how the iDrive methodology is transforming organizations 
              worldwide.
            </p>

            {/* Podcast Player */}
            <div className="w-full max-w-4xl rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Episode 12: Breaking Performance Barriers</h3>
                  <p className="text-zinc-400">
                    With Sarah Richardson, HR Director at TechCorp UK
                  </p>
                </div>
                <div className="rounded bg-[#00A291] px-2 py-1 text-xs font-semibold text-white">
                  Latest
                </div>
              </div>
              
              {/* Video/Audio Player */}
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00A291] text-white transition hover:bg-[#00635a]">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 4.3c0-.9 1.1-1.3 1.8-.7l5.8 4.7c.5.4.5 1.2 0 1.6L8.1 14.6c-.7.6-1.8.2-1.8-.7V4.3z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Player Controls */}
              <div className="space-y-4">
                <div className="h-2 rounded-full bg-zinc-700">
                  <div className="h-2 w-1/3 rounded-full bg-[#00A291]" />
                </div>
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>12:45</span>
                  <span>38:20</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#00A291] px-8 py-4 font-semibold text-white transition hover:bg-[#00635a]">
                Take the Free iDrive Assessment
              </button>
              <button className="rounded-full border border-[#00A291] px-8 py-4 font-semibold text-[#00A291] transition hover:bg-[#00A291] hover:text-white">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="border-t border-zinc-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-wider">Key Insights</h2>
            <p className="text-xl text-zinc-400">Actionable strategies you can implement today</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <Target className="mb-4 h-12 w-12 text-[#00A291]" />
              <h3 className="mb-4 text-xl font-bold text-white">Motivation Mapping</h3>
              <p className="text-zinc-400">
                Learn how to identify and leverage the unique motivational drivers 
                within your team for maximum engagement and performance.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <Users className="mb-4 h-12 w-12 text-[#00A291]" />
              <h3 className="mb-4 text-xl font-bold text-white">Behavioral Insights</h3>
              <p className="text-zinc-400">
                Understand the science behind behavior patterns and how to create 
                environments that naturally drive high performance.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <TrendingUp className="mb-4 h-12 w-12 text-[#00A291]" />
              <h3 className="mb-4 text-xl font-bold text-white">Sustainable Growth</h3>
              <p className="text-zinc-400">
                Discover proven frameworks for building lasting change that 
                continues to deliver results long after implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-t border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-wider">Success Stories</h2>
            <p className="text-xl text-zinc-400">Real results from real leaders</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A291] text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-zinc-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#00A291] text-[#00A291]" />
                    ))}
                  </div>
                </div>
                <Quote className="mb-4 h-8 w-8 text-[#00A291]/50" />
                <p className="text-zinc-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
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
            
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="flex w-full items-center justify-center gap-2 rounded bg-[#00A291] py-3 font-semibold text-white transition hover:bg-[#00635a]"
              >
                Get Started
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-2xl font-bold text-[#00A291]">IMPETUS</div>
            <div className="flex gap-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-[#00A291]">Privacy Policy</a>
              <a href="#" className="hover:text-[#00A291]">Terms of Service</a>
              <a href="#" className="hover:text-[#00A291]">Cookie Policy</a>
            </div>
            <p className="text-sm text-zinc-400">
              © 2024 Impetus Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}