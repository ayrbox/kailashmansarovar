import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Kailash Mansarovar Yatra Limited. GDPR compliant data protection information. How we collect, use, and protect your personal information when booking your pilgrimage.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 2025
          </p>

          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <div className="space-y-3 text-gray-700">
                <p>
                  Kailash Mansarovar Yatra Limited ("we", "us", "our", or "the
                  Company") is committed to protecting your privacy and personal
                  data. This Privacy Policy explains how we collect, use, store,
                  and protect your personal information in accordance with the
                  UK General Data Protection Regulation (UK GDPR) and the Data
                  Protection Act 2018.
                </p>
                <p>
                  We are the Data Controller responsible for your personal data.
                  By using our website or services, you agree to the collection
                  and use of information in accordance with this policy.
                </p>
              </div>
            </section>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Data Controller Information
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Data Controller:</strong> Kailash Mansarovar Yatra
                    Limited
                  </p>
                  <p>
                    <strong>Company Registration Number:</strong> 16836071
                    (England and Wales)
                  </p>
                  <p>
                    <strong>Registered Address:</strong> 21 Ware Point Drive,
                    London, England, SE28 0HF
                  </p>
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
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+447545066652"
                      className="text-orange-600 hover:underline"
                    >
                      +44 7545 066652
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
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Personal Data We Collect
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We collect and process various types of personal data
                  depending on your interaction with our services. The personal
                  data we may collect includes:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.1 Identity Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name (first name, middle name, surname)</li>
                  <li>Date of birth</li>
                  <li>Gender</li>
                  <li>Nationality</li>
                  <li>Passport number and expiry date</li>
                  <li>Passport photographs and scanned documents</li>
                  <li>National Insurance number (if applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.2 Contact Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address</li>
                  <li>Telephone number(s) (mobile and landline)</li>
                  <li>Home address (billing and correspondence address)</li>
                  <li>Emergency contact details</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.3 Financial Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Payment card details (processed securely through our payment
                    provider)
                  </li>
                  <li>Bank account details (for refunds)</li>
                  <li>Billing address</li>
                  <li>Transaction history</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.4 Health and Medical Information (Special Category Data)
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Medical conditions and health declarations</li>
                  <li>Disability and mobility requirements</li>
                  <li>Dietary requirements (which may reveal religious beliefs)</li>
                  <li>Allergies and medications</li>
                  <li>
                    Fitness levels and ability to undertake high-altitude travel
                  </li>
                  <li>Emergency medical information</li>
                  <li>Travel insurance medical cover details</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.5 Travel Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Travel preferences and requirements</li>
                  <li>Previous travel history with us</li>
                  <li>Booking details and itinerary</li>
                  <li>Travel insurance information</li>
                  <li>Visa application details</li>
                  <li>Special requests (religious, dietary, accessibility)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.6 Technical Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Operating system</li>
                  <li>Time zone setting and location</li>
                  <li>Cookie data (see our Cookie Policy)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  2.7 Marketing and Communications
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marketing preferences</li>
                  <li>
                    Your preferences in receiving marketing from us and third
                    parties
                  </li>
                  <li>Communication history with us</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Collect Your Personal Data
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>We collect personal data through the following methods:</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.1 Direct Interactions
                </h3>
                <p>
                  You provide data directly when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make a booking or enquiry</li>
                  <li>Fill in forms on our website</li>
                  <li>Contact us by phone, email, or post</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Complete customer surveys or feedback forms</li>
                  <li>Provide medical declarations and health information</li>
                  <li>Submit visa application documents</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.2 Automated Technologies
                </h3>
                <p>
                  We automatically collect technical data when you interact with
                  our website using cookies and similar technologies. See our
                  Cookie Policy for more details.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.3 Third Parties
                </h3>
                <p>
                  We may receive personal data from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Analytics providers (e.g., Google Analytics) based outside
                    the UK
                  </li>
                  <li>Payment processors</li>
                  <li>Travel insurance providers</li>
                  <li>Airlines and accommodation providers</li>
                  <li>Visa processing agencies</li>
                  <li>Travel agents or group organizers acting on your behalf</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Legal Basis for Processing Your Data
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Under UK GDPR, we must have a lawful basis for processing your
                  personal data. We process your data on the following legal
                  bases:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.1 Contractual Necessity
                </h3>
                <p>
                  Processing is necessary to perform our contract with you or to
                  take steps at your request before entering into a contract.
                  This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processing your booking</li>
                  <li>Arranging travel services</li>
                  <li>Processing visa applications</li>
                  <li>Providing customer support</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.2 Legal Obligation
                </h3>
                <p>
                  Processing is necessary to comply with legal obligations,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Financial record-keeping and tax obligations</li>
                  <li>
                    Compliance with Package Travel and Linked Travel
                    Arrangements Regulations 2018
                  </li>
                  <li>Immigration and border control requirements</li>
                  <li>Health and safety obligations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.3 Legitimate Interests
                </h3>
                <p>
                  Processing is necessary for our legitimate interests or those
                  of a third party, provided your interests and rights do not
                  override those interests:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improving our services and customer experience</li>
                  <li>Marketing and business development</li>
                  <li>Fraud prevention and security</li>
                  <li>Website analytics and optimization</li>
                  <li>Administrative purposes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.4 Consent
                </h3>
                <p>
                  For certain processing activities, we rely on your explicit
                  consent:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Processing special category data (health information,
                    religious beliefs)
                  </li>
                  <li>Sending marketing communications</li>
                  <li>Using cookies (see Cookie Policy)</li>
                  <li>Using your photographs for marketing purposes</li>
                </ul>
                <p>
                  You have the right to withdraw consent at any time. This will
                  not affect the lawfulness of processing before withdrawal.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.5 Vital Interests
                </h3>
                <p>
                  In emergency situations, we may process your data (including
                  medical information) to protect your vital interests or those
                  of another person.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. How We Use Your Personal Data
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>We use your personal data for the following purposes:</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.1 Booking and Travel Services
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and confirm your booking</li>
                  <li>Arrange flights, accommodation, and ground transportation</li>
                  <li>Process visa applications</li>
                  <li>Arrange travel insurance</li>
                  <li>Provide pre-departure information and documentation</li>
                  <li>Manage your travel arrangements and itinerary</li>
                  <li>Assess medical fitness for high-altitude travel</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.2 Payment Processing
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process payments and refunds</li>
                  <li>Detect and prevent fraud</li>
                  <li>Maintain financial records</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.3 Customer Service and Support
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to enquiries and requests</li>
                  <li>Handle complaints and dispute resolution</li>
                  <li>Provide emergency assistance during your trip</li>
                  <li>Gather feedback to improve our services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.4 Marketing and Communications
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Send marketing communications (with your consent or where
                    permitted by law)
                  </li>
                  <li>Personalize your experience on our website</li>
                  <li>Conduct market research and customer surveys</li>
                  <li>Send you information about similar products or services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.5 Legal and Regulatory Compliance
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Enforce our terms and conditions</li>
                  <li>Protect our legal rights and interests</li>
                  <li>Cooperate with law enforcement and government authorities</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  5.6 Business Operations
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyze and improve our services</li>
                  <li>Monitor website performance and usage</li>
                  <li>Maintain security and prevent fraud</li>
                  <li>Manage and improve business efficiency</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Sharing Your Personal Data
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We may share your personal data with the following categories
                  of recipients:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  6.1 Service Providers
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Airlines, hotels, and ground transportation providers
                  </li>
                  <li>Local tour operators and guides in Tibet, Nepal, and China</li>
                  <li>Travel insurance companies</li>
                  <li>Visa processing agencies</li>
                  <li>Payment processors</li>
                  <li>IT service providers (hosting, email, CRM systems)</li>
                  <li>Website analytics providers</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  6.2 Government and Regulatory Bodies
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Chinese, Tibetan, and Nepalese immigration and border
                    control authorities
                  </li>
                  <li>UK government agencies (when legally required)</li>
                  <li>Law enforcement and regulatory authorities</li>
                  <li>Tax authorities (HMRC)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  6.3 Professional Advisers
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Legal advisers and solicitors</li>
                  <li>Accountants and auditors</li>
                  <li>Insurance brokers</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  6.4 Emergency Services
                </h3>
                <p>
                  In emergency situations, we may share your information
                  (including medical data) with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Medical professionals and hospitals</li>
                  <li>Emergency services</li>
                  <li>Your emergency contacts</li>
                  <li>Consular services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  6.5 Business Transfers
                </h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your
                  personal data may be transferred to the new owner.
                </p>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-4">
                  <p className="font-semibold text-gray-800">
                    Important: Data Sharing
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    We only share your personal data with third parties when
                    necessary and ensure they have appropriate security measures
                    in place. We do not sell your personal data to third parties
                    for marketing purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. International Data Transfers
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Due to the nature of our services, your personal data will be
                  transferred to and processed in countries outside the United
                  Kingdom and European Economic Area (EEA), including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>China and Tibet:</strong> For visa applications,
                    accommodation bookings, and ground arrangements
                  </li>
                  <li>
                    <strong>Nepal:</strong> For border crossing arrangements and
                    accommodation
                  </li>
                  <li>
                    <strong>India:</strong> For connecting flights and transit
                    arrangements
                  </li>
                </ul>

                <p className="mt-4">
                  These countries may not have the same level of data protection
                  as the UK. However, we ensure appropriate safeguards are in
                  place:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  7.1 Safeguards We Use
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Standard Contractual Clauses (SCCs) approved by the UK
                    government
                  </li>
                  <li>
                    Contractual obligations on data processors to protect your
                    data
                  </li>
                  <li>
                    Technical and organizational security measures
                  </li>
                  <li>
                    Limiting data transfers to what is strictly necessary
                  </li>
                </ul>

                <p className="mt-4">
                  In some cases, transfers may be necessary for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Performance of our contract with you (e.g., visa
                    applications)
                  </li>
                  <li>
                    Reasons of substantial public interest (e.g., legal
                    requirements)
                  </li>
                  <li>
                    Protection of vital interests (e.g., medical emergencies)
                  </li>
                </ul>

                <p className="mt-4">
                  You can request further information about the safeguards we
                  use for international transfers by contacting us at{" "}
                  <a
                    href="mailto:privacy@kailashmansarovar.co.uk"
                    className="text-orange-600 hover:underline"
                  >
                    privacy@kailashmansarovar.co.uk
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Data Retention
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes for which it was collected and to comply
                  with legal obligations.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  8.1 Retention Periods
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Booking and travel records:</strong> 6 years from
                      completion of travel (to comply with financial and legal
                      requirements)
                    </li>
                    <li>
                      <strong>Financial records:</strong> 6 years (HMRC
                      requirement)
                    </li>
                    <li>
                      <strong>Medical information:</strong> Deleted within 12
                      months after trip completion unless required for insurance
                      claims
                    </li>
                    <li>
                      <strong>Marketing data:</strong> Until you withdraw consent
                      or after 3 years of inactivity
                    </li>
                    <li>
                      <strong>Website analytics:</strong> 26 months (Google
                      Analytics default)
                    </li>
                    <li>
                      <strong>Enquiries (non-bookings):</strong> 2 years from
                      last contact
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  8.2 Secure Deletion
                </h3>
                <p>
                  When your data is no longer needed, we securely delete or
                  anonymize it to prevent unauthorized access or use.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Your Rights Under UK GDPR
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Under UK GDPR, you have the following rights regarding your
                  personal data:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.1 Right of Access
                </h3>
                <p>
                  You have the right to request a copy of the personal data we
                  hold about you (Subject Access Request). We will provide this
                  free of charge within one month of your request.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.2 Right to Rectification
                </h3>
                <p>
                  You have the right to request correction of inaccurate or
                  incomplete personal data.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.3 Right to Erasure ("Right to be Forgotten")
                </h3>
                <p>
                  You have the right to request deletion of your personal data in
                  certain circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The data is no longer necessary for the original purpose</li>
                  <li>You withdraw consent (where consent was the legal basis)</li>
                  <li>You object to processing and there are no overriding legitimate grounds</li>
                  <li>The data was unlawfully processed</li>
                </ul>
                <p>
                  This right does not apply when we need to retain data for
                  legal obligations or legitimate interests (e.g., financial
                  records).
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.4 Right to Restrict Processing
                </h3>
                <p>
                  You have the right to request that we limit how we use your
                  data in certain circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You contest the accuracy of the data</li>
                  <li>Processing is unlawful but you don't want erasure</li>
                  <li>We no longer need the data but you need it for legal claims</li>
                  <li>You have objected to processing pending verification</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.5 Right to Data Portability
                </h3>
                <p>
                  Where processing is based on consent or contract and is
                  carried out by automated means, you have the right to receive
                  your data in a structured, commonly used, machine-readable
                  format and to transfer it to another controller.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.6 Right to Object
                </h3>
                <p>You have the right to object to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Processing based on legitimate interests (we must stop
                    unless we demonstrate compelling legitimate grounds)
                  </li>
                  <li>
                    Direct marketing (we will stop immediately upon request)
                  </li>
                  <li>Processing for research or statistical purposes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.7 Rights Related to Automated Decision-Making
                </h3>
                <p>
                  We do not use automated decision-making or profiling that
                  produces legal effects or similarly significant effects on you.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  9.8 Right to Withdraw Consent
                </h3>
                <p>
                  Where we rely on consent as the legal basis for processing, you
                  have the right to withdraw consent at any time. This will not
                  affect the lawfulness of processing before withdrawal.
                </p>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-4">
                  <p className="font-semibold text-gray-800">
                    How to Exercise Your Rights
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    To exercise any of these rights, please contact us at{" "}
                    <a
                      href="mailto:privacy@kailashmansarovar.co.uk"
                      className="text-orange-600 hover:underline"
                    >
                      privacy@kailashmansarovar.co.uk
                    </a>{" "}
                    or write to our registered address. We may need to verify
                    your identity before processing your request.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Data Security
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized or unlawful
                  processing, accidental loss, destruction, or damage.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  10.1 Security Measures
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Encryption:</strong> Data is encrypted in transit
                    (TLS/SSL) and at rest
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Strict access controls and
                    authentication procedures
                  </li>
                  <li>
                    <strong>Payment Security:</strong> PCI DSS compliant payment
                    processing
                  </li>
                  <li>
                    <strong>Staff Training:</strong> Regular data protection
                    training for all staff
                  </li>
                  <li>
                    <strong>Physical Security:</strong> Secure storage of paper
                    records
                  </li>
                  <li>
                    <strong>Monitoring:</strong> Regular security assessments and
                    audits
                  </li>
                  <li>
                    <strong>Incident Response:</strong> Procedures for data
                    breach notification
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  10.2 Data Breach Notification
                </h3>
                <p>
                  In the unlikely event of a data breach that poses a risk to
                  your rights and freedoms, we will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Notify the Information Commissioner's Office (ICO) within 72
                    hours
                  </li>
                  <li>
                    Notify affected individuals without undue delay if the breach
                    poses a high risk
                  </li>
                  <li>
                    Provide details of the breach and steps taken to mitigate it
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Our website uses cookies and similar tracking technologies to
                  enhance your browsing experience, analyze website traffic, and
                  understand visitor behavior.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  11.1 Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Strictly Necessary Cookies:</strong> Essential for
                    website functionality (no consent required)
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us understand how
                    visitors use our site (e.g., Google Analytics)
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> Remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Track your browsing to
                    deliver relevant advertising (with consent)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  11.2 Managing Cookies
                </h3>
                <p>
                  You can control and delete cookies through your browser
                  settings. Please note that disabling cookies may affect website
                  functionality.
                </p>
                <p>
                  For detailed information about cookies we use, please see our{" "}
                  <Link href="/cookies" className="text-orange-600 hover:underline">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Third-Party Links
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Our website may contain links to third-party websites
                  (airlines, hotels, insurance providers, etc.). We are not
                  responsible for the privacy practices of these websites. Please
                  review their privacy policies before providing personal data.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Children's Privacy
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Our services are not directed at children under 16 years of
                  age. We do not knowingly collect personal data from children
                  under 16 without parental consent.
                </p>
                <p>
                  If you are under 16, please ensure your parent or guardian has
                  provided consent and makes the booking on your behalf. If we
                  become aware that we have collected data from a child under 16
                  without proper consent, we will delete it promptly.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Marketing Communications
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  14.1 How We Use Your Data for Marketing
                </h3>
                <p>
                  We may send you marketing communications about our travel
                  packages, special offers, and services if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have given explicit consent, or</li>
                  <li>
                    You are an existing customer and we are marketing similar
                    products/services (soft opt-in)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  14.2 Opting Out
                </h3>
                <p>You can opt out of marketing communications at any time by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clicking the "unsubscribe" link in any marketing email</li>
                  <li>
                    Emailing{" "}
                    <a
                      href="mailto:info@kailashmansarovar.co.uk"
                      className="text-orange-600 hover:underline"
                    >
                      info@kailashmansarovar.co.uk
                    </a>
                  </li>
                  <li>Calling us on +44 7545 066652</li>
                  <li>Writing to our registered address</li>
                </ul>
                <p>
                  Please note that opting out of marketing does not affect
                  service-related communications (booking confirmations, travel
                  updates, etc.).
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Changes to This Privacy Policy
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  other factors.
                </p>
                <p>
                  Any changes will be posted on this page with an updated "Last
                  Updated" date. For significant changes, we will provide
                  prominent notice or seek your consent where required by law.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we protect your data.
                </p>
              </div>
            </section>

            {/* Section 16 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. Complaints and Regulatory Authority
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  If you have concerns about how we handle your personal data, please contact us first at{" "}
                  <a
                    href="mailto:privacy@kailashmansarovar.co.uk"
                    className="text-orange-600 hover:underline"
                  >
                    privacy@kailashmansarovar.co.uk
                  </a>
                  . We will investigate and respond to your complaint promptly.
                </p>
                <p>
                  You also have the right to lodge a complaint with the UK's
                  supervisory authority:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">
                    Information Commissioner's Office (ICO)
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>Wycliffe House</li>
                    <li>Water Lane</li>
                    <li>Wilmslow</li>
                    <li>Cheshire SK9 5AF</li>
                    <li className="mt-2">
                      <strong>Helpline:</strong> 0303 123 1113
                    </li>
                    <li>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://ico.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        www.ico.org.uk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or how we
                handle your personal data, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
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
                  <strong>General Enquiries:</strong>{" "}
                  <a
                    href="mailto:info@kailashmansarovar.co.uk"
                    className="text-orange-600 hover:underline"
                  >
                    info@kailashmansarovar.co.uk
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
                Your Privacy Matters
              </h2>
              <div className="space-y-3 text-gray-800">
                <p>
                  We are committed to protecting your privacy and handling your
                  personal data responsibly and in accordance with UK GDPR and
                  Data Protection Act 2018.
                </p>
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We only collect data necessary for our services</li>
                  <li>We use your data lawfully and transparently</li>
                  <li>We keep your data secure with appropriate safeguards</li>
                  <li>We respect your rights under UK GDPR</li>
                  <li>We never sell your personal data to third parties</li>
                  <li>You can exercise your rights at any time</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
