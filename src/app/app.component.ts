import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {ModalComponent} from "./modal/modal.component";
import {NgbCarouselConfig, NgbModal, NgbTabset, NgbTabsetConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgsRevealConfig} from "ng-scrollreveal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbTabsetConfig]
})
export class AppComponent {
  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;
  fullImagePath4: string;
  fullImagePath5: string;
  fullImagePath6: string;
  fullImagePath7: string;
  fullImagePath8: string;
  showHideGuest: string;
  constructor(private fb: FormBuilder, private af: AngularFireAuth, private db: AngularFireDatabase, private modalService: NgbModal, config: NgbCarouselConfig, config2: NgsRevealConfig) {
    this.fullImagePath1 = 'assets/pup2.jpg';
    this.fullImagePath2 = 'assets/pup1.jpg';
    this.fullImagePath3 = 'assets/dillards.jpg';
    this.fullImagePath4 = 'assets/bbb.jpg';
    this.fullImagePath5 = 'assets/pup3.jpg';
    this.fullImagePath6 = 'assets/pup4.jpg';
    this.fullImagePath7 = 'assets/pup5.jpg';
    this.fullImagePath8 = 'assets/pup6.jpg';
    // customize default values of carousels used by this component tree
    config.interval = 10000;

    config2.duration = 2500;
    config2.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config2.reset = false;
    config2.mobile = true;
  }
}
