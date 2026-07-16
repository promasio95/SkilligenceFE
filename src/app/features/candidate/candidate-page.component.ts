import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Candidate Workspace</h2>
      <p>Use this space to upload your CV, analyze ATS compatibility, extract skills, and complete skill assessments.</p>

      <div class="panel">
        <h3>CV Upload</h3>
        <p>Upload resume and calculate ATS score instantly.</p>
      </div>

      <div class="panel">
        <h3>Skill Extraction</h3>
        <p>Automatically extract strengths, keywords, and experience from the uploaded file.</p>
      </div>

      <div class="panel">
        <h3>Skill Testing</h3>
        <p>Take role-based tests and view your performance score.</p>
      </div>
    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .panel { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }`
  ]
})
export class CandidatePageComponent {}
