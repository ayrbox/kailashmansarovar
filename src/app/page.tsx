import {
  Mountain,
  Users,
  Shield,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Hero from "@/components/Hero";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Mount Kailash 2026 Packages
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Kailash Mansarovar Yatra is a journey so rare, so powerful,
              it's believed to purify your soul, rewrite your karma, and bring
              you closer to the presence of Lord Shiva himself. We offer Kailash
              Mansarovar Yatra to pilgrims through the Nepal–Tibet route. We
              organise the itinerary, arrange the permits, and guide the
              participants throughout the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Yatra Packages
          </h3>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Mountain className="h-24 w-24 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold">Overland Route</h4>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-orange-600 font-semibold mb-2">
                  May - September 2026
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Kailash Mansarovar Overland Yatra 2026
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Spiritual & Cultural Experiences in Kathmandu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Scenic Overland Journey Through the Himalayas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Lake Mansarovar Rituals and Parikrama
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Mount Kailash Kora (3-Day Trek)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Comfort and Support Throughout
                    </span>
                  </li>
                </ul>
                <Link href="/packages/2026">
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                    View Program Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted Tours Operator for Your Spiritual Journey
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Certified Operator</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Nepal Tourism Board</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-orange-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">TAAN Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Proven Nepal Route Expertise
              </h4>
              <p className="text-gray-700">
                We specialise in the Nepal route, offering a faster,
                visa-friendly path to Kailash Mansarovar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                End-to-End Visa and Permit Handling
              </h4>
              <p className="text-gray-700">
                We handle all paperwork including group visas and Tibet entry
                permits, saving you time and hassle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Small Group Departures
              </h4>
              <p className="text-gray-700">
                We keep our groups limited in size to provide personal care,
                better safety, and smooth coordination.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Transparent Pricing
              </h4>
              <p className="text-gray-700">
                Our packages include all major costs upfront, so there are no
                surprises during your journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-pink-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Personalised Care and Transparency
              </h4>
              <p className="text-gray-700">
                From permits to travel logistics, we provide clear
                communication, 24/7 assistance, and tailored services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                UK-Based Support
              </h4>
              <p className="text-gray-700">
                As a UK-registered company, we provide local assistance, easy
                communication, and trusted payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Highlights of Kailash Mansarovar Tour
          </h3>
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto">
            The Kailash Mansarovar Yatra includes sacred temples, holy lakes,
            mountain passes and ancient monasteries across Nepal and Tibet. Each
            site offers a step deeper into faith, reflection and the spirit of
            Lord Shiva.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12">Get in Touch</h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-orange-100">Available 24/7 for enquiries</p>
            </div>

            <div>
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Email Us</h4>
              <p className="text-orange-100">info@kailashmansarovar.co.uk</p>
            </div>

            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Visit Us</h4>
              <p className="text-orange-100">United Kingdom</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-50 transition">
              Book Your Yatra Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mountain className="h-6 w-6 text-orange-600" />
              <span className="text-lg font-bold">
                Kailash Mansarovar Yatra UK
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for the spiritual journey of a lifetime
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 kailashmansarovar.co.uk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
