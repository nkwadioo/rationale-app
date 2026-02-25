import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { animate, inView } from 'motion';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private stopObserving?: VoidFunction;

  @Input('appScrollAnimate') animation: AnimationType = 'fade-up';
  @Input() animationDelay = 0;

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    // Set initial hidden state based on animation type
    Object.assign(element.style, {
      opacity: '0',
      transform: this.getInitialTransform(),
    });

    const stop = inView(
      element,
      () => {
        (animate as Function)(
          element,
          { opacity: [0, 1], transform: ['none'] },
          {
            duration: 0.9,
            delay: this.animationDelay / 1000,
            easing: [0.33, 1, 0.68, 1], // ease-out-cubic
          },
        );
        // Fire once then stop observing (replaces AOS `once: true`)
        stop();
      },
      { margin: '-80px' },
    );

    this.stopObserving = stop;
  }

  ngOnDestroy(): void {
    this.stopObserving?.();
  }

  private getInitialTransform(): string {
    switch (this.animation) {
      case 'fade-up':
        return 'translateY(30px)';
      case 'fade-right':
        return 'translateX(-30px)';
      case 'fade-left':
        return 'translateX(30px)';
      default:
        return 'translateY(30px)';
    }
  }
}
