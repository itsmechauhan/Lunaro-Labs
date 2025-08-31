import React from "react";
import "./css/Policies.css";

const Policies = () => {
  return (
    <section className="policies-page">
      <div className="policies-container">
        <h1>Company Policies & Guidelines</h1>
        <p>
          Welcome to <strong>Lunaro Labs Innovations</strong>. This page outlines our official
          policies, terms, and conditions for internships, training programs, and all
          related activities. By engaging with our platform, you agree to abide by
          the guidelines mentioned below.
        </p>

        {/* Privacy Policy */}
        <article>
          <h2>1. Privacy Policy</h2>
          <p>
            We take your privacy very seriously. All personal information shared with
            Lunaro Labs is handled responsibly. We collect only the necessary details
            required for internship verification, project assignments, and
            communication.
          </p>
          <ul>
            <li>Your data will never be sold to third parties.</li>
            <li>We use your information strictly for internship and communication purposes.</li>
            <li>All data is stored securely with access limited to authorized staff only.</li>
            <li>You can request deletion of your data anytime after program completion.</li>
          </ul>
        </article>

        {/* Terms & Conditions */}
        <article>
          <h2>2. Terms & Conditions</h2>
          <p>
            By enrolling in our internship or training program, you agree to the
            following terms:
          </p>
          <ol>
            <li>All applicants must provide genuine personal and educational details.</li>
            <li>
              Any use of <strong>AI tools for assignments or project submissions</strong> without prior approval is strictly prohibited and will lead to disqualification.
            </li>
            <li>Internship certificates will be awarded only after successful completion of assigned tasks.</li>
            <li>Respectful communication with mentors, peers, and staff is mandatory.</li>
            <li>Plagiarism or submission of copied work will result in termination.</li>
            <li>Lunaro Labs reserves the right to update policies without prior notice.</li>
          </ol>
        </article>

        {/* Cancellation & Refund Policy */}
        <article>
          <h2>3. Cancellation & Refund Policy</h2>
          <p>
            At <strong>Lunaro Labs</strong>, we maintain a <span className="highlight">strict no-refund policy</span>.
            Once you have registered and paid the applicable fees, no refunds will be
            provided under any circumstances, including but not limited to:
          </p>
          <ul>
            <li>Voluntary withdrawal from the internship.</li>
            <li>Failure to meet deadlines or program requirements.</li>
            <li>Disqualification due to misconduct or misuse of AI tools.</li>
            <li>Technical issues at the participant’s end (hardware, software, or internet problems).</li>
          </ul>
          <p>
            Participants are advised to carefully review all program details before
            registration. If you are unsure about your availability or commitment,
            please do not apply.
          </p>
        </article>

        {/* Internship Guidelines */}
        <article>
          <h2>4. Internship Guidelines</h2>
          <p>
            To ensure a productive learning experience, all interns must follow the
            guidelines mentioned below:
          </p>
          <ol>
            <li>Attend all scheduled sessions and submit tasks before deadlines.</li>
            <li>Do not misuse AI or automation tools to generate submissions.</li>
            <li>Participate actively in discussions and feedback sessions.</li>
            <li>Communicate respectfully with mentors and fellow interns.</li>
            <li>Maintain professional behavior throughout the program.</li>
            <li>Follow all instructions and adhere to timelines strictly.</li>
          </ol>
        </article>

        {/* Data Security */}
        <article>
          <h2>5. Data Security & Intellectual Property</h2>
          <p>
            During the course of the internship, interns may be given access to
            project-related data, research, or proprietary materials. It is your
            responsibility to:
          </p>
          <ul>
            <li>Keep all project-related data confidential.</li>
            <li>Not share internal resources with external parties.</li>
            <li>Respect intellectual property and avoid unauthorized distribution.</li>
            <li>Understand that all project outputs remain the property of Lunaro Labs.</li>
          </ul>
        </article>

        {/* Code of Conduct */}
        <article>
          <h2>6. Code of Conduct</h2>
          <p>
            All participants must maintain professionalism and integrity during
            their internship. The following behaviors are not tolerated:
          </p>
          <ul>
            <li>Harassment, discrimination, or offensive language.</li>
            <li>Sharing of false or misleading information.</li>
            <li>Unauthorized collaboration or cheating.</li>
            <li>Misuse of company resources or brand name.</li>
          </ul>
          <p>
            Violation of this code will result in immediate removal from the
            internship program without refund.
          </p>
        </article>

        {/* Disclaimer */}
        <article>
          <h2>7. Disclaimer</h2>
          <p>
            Lunaro Labs provides internships for educational and training purposes.
            While we aim to create a valuable learning environment, we do not
            guarantee future job placements or employment opportunities. Our role is
            to provide exposure, mentorship, and a platform for growth.
          </p>
        </article>

        {/* Final Note */}
        <article>
          <h2>8. Acknowledgment</h2>
          <p>
            By enrolling in our internship, you acknowledge that you have read,
            understood, and agreed to these policies. Non-compliance with any of the
            above guidelines will result in immediate disqualification without
            refund.
          </p>
          <p>
            If you have any questions about our policies, please reach out to us at{" "}
            <strong>contact@futureinterns.com</strong>.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Policies;
