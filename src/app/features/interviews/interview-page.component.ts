import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Interview Workflow</h2>
      <p>Guide interviews from scheduling to feedback collection with a structured process.</p>

      <div class="panel">
        <h3>Scheduling</h3>
        <p>Coordinate interview slots and keep participants informed.</p>
      </div>

      <div class="panel">
        <h3>Feedback</h3>
        <p>Capture notes, recommendations, and next-step decisions.</p>
      </div>
    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .panel { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }`
  ]
})
export class InterviewPageComponent {}
