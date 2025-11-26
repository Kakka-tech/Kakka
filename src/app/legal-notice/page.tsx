import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notices & Privacy Policy",
  description:
    "KAKKA's comprehensive legal notices, privacy practices, compliance, and data protection policies.",
};

export default function LegalNotice() {
  return (
    <section className="w-full px-6 py-20 text-[#131927] sm:px-10 md:px-20 lg:px-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kakka Technologies",
            url: "https://kakkatech.com",
            logo: "https://kakkatech.com/favicon.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+2348054666781",
                contactType: "customer support",
                email: "info@kakkatech.com",
              },
            ],
            sameAs: [
              "https://www.facebook.com/kakkatech",
              "https://twitter.com/kakkatech",
              "https://www.linkedin.com/company/kakkatech",
              "https://instagram.com/kakkatech",
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto space-y-6">
        <header className="pb-4 border-b border-gray-300 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Legal Notices & Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated — October 23, 2025
            <br />
            Last Reviewed — November 15, 2025
          </p>
        </header>

        <article className="prose prose-slate max-w-full">
          <p>
            KAKKA (“KAKKA,” “we,” “us,” or “our”) respects the privacy of all
            users, clients, employees, contractors, and visitors (“you” or
            “your”). This Privacy Policy and Terms of Use document explains how
            we collect, use, store, and protect your personal and sensitive
            information in compliance with the Nigeria Data Protection
            Regulation (NDPR/NDPA) and other applicable Nigerian laws.
          </p>

          <p>
            By accessing or using kakka.tech.com (the “Site”) or interacting
            with KAKKA services, you agree to this Policy and Terms of Use. If
            you do not agree, you should not use our Site or services.
          </p>

          <h2>1. Definitions</h2>
          <ul>
            <li>
              <strong>Personal Information / Data:</strong> Any information that
              identifies or can identify you, including name, email, phone
              number, or IP address.
            </li>
            <li>
              <strong>Sensitive Personal Information:</strong> Includes
              biometric data, health information, financial details, or other
              information deemed sensitive under the NDPR.
            </li>
            <li>
              <strong>User / Visitor / Client / Employee:</strong> Any person
              interacting with KAKKA or our Site.
            </li>
            <li>
              <strong>Third Party / Service Provider:</strong> Any organization
              or individual providing services, technology, or analytics to
              KAKKA.
            </li>
            <li>
              <strong>Processing:</strong> Any operation performed on personal
              data including collection, storage, use, sharing, or deletion.
            </li>
          </ul>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>
              <strong>Contact Details:</strong> Name, email, phone number, and
              address.
            </li>
            <li>
              <strong>Accounts:</strong> Username, password, and login
              credentials.
            </li>
            <li>
              <strong>Professional Details:</strong> Resumes, CVs, cover
              letters, employment history, qualifications.
            </li>
            <li>
              <strong>Support and Queries:</strong> Communications with KAKKA
              via email, chat, or forms.
            </li>
            <li>
              <strong>Financial Information:</strong> Payment details for
              services (card numbers, bank accounts), where required.
            </li>
            <li>
              <strong>Purpose:</strong> To communicate with you, provide
              services, and manage relationships.
            </li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Device Data:</strong> IP addresses, device identifiers,
              browser type, operating system, language settings.
            </li>
            <li>
              <strong>Interaction Data:</strong> Clicks, pages visited, time
              spent, referring pages.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> Behavioral and analytical
              cookies to improve Site performance.
            </li>
            <li>
              <strong>Purpose:</strong> To analyze Site usage, enhance user
              experience, ensure security, and optimize services.
            </li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <p>
            Public databases, social media platforms, partners, and affiliates
            providing data for operational purposes.
          </p>

          <h3>2.4 Sensitive Data</h3>
          <p>
            Biometric data for authentication, health-related information if
            voluntarily provided, and financial data processed securely.
            Purpose: Ensuring secure authentication, service provision, legal
            compliance, and analytics.
          </p>

          <h2>3. How We Use Personal Information</h2>
          <ul>
            <li>
              Service Delivery: Providing requested services, accounts, support,
              and transactions.
            </li>
            <li>
              Marketing and Communications: Sharing news, promotions, or
              updates, only with consent.
            </li>
            <li>
              Analytics and Improvement: Studying trends, usage patterns, system
              optimization, and service development.
            </li>
            <li>
              Security and Fraud Prevention: Detecting and preventing
              unauthorized access or illegal activities.
            </li>
            <li>
              Compliance and Legal Obligations: Meeting NDPR, tax, labor,
              employment, and other legal requirements.
            </li>
            <li>
              Business Research: Conducting data-driven research, including
              workforce planning and ESG initiatives.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            4. Legal Basis for Processing
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consent: Explicit user permission where required.</li>
            <li>
              Contractual Necessity: For fulfilling agreements with users,
              clients, and employees.
            </li>
            <li>
              Legal Obligation: To meet statutory or regulatory requirements.
            </li>
            <li>
              Legitimate Interest: To manage and improve services, provided this
              does not override user rights.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            5. Sharing and Disclosure of Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Affiliates and partners to deliver services efficiently.</li>
            <li>
              Service providers such as hosting, analytics, payroll, or legal
              advisory.
            </li>
            <li>Government and regulatory authorities when required by law.</li>
            <li>
              Business transfers in case of mergers, acquisitions, or sale of
              assets.
            </li>
          </ul>
          <p>
            We never sell personal data to third parties without explicit
            consent.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            6. Cross-Border Data Transfers
          </h2>
          <p>
            Your data may be transferred outside Nigeria to trusted affiliates
            or providers. KAKKA ensures compliance with NDPR, contractual
            safeguards, and equivalent data protection standards.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            7. Cookies, Tracking, and Analytics
          </h2>
          <p>
            Cookies: Small files stored on your device for authentication,
            preferences, and analytics. Analytics Providers: Google Analytics
            and similar services may collect usage data. Users can disable
            cookies via browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            8. Data Retention
          </h2>
          <p>
            Personal and sensitive data is retained based on operational need,
            legal requirements, and security considerations. Data no longer
            required will be securely deleted or anonymized.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            9. Security Measures
          </h2>
          <p>
            Administrative, technical, and physical safeguards are employed,
            including employee training, encryption, audits, monitoring, and
            breach response plans.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">10. User Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access personal data held by KAKKA.</li>
            <li>Correct or update inaccuracies.</li>
            <li>Request deletion.</li>
            <li>Object to processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p>Requests should be directed to info@kakkatech.com.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            11. Children’s Privacy
          </h2>
          <p>
            Services are not intended for children under 16. Data from minors
            will be deleted immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            12. Accessibility Policy
          </h2>
          <p>
            We are committed to accessible services. Feedback can be sent to
            info@kakkatech.com.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            13. Intellectual Property
          </h2>
          <p>
            All content on kakka.tech.com is owned or licensed by KAKKA.
            Personal, non-commercial use only. No reproduction or commercial use
            without consent.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            14. Terms of Use
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Acceptance: Use of the Site constitutes acceptance of these Terms.
            </li>
            <li>
              Prohibited Conduct: Illegal activities, harassment, malware
              distribution, IP infringement, or disruption are forbidden.
            </li>
            <li>
              Liability: KAKKA disclaims all warranties. Use of the Site is at
              your risk.
            </li>
            <li>
              Indemnification: Users agree to indemnify KAKKA against claims
              arising from misuse of the Site.
            </li>
            <li>
              Site Modifications: KAKKA may suspend or discontinue the Site at
              any time.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            15. Governing Law and Dispute Resolution
          </h2>
          <p>
            Governed by Nigerian law. Disputes may be resolved through
            negotiation, arbitration, or Nigerian courts. Invalid provisions do
            not affect remaining Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            16. Changes to This Policy
          </h2>
          <p>
            KAKKA may update this document periodically. Changes will be posted
            on kakka.tech.com with an updated “Last Updated” date.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            17. Contact Information
          </h2>
          <p>Email: info@kakkatech.com</p>
          <p>Website: kakkatech.com</p>
        </article>
      </div>
    </section>
  );
}
