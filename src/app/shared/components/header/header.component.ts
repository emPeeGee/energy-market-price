import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { faUser, faMap, faBars } from '@fortawesome/free-solid-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:  [
    trigger('faAppearAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({  color: '#83a600', opacity: 1 })),
      ])
    ]),

    trigger('menuAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('150ms ease-out', style({ opacity: 0 })),
      ])
    ]),
  ]
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  faUser = faUser;
  faMap = faMap;
  faBars = faBars;

  isMobile = false;
  isMenuVisible = true;
  selectedIndex = 0;

  subscriptionResize: Subscription;

  @Input() items: string[];
  @Output() menuIsVisible = new EventEmitter<boolean>();

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isMobile = document.body.offsetWidth <= 768;
      if (this.isMobile) {
        this.isMenuVisible = false;
        this.menuIsVisible.emit(this.isMenuVisible);
      } else {
        this.isMenuVisible = true;
        this.menuIsVisible.emit(this.isMenuVisible);
      }
    }, 0);

    this.subscriptionResize = fromEvent(window, 'resize')
      .subscribe(() => {
        this.isMobile = document.body.offsetWidth <= 768;
        this.menuIsVisible.emit(this.isMenuVisible);

        if (!this.isMobile && !this.isMenuVisible) { // If menu is hidden, but is not mobile, when make menu visible
          this.isMenuVisible = true;
          this.menuIsVisible.emit(this.isMenuVisible);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  setItem(index: number): void {
    this.selectedIndex = index;
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
    this.menuIsVisible.emit(this.isMenuVisible);
  }
}
