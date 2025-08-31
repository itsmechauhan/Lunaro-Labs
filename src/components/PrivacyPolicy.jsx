import React from "react";
import "./css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-page">
      <div className="privacy-container">
        <h1>🔒 Privacy Policy</h1>
        <p className="last-updated">Last Updated: August 31, 2025</p>

        <p>
          At <strong>Lunaro-Labs</strong>, we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our website, mobile app, or
          services. By using our platform, you agree to the terms outlined
          below.
        </p>

        {/* Information We Collect */}
        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, etc.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, IP address,
            device information, cookies, and usage data.
          </li>
          <li>
            <strong>Form Submissions:</strong> Messages sent via our contact
            form (name, email, subject, message).
          </li>
        </ul>

        {/* How We Use */}
        <h2>2. How We Use Your Information</h2>
        <p>We may use the collected data to:</p>
        <ul>
          <li>Provide, operate, and improve our services.</li>
          <li>Send important updates, newsletters, and promotions.</li>
          <li>Respond to inquiries and customer support requests.</li>
          <li>Analyze trends, usage, and improve user experience.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        {/* Sharing */}
        <h2>3. Sharing of Information</h2>
        <p>
          We respect your privacy and <strong>do not sell</strong> your personal
          information. However, we may share your data with:
        </p>
        <ul>
          <li>Trusted third-party service providers (payment, hosting, email).</li>
          <li>
            Legal authorities, if required by law or to protect our rights.
          </li>
          <li>Business partners in case of a merger or acquisition.</li>
        </ul>

        {/* Cookies */}
        <h2>4. Cookies & Tracking Technologies</h2>
        <p>
          We use cookies, pixels, and tracking tools to improve your experience,
          remember preferences, and analyze traffic. You can disable cookies in
          your browser settings, but some features may not function properly.
        </p>

        {/* Data Security */}
        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard security measures such as encryption,
          firewalls, and access controls. However, no system is 100% secure, and
          we cannot guarantee absolute security.
        </p>

        {/* Your Rights */}
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data.</li>
          <li>Opt-out of marketing communications at any time.</li>
          <li>Request a copy of the information we hold about you.</li>
        </ul>

        {/* Third Party */}
        <h2>7. Third-Party Services</h2>
        <p>
          Our website may contain links to third-party services (e.g., payment
          gateways, analytics). We are not responsible for their privacy
          practices. Please review their policies separately.
        </p>

        {/* Children's Privacy */}
        <h2>8. Children’s Privacy</h2>
        <p>
          Our services are not directed to individuals under 13. We do not
          knowingly collect data from children. If we discover we have, we will
          delete it immediately.
        </p>

        {/* Changes */}
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          effective immediately once posted on this page. Please review it
          periodically.
        </p>

       
      </div>
    </section>
  );
};

export default PrivacyPolicy;
