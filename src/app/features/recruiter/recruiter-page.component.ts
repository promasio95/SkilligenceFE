import { Component } from '@angular/core';

@Component({
  selector: 'app-recruiter-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Recruiter Dashboard</h2>
      <p>Review candidate profiles, compare skill summaries, and inspect test performance in one place.</p>

      <div class="panel">
        <h3>Candidate Search</h3>
        <p>Search by role, skills, location, or experience level.</p>
      </div>

      <div class="panel">
        <h3>Candidate Summary</h3>
        <p>View ATS results, extracted skill highlights, and test history.</p>
      </div>

      <div class="panel">
        <h3>Shortlisting</h3>
        <p>Track candidates ready for interviews or further evaluation.</p>
      </div>
    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .panel { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }`
  ]
})
export class RecruiterPageComponent {}
