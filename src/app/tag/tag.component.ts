import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'tag',
  styleUrls: ['./tag.component.css'],
  templateUrl: './tag.component.html'
})
export class RangeTagComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  public today: Date = new Date(new Date().toDateString());
    public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
    public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
        - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString())
        ;
    public monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
    public monthEnd: Date = this.today;
    public lastStart: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString());
    public lastEnd: Date = this.today;
    public yearStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
    public yearEnd: Date = this.today;
}
