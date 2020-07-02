import {Component, ViewChild, ElementRef, ViewEncapsulation, HostBinding, Input, OnInit, AfterViewInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Constants } from '../constants';
import {NavItem} from '../nav-item';
import {NavService} from '../nav.service';
import { Title }     from '@angular/platform-browser';
import { MenuNavItems } from '../data/menu-nav-items';

export interface Mainlayout {
    updateTitle(partOfTitle:string);
}



@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainlayoutComponent implements Mainlayout, AfterViewInit, OnInit {

  public navItems: NavItem[] = MenuNavItems.navItems;

  @ViewChild('drawer') drawer: ElementRef;
  
  basetitle:string = "EMI-Box Kundenportal";
  title:string = this.basetitle;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private navService: NavService, 
              private breakpointObserver: BreakpointObserver,
              private titleService: Title) {
  }

  ngAfterViewInit() {
    this.navService.drawer = this.drawer;
  }

  token : String;
  customerId : String;

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.customerId = localStorage.getItem('customerId');

    this.navService.currentUrl.subscribe((url: string) => {
      if( ! url ){
        return;
      }
      this.updateTitle(null);
    });
  }

  updateTitle(partOfTitle:string){
    setTimeout(() => {
      if( partOfTitle !== null){
        console.log("MainlayoutComponent: Update Title add parts " + partOfTitle);
        this.title = this.basetitle + " • " + partOfTitle;
        this.titleService.setTitle( partOfTitle  + " • " + this.basetitle);
      }else{
        console.log("MainlayoutComponent: Update Title " + partOfTitle);
        this.titleService.setTitle( this.title );
      }
    });
  }
}
