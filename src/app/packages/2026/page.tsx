"use client";

import { useState } from "react";
import {
  Mountain,
  Calendar,
  Users,
  Hotel,
  Utensils,
  TrendingUp,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCTA from "@/components/BookCTA";

// Note: Metadata cannot be exported from client components
// The metadata for this page should be set in a parent layout or use generateMetadata
// For now, you can add this metadata in the app/packages/2026/layout.tsx if needed

export default function Package2026() {
  const [menuOpen, setMenuOpen] = useState(false);

  const departureDates = [
    { month: "May", dates: ["3", "10", "19", "31"] },
    { month: "June", dates: ["7", "14", "28"] },
    { month: "July", dates: ["5", "12", "19", "26"] },
    { month: "August", dates: ["2", "9", "16", "20", "30"] },
    { month: "September", dates: ["6", "13"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              May - September 2026
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Kailash Mansarovar Yatra 2026
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              16 Nights / 17 Days | Kathmandu - Tibet Route
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-800">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span className="font-semibold">Max Altitude: 5,630m</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-800">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-semibold">Small Group Tours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-orange-200">
              <div className="text-orange-600 font-semibold text-sm uppercase mb-2">
                Super Early Bird
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                £3400.00
              </div>
              <div className="text-gray-600 mb-4">per person</div>
              <div className="text-sm text-gray-700 mb-6">
                Single payment option
              </div>
              <BookCTA>Book Now</BookCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Package Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Package Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-700">16 Nights / 17 Days</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Max Altitude
              </h3>
              <p className="text-gray-700">5,630 meters</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Accommodation
              </h3>
              <p className="text-gray-700">Hotel & Guest House</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meals</h3>
              <p className="text-gray-700">Full Board Included</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Best Season
              </h3>
              <p className="text-gray-700">May to September</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Difficulty
              </h3>
              <p className="text-gray-700">Moderate to Difficult</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trail Type
              </h3>
              <p className="text-gray-700">Mountain Journey</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Kathmandu - Tibet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Spiritual Significance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mount Kailash is believed to be the divine abode of Lord Shiva and
              a spiritual center of the universe. This sacred pilgrimage offers
              a profound journey through the Himalayas, allowing participants to
              explore sacred sites and participate in ancient rituals that have
              been performed for thousands of years.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Kailash Mansarovar Yatra is a journey so rare and powerful
              that it is believed to purify your soul, rewrite your karma, and
              bring you closer to the presence of Lord Shiva himself.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Journey Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Spiritual & Cultural Experiences in Kathmandu
                </h3>
                <p className="text-gray-700">
                  Begin your journey with visits to ancient temples and UNESCO
                  World Heritage Sites in Nepal's capital.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Scenic Overland Journey Through the Himalayas
                </h3>
                <p className="text-gray-700">
                  Travel through breathtaking mountain landscapes and experience
                  the raw beauty of the Tibetan plateau.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Lake Mansarovar Rituals and Parikrama
                </h3>
                <p className="text-gray-700">
                  Perform sacred rituals at the holy Lake Mansarovar, one of the
                  highest freshwater lakes in the world.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mount Kailash Kora (3-Day Trek)
                </h3>
                <p className="text-gray-700">
                  Complete the sacred circumambulation of Mount Kailash, a
                  transformative spiritual experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Comfort and Support Throughout
                </h3>
                <p className="text-gray-700">
                  Experienced guides, quality accommodations, and comprehensive
                  support ensure a safe and comfortable journey.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Small Group Experience
                </h3>
                <p className="text-gray-700">
                  Limited group sizes ensure personalized attention and a more
                  intimate spiritual journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departure Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            2026 Departure Dates
          </h2>

          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {departureDates.map((month) => (
              <div
                key={month.month}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-4">
                  {month.month}
                </h3>
                <div className="space-y-2">
                  {month.dates.map((date) => (
                    <div
                      key={date}
                      className="text-gray-700 py-2 border-b last:border-b-0"
                    >
                      {month.month} {date}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Multiple departure dates available throughout the season.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join us on this transformative pilgrimage to Mount Kailash and Lake
            Mansarovar. Limited spots available for each departure.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-50 transition">
              Book Your Yatra Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition">
              Download Itinerary
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
