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
  Moon,
  ChevronDown,
  Check,
  X,
  Download,
  Zap,
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
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  // Updated departure dates with Full Moon indicators
  const departureDates = [
    { month: "May", dates: [
      { date: "3", isFullMoon: false },
      { date: "10", isFullMoon: false },
      { date: "17", isFullMoon: false },
      { date: "23", isFullMoon: true },
      { date: "31", isFullMoon: false },
    ]},
    { month: "June", dates: [
      { date: "7", isFullMoon: false },
      { date: "14", isFullMoon: false },
      { date: "21", isFullMoon: true },
      { date: "28", isFullMoon: false },
    ]},
    { month: "July", dates: [
      { date: "5", isFullMoon: false },
      { date: "12", isFullMoon: false },
      { date: "19", isFullMoon: false },
      { date: "21", isFullMoon: true },
      { date: "26", isFullMoon: false },
    ]},
    { month: "August", dates: [
      { date: "2", isFullMoon: false },
      { date: "9", isFullMoon: false },
      { date: "16", isFullMoon: false },
      { date: "20", isFullMoon: true },
      { date: "30", isFullMoon: false },
    ]},
    { month: "September", dates: [
      { date: "6", isFullMoon: false },
      { date: "13", isFullMoon: false },
    ]},
  ];

  // Detailed itinerary data
  const itinerary = [
    {
      day: 1,
      title: "Kathmandu Arrival",
      altitude: "1400m",
      activities: ["Airport pickup", "Hotel check-in"],
      meals: ["Dinner"],
      accommodation: "3-Star Hotel (Tibet/Arts)",
    },
    {
      day: 2,
      title: "Kathmandu Sightseeing",
      altitude: "1400m",
      activities: ["08:00 AM - Rudrabhishek Puja & Special Darshan at Pashupatinath Temple", "Visit Shaktipeeth"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Hotel",
    },
    {
      day: 3,
      title: "Chandragiri Temple Visit",
      altitude: "1400m",
      activities: ["Visit Chandragiri Bhaleshwor Mahadev Temple (22 kms, 1 hr drive)", "Note: Cable car fare not included"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Hotel",
    },
    {
      day: 4,
      title: "Bhaktapur Sightseeing",
      altitude: "1400m",
      activities: ["Visit Bhaktapur Durbar Square", "Doleshwor Mahadev", "Changu Narayan Temple (15 kms, 30 min)"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Hotel",
    },
    {
      day: 5,
      title: "Kathmandu Sightseeing & Briefing",
      altitude: "1400m",
      activities: ["Swayambhunath Stupa and Kathmandu Durbar Square", "04:00 PM - Briefing about Kailash Mansarovar Yatra"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Hotel",
    },
    {
      day: 6,
      title: "Drive to Border Area",
      altitude: "1600-2000m",
      activities: ["Drive to Dhunche/Syabrubesi/Timure (127-152km, 6-8hrs)"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "Sonam Guest House",
    },
    {
      day: 7,
      title: "Drive to Kyirong",
      altitude: "2850m",
      activities: ["Complete immigration & customs at Rasuwagadhi border", "Drive to Kyirong (40km, 1hr)"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Phuntsok Khansang Hotel",
    },
    {
      day: 8,
      title: "Drive to Saga",
      altitude: "4550m",
      activities: ["09:00 AM departure", "220km drive (5-6 hrs)", "Cross holy Brahmaputra River"],
      meals: ["Breakfast", "Packed Lunch", "Dinner"],
      accommodation: "Xibuyizhan Hotel",
    },
    {
      day: 9,
      title: "Drive to Mansarovar Lake",
      altitude: "4550m",
      activities: ["450km drive (6-7 hrs)", "Fill spiritual water at lake shore", "Parikrama of Mansarovar Lake by vehicle (90km, 3hrs)"],
      meals: ["Breakfast", "Packed Lunch", "Dinner"],
      accommodation: "Lake Guesthouse",
    },
    {
      day: 10,
      title: "Drive to Darchen",
      altitude: "4650m",
      activities: ["Morning Puja at Mansarovar Lake", "Drive to Darchen"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "Hotel with attached bathroom",
    },
    {
      day: 11,
      title: "First Day of Outer Kora - Trek to Dirapuk",
      altitude: "4860m",
      activities: ["10:00 AM - Short drive to Tarboche, visit Yama Dwar", "12km trek to Dirapuk (5-6 hrs)", "Option: Non-trekkers can return to Darchen"],
      meals: ["Breakfast at Darchen", "Packed Lunch", "Dinner"],
      accommodation: "Guesthouse",
    },
    {
      day: 12,
      title: "Charansparsh Trek - Foot of Kailash",
      altitude: "5800m",
      activities: ["8-10km round-trip hike to Charan Sparsh point (5,800m / 19,000 ft)", "Pilgrims symbolically touch the north face of Kailash", "SPIRITUAL HIGHLIGHT: Touch the foot of Lord Shiva"],
      meals: ["Breakfast", "Packed Lunch", "Dinner"],
      accommodation: "Guesthouse",
      isHighlight: true,
    },
    {
      day: 13,
      title: "Second Day of Outer Kora - Trek to Zuthulphuk",
      altitude: "5700m",
      activities: ["07:00 AM start", "22km trek (8-9 hrs)", "2-hour ascent to Dolma La Pass (5700m / 18,700 ft) - HIGHEST POINT", "Pass through Yamasthal and Shiva-sthal", "See Gauri Kunda during descent"],
      meals: ["Breakfast", "Packed Lunch", "Dinner"],
      accommodation: "Guesthouse",
    },
    {
      day: 14,
      title: "Drive to Saga",
      altitude: "4550m",
      activities: ["08:00 AM - Short 8km trek (2-3hrs) to meet the coach", "Drive to Darchen to merge with waiting members", "Drive to Saga (470km, 7-8 hrs)"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "Xibuyizhan Hotel",
    },
    {
      day: 15,
      title: "Drive back to Kyirong",
      altitude: "2850m",
      activities: ["220km drive (5-6 hrs)"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Phuntsok Khansang Hotel",
    },
    {
      day: 16,
      title: "Drive to Kathmandu",
      altitude: "1400m",
      activities: ["Drive from Kyirong to border (40km, 1hr)", "Complete immigration formalities", "Drive to Kathmandu (152km, 7-8 hrs)", "Certificate of completion provided"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "3-Star Hotel (Tibet/Arts)",
    },
    {
      day: 17,
      title: "Transfer to Airport",
      altitude: "1400m",
      activities: ["Free until flight time", "Airport drop-off 3 hours before flight (30 min drive)"],
      meals: ["Breakfast"],
      accommodation: "Airport transfer",
    },
  ];

  const accommodations = [
    {
      location: "Kathmandu",
      nights: 6,
      type: "3-Star Hotels",
      details: "Hotel Tibet, Hotel Arts or similar",
      amenities: ["Twin Sharing rooms", "Attached bathrooms", "Restaurant facilities"],
    },
    {
      location: "Kyirong",
      nights: 2,
      type: "3-Star Hotel",
      details: "Phuntsok Khansang Hotel",
      amenities: ["Attached bathrooms", "Quality rooms", "Comfortable stay"],
    },
    {
      location: "Saga",
      nights: 2,
      type: "Quality Guest House",
      details: "Xibuyizhan Hotel",
      amenities: ["Attached bathrooms", "Basic but comfortable"],
    },
    {
      location: "Mansarovar, Dirapuk & Zuthulphuk",
      nights: 3,
      type: "Tibetan Guest Houses",
      details: "Sacred locations with authentic experience",
      amenities: ["Sharing rooms", "Shared Tibetan-style toilets", "Authentic cultural experience"],
    },
    {
      location: "Darchen",
      nights: 1,
      type: "Mountain Hotel",
      details: "Base camp for Kailash Kora",
      amenities: ["Attached bathroom", "Rest before trekking"],
    },
  ];

  const inclusions = [
    "6 nights in 3-star Kathmandu hotel",
    "1 night at Timure border (Sonam Guest House)",
    "2 nights at Kyirong (Phuntsok Khansang Hotel with attached bathrooms)",
    "2 nights at Saga (Xibuyizhan Hotel with attached bathrooms)",
    "1 night each at Mansarovar, Dirapuk & Zuthulphuk guesthouses",
    "1 night at Darchen (hotel with attached bathroom)",
    "Full day Kathmandu sightseeing",
    "Rudrabhishek Puja & Special Darshan at Pashupatinath",
    "Kathmandu - China Border - Kathmandu by A/C Coach",
    "Tibet group paper visa fee",
    "All vegetarian meals (breakfast, lunch, dinner)",
    "Transportation in Tibet by luxury A/C coach",
    "Supporting truck for equipment",
    "English-speaking Tibetan guide",
    "All necessary travel & trekking permits",
    "Priest at Lake Mansarovar for Puja",
    "Supporting crew (Cooks, Helpers, Sherpas)",
    "Oxygen cylinders & medical kit for emergencies",
    "Souvenir gifts: duffle bag, backpack, cap, passport holder, windcheater jacket",
    "Kailash Yatra completion certificate",
    "Airport pick up & drop off",
    "All taxes & service charges",
  ];

  const exclusions = [
    "Entrance fees during Nepal sightseeing",
    "Chandragiri Cable Car fare",
    "International air tickets to/from Kathmandu",
    "Travel insurance & Rescue and evacuation",
    "Multiple entry Nepal Visa for foreigners",
    "Horse and Porter hiring during Parikrama (Approx 4500 Chinese Yuan for both or 1200 for Porter only)",
    "Tips for staff and personal expenses",
    "Extra hotel charges in Kathmandu for early return or extra stays",
    "Extra charges for flight cancellations due to weather or permit delays",
    "USD 100 per person per day penalty if leaving group early from Tibet for non-medical reasons",
    "Additional costs due to natural calamities",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                May - September 2026
              </div>
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                🐴 Year of the Horse - Once in 12 Years
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Kailash Mansarovar Yatra 2026
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              16 Nights / 17 Days | Kathmandu - Tibet Route | Spiritual Pilgrimage
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-800">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span className="font-semibold">Max Altitude: 5,800m</span>
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
                Early Bird Rate
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                £3400
              </div>
              <div className="text-gray-600 mb-4">per person</div>
              <div className="text-sm text-orange-600 mb-6 bg-orange-50 p-3 rounded-lg">
                Prices may vary based on booking size. Contact us for current availability.
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
              <p className="text-gray-700">5,800 meters</p>
              <p className="text-xs text-orange-600 font-semibold">(Charansparsh Point)</p>
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

      {/* Departure Dates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            2026 Departure Dates
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Select your preferred departure date. <Moon className="inline h-5 w-5 text-yellow-500" /> indicates Full Moon dates for enhanced spiritual significance.
          </p>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {departureDates.map((month) => (
              <div
                key={month.month}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-4 border-b pb-2">
                  {month.month}
                </h3>
                <div className="space-y-2">
                  {month.dates.map((dateObj) => (
                    <div
                      key={dateObj.date}
                      className={`py-2 px-2 rounded transition ${
                        dateObj.isFullMoon
                          ? "bg-yellow-100 text-gray-900 font-bold border-2 border-yellow-400"
                          : "text-gray-700 border-b last:border-b-0 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>{month.month} {dateObj.date}</span>
                        {dateObj.isFullMoon && <Moon className="h-4 w-4 text-yellow-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 bg-blue-50 p-4 rounded-lg max-w-3xl mx-auto">
            <p className="text-blue-900 font-semibold">
              📌 All dates are Kathmandu arrival dates. Limited spots available. Early booking recommended!
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Your 17-Day Journey Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Days 1-5</h3>
              <p className="text-gray-700 font-semibold">Nepal Preparation</p>
              <p className="text-sm text-gray-600 mt-2">Kathmandu sightseeing, temple visits, spiritual briefing</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Days 6-10</h3>
              <p className="text-gray-700 font-semibold">Border & Travel</p>
              <p className="text-sm text-gray-600 mt-2">Border crossing, drive to Mansarovar Lake, preparations</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <Mountain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Days 11-14</h3>
              <p className="text-gray-700 font-semibold">Kailash Kora Trek</p>
              <p className="text-sm text-gray-600 mt-2">3-day trek around Mount Kailash, Charansparsh highlight</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Days 15-17</h3>
              <p className="text-gray-700 font-semibold">Return Journey</p>
              <p className="text-sm text-gray-600 mt-2">Drive back to Kathmandu, airport transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Day-by-Day Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Detailed Day-by-Day Itinerary
          </h2>

          <div className="space-y-4">
            {itinerary.map((day) => (
              <div
                key={day.day}
                className={`border rounded-lg overflow-hidden transition ${
                  day.isHighlight
                    ? "border-4 border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left font-semibold hover:bg-gray-50 ${
                    day.isHighlight ? "bg-orange-100 text-orange-900" : "text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-bold ${day.isHighlight ? "text-orange-600" : "text-blue-600"}`}>
                      Day {day.day}
                    </span>
                    <div>
                      <p className={day.isHighlight ? "text-orange-900" : "text-gray-900"}>
                        {day.title}
                      </p>
                      <p className={`text-sm ${day.isHighlight ? "text-orange-700" : "text-gray-600"}`}>
                        Altitude: {day.altitude}
                      </p>
                    </div>
                    {day.isHighlight && (
                      <Zap className="h-5 w-5 text-orange-600 ml-auto" />
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      expandedDay === day.day ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedDay === day.day && (
                  <div className={`px-6 py-4 border-t ${day.isHighlight ? "border-orange-200 bg-white" : "border-gray-200"}`}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                        <ul className="space-y-1">
                          {day.activities.map((activity, idx) => (
                            <li key={idx} className="text-gray-700 flex gap-2">
                              <span className="text-orange-600">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Meals:</h4>
                          <p className="text-gray-700">{day.meals.join(", ")}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Accommodation:</h4>
                          <p className="text-gray-700">{day.accommodation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Highlight: Charansparsh Trek */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-4">
            Charansparsh Trek - Day 12 Spiritual Highlight
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Reach 5,800m / 19,000 ft - Touch the Foot of Lord Shiva
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              Experience one of the most spiritually significant moments of your pilgrimage. On Day 12, undertake an 8-10km round-trip hike to the Charansparsh point, the highest location on the Kailash Kora.
            </p>
            <ul className="text-left space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 text-yellow-300 mt-1" />
                <span>Reach the symbolic "Foot of Kailash" at 5,800 meters elevation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 text-yellow-300 mt-1" />
                <span>Touch the north face of Mount Kailash, a unique spiritual experience</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 text-yellow-300 mt-1" />
                <span>Witness panoramic views of the sacred mountain from the highest point</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 text-yellow-300 mt-1" />
                <span>Participate in prayers and rituals at this sacred location</span>
              </li>
            </ul>
            <p className="text-sm text-orange-100 italic">
              This is a moderately challenging trek. Alternative arrangements available for non-trekkers.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Accommodation Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((acc, idx) => (
              <div key={idx} className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{acc.location}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{acc.nights} nights</p>
                  </div>
                  <Hotel className="h-8 w-8 text-blue-600" />
                </div>

                <p className="font-semibold text-gray-900 mb-3">{acc.type}</p>
                <p className="text-gray-700 mb-4">{acc.details}</p>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Amenities:</p>
                  <ul className="space-y-1">
                    {acc.amenities.map((amenity, idx) => (
                      <li key={idx} className="text-gray-700 flex gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What's Included in Your Package
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-white rounded-lg hover:shadow-md transition">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What's NOT Included
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {exclusions.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-red-50 rounded-lg hover:shadow-md transition">
                <X className="h-6 w-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Spiritual Journey in 2026?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join us on this transformative pilgrimage to Mount Kailash and Lake
            Mansarovar. Once in 12 years. Limited spots available for each departure.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <BookCTA>Book Your Yatra Now</BookCTA>
            <a
              href="/itinerary-2026.pdf"
              download
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition flex items-center gap-2 justify-center"
            >
              <Download className="h-5 w-5" />
              Download Itinerary PDF
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-orange-100 font-semibold">+44 7545 066652</p>
              <p className="text-orange-100 text-sm">24/7 Available</p>
            </div>

            <div>
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Email Us</h4>
              <p className="text-orange-100 text-sm">
                <a href="mailto:info@kailashmansarovar.co.uk" className="hover:underline">
                  info@kailashmansarovar.co.uk
                </a>
              </p>
              <p className="text-orange-100 text-sm">
                <a href="mailto:prajwal15@hotmail.com" className="hover:underline">
                  prajwal15@hotmail.com
                </a>
              </p>
            </div>

            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Location</h4>
              <p className="text-orange-100">United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
