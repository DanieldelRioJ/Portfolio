import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { WorkCard } from './work-card';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit, AfterViewInit {

  @Input() work: WorkCard | undefined;
  @ViewChild('video', { read: ElementRef }) videoElement: ElementRef<HTMLVideoElement> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  canPlayThrough($event: Event) {
    if(this.videoElement?.nativeElement != null){
      this.videoElement.nativeElement.muted = true;
      this.videoElement?.nativeElement?.play().then(ok=>{
        console.log(ok)
      }, error => {
        console.log(error)
      });
    }
  }
}
