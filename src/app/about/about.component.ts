import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { SrvRecord } from 'dns';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() msg:string = "";
  @Output() ref = new EventEmitter<string>();
  ch_msg:string = "From child";
  constructor() { }

  ngOnInit(): void {
  }
  send(ch_msg2:string)
  {
    setTimeout(
    () => {
        return this.ref.emit(ch_msg2);
      }, 10000);
  }
}
