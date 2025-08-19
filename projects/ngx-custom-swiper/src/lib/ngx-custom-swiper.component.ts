import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'lib-swiper-container',
  standalone: true,
  templateUrl: './ngx-custom-swiper.component.html',
  styleUrls: ['./ngx-custom-swiper.component.css'],
})
export class SwiperContainerComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: true })
  swiperContainer!: ElementRef<HTMLDivElement>;

  @Input() config: SwiperOptions = {};

  private swiper?: Swiper;

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      ...this.config,
    });
  }

  ngOnDestroy() {
    this.swiper?.destroy();
  }
}
