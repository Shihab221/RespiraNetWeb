"use client"
import Head from 'next/head'
import useTrackVisit from '@/hooks/useTrackVisit';

export default function page() {
  useTrackVisit();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>RespiraNet+ — Privacy Policy</title>
        <meta name="description" content="Privacy Policy for RespiraNet — AI-powered respiratory health screening app. Explains what data is collected, how it's used, and user rights." />
      </Head>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold">RespiraNet+ — Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">Last updated: Sept 07, 2025</p>
        </header>

        <section className="prose prose-sm sm:prose lg:prose-lg">
          <h2>Introduction</h2>
          <p>
            RespiraNet is a mobile application that provides quick, non-invasive respiratory health
            screening using your smartphone. Your privacy and security are important to us.
            This Privacy Policy explains what data the app accesses, how that data is used, and
            how we protect it. Please read it carefully.
          </p>

          <h2>Data We Access</h2>
          <p>
            <strong>Microphone & Camera:</strong> RespiraNet may require access to your device microphone
            (for breath sound analysis) and/or camera (for capturing facial/respiratory cues). Access
            is requested only when you explicitly choose to perform a screening.
          </p>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>
              <strong>Local analysis:</strong> All signal/image analysis and machine learning inference are
              performed locally on your device. Data is processed by the embedded ML model to
              estimate respiratory indicators (confidence score, condition severity, risk alerts).
            </li>
            <li>
              <strong>No upload by default:</strong> By default, recordings, images, and results are not uploaded
              to any server, cloud service, or third party. No personally identifiable information
              (PII) is collected or transmitted without your explicit consent.
            </li>
            <li>
              <strong>Optional export or research sharing:</strong> If you choose to export or share
              data (for example, to send to a clinician or contribute to research),
              that action is initiated by you and may use other apps/services on your device. Any
              data shared this way is subject to the receiving service's privacy policies.
            </li>
          </ul>

          <h2>Data Storage & Retention</h2>
          <p>
            RespiraNet does not automatically store captured data or personal information on our servers.
            If the app temporarily caches data for immediate processing, it is deleted or overwritten
            immediately after analysis. In short: <strong>no long-term storage</strong>
            and <strong>no external backups</strong> unless you explicitly choose to export or share data.
          </p>

          <h2>Third Parties & SDKs</h2>
          <p>
            The app does not send data to third-party analytics, advertising networks, or cloud-based ML
            services by default. Any third-party libraries included for app functionality (UI,
            local ML runtime, etc.) are used only for local operations.
          </p>

          <h2>Security</h2>
          <p>
            All processing is done on-device, so there is no data in transit under normal operation.
            If you voluntarily choose to share data externally, that transmission will use the
            selected sharing method on your device (for example, email or messaging). We recommend
            using secure channels if you share sensitive information.
          </p>

          <h2>User Rights</h2>
          <ul>
            <li>
              <strong>Data deletion:</strong> Because RespiraNet does not retain user data on servers,
              there is no server-side data to delete. If you stored files locally on your device
              (for example, audio/video recordings), delete them using your device's gallery or file manager.
            </li>
            <li>
              <strong>Contact:</strong> If you have questions, requests, or concerns about privacy,
              please contact us at <a href="mailto:respiranet@support.gmail.com">respiranet@support.gmail.com</a>.
            </li>
          </ul>

          <h2>Children</h2>
          <p>
            RespiraNet is not directed to children under 13 (or the applicable age in your country).
            We do not knowingly collect personal information from children. If you believe a child
            has provided us personal data, please contact us and we will take steps to remove it.
          </p>

          <h2>Legal & Compliance</h2>
          <p>
            RespiraNet is a screening tool and <strong>not a medical diagnostic device</strong>. The
            results are intended to provide general guidance only and should not replace professional
            medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider
            for any medical concerns.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this policy from time to time. We will post the revised version on this page
            with the updated "Last updated" date. Continued use of the app after changes constitutes
            acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle data, contact:
            <br />
            Email: <a href="mailto:respiranet@support.gmail.com">ishadas06@gmail.com</a>
          </p>

          <footer className="mt-6 text-sm text-gray-500">
            <p>App: RespiraNet+</p>
            <p>Developer: Isha Das & Shihab Ahemed</p>
          </footer>
        </section>
      </div>
    </div>
  )
}
