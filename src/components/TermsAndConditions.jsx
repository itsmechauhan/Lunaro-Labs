import React from "react";
import "./css/TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <section className="terms-page">
      <div className="terms-container">
        <h1>📜 Terms and Conditions</h1>
        <p className="last-updated">Last Updated: August 31, 2025</p>

        <p>
          Welcome to <strong>Lunaro Labs</strong>. These Terms and Conditions
          (“Terms”, “Agreement”) govern your access to and use of our website,
          applications, internship programs, training modules, and related
          services (collectively referred to as “Services”). By accessing or
          using our Services, you agree to be bound by these Terms. If you do
          not agree with any part of these Terms, you must not use our Services.
        </p>

        {/* Section 1 */}
        <h2>1. Eligibility</h2>
        <p>
          Our Services are intended for individuals who are at least 16 years of
          age or older. By using our Services, you represent and warrant that
          you meet the eligibility criteria and that all information you provide
          is accurate, complete, and truthful.
        </p>

        {/* Section 2 */}
        <h2>2. Internship Programs</h2>
        <p>
          As part of our Services, Lunaro Labs may provide internship
          opportunities, learning resources, mentorship, project-based training,
          and related professional experiences. Please note the following
          specific terms for internships:
        </p>
        <ul>
          <li>
            <strong>Letter of Recommendation (LOR):</strong> Upon successful
            completion of your internship, and based on performance evaluation,
            you may be eligible to receive a Letter of Recommendation (LOR).
          </li>
          <li>
            <strong>Letter of Acceptance (LOA):</strong> A Letter of Acceptance
            will be issued at the beginning of the internship to confirm your
            enrollment and participation.
          </li>
          <li>
            <strong>Service Charges:</strong> A small nominal fee may be
            required to process documents, certification, or additional services
            such as LOR, LOA, or project verification. These charges are minimal
            and solely intended to cover administrative and operational costs.
          </li>
          <li>
            <strong>Completion Requirement:</strong> LOR and LOA will only be
            provided upon successful participation in the internship. Mere
            enrollment does not guarantee issuance of such documents.
          </li>
        </ul>

        {/* Section 3 */}
        <h2>3. Fees and Payments</h2>
        <p>
          Some parts of our Services may require a payment or service fee.
          Charges may include but are not limited to:
        </p>
        <ul>
          <li>Internship program access fees.</li>
          <li>Charges for certification, LOR, LOA, or verification services.</li>
          <li>Charges for premium resources, training modules, or mentorship.</li>
        </ul>
        <p>
          All payments are final and non-refundable, unless explicitly stated
          otherwise. You agree to provide accurate billing details and
          authorize us to charge the applicable fees.
        </p>

        {/* Section 4 */}
        <h2>4. Use of Services</h2>
        <p>
          You agree to use our Services in compliance with all applicable laws,
          regulations, and policies. You must not:
        </p>
        <ul>
          <li>Misuse our website or services for fraudulent purposes.</li>
          <li>Copy, modify, or distribute our resources without permission.</li>
          <li>
            Engage in activities that may harm the reputation of Lunaro Labs,
            its partners, or interns.
          </li>
        </ul>

        {/* Section 5 */}
        <h2>5. Intellectual Property</h2>
        <p>
          All content, resources, training material, designs, and information
          provided as part of our Services remain the intellectual property of{" "}
          <strong>Lunaro Labs</strong>. You are granted a limited, non-exclusive
          license to use the materials for personal learning and development
          purposes only.
        </p>

        {/* Section 6 */}
        <h2>6. Confidentiality</h2>
        <p>
          Internship projects, company data, and training materials may contain
          sensitive or proprietary information. You agree not to disclose,
          reproduce, or misuse any confidential information shared during your
          participation in our Services.
        </p>

        {/* Section 7 */}
        <h2>7. Termination</h2>
        <p>
          Lunaro Labs reserves the right to suspend or terminate your
          participation in the internship or access to our Services if:
        </p>
        <ul>
          <li>You breach these Terms.</li>
          <li>You fail to meet internship requirements.</li>
          <li>
            You engage in unethical, illegal, or inappropriate behavior during
            the internship.
          </li>
        </ul>

        {/* Section 8 */}
        <h2>8. Disclaimers</h2>
        <p>
          Our Services, including internship programs, are provided “as is”
          without warranties of any kind, whether express or implied. While we
          strive to provide quality training and guidance, we do not guarantee
          specific job placements, career outcomes, or certifications beyond the
          agreed scope.
        </p>

        {/* Section 9 */}
        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, <strong>Lunaro Labs</strong>{" "}
          shall not be liable for any damages, losses, or expenses arising from
          your participation in the internship, use of our Services, or reliance
          on any material provided. This includes but is not limited to
          indirect, incidental, consequential, or punitive damages.
        </p>

        {/* Section 10 */}
        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed under the laws of
          India, with jurisdiction limited to the courts of Bangalore,
          Karnataka, without regard to conflict of law principles. Any disputes
          shall be resolved exclusively in the courts of Bangalore.
        </p>

        {/* Section 11 */}
        <h2>11. Amendments</h2>
        <p>
          Lunaro Labs reserves the right to update, modify, or revise these
          Terms at any time. Any changes will be effective immediately upon
          posting. It is your responsibility to review these Terms
          periodically.
        </p>

        {/* Section 12 */}
        <h2>12. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms, internship policies,
          or charges, you may contact us at:
        </p>
        <p>
          📧 Email: lunarolabs@gmail.com <br />
          📍 Address: Lunaro Labs, Bangalore, Karnataka, India
        </p>

        <hr />
        <p>
          By enrolling in our internship program and/or using our Services, you
          acknowledge that you have read, understood, and agreed to these Terms
          and Conditions, including the provisions regarding Letters of
          Recommendation (LOR), Letters of Acceptance (LOA), and applicable
          service charges.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
