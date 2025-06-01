import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyTranslateService } from '../../../../shared/my-translate.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss']
})
export class LangSelectComponent implements OnInit, OnDestroy {


  langControl = new FormControl('gl');
  langSubscription: Subscription;

  constructor(public translateService: MyTranslateService) {

    //Get used lang and subscribe to changes by other components
    this.langSubscription = this.translateService.getObservable().subscribe(lang => {
      this.langControl.setValue(lang)
    });
    this.langControl.setValue(this.translateService.lang)

    //Subscribe to lang change by the select in this component
    this.langControl.valueChanges.subscribe(change => {
      if (change != null){
        this.translateService.use(change)
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

}
