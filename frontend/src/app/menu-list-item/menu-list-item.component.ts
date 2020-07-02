import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavItem} from '../nav-item';
import {Router} from '@angular/router';
import {NavService} from '../nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Constants } from '../constants';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
    console.log('asdf',url);
      if( ! url ){
        return;
      }
      if( ! this.item.route ){
        return;
      }
      this.expanded = url.indexOf(`/${this.item.route}`) === 0;
      this.ariaExpanded = this.expanded;

      var r:string = this.item.route.toLowerCase();
      var u:string = url.toLowerCase().substring(1, url.slice(1).indexOf('/')+1);
      if(this.item.level> 1 || r === Constants.UrlHelp.toLowerCase() || r === Constants.UrlProperties.toLowerCase()){
        return;
      }

      //TODO muss nur beim initialen aufmachen von "/" alle anlagen öffnen und eine seite durchrouten
      //TODO das muss direkt über routing redirect passieren
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
       this.router.navigate([item.route]);
    //   this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
    console.log(`MenuListItem: clicked ` + item.displayName);
  }
}
