import {CdkTextareaAutosize, AutofillMonitor} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, OnInit, AfterViewInit, ElementRef, OnDestroy} from '@angular/core';

import {take} from 'rxjs/operators';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.sass']
})
export class TextFieldComponent implements OnInit {

  // @ViewChild('name', { read: ElementRef, static: false }) name: ElementRef<HTMLElement>;
  nameAutofilled: boolean;

  constructor(private _ngZone: NgZone, private _autofill: AutofillMonitor) {}

  @ViewChild('autosize', {static: true}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
  }
  
  // 使用模板指令则不用写
  // ngAfterViewInit() {
  //   this._autofill.monitor(this.name)
  //       .subscribe(e => this.nameAutofilled = e.isAutofilled);
  // }

  // ngOnDestroy() {
  //   this._autofill.stopMonitoring(this.name);
  // }

}
