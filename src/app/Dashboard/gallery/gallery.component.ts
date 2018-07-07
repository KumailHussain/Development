import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

export class  GalleryComponent implements AfterViewInit{
  title = 'app';
  constructor() {}

  async ngAfterViewInit() {
    this.loadScript("assets/js/owl.carousel.min.js")
    this.loadScript("assets/js/jquery.slicknav.min.js")
    this.loadScript("assets/js/wow.min.js")
    this.loadScript("assets/js/isotope.pkgd.min.js")
    this.loadScript("assets/js/jquery.magnific-popup.min.js")
    this.loadScript("assets/js/active.js")
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
    })
  }
}


