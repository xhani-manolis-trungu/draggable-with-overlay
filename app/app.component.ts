
import { Component } from '@angular/core';
import {
  CdkOverlayOrigin,
  ScrollStrategy,
  ScrollStrategyOptions,
  CdkConnectedOverlay
} from "@angular/cdk/overlay";

// 
// 
// https://www.youtube.com/watch?v=c7VPvFPFTeY  Video for more info
// 
// 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trappedBoxes = ['Trapped 1', 'Trapped 2'];

  open: boolean;
  scrollStrategy: ScrollStrategy;

  constructor(private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = this.sso.block();
  }

    public overlayDetach(ref: CdkConnectedOverlay) {
    console.log("overlayDetach", ref.scrollStrategy);
  }

  public overlayAttach(ref: CdkConnectedOverlay) {
    console.log("overlayAttach", ref.scrollStrategy);
  }

  add(): void {
    this.trappedBoxes.push('New trapped');
  }
}
