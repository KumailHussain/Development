import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

export class  GalleryComponent implements OnInit{
  config: any;

  ngOnInit() {

    this.config = [0,1,1,1,1,1,1]

  }

  changeMenu(item) {

    for (var i in this.config) {
      if(i ==item) {
      this.config[i] = 0;
      }
      else {
        this.config[i] = 1;
      }
    }
    console.log(this.config)
  }

}
