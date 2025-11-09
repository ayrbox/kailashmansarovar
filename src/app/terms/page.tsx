import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Kailash Mansarovar Yatra",
  description:
    "Terms and Conditions for Kailash Mansarovar Yatra Limited travel services",
};

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 2025
          </p>

          <div className="prose prose-gray max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  These Terms and Conditions ("Terms") govern your booking and
                  participation in travel arrangements provided by Kailash
                  Mansarovar Yatra Limited ("we", "us", "our", or "the
                  Company").
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Company Details:</p>
                  <ul className="list-none space-y-1 text-sm">
                    <li>
                      <strong>Company Name:</strong> Kailash Mansarovar Yatra
                      Limited
                    </li>
                    <li>
                      <strong>Registration Number:</strong> 16836071 (England
                      and Wales)
                    </li>
                    <li>
                      <strong>Registered Office:</strong> 21 Ware Point Drive,
                      London, England, SE28 0HF
                    </li>
                    <li>
                      <strong>Email:</strong> info@kailashmansarovar.co.uk
                    </li>
                    <li>
                      <strong>Phone:</strong> +44 7545 066652
                    </li>
                  </ul>
                </div>
                <p>
                  By making a booking with us, you agree to be bound by these
                  Terms and Conditions. Please read them carefully before making
                  your booking.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Package Travel Regulations
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Our travel arrangements are protected under the{" "}
                  <Link
                    href="https://www.legislation.gov.uk/ukdsi/2018/9780111168479/contents"
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    Package Travel and Linked Travel Arrangements Regulations
                    2018
                  </Link>
                  . When you buy a package holiday that includes flights,
                  accommodation, or other tourist services from us, you will
                  enjoy all rights applying to packages under these regulations.
                </p>
                <p>
                  We will provide you with the relevant information about your
                  package, including key rights under the Regulations, before
                  you make your booking.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Booking and Payment
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.1 Making a Booking
                </h3>
                <p>
                  A binding contract between you and Kailash Mansarovar Yatra
                  Limited comes into existence when we issue a written
                  confirmation of your booking. The person making the booking
                  (the "Lead Passenger") must be at least 18 years old and
                  accepts responsibility for all members of the party.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.2 Deposit and Balance Payment
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    A non-refundable deposit is required at the time of booking
                    (amount to be confirmed based on the package selected)
                  </li>
                  <li>
                    Full payment is required at least 90 days prior to departure
                  </li>
                  <li>
                    Bookings made within 90 days of departure require full
                    payment at the time of booking
                  </li>
                  <li>
                    We reserve the right to cancel your booking if payment is
                    not received by the due date
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  3.3 Payment Methods
                </h3>
                <p>
                  We accept payment by bank transfer, credit card, or debit
                  card. Additional charges may apply for credit card payments.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Cancellation and Refunds
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.1 Cancellation by You
                </h3>
                <p>
                  You may cancel your booking at any time by written notice to
                  us. Cancellation charges will apply as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>More than 90 days before departure: Loss of deposit</li>
                  <li>89-60 days before departure: 50% of total cost</li>
                  <li>59-30 days before departure: 75% of total cost</li>
                  <li>29 days or less before departure: 100% of total cost</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  4.2 Cancellation by Us
                </h3>
                <p>
                  We reserve the right to cancel your trip before departure in
                  exceptional circumstances, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Insufficient numbers of bookings (minimum group size not
                    met)
                  </li>
                  <li>
                    Force majeure events (see Section 11 for full definition)
                  </li>
                  <li>
                    Circumstances beyond our control that make it impossible to
                    operate the trip safely
                  </li>
                </ul>
                <p>
                  In such cases, we will provide a full refund of all monies
                  paid or offer an alternative trip of equivalent or higher
                  value. We will not be liable for any additional costs or
                  compensation.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Changes to Your Booking
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  If you wish to make changes to your confirmed booking, we will
                  do our best to accommodate your requests, subject to
                  availability. An amendment fee of £50 per person may apply,
                  plus any costs incurred by our suppliers. Changes requested
                  within 60 days of departure may not be possible.
                </p>
                <p>
                  Name changes will be treated as a cancellation and rebooking,
                  subject to the cancellation charges outlined above.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Changes by Us
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We reserve the right to make changes to your itinerary before
                  departure. Minor changes will not entitle you to compensation.
                  In the event of a significant change, we will inform you as
                  soon as reasonably possible and offer you the choice of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accepting the changed arrangements</li>
                  <li>
                    Purchasing an alternative package from us of equivalent or
                    higher standard (paying any difference or receiving a refund
                    for any price reduction)
                  </li>
                  <li>Cancelling your booking and receiving a full refund</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Travel Insurance
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-orange-600">
                  Comprehensive travel insurance is MANDATORY for all
                  participants.
                </p>
                <p>Your insurance must provide adequate cover for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Medical expenses and emergency repatriation (minimum
                    £5,000,000)
                  </li>
                  <li>High-altitude trekking (up to 6,000 metres)</li>
                  <li>Personal liability</li>
                  <li>Cancellation and curtailment</li>
                  <li>Loss of baggage and personal effects</li>
                  <li>
                    Pre-existing medical conditions (if applicable, you must
                    declare these)
                  </li>
                </ul>
                <p>
                  You must provide proof of adequate insurance before departure.
                  We reserve the right to refuse participation if you cannot
                  provide evidence of suitable insurance coverage.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Health, Fitness, and Medical Requirements
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  8.1 Fitness Requirements
                </h3>
                <p>
                  The Kailash Mansarovar Yatra involves high-altitude trekking
                  and requires a good level of physical fitness. Participants
                  must be capable of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Walking at high altitudes (up to 5,630 metres)</li>
                  <li>Dealing with basic accommodation facilities</li>
                  <li>
                    Managing significant temperature variations and challenging
                    weather conditions
                  </li>
                  <li>Spending extended periods in remote locations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  8.2 Medical Declaration
                </h3>
                <p>
                  You must inform us of any medical conditions, disabilities, or
                  special requirements at the time of booking. Failure to
                  disclose relevant medical information may result in your
                  exclusion from the trip without refund.
                </p>
                <p>
                  We strongly recommend consulting your GP before booking,
                  particularly if you have any pre-existing medical conditions,
                  are pregnant, or are over 65 years of age.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  8.3 Vaccinations
                </h3>
                <p>
                  It is your responsibility to ensure you have the necessary
                  vaccinations and preventative measures for travel to Tibet,
                  Nepal, and China. We recommend consulting your GP or a travel
                  health clinic at least 8 weeks before departure.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Passport, Visa, and Entry Requirements
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  It is your responsibility to ensure you have a valid passport
                  and appropriate visas for all countries you will visit. Your
                  passport must be valid for at least 6 months from the date of
                  return.
                </p>
                <p>
                  British citizens require visas for China, Tibet, and Nepal. We
                  can assist with visa applications, but the final
                  responsibility rests with you. Visa requirements can change,
                  and you should check current requirements with the relevant
                  embassies.
                </p>
                <p>
                  We accept no liability if you are refused entry to any country
                  due to failure to obtain the correct documentation.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Our Liability
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  10.1 Package Travel Regulations
                </h3>
                <p>
                  We accept responsibility for the proper performance of the
                  travel services included in your package in accordance with
                  the Package Travel and Linked Travel Arrangements Regulations
                  2018, subject to the limitations set out below.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  10.2 Limitation of Liability
                </h3>
                <p>Our liability to you is limited as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We will not be liable for any injury, illness, death, loss,
                    damage, expense, cost, or other claim that results from:
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Your own fault or negligence</li>
                      <li>The fault or negligence of a third party</li>
                      <li>
                        Unavoidable and extraordinary circumstances (force
                        majeure)
                      </li>
                      <li>
                        An event which we or our suppliers could not foresee or
                        avoid even with due care
                      </li>
                    </ul>
                  </li>
                  <li>
                    Where we are liable, the maximum amount we will pay is
                    limited to three times the price of your travel arrangements
                    (except for claims for death or personal injury)
                  </li>
                  <li>
                    We will not be liable for any indirect or consequential loss
                    such as loss of earnings
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  10.3 Third Party Suppliers
                </h3>
                <p>
                  We act as an agent for various suppliers (airlines, hotels,
                  ground operators, etc.). These suppliers are independent
                  contractors and are not our employees. We are not responsible
                  for their acts or omissions.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Force Majeure
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We shall not be liable for failure to perform our obligations
                  under these Terms if such failure is caused by events beyond
                  our reasonable control ("Force Majeure"), including but not
                  limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acts of God, flood, drought, earthquake, or epidemic</li>
                  <li>
                    Terrorist attack, armed conflict, or threat of war, riot, or
                    civil unrest
                  </li>
                  <li>
                    Government restrictions, trade embargoes, or sanctions
                  </li>
                  <li>
                    Fire, explosion, or accidental damage to facilities or
                    equipment
                  </li>
                  <li>
                    Strikes, industrial action, or labour disputes (including
                    those involving our own employees)
                  </li>
                  <li>
                    Failure of public or private telecommunications networks
                  </li>
                  <li>Severe weather conditions</li>
                  <li>
                    Pandemics or government-imposed travel restrictions or
                    lockdowns
                  </li>
                </ul>
                <p>
                  In the event of Force Majeure, we will endeavour to offer
                  alternative arrangements or a refund, but we will not be
                  liable for any additional costs or compensation.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Behaviour and Conduct
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  You are responsible for your behaviour throughout the trip. We
                  reserve the right to terminate your participation without
                  refund if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Your behaviour is disruptive, dangerous, or offensive to
                    other participants or our staff
                  </li>
                  <li>
                    You fail to comply with local laws, customs, or the
                    reasonable instructions of our tour leaders
                  </li>
                  <li>
                    You are under the influence of alcohol or drugs to the
                    extent that it affects your safety or that of others
                  </li>
                  <li>
                    You damage property belonging to us, our suppliers, or third
                    parties
                  </li>
                </ul>
                <p>
                  You will be liable for any damage you cause and may be
                  required to pay compensation.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Complaints
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  If you have a complaint during your trip, you must inform our
                  tour leader or representative immediately so that we can
                  attempt to resolve the matter.
                </p>
                <p>
                  If the matter cannot be resolved locally, you must write to us
                  within 28 days of your return, providing full details and any
                  supporting documentation. We will acknowledge your complaint
                  within 7 days and provide a full response within 28 days.
                </p>
                <p>
                  If you remain dissatisfied, you may refer your complaint to
                  alternative dispute resolution (ADR). We are members of [ADR
                  Provider - to be confirmed] for this purpose.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Data Protection and Privacy
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We are committed to protecting your personal data in
                  accordance with the UK General Data Protection Regulation (UK
                  GDPR) and the Data Protection Act 2018.
                </p>
                <p>
                  Personal information you provide will be used to process your
                  booking and provide you with the services you have requested.
                  We may also need to share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Third-party suppliers (airlines, hotels, ground operators,
                    visa agencies)
                  </li>
                  <li>
                    Government authorities (for visa and permit applications)
                  </li>
                  <li>Emergency services (if required for your safety)</li>
                </ul>
                <p>
                  We will retain your data only for as long as necessary to
                  fulfil the purposes for which it was collected and to comply
                  with legal obligations.
                </p>
                <p>
                  For full details of how we process your data, please see our{" "}
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

            {/* Section 15 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Special Requests and Accessibility
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  If you have any special requests (dietary, religious,
                  accessibility, etc.), please inform us at the time of booking.
                  We will pass these to our suppliers and do our best to
                  accommodate them, but we cannot guarantee they will be met.
                </p>
                <p>
                  The nature of the Kailash Mansarovar Yatra means that
                  accessibility for people with mobility issues is extremely
                  limited. Please contact us to discuss your specific
                  requirements before booking.
                </p>
              </div>
            </section>

            {/* Section 16 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. Baggage Allowance
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Baggage allowances are determined by the airlines and may vary
                  depending on the route and carrier. We will inform you of the
                  applicable allowances before departure.
                </p>
                <p>
                  We are not liable for any loss or damage to baggage unless
                  caused by our negligence. You should ensure your travel
                  insurance provides adequate cover for your belongings.
                </p>
              </div>
            </section>

            {/* Section 17 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                17. Financial Protection
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Your financial protection is important to us. Payments made to
                  Kailash Mansarovar Yatra Limited are protected in accordance
                  with the Package Travel and Linked Travel Arrangements
                  Regulations 2018.
                </p>
                <p className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <strong>Note:</strong> Specific details of financial
                  protection arrangements (such as ATOL, ABTA, or trust account
                  details) should be confirmed and will be provided in your
                  booking confirmation.
                </p>
              </div>
            </section>

            {/* Section 18 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                18. Photography and Media
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  During the trip, photographs and videos may be taken by our
                  staff or other participants. By booking with us, you consent
                  to us using photographs or videos in which you appear for
                  marketing and promotional purposes.
                </p>
                <p>
                  If you do not wish to be included in promotional materials,
                  please inform us in writing at the time of booking.
                </p>
              </div>
            </section>

            {/* Section 19 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                19. Governing Law and Jurisdiction
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  These Terms and Conditions and any dispute or claim arising
                  out of or in connection with them shall be governed by and
                  construed in accordance with the laws of England and Wales.
                </p>
                <p>
                  The courts of England and Wales shall have exclusive
                  jurisdiction to settle any dispute or claim that arises out of
                  or in connection with these Terms and Conditions.
                </p>
              </div>
            </section>

            {/* Section 20 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                20. General Provisions
              </h2>
              <div className="space-y-3 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  20.1 Entire Agreement
                </h3>
                <p>
                  These Terms and Conditions, together with your booking
                  confirmation and any other written information we provide,
                  constitute the entire agreement between you and us.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  20.2 Severability
                </h3>
                <p>
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall continue in full
                  force and effect.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  20.3 Variations
                </h3>
                <p>
                  We reserve the right to update these Terms and Conditions from
                  time to time. The version applicable to your booking is the
                  version in force at the time you make your booking.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  20.4 Assignment
                </h3>
                <p>
                  You may not transfer or assign your booking to another person
                  without our written consent. We may transfer or assign our
                  rights and obligations under these Terms to another party.
                </p>
              </div>
            </section>

            {/* Important Notice */}
            <section className="mb-8 bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4">
                Important Notice
              </h2>
              <div className="space-y-3 text-gray-800">
                <p>
                  The Kailash Mansarovar Yatra is a challenging pilgrimage that
                  takes place in a remote and high-altitude environment. By
                  booking this trip, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You understand the physical and mental challenges involved
                  </li>
                  <li>
                    You accept the inherent risks associated with high-altitude
                    travel
                  </li>
                  <li>
                    You will follow all safety instructions provided by our tour
                    leaders
                  </li>
                  <li>
                    You have adequate travel and medical insurance in place
                  </li>
                  <li>
                    You have read and understood these Terms and Conditions in
                    full
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us:
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
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+447545066652"
                    className="text-orange-600 hover:underline"
                  >
                    +44 7545 066652
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> 21 Ware Point Drive, London,
                  England, SE28 0HF
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
