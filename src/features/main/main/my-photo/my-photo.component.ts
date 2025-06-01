import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.scss']
})
export class MyPhotoComponent implements OnInit {

  edad= new Date().getFullYear() - 1998;

  constructor() {

  }

  ngOnInit(): void {
  }

}
