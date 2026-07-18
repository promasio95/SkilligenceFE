import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <h2>Candidate Workspace</h2>
      <p>Upload your CV to extract Job History, Skills, Certifications, Education and Languages.</p>

      <div class="uploader">
        <div class="dropzone" [class.dragging]="isDragging"
             (dragover)="onDragOver($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)">
          <p *ngIf="!fileName">Drag & drop a PDF/DOCX here, or <label class="browse">browse<input type="file" accept=".pdf,.doc,.docx" (change)="onFileChange($event)"/></label></p>
          <p *ngIf="fileName"><strong>Selected:</strong> {{fileName}}</p>
        </div>

        <div class="actions">
          <button (click)="clear()" [disabled]="!fileName">Clear</button>
        </div>

        <div class="extract" *ngIf="extracting">Extracting data…</div>

        <div class="result" *ngIf="extractedData">
          <h3>Extracted data (simulated)</h3>
          <div class="panel">
            <h4>Job History</h4>
            <ul>
              <li *ngFor="let j of extractedData.jobHistory">{{j.title}} — {{j.company}} ({{j.years}})</li>
            </ul>
          </div>

            <div class="panel">
              <h4>Skills</h4>
              <ul class="skills">
                <li *ngFor="let s of extractedData.skills">
                  <span class="skill-name">{{s.name}}</span>
                  <span class="skill-status" *ngIf="!s.evaluated">Not Evaluated Yet</span>
                  <span class="skill-score" *ngIf="s.evaluated">Score: {{s.score}}</span>
                  <button *ngIf="!s.evaluated && !s.evaluating" (click)="startAssessment(s)">Start Professional Assessment</button>
                  <span *ngIf="s.evaluating" class="evaluating">Assessing…</span>
                </li>
              </ul>
            </div>

          <div class="panel">
            <h4>Certifications</h4>
            <p>{{extractedData.certifications.join(', ')}}</p>
          </div>

          <div class="panel">
            <h4>Education</h4>
            <p>{{extractedData.education.join('; ')}}</p>
          </div>

          <div class="panel">
            <h4>Languages</h4>
            <p>{{extractedData.languages.join(', ')}}</p>
          </div>
        </div>
      </div>

    </section>
  `,
  styles: [
    `.page { max-width: 900px; margin: 0 auto; }
    .uploader { margin-top: 1rem; }
    .dropzone { border: 2px dashed #cbd5e1; border-radius: 12px; padding: 2rem; text-align: center; background: #fff; cursor: pointer; }
    .dropzone.dragging { background: #eef2ff; border-color: #6366f1; }
    .browse { color: #2563eb; text-decoration: underline; cursor: pointer; }
    .browse input { display: none; }
    .actions { margin-top: 0.6rem; }
    button { padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; background: white; cursor: pointer; }
    .extract { margin-top: 0.8rem; font-style: italic; }
    .result { margin-top: 1rem; }
    .panel { margin-top: 0.6rem; padding: 0.8rem; border-radius: 10px; background: #f8fafc; border: 1px solid #e2e8f0; }
    `
  ]
})
export class CandidatePageComponent {
  isDragging = false;
  extracting = false;
  extractedData: any = null;
  fileName = '';
  constructor(private router: Router) {}

  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
  }

  onDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
    const files = e.dataTransfer?.files;
    if (files && files.length) this.handleFile(files[0]);
  }

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length) this.handleFile(input.files[0]);
  }

  handleFile(file: File) {
    this.fileName = file.name;
    this.extractedData = null;
    this.simulateExtraction(file);
  }

  simulateExtraction(file: File) {
    this.extracting = true;
    // Simulate async AI extraction with static sample data
    setTimeout(() => {
      this.extracting = false;
      this.extractedData = {
        fileName: file.name,
        jobHistory: [
          { title: 'Software Engineer', company: 'Acme Corp', years: '2019 - 2023' },
          { title: 'Frontend Developer', company: 'Beta LLC', years: '2016 - 2019' }
        ],
        skills: [
          { name: 'JavaScript', evaluated: false },
          { name: 'TypeScript', evaluated: false },
          { name: 'Angular', evaluated: false },
          { name: 'HTML', evaluated: false },
          { name: 'CSS', evaluated: false }
        ],
        certifications: ['AWS Certified Developer', 'Scrum Master (simulated)'],
        education: ['B.Sc. Computer Science — State University'],
        languages: ['English', 'Spanish']
      };
    }, 1200);
  }

  clear() {
    this.fileName = '';
    this.extractedData = null;
  }
  
  startAssessment(skill: any) {
    // Navigate to the assessments page and pass the skill name as a query param
    this.router.navigate(['/assessments'], { queryParams: { skill: skill.name } });
  }
}
