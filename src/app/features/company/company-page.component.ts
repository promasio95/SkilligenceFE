import { Component } from '@angular/core';

@Component({
  selector: 'app-company-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Company Operations</h2>
      <p>Support internal testing and performance evaluation for employees across the company.</p>

      <div class="panel">
        <h3>Assessment Management</h3>
        <p>Create and assign skill tests for employees and candidates.</p>
      </div>

      <div class="panel">
        <h3>Performance Tracking</h3>
        <p>Measure test outcomes and monitor growth over time.</p>
      </div>

      <div class="panel">
        <h3>Reporting</h3>
        <p>Share structured insights with HR and department leaders.</p>
      </div>
    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .panel { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }`
  ]
})
export class CompanyPageComponent {}
