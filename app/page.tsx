export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">GrooveGuard</span>            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">            Simplifying Data Privacy
            <br />
            <span className="text-blue-600">Compliance for Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional GDPR, DPDP, and HIPAA compliance services designed for SMEs, 
            startups, and enterprises. Get compliant fast with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-lg">
              Book a Free Consultation
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded text-lg">
              Get Compliance Checklist
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Compliance Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to achieve and maintain data privacy compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Privacy Audits", desc: "Comprehensive assessment of your data handling practices", icon: "🛡️" },
              { title: "Compliance Checklists", desc: "Step-by-step guides for GDPR, DPDP, and HIPAA", icon: "✅" },
              { title: "Policy Drafting", desc: "Custom privacy policies and compliance documentation", icon: "📄" },
              { title: "Ongoing Monitoring", desc: "Continuous compliance monitoring and updates", icon: "📊" }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Compliant?          </h2>          <p className="text-xl text-blue-100 mb-8">
            Start with a free consultation to understand your compliance needs.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded text-lg font-medium">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">GrooveGuard</h3>
          <p className="text-gray-600 mb-4">
            Simplifying data privacy compliance for businesses of all sizes.
          </p>
          <p className="text-gray-500 text-sm">            © 2025 GrooveGuard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
