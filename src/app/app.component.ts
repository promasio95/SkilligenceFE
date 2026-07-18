import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="topbar">
      <div class="brand">Skilligence</div>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/candidate">Candidate</a>
        <a routerLink="/recruiter">Recruiter</a>
        <a routerLink="/company">Company</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `:host { display: block; min-height: 100vh; font-family: Arial, sans-serif; color: #14213d; }
    .topbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%); color: white; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.16); }
    .brand { font-size: 1.25rem; font-weight: 700; letter-spacing: 0.02em; }
    nav { display: flex; flex-wrap: wrap; gap: 0.75rem; }
    nav a { color: white; text-decoration: none; padding: 0.35rem 0.7rem; border-radius: 999px; transition: background 0.2s ease; }
    nav a:hover { background: rgba(255,255,255,0.14); }
    main { padding: 2rem; }`
  ]
})
export class AppComponent {}
