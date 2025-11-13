import {
  Mountain,
  Users,
  Shield,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Sparkles,
  Calendar,
} from "lucide-react";
import Hero from "@/components/Hero";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Mount Kailash & Lake Mansarovar Pilgrimage 2026",
  description: "Join our Kailash Mansarovar Yatra 2026 from UK via Nepal route. Year of the Horse pilgrimage. 16 days overland journey including Kailash Kora. UK-based operator, small groups, all permits included. From £3,400.",
  openGraph: {
    title: "Kailash Mansarovar Yatra 2026 | Sacred Pilgrimage from UK",
    description: "Experience the spiritual journey of a lifetime. Kailash Mansarovar Yatra 2026 via Nepal-Tibet route. Small groups, expert guidance, complete support.",
  },
};

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

      {/* 2026 Horse Year Significance Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-y-4 border-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mb-6">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                2026 Horse Year Significance
              </h2>
              <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <Calendar className="h-5 w-5" />
                <span>Once in 12 Years - Tibetan Year of the Horse</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-orange-200">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Sacred Alignment
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        2026 marks the Tibetan Year of the Horse, a deeply
                        auspicious time when Mount Kailash's spiritual energy is
                        believed to be at its most powerful and accessible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Thirteen-Fold Merit
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        According to Tibetan Buddhist tradition, completing the
                        Kailash Kora (circumambulation) during the Horse Year
                        brings the spiritual merit equivalent to thirteen
                        circumambulations in any other year.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Once-in-a-Lifetime Opportunity
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        This sacred confluence occurs only once every 12 years.
                        The next Horse Year won't arrive until 2038, making 2026
                        a truly rare opportunity for pilgrims.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Enhanced Spiritual Journey
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Pilgrims from across Hindu, Buddhist, Jain, and Bon
                        traditions consider the Horse Year as the most
                        spiritually potent time to undertake this sacred
                        pilgrimage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      Don't Miss This Sacred Opportunity
                    </p>
                    <p className="text-gray-700">
                      Join thousands of pilgrims in this once-in-12-years
                      spiritual journey to Mount Kailash and Lake Mansarovar.
                    </p>
                  </div>
                  <Link href="/packages/2026">
                    <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition shadow-lg hover:shadow-xl whitespace-nowrap">
                      View 2026 Packages
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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

      <Footer />
    </div>
  );
}
