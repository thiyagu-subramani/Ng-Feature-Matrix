import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TwowayComponent } from './binding/twoway.component';
import { SampleComponent } from './sample/sample.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { RangeComponent } from './range/range.component';
import { CalComponent } from './calendar/calendar.component';
//import { SideComponent } from './sidebar/sidebar.component';
import { RangeTagComponent } from './tag/tag.component';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
   { path: 'binding', component: TwowayComponent },
   { path: 'sample', component: SampleComponent },
   { path: 'time', component: TimeComponent },
   { path: 'date', component: DateComponent },
   { path: 'range', component: RangeComponent },
   { path: 'calendar', component: CalComponent },
   // { path: 'sidebar', component: SideComponent },
    { path: 'tag', component: RangeTagComponent }
];
