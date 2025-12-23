import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-base-content/70">
            Comprehensive educational and technical services designed to meet your learning and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="card-title">Academic Tutoring</h3>
              <p className="text-sm text-base-content/70 mb-4">
                One-on-one and group tutoring sessions for all academic subjects.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Mathematics & Science</li>
                <li>• Languages & Literature</li>
                <li>• Social Studies</li>
                <li>• Test Preparation</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="card-title">Online Courses</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Interactive online learning courses with flexible scheduling.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Self-paced learning</li>
                <li>• Live virtual classes</li>
                <li>• Recorded sessions</li>
                <li>• Certificate programs</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="card-title">IT Training</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Professional IT skills training and certification programs.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Programming languages</li>
                <li>• Web development</li>
                <li>• Database management</li>
                <li>• Cybersecurity basics</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-info-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="card-title">Career Counseling</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Guidance for academic and career planning.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Career assessment</li>
                <li>• University applications</li>
                <li>• Scholarship guidance</li>
                <li>• Resume building</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-warning-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="card-title">Workshop & Seminars</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Interactive workshops and educational seminars.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Skill development</li>
                <li>• Industry insights</li>
                <li>• Guest speakers</li>
                <li>• Networking events</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="card-title">Assessment Services</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Comprehensive evaluation and progress tracking.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Progress reports</li>
                <li>• Standardized testing</li>
                <li>• Performance analysis</li>
                <li>• Improvement plans</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-error rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-error-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10h.01M11 10h.01" />
                </svg>
              </div>
              <h3 className="card-title">CC TV Camera Setup & Maintenance</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Professional installation and maintenance of CCTV camera systems for security.
              </p>
              <ul className="text-sm space-y-1">
                <li>• System installation</li>
                <li>• Camera configuration</li>
                <li>• Maintenance services</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-neutral rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="card-title">Software & Website Development</h3>
              <p className="text-sm text-base-content/70 mb-4">
                Custom software and website development for educational institutions, restaurants, and businesses.
              </p>
              <ul className="text-sm space-y-1">
                <li>• School/College/Madrasah management</li>
                <li>• Restaurant POS systems</li>
                <li>• Shop billing software</li>
                <li>• Website development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content">
            <div className="card-body">
              <h3 className="card-title text-2xl">Ready to Get Started?</h3>
              <p className="mb-4">Contact us today to learn more about our services and how we can help you achieve your educational goals.</p>
              <div className="card-actions justify-center">
                <Link href="/contact" className="btn btn-accent">Contact Us</Link>
                <Link href="/courses" className="btn btn-outline btn-accent">View Courses</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}