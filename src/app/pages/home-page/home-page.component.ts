import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Intelligent hiring operations</p>
        <h1>Hire smarter with a connected talent platform.</h1>
        <p class="subtitle">Bring candidates, recruiters, companies, interviews, and assessments into one streamlined workflow.</p>
      </div>

      <div class="stats">
        <div class="stat">
          <strong>120+</strong>
          <span>Active roles</span>
        </div>
        <div class="stat">
          <strong>94%</strong>
          <span>Match accuracy</span>
        </div>
        <div class="stat">
          <strong>24/7</strong>
          <span>Workflow visibility</span>
        </div>
      </div>

      <div class="cards cards-actors">
        <a class="card actor" routerLink="/candidate">
          <h3>Candidate</h3>
          <p>Upload CVs, extract skills and take assessments.</p>
        </a>
        <a class="card actor" routerLink="/recruiter">
          <h3>Recruiter</h3>
          <p>Search profiles, review summaries and shortlist talent.</p>
        </a>
        <a class="card actor" routerLink="/company">
          <h3>Corporate</h3>
          <p>Manage assessments, track performance and reporting.</p>
        </a>
      </div>
    </section>
  `,
  styles: [
    `.hero { max-width: 1200px; margin: 0 auto; }
    .hero-copy { margin-bottom: 1.5rem; }
    .eyebrow { text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; color: #3b82f6; font-weight: 700; margin-bottom: 0.4rem; }
    h1 { font-size: 2.35rem; margin: 0 0 0.5rem; line-height: 1.2; }
    .subtitle { font-size: 1.02rem; color: #475569; max-width: 760px; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 1.5rem 0 2rem; }
    .stat { padding: 1rem 1.1rem; border-radius: 14px; background: white; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); }
    .stat strong { display: block; font-size: 1.2rem; color: #0f172a; }
    .stat span { color: #64748b; font-size: 0.95rem; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
    .cards-actors { grid-template-columns: repeat(3, 1fr); align-items: stretch; }
    .card { display: block; padding: 1.2rem; border: 1px solid #e2e8f0; border-radius: 16px; text-decoration: none; color: inherit; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04); transition: transform 0.18s ease, box-shadow 0.18s ease; }
    .card.actor { padding: 2rem; min-height: 180px; display:flex; flex-direction:column; justify-content:center; text-align:center; }
    .card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1); }`
  ]
})
export class HomePageComponent {}
