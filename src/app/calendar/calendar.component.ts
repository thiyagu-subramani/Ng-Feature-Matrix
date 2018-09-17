import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'calendar',
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html'
})
export class CalComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  @ViewChild('timepick')  public Calendar: CalendarComponent;


   public start: string[] = ['Month', 'Year', 'Decade'];

    public depth: string[] = ['Month', 'Year', 'Decade'];
    
    GetPesistData(args:any){
     console.log(this.Calendar.getPersistData());
    }
    enableRTL(args: any) {
     if(args.checked) this.Calendar.enableRtl = true;
     else this.Calendar.enableRtl =false;;
    }
    showtodaybutton(args: any) {
     if(args.checked) this.Calendar.showTodayButton = true;
     else this.Calendar.showTodayButton =false;;
    }
    onFirstFocusout(args:any){
      this.Calendar.firstDayOfWeek = JSON.parse(args.target.value);
    }
    enableWeekNumber(args: any) {
     if(args.checked) this.Calendar.weekNumber = true;
     else this.Calendar.weekNumber =false;;
    }
    startChange(args: any){
      this.Calendar.start =args.value;
    }

    depthChange(args: any){
      this.Calendar.depth =args.value;
    }
    onMaxFocusout(args:any){
       this.Calendar.max = args.target.value;
    }
    onCreate(args:any){
      console.log("created triggred");
    }
    onDestroy(args:any){
      console.log("destroy triggred");
    }
    onNavigated(args:any){
      console.log("navigate triggred");
    }
    onChange(args:any){
      console.log("Change triggred");
    }
    onMinFocusout(args:any){
      this.Calendar.min = args.target.value;
    }
    onValueFocusout(args:any){
      this.Calendar.value = args.target.value;
    }
     GetView(args: any){
       console.log(this.Calendar.currentView());
     }
     timeDestroy(args:any){
     this.Calendar.destroy();
    }
    enablePersistence(args : any){
      if(args.checked)this.Calendar.enablePersistence = true;
      else this.Calendar.enablePersistence = false;
    }
    // onScrolltoFocusout(args: any){
    //   this.Calendar.scrollTo = new Date(args.target.value);
    // }
    // onStepFocusout(args: any){
    //    if(args.target.value)
    //   this.Calendar.step = JSON.parse(args.target.value);
    // }
}
