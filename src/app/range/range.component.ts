import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { DateRangePickerComponent , DateRange} from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'range',
  styleUrls: ['./range.component.css'],
  templateUrl: './range.component.html'
})
export class RangeComponent {
  

  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  @ViewChild('timepick')  public defaultDateRangePicker: DateRangePickerComponent;

    public float: string[] = ['Auto', 'Never', 'Always'];

    public format: string[] = ['dd-MMM-yy', 'yyyy-MM-dd', 'dd-MMMM HH:mm'];

    public start: string[] = ['Month', 'Year', 'Decade'];

    public depth: string[] = ['Month', 'Year', 'Decade'];

   showHide(args: any) {
     if(args.checked) this.defaultDateRangePicker.show();
     else this.defaultDateRangePicker.hide();
    }
    showtodaybutton(args: any) {
     if(args.checked) this.defaultDateRangePicker.showTodayButton = true;
     else this.defaultDateRangePicker.showTodayButton =false;;
    }
    onFirstFocusout(args:any){
      this.defaultDateRangePicker.firstDayOfWeek = JSON.parse(args.target.value);
    }
    enableWeekNumber(args: any) {
     if(args.checked) this.defaultDateRangePicker.weekNumber = true;
     else this.defaultDateRangePicker.weekNumber =false;;
    }
    startChange(args: any){
      this.defaultDateRangePicker.start =args.value;
    }

    depthChange(args: any){
      this.defaultDateRangePicker.depth =args.value;
    }
    timeDestroy(args: any){
      this.defaultDateRangePicker.destroy();
    }
    timeFocs(args: any){
      this.defaultDateRangePicker.focusIn();
    }
    timeBlur(args: any){
      this.defaultDateRangePicker.focusOut();
    }
    GetPesistData(args:any){
     console.log(this.defaultDateRangePicker.getPersistData());
    }
    enable(args: any) {
     if(args.checked) this.defaultDateRangePicker.enabled = true;
     else this.defaultDateRangePicker.enabled =false;;
    }
    enablePersistence(args: any) {
     if(args.checked) this.defaultDateRangePicker.enablePersistence = true;
     else this.defaultDateRangePicker.enablePersistence =false;;
    }
    enableRTL(args: any) {
     if(args.checked) this.defaultDateRangePicker.enableRtl = true;
     else this.defaultDateRangePicker.enableRtl =false;;
    }
    readOnly(args: any) {
     if(args.checked) this.defaultDateRangePicker.readonly = true;
     else this.defaultDateRangePicker.readonly =false;;
    }
    strictMode(args: any) {
     if(args.checked) this.defaultDateRangePicker.strictMode = true;
     else this.defaultDateRangePicker.strictMode =false;;
    }
    showClearButton(args: any) {
     if(args.checked) this.defaultDateRangePicker.showClearButton = true;
     else this.defaultDateRangePicker.showClearButton =false;;
    }
    floatChange(args: any) {
      this.defaultDateRangePicker.floatLabelType = args.value;
    }
    formatChange(args: any) {
      this.defaultDateRangePicker.format = args.value;
    }
    onMaxFocusout(args:any){
       this.defaultDateRangePicker.max = new Date(args.target.value);
    }
    onmindaysFocusout(args:any){
       this.defaultDateRangePicker.minDays = JSON.parse(args.target.value);
    }
    onmaxdaysFocusout(args:any){
       this.defaultDateRangePicker.maxDays = JSON.parse(args.target.value);
    }
    onSDateFocusout(args:any){
       this.defaultDateRangePicker.startDate = new Date(args.target.value);
    }
    onEndDateFocusout(args:any){
       this.defaultDateRangePicker.endDate = new Date(args.target.value);
    }
    onMinFocusout(args:any){
      this.defaultDateRangePicker.min = new Date(args.target.value);
    }
    onValueFocusout(args:any){
      var a  = args.target.value.split("-");
      this.defaultDateRangePicker.value=[new Date(a[0]), new Date(a[1])];
    }
    onValue1Focusout(args:any){
      var a  = args.target.value.split("-");
      this.defaultDateRangePicker.value={start:new Date(a[0]), end:new Date(a[1])};
    }
    onNumberFocusout(args: any){
      if(args.target.value)
      this.defaultDateRangePicker.width = JSON.parse(args.target.value);
    }
    onStringFocusout(args: any){
      if(args.target.value)
      this.defaultDateRangePicker.width = args.target.value;
    }
    onIndexFocusout(args: any){
      if(args.target.value)
      this.defaultDateRangePicker.zIndex = JSON.parse(args.target.value);
    }
    onPlaceHolderFocusout(args: any){
       if(args.target.value)
      this.defaultDateRangePicker.placeholder = args.target.value;
      else this.defaultDateRangePicker.placeholder = "";
    }
    oncssClassFocusout(args: any){
       if(args.target.value)
      this.defaultDateRangePicker.cssClass = args.target.value;
      else this.defaultDateRangePicker.cssClass = "";
     }
     onClose(args:any){
      console.log("Close triggred");
       console.log(args);
    }
    onCreated(args:any){
      console.log("created triggred");
       console.log(args);
    }
    onDestroy(args:any){
      console.log("destroy triggred");
       console.log(args);
    }
    onChange(args:any){
      console.log("Change triggred");
       console.log(args);
    }
    onOpen(args:any){
      console.log("Open triggred");
       console.log(args);
    }
    onBlur(args:any){
      console.log("Blur triggred");
       console.log(args);
    }
    onNavigated(args:any){
      console.log("select triggred");
       console.log(args);
    }
    onFocus(args:any){
      console.log("Focus triggred");
       console.log(args);
    }
    // onScrolltoFocusout(args: any){
    //   this.defaultDateRangePicker.scrollTo = new Date(args.target.value);
    // }
    // onStepFocusout(args: any){
    //    if(args.target.value)
    //   this.defaultDateRangePicker.step = JSON.parse(args.target.value);
    // }
}
