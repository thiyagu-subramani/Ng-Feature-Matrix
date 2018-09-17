import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';
import { accessSync } from 'fs';

@Component({
  selector: 'date',
  styleUrls: ['./date.component.css'],
  templateUrl: './date.component.html'
})
export class DateComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  @ViewChild('timepick')  public defaultDatePicker: DatePickerComponent;

    public float: string[] = ['Auto', 'Never', 'Always'];

    public format: string[] = ['dd-MMM-yy', 'yyyy-MM-dd', 'dd-MMMM'];

    public start: string[] = ['Month', 'Year', 'Decade'];

    public depth: string[] = ['Month', 'Year', 'Decade'];

   showHide(args: any) {
     if(args.checked) this.defaultDatePicker.show();
     else this.defaultDatePicker.hide();
    }
    timeDestroy(args: any){
      this.defaultDatePicker.destroy();
    }
    timeFocs(args: any){
      this.defaultDatePicker.focusIn();
    }
    timeBlur(args: any){
      this.defaultDatePicker.focusOut();
    }
    GetPesistData(args:any){
     console.log(this.defaultDatePicker.getPersistData());
    }
    showtodaybutton(args: any) {
     if(args.checked) this.defaultDatePicker.showTodayButton = true;
     else this.defaultDatePicker.showTodayButton =false;;
    }
    onFirstFocusout(args:any){
      this.defaultDatePicker.firstDayOfWeek = JSON.parse(args.target.value);
    }
    enableWeekNumber(args: any) {
     if(args.checked) this.defaultDatePicker.weekNumber = true;
     else this.defaultDatePicker.weekNumber =false;;
    }
    startChange(args: any){
      this.defaultDatePicker.start =args.value;
    }

    depthChange(args: any){
      this.defaultDatePicker.depth =args.value;
    }
    onFocus(args:any){
      console.log("Focus triggred");
       console.log(args);
    }
    onOpen(args:any){
      console.log("Open triggred");
      args.appendTo = document.getElementById("datepicker");
      console.log(args);
      
    }
    onSelect(args:any){
      console.log("Select triggred");
       console.log(args);
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
    onNavigated(args:any){
      console.log("navigate triggred");
      console.log(args);
    }
    onChange(args:any){
      console.log("Change triggred");
       console.log(args);
    }

    onBlur(args:any){
      console.log("Blur triggred");
       console.log(args);
    }
    enable(args: any) {
     if(args.checked) this.defaultDatePicker.enabled = true;
     else this.defaultDatePicker.enabled =false;;
    }
    enablePersistence(args: any) {
     if(args.checked) this.defaultDatePicker.enablePersistence = true;
     else this.defaultDatePicker.enablePersistence =false;;
    }
    enableRTL(args: any) {
     if(args.checked) this.defaultDatePicker.enableRtl = true;
     else this.defaultDatePicker.enableRtl =false;;
    }
    readOnly(args: any) {
     if(args.checked) this.defaultDatePicker.readonly = true;
     else this.defaultDatePicker.readonly =false;;
    }
    strictMode(args: any) {
     if(args.checked) this.defaultDatePicker.strictMode = true;
     else this.defaultDatePicker.strictMode =false;;
    }
    showClearButton(args: any) {
     if(args.checked) this.defaultDatePicker.showClearButton = true;
     else this.defaultDatePicker.showClearButton =false;;
    }
    floatChange(args: any) {
      this.defaultDatePicker.floatLabelType = args.value;
    }
    formatChange(args: any) {
      this.defaultDatePicker.format = args.value;
    }
    onMaxFocusout(args:any){
       this.defaultDatePicker.max = args.target.value;
    }
    onMinFocusout(args:any){
      this.defaultDatePicker.min = args.target.value;
    }
    onValueFocusout(args:any){
      this.defaultDatePicker.value = args.target.value;
    }
    onNumberFocusout(args: any){
      if(args.target.value)
      this.defaultDatePicker.width = JSON.parse(args.target.value);
    }
    onStringFocusout(args: any){
      if(args.target.value)
      this.defaultDatePicker.width = args.target.value;
    }
    onIndexFocusout(args: any){
      if(args.target.value)
      this.defaultDatePicker.zIndex = JSON.parse(args.target.value);
    }
    onPlaceHolderFocusout(args: any){
       if(args.target.value)
      this.defaultDatePicker.placeholder = args.target.value;
      else this.defaultDatePicker.placeholder = "";
    }
    oncssClassFocusout(args: any){
       if(args.target.value)
      this.defaultDatePicker.cssClass = args.target.value;
      else this.defaultDatePicker.cssClass = "";
     }
     GetView(args: any){
       console.log(this.defaultDatePicker.currentView());
     }
    // onScrolltoFocusout(args: any){
    //   this.defaultDatePicker.scrollTo = new Date(args.target.value);
    // }
    // onStepFocusout(args: any){
    //    if(args.target.value)
    //   this.defaultDatePicker.step = JSON.parse(args.target.value);
    // }

    
}
