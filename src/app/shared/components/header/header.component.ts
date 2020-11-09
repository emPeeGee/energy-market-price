import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { faUser, faMap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
        animate('400ms ease-in', style({  color: '#83a600', opacity: 1 })),
      ])
    ]),

    trigger('menuAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('500ms ease-out', style({ transform: 'translateY(100%)' })),
      ])
    ]),
  ]
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  menuItems = ['HOME', 'SOLUTIONS', 'TUTORIAL', 'ABOUT US', 'LIBRARY', 'NEWS', 'CONTACT US'];

  faUser = faUser;
  faMap = faMap;
  faBars = faBars;
  faTimes = faTimes;

  isMobile = false;
  isMenuVisible = false;
  isScrolledMoreThan = false;
  scrollToNextSection: number;
  selectedIndex = 0;

  subscriptionResize: Subscription;
  subscriptionScroll: Subscription;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isMobile = document.body.offsetWidth <= 752;
      this.isMenuVisible = !this.isMobile; // Mobile must init with hidden menu
    }, 0);

    this.subscriptionResize = fromEvent(window, 'resize')
      .subscribe(() => {
        this.isMobile = document.body.offsetWidth <= 752;

        this.isMenuVisible = !this.isMobile; // Mobile must init with hidden menu
      });

    this.subscriptionScroll = fromEvent(window, 'scroll')
      .subscribe(() => {
        this.checkScrolled();
      });

    this.checkScrolled();
  }

  ngOnDestroy(): void {
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
      this.subscriptionScroll.unsubscribe();
    }
  }

  setItem(index: number): void {
    this.selectedIndex = index;
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  checkScrolled(): void {
    this.scrollToNextSection = document.querySelector('#solution').getBoundingClientRect().top;
    this.isScrolledMoreThan = window.pageYOffset > this.scrollToNextSection;
  }
}
