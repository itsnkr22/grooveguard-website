typescript
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">GrooveGuard</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Book Consultation
              </button>
            </div>
          </div>        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simplifying Data Privacy
              <br />
              <span className="text-blue-600">Compliance for Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional GDPR, DPDP, and HIPAA compliance services designed for SMEs, startups, 
              and enterprises. Get compliant fast with our expert guidance and ongoing monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg">
                Book a Free Consultation
              </button>              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg">                Get Compliance Checklist              </button>            </div>          </div>
        </div>      </section>

      {/* Services Section */}      <section className="py-20 bg-white">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">              Comprehensive Compliance Services            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">              Everything you need to achieve and maintain data privacy compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">                <span className="text-blue-600 text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Audits</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive assessment of your current data handling practices and compliance gaps.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </button>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">              <div className="mx-auto bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">✅</span>              </div>
              <h3 className="text-xl font-semibold mb-2">Compliance Checklists</h3>
              <p className="text-gray-600 mb-4">                Step-by-step guides tailored to GDPR, DPDP, and HIPAA requirements for your industry.              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">                Learn More →              </button>            </div>

            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Policy Drafting</h3>              <p className="text-gray-600 mb-4">
                Custom privacy policies, terms of service, and compliance documentation.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </button>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">📊</span>              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Monitoring</h3>              <p className="text-gray-600 mb-4">                Continuous compliance monitoring and updates as regulations evolve.              </p>              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}      <section className="py-20 bg-blue-600">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Compliant?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with a free consultation to understand your compliance needs and get a customized roadmap.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium">            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">GrooveGuard</h3>
            <p className="text-gray-600 mb-4">
              Simplifying data privacy compliance for businesses of all sizes.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 GrooveGuard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```
