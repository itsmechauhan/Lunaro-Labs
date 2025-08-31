import React from "react";
import "./css/Verification.css";

const Verification = () => {
  return (
    <section className="verification-page">
      <div className="verification-container">
        <h1 className="title">Verification & Internship Guidelines</h1>
        
        <article className="verification-article">
          <p>
            <strong>Only verified candidates</strong> are allowed.  
            Any kind of <span className="highlight">fake details</span> or 
            <span className="highlight"> duplication</span> will lead to 
            <strong> immediate disqualification</strong>.
          </p>
        </article>

        <h2 className="sub-title">🔑 Verification Process</h2>
        <ol className="verification-steps">
          <li>Submit your <strong>authentic personal details</strong> during registration.</li>
          <li>Upload your <strong>valid student/college ID</strong> or government ID proof.</li>
          <li>Verification team cross-checks details before internship confirmation.</li>
          <li>Final approval is shared via your registered email ID.</li>
        </ol>

        <h2 className="sub-title">📜 Internship Guidelines</h2>
        <ul className="guidelines">
          <li>⚡ <span>No AI-generated work is accepted</span>. Submissions must be original.</li>
          <li>⚡ Plagiarism, duplication, or fake projects = <strong>disqualification</strong>.</li>
          <li>⚡ Deadlines must be respected. Late submissions may impact certification.</li>
          <li>⚡ All work should follow professional ethics and academic honesty.</li>
          <li>⚡ Internship is for <strong>learning + skill building</strong>, not shortcuts.</li>
        </ul>

        <div className="note">
          <p>
            ✅ Follow these steps carefully.  
            ❌ Any violation will lead to cancellation without refund.  
          </p>
        </div>
      </div>
    </section>
  );
};

export default Verification;
