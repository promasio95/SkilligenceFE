import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Assessment Center</h2>
      <p>Create test plans, review candidate results, and compare performance trends.</p>

      <div class="panel">
        <h3>Skill Tests</h3>
        <p>Assgn role-specific assessments to candidates and employees.</p>
      </div>

      <div class="panel">
        <h3>Evaluation Insights</h3>
        <p>Review scores, pass rates, and completion timelines in one view.</p>
      </div>
    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .panel { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }`
  ]
})
export class AssessmentPageComponent {}
