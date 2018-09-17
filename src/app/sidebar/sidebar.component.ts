// import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
// import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
// import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
// import { ShareRouting } from '../app.service';

// @Component({
//   selector: 'sidebar',
//   styleUrls: ['./sidebar.component.css'],
//   templateUrl: './sidebar.component.html'
// })
// export class SideComponent {
//   constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
//   }
//   public type: string[] = ['Auto', 'Push', 'Slide', 'Over'];

//   public position: string[] = ['Left', 'Right'];
  
//   @ViewChild('sidebar') public Sidebar: SidebarComponent;
//     enablePersistence(args: any) {
//      if(args.checked) this.Sidebar.enablePersistence = true;
//      else this.Sidebar.enablePersistence =false;;
//     }
//     closeClick() {
//          this.Sidebar.hide();
//     }
//     typeChange(args: any){
//       this.Sidebar.type = args.value;
//     }
//     showHide(args: any){ debugger
//       if(this.Sidebar.isOpen) this.Sidebar.hide();
//       else this.Sidebar.show();
//     }
//     Destroy(){
//       this.Sidebar.destroy();
//     }
//     toggle(){ 
//       this.Sidebar.toggle();
//     }
//     positionChange(args:any){
//       this.Sidebar.position = args.value;
//     }
//     enableRTL(args: any) {
//      if(args.checked) this.Sidebar.enableRtl = true;
//      else this.Sidebar.enableRtl =false;;
//     }
//     closeonDocumentClick(args: any) {
//      if(args.checked) this.Sidebar.closeOnDocumentClick = true;
//      else this.Sidebar.closeOnDocumentClick =false;;
//     }
//     Animate(args: any) {
//      if(args.checked) this.Sidebar.animate = true;
//      else this.Sidebar.animate =false;;
//     }
//     enableGesture(args: any) {
//      if(args.checked) this.Sidebar.enableGestures = true;
//      else this.Sidebar.enableGestures =false;;
//     }
//     Backdrop(args: any) {
//      if(args.checked) this.Sidebar.showBackdrop = true;
//      else this.Sidebar.showBackdrop =false;;
//     }
//     onNumberFocusout(args: any){
//       if(args.target.value)
//       this.Sidebar.width = JSON.parse(args.target.value);
//     }
//     onStringFocusout(args: any){
//       if(args.target.value)
//       this.Sidebar.width = args.target.value;
//     }
//     onIndexFocusout(args: any){
//       if(args.target.value)
//       this.Sidebar.zIndex = JSON.parse(args.target.value);
//     }
// }
