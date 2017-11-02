import {Component, ElementRef, Inject, AfterViewInit, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  constructor(private elementRef:ElementRef) {}

  async ngAfterViewInit() {
    await this.loadScript("assets/js/jquery-2.1.4.min.js")
    await this.loadScript("assets/js/bootstrap.min.js")
    await this.loadScript("assets/js/owl.carousel.min.js")
    await this.loadScript("assets/js/jquery.slicknav.min.js")
    await this.loadScript("assets/js/wow.min.js")
    await this.loadScript("assets/js/isotope.pkgd.min.js")
    await this.loadScript("assets/js/jquery.magnific-popup.min.js")
    await this.loadScript("assets/js/active.js")
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


