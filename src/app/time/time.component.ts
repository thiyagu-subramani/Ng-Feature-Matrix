import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'time',
  styleUrls: ['./time.component.css'],
  templateUrl: './time.component.html'
})
export class TimeComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  @ViewChild('timepick')  public defaultTimePicker: TimePickerComponent;

  public float: string[] = ['Auto', 'Never', 'Always'];

    public format: string[] = ['hh:mm a', 'HH:mm', 'HH'];

   showHide(args: any) {
     if(args.checked) this.defaultTimePicker.show();
     else this.defaultTimePicker.hide();
    }
    timeDestroy(args: any){
      this.defaultTimePicker.destroy();
    }
    timeFocs(args: any){
      this.defaultTimePicker.focusIn();
    }
    timeBlur(args: any){
      this.defaultTimePicker.focusOut();
    }
    GetPesistData(args:any){
     console.log(this.defaultTimePicker.getPersistData());
    }
    enable(args: any) {
     if(args.checked) this.defaultTimePicker.enabled = true;
     else this.defaultTimePicker.enabled =false;;
    }
    enablePersistence(args: any) {
     if(args.checked) this.defaultTimePicker.enablePersistence = true;
     else this.defaultTimePicker.enablePersistence =false;;
    }
    enableRTL(args: any) {
     if(args.checked) this.defaultTimePicker.enableRtl = true;
     else this.defaultTimePicker.enableRtl =false;;
    }
    readOnly(args: any) {
     if(args.checked) this.defaultTimePicker.readonly = true;
     else this.defaultTimePicker.readonly =false;;
    }
    strictMode(args: any) {
     if(args.checked) this.defaultTimePicker.strictMode = true;
     else this.defaultTimePicker.strictMode =false;;
    }
    showClearButton(args: any) {
     if(args.checked) this.defaultTimePicker.showClearButton = true;
     else this.defaultTimePicker.showClearButton =false;;
    }
    floatChange(args: any) {
      this.defaultTimePicker.floatLabelType = args.value;
    }
    formatChange(args: any) {
      this.defaultTimePicker.format = args.value;
    }
    onMaxFocusout(args:any){
       this.defaultTimePicker.max = args.target.value;
    }
    onMinFocusout(args:any){
      this.defaultTimePicker.min = args.target.value;
    }
    onValueFocusout(args:any){
      this.defaultTimePicker.value = args.target.value;
    }
    onNumberFocusout(args: any){
      if(args.target.value)
      this.defaultTimePicker.width = JSON.parse(args.target.value);
    }
    onStringFocusout(args: any){
      if(args.target.value)
      this.defaultTimePicker.width = args.target.value;
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
    onFocus(args:any){
      console.log("Focus triggred");
       console.log(args);
    }
    onIndexFocusout(args: any){
      if(args.target.value)
      this.defaultTimePicker.zIndex = JSON.parse(args.target.value);
    }
    onPlaceHolderFocusout(args: any){
       if(args.target.value)
      this.defaultTimePicker.placeholder = args.target.value;
      else this.defaultTimePicker.placeholder = "";
    }
    oncssClassFocusout(args: any){
       if(args.target.value)
      this.defaultTimePicker.cssClass = args.target.value;
      else this.defaultTimePicker.cssClass = "";
     }
    onScrolltoFocusout(args: any){
      this.defaultTimePicker.scrollTo = new Date(args.target.value);
    }
    onStepFocusout(args: any){
       if(args.target.value)
      this.defaultTimePicker.step = JSON.parse(args.target.value);
    }
}
