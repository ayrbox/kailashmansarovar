import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Kailash Mansarovar Yatra",
  description:
    "Cookie Policy for Kailash Mansarovar Yatra Limited - How we use cookies and tracking technologies",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 2025
          </p>

          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <div className="space-y-3 text-gray-700">
                <p>
                  This Cookie Policy explains how Kailash Mansarovar Yatra
                  Limited ("we", "us", "our", or "the Company") uses cookies and
                  similar tracking technologies on our website{" "}
                  <a
                    href="https://www.kailashmansarovar.co.uk"
                    className="text-orange-600 hover:underline"
                  >
                    www.kailashmansarovar.co.uk
                  </a>
                  .
                </p>
                <p>
                  This policy should be read in conjunction with our{" "}
                  <Link
                    href="/privacy"
                    className="text-orange-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  , which provides more information about how we collect, use,
                  and protect your personal data.
                </p>
                <p>
                  By using our website, you consent to the use of cookies in
                  accordance with this Cookie Policy. If you do not agree to our
                  use of cookies, you should change your browser settings
                  accordingly or stop using our website.
                </p>
              </div>
            </section>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. What Are Cookies?
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Cookies are small text files that are placed on your device
                  (computer, smartphone, tablet) when you visit a website. They
                  are widely used to make websites work more efficiently and
                  provide information to website owners.
                </p>
                <p>Cookies typically contain:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The name of the website that placed the cookie</li>
                  <li>A unique identifier</li>
                  <li>
                    Information about your browsing behavior or preferences
                  </li>
                  <li>An expiration date</li>
                </ul>
                <p>
                  Cookies can be "session cookies" (deleted when you close your
                  browser) or "persistent cookies" (remain on your device for a
                  set period or until you delete them).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Types of Cookies We Use
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We use different types of cookies for various purposes. Below
                  is an explanation of each category:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.1 Strictly Necessary Cookies
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-900">
                    No consent required
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    These cookies are essential for our website to function and
                    cannot be disabled in our systems.
                  </p>
                </div>
                <p className="mt-3">
                  Strictly necessary cookies enable core functionality such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Security and authentication</li>
                  <li>Session management</li>
                  <li>Load balancing</li>
                  <li>Remembering your cookie consent preferences</li>
                  <li>Enabling you to navigate the website and use its features</li>
                </ul>
                <p>
                  Without these cookies, services like booking forms and secure
                  areas of our website cannot be provided.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  2.2 Performance and Analytics Cookies
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-900">
                    Consent required
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    These cookies help us understand how visitors interact with
                    our website by collecting and reporting information
                    anonymously.
                  </p>
                </div>
                <p className="mt-3">
                  Performance cookies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Count visits and traffic sources</li>
                  <li>Measure website performance</li>
                  <li>Understand which pages are most popular</li>
                  <li>See how visitors navigate the site</li>
                  <li>Identify technical issues and improve user experience</li>
                </ul>
                <p className="font-semibold mt-3">
                  We use Google Analytics for this purpose (see Section 3.1).
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  2.3 Functionality Cookies
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-900">
                    Consent required
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    These cookies enable enhanced functionality and
                    personalization.
                  </p>
                </div>
                <p className="mt-3">
                  Functionality cookies allow us to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Personalize content based on your location</li>
                  <li>Remember your language preferences</li>
                  <li>Provide enhanced features like live chat</li>
                </ul>
                <p>
                  If you disable these cookies, some features may not function
                  properly.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  2.4 Marketing and Targeting Cookies
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-900">
                    Consent required
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    These cookies track your browsing habits to deliver relevant
                    advertising and measure campaign effectiveness.
                  </p>
                </div>
                <p className="mt-3">
                  Marketing cookies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deliver relevant advertisements based on your interests</li>
                  <li>Limit the number of times you see an advertisement</li>
                  <li>Measure the effectiveness of marketing campaigns</li>
                  <li>
                    Track conversions (e.g., when you make a booking after
                    clicking an ad)
                  </li>
                  <li>Build marketing audiences for retargeting</li>
                </ul>
                <p className="font-semibold mt-3">
                  We use Facebook Pixel for this purpose (see Section 3.2).
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Specific Cookies We Use
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Below is detailed information about the third-party cookies we
                  use on our website:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.1 Google Analytics
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800">Provider:</p>
                      <p className="text-sm">Google LLC</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Purpose:</p>
                      <p className="text-sm">
                        Website analytics and performance measurement
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Category:</p>
                      <p className="text-sm">Performance/Analytics Cookies</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Cookie Names:
                      </p>
                      <ul className="text-sm list-disc pl-6 mt-1">
                        <li>_ga</li>
                        <li>_ga_[container-id]</li>
                        <li>_gid</li>
                        <li>_gat</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Duration:</p>
                      <ul className="text-sm list-disc pl-6 mt-1">
                        <li>_ga: 2 years</li>
                        <li>_ga_[container-id]: 2 years</li>
                        <li>_gid: 24 hours</li>
                        <li>_gat: 1 minute</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="font-semibold">What Google Analytics Does:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Tracks how many people visit our website and which pages
                      they view
                    </li>
                    <li>
                      Measures how long visitors spend on our site and which
                      pages they exit from
                    </li>
                    <li>
                      Identifies traffic sources (search engines, social media,
                      direct links)
                    </li>
                    <li>
                      Provides demographic information (age, gender, interests)
                      in aggregate form
                    </li>
                    <li>
                      Tracks device type (desktop, mobile, tablet) and browser
                      used
                    </li>
                    <li>Helps us identify popular content and user behavior patterns</li>
                  </ul>

                  <p className="font-semibold mt-4">Data Collected:</p>
                  <p>
                    Google Analytics collects information such as your IP
                    address (anonymized), browser type, device information,
                    pages visited, time spent on pages, and referring website.
                  </p>

                  <p className="font-semibold mt-4">Data Transfer:</p>
                  <p>
                    Google Analytics data is transferred to and processed by
                    Google LLC in the United States. Google is certified under
                    the EU-U.S. and Swiss-U.S. Privacy Shield Framework.
                  </p>

                  <p className="font-semibold mt-4">Learn More:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Google Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.google.com/analytics/answer/6004245"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        How Google Uses Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Google Analytics Opt-out Browser Add-on
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-8">
                  3.2 Facebook Pixel
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800">Provider:</p>
                      <p className="text-sm">Meta Platforms Ireland Limited</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Purpose:</p>
                      <p className="text-sm">
                        Marketing, advertising, conversion tracking, and
                        retargeting
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Category:</p>
                      <p className="text-sm">Marketing/Targeting Cookies</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Cookie Names:
                      </p>
                      <ul className="text-sm list-disc pl-6 mt-1">
                        <li>_fbp</li>
                        <li>fr</li>
                        <li>_fbc</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Duration:</p>
                      <ul className="text-sm list-disc pl-6 mt-1">
                        <li>_fbp: 3 months</li>
                        <li>fr: 3 months</li>
                        <li>_fbc: 2 years</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="font-semibold">What Facebook Pixel Does:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Tracks conversions from Facebook and Instagram ads (e.g.,
                      completed bookings)
                    </li>
                    <li>
                      Builds custom audiences for targeted advertising campaigns
                    </li>
                    <li>
                      Creates lookalike audiences based on existing customers
                    </li>
                    <li>
                      Enables retargeting ads to people who have visited our
                      website
                    </li>
                    <li>
                      Optimizes ad delivery to people most likely to take action
                    </li>
                    <li>
                      Measures the effectiveness of our Facebook and Instagram
                      advertising campaigns
                    </li>
                  </ul>

                  <p className="font-semibold mt-4">Data Collected:</p>
                  <p>
                    Facebook Pixel collects information such as browser type,
                    device information, IP address, pages visited, actions taken
                    (page views, button clicks, form submissions), and purchase
                    information. If you are logged into Facebook, this data may
                    be linked to your Facebook account.
                  </p>

                  <p className="font-semibold mt-4">Data Transfer:</p>
                  <p>
                    Data collected by Facebook Pixel is transferred to and
                    processed by Meta Platforms in Ireland and may be
                    transferred to the United States and other countries where
                    Meta operates.
                  </p>

                  <p className="font-semibold mt-4">Events We Track:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>PageView - When someone views a page on our website</li>
                    <li>
                      ViewContent - When someone views specific content (e.g., a
                      tour package)
                    </li>
                    <li>
                      InitiateCheckout - When someone begins the booking process
                    </li>
                    <li>Purchase - When someone completes a booking</li>
                    <li>Lead - When someone submits an enquiry form</li>
                    <li>Contact - When someone clicks to contact us</li>
                  </ul>

                  <p className="font-semibold mt-4">Learn More:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <a
                        href="https://www.facebook.com/privacy/explanation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Facebook Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/help/568137493302217"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        About Facebook Pixel
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/help/247395082112892"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Facebook Cookies Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. First-Party vs. Third-Party Cookies
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.1 First-Party Cookies
                </h3>
                <p>
                  These are cookies set directly by our website
                  (kailashmansarovar.co.uk). We use first-party cookies for
                  essential website functionality and to remember your
                  preferences.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.2 Third-Party Cookies
                </h3>
                <p>
                  These are cookies set by domains other than our website. We
                  use third-party cookies from Google Analytics and Facebook
                  Pixel as described above. These third parties may collect data
                  across multiple websites you visit.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. How to Manage and Delete Cookies
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  You have the right to decide whether to accept or reject
                  cookies. You can manage your cookie preferences in several
                  ways:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.1 Cookie Consent Banner
                </h3>
                <p>
                  When you first visit our website, you will see a cookie
                  consent banner. You can choose to accept all cookies, reject
                  non-essential cookies, or customize your preferences.
                </p>
                <p>
                  You can change your cookie preferences at any time by clicking
                  the "Cookie Settings" link in the footer of our website.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.2 Browser Settings
                </h3>
                <p>
                  Most web browsers allow you to control cookies through their
                  settings. You can set your browser to refuse all cookies or to
                  alert you when a cookie is being set.
                </p>
                <p>Find out how to manage cookies in your browser:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Safari (macOS)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/HT201265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Safari (iOS)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Opera
                    </a>
                  </li>
                </ul>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-4">
                  <p className="font-semibold text-gray-800">
                    Important Note:
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    If you disable or delete cookies, some features of our
                    website may not function properly. For example, you may not
                    be able to complete a booking or your preferences may not be
                    saved.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  5.3 Opt-Out Tools
                </h3>
                <p>
                  You can opt out of specific tracking technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> Install the{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                  <li>
                    <strong>Facebook Ads:</strong> Manage your{" "}
                    <a
                      href="https://www.facebook.com/ads/preferences"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Facebook Ad Preferences
                    </a>
                  </li>
                  <li>
                    <strong>All Advertising:</strong> Visit{" "}
                    <a
                      href="http://www.youronlinechoices.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Your Online Choices
                    </a>{" "}
                    (EU) or{" "}
                    <a
                      href="http://optout.networkadvertising.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Network Advertising Initiative
                    </a>{" "}
                    (US)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  5.4 Mobile Device Settings
                </h3>
                <p>
                  On mobile devices, you can limit ad tracking through your
                  device settings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>iOS:</strong> Settings → Privacy & Security →
                    Tracking → Toggle off "Allow Apps to Request to Track"
                  </li>
                  <li>
                    <strong>Android:</strong> Settings → Google → Ads → Toggle
                    on "Opt out of Ads Personalization"
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Do Not Track (DNT) Signals
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Some browsers have a "Do Not Track" (DNT) feature that signals
                  to websites that you do not want your online activities
                  tracked. Currently, there is no universally accepted standard
                  for how to respond to DNT signals.
                </p>
                <p>
                  At present, our website does not respond to DNT signals.
                  However, you can still control cookies through the methods
                  described in Section 5.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Web Beacons and Tracking Pixels
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  In addition to cookies, we may use web beacons (also known as
                  tracking pixels or clear GIFs). These are tiny graphics with a
                  unique identifier that function similarly to cookies.
                </p>
                <p>
                  Unlike cookies, which are stored on your device, web beacons
                  are embedded invisibly in web pages or emails. We use them to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Track when emails are opened and links are clicked</li>
                  <li>Measure the effectiveness of email campaigns</li>
                  <li>
                    Work in conjunction with cookies to track page views and
                    user behavior
                  </li>
                </ul>
                <p>
                  Facebook Pixel, described in Section 3.2, is a type of
                  tracking pixel.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Updates to This Cookie Policy
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legislation, our business practices, or
                  for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  Any changes will be posted on this page with an updated "Last
                  Updated" date. We encourage you to review this Cookie Policy
                  periodically to stay informed about how we use cookies.
                </p>
                <p>
                  If we make significant changes, we may provide more prominent
                  notice (such as a banner on our homepage or email
                  notification).
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Your Rights and Data Protection
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Under UK GDPR and the Privacy and Electronic Communications
                  Regulations (PECR), you have rights regarding cookies and
                  tracking technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Right to be informed:</strong> We provide clear
                    information about the cookies we use
                  </li>
                  <li>
                    <strong>Right to refuse:</strong> You can refuse
                    non-essential cookies through our cookie banner or browser
                    settings
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> You can change
                    your cookie preferences at any time
                  </li>
                  <li>
                    <strong>Right of access:</strong> You can request
                    information about the data collected through cookies (see
                    our{" "}
                    <Link
                      href="/privacy"
                      className="text-orange-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    )
                  </li>
                </ul>
                <p>
                  For more information about your data protection rights, please
                  see our{" "}
                  <Link
                    href="/privacy"
                    className="text-orange-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Legal Basis for Using Cookies
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We use different legal bases for different types of cookies:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Strictly Necessary Cookies:</strong> Legitimate
                      interest (essential for website functionality). No consent
                      required under PECR.
                    </li>
                    <li>
                      <strong>Performance/Analytics Cookies:</strong> Consent
                      obtained through our cookie banner.
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> Consent obtained
                      through our cookie banner.
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Consent obtained
                      through our cookie banner.
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  By continuing to use our website after seeing our cookie
                  banner and not adjusting your settings, you consent to our use
                  of cookies as described in this policy.
                </p>
              </div>
            </section>

            {/* Complete Cookie Table */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Complete Cookie Reference Table
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  The table below provides a comprehensive overview of all
                  cookies used on our website:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 mt-4">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border text-left text-sm font-semibold">
                          Cookie Name
                        </th>
                        <th className="px-4 py-2 border text-left text-sm font-semibold">
                          Provider
                        </th>
                        <th className="px-4 py-2 border text-left text-sm font-semibold">
                          Category
                        </th>
                        <th className="px-4 py-2 border text-left text-sm font-semibold">
                          Duration
                        </th>
                        <th className="px-4 py-2 border text-left text-sm font-semibold">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="px-4 py-2 border font-mono">
                          cookie_consent
                        </td>
                        <td className="px-4 py-2 border">
                          Kailash Mansarovar
                        </td>
                        <td className="px-4 py-2 border">
                          Strictly Necessary
                        </td>
                        <td className="px-4 py-2 border">1 year</td>
                        <td className="px-4 py-2 border">
                          Stores your cookie consent preferences
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border font-mono">_ga</td>
                        <td className="px-4 py-2 border">Google Analytics</td>
                        <td className="px-4 py-2 border">Analytics</td>
                        <td className="px-4 py-2 border">2 years</td>
                        <td className="px-4 py-2 border">
                          Distinguishes unique users
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border font-mono">
                          _ga_[container-id]
                        </td>
                        <td className="px-4 py-2 border">Google Analytics</td>
                        <td className="px-4 py-2 border">Analytics</td>
                        <td className="px-4 py-2 border">2 years</td>
                        <td className="px-4 py-2 border">
                          Persists session state
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border font-mono">_gid</td>
                        <td className="px-4 py-2 border">Google Analytics</td>
                        <td className="px-4 py-2 border">Analytics</td>
                        <td className="px-4 py-2 border">24 hours</td>
                        <td className="px-4 py-2 border">
                          Distinguishes unique users
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border font-mono">_gat</td>
                        <td className="px-4 py-2 border">Google Analytics</td>
                        <td className="px-4 py-2 border">Analytics</td>
                        <td className="px-4 py-2 border">1 minute</td>
                        <td className="px-4 py-2 border">
                          Throttles request rate
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border font-mono">_fbp</td>
                        <td className="px-4 py-2 border">Facebook</td>
                        <td className="px-4 py-2 border">Marketing</td>
                        <td className="px-4 py-2 border">3 months</td>
                        <td className="px-4 py-2 border">
                          Stores and tracks visits across websites
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border font-mono">fr</td>
                        <td className="px-4 py-2 border">Facebook</td>
                        <td className="px-4 py-2 border">Marketing</td>
                        <td className="px-4 py-2 border">3 months</td>
                        <td className="px-4 py-2 border">
                          Delivers, measures, and improves Facebook ads
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border font-mono">_fbc</td>
                        <td className="px-4 py-2 border">Facebook</td>
                        <td className="px-4 py-2 border">Marketing</td>
                        <td className="px-4 py-2 border">2 years</td>
                        <td className="px-4 py-2 border">
                          Stores last visit and click ID parameter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@kailashmansarovar.co.uk"
                    className="text-orange-600 hover:underline"
                  >
                    info@kailashmansarovar.co.uk
                  </a>
                </p>
                <p>
                  <strong>Data Protection Enquiries:</strong>{" "}
                  <a
                    href="mailto:privacy@kailashmansarovar.co.uk"
                    className="text-orange-600 hover:underline"
                  >
                    privacy@kailashmansarovar.co.uk
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+447545066652"
                    className="text-orange-600 hover:underline"
                  >
                    +44 7545 066652
                  </a>
                </p>
                <p>
                  <strong>Postal Address:</strong>
                  <br />
                  Kailash Mansarovar Yatra Limited
                  <br />
                  21 Ware Point Drive
                  <br />
                  London, England
                  <br />
                  SE28 0HF
                </p>
              </div>
            </section>

            {/* Summary Box */}
            <section className="mb-8 bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4">
                Cookie Policy Summary
              </h2>
              <div className="space-y-3 text-gray-800">
                <p className="font-semibold">Quick Reference:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Strictly Necessary Cookies:</strong> Always active
                    (essential for website functionality)
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> Tracks website usage and
                    performance (requires consent)
                  </li>
                  <li>
                    <strong>Facebook Pixel:</strong> Enables targeted
                    advertising and conversion tracking (requires consent)
                  </li>
                  <li>
                    <strong>Your Control:</strong> Manage cookies via our cookie
                    banner or browser settings
                  </li>
                  <li>
                    <strong>More Information:</strong> See our{" "}
                    <Link
                      href="/privacy"
                      className="text-orange-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for data protection details
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
