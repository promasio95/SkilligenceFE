import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CandidatePageComponent } from './features/candidate/candidate-page.component';
import { RecruiterPageComponent } from './features/recruiter/recruiter-page.component';
import { CompanyPageComponent } from './features/company/company-page.component';
import { JobsPageComponent } from './features/jobs/jobs-page.component';
import { AssessmentPageComponent } from './features/assessments/assessment-page.component';
import { InterviewPageComponent } from './features/interviews/interview-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'candidate', component: CandidatePageComponent },
  { path: 'recruiter', component: RecruiterPageComponent },
  { path: 'company', component: CompanyPageComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'assessments', component: AssessmentPageComponent },
  { path: 'interviews', component: InterviewPageComponent },
  { path: '**', redirectTo: '' }
];
