import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Job Management</h2>
      <p>Coordinate postings, shortlist talent, and keep hiring goals visible for the team.</p>

      <div class="panel">
        <h3>Open Roles</h3>
        <p>Track active job openings and required skill profiles.</p>
      </div>

      <div class="panel">
        <h3>Hiring Funnel</h3>
        <p>Monitor applications, screening progress, and interview readiness.</p>
      </div>
    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .panel { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }`
  ]
})
export class JobsPageComponent {}
