
import { Constants } from '../constants';
import {NavItem} from '../nav-item';



export class MenuNavItems{

    public static navItems: NavItem[] = [
        {
          displayName: 'Alle Anlagen',
          iconName: 'business',
          route: Constants.UrlAllUnits,
          level: 0,
          children: [
            {
              displayName: 'Ertrag (Tabelle)',
              iconName: 'equalizer',
              route: Constants.UrlAllUnitsTableOutput,
              level: 1,
            },
            {
              displayName: 'Ertrag (Diagramme)',
              iconName: 'show_chart',
              route:  Constants.UrlAllUnitsDiagramOutput,
              level: 1,
            },
            {
              displayName: 'Status (Tabelle)',
              iconName: 'check',
              route: Constants.UrlAllUnitsTableStatus,
              level: 1,
            },
            {
              displayName: 'Status (Diagramme)',
              iconName: 'bar_chart',
              route:  Constants.UrlAllUnitsDiagramStatus,
              level: 1,
            }
          ]
        },
        {
          displayName: 'Worbis',
          iconName: 'gavel',
          route: Constants.UrlSingleUnit + '/Worbis',
          level: 0,
          children: [
            {
              displayName: 'Ertrag (Tabelle)',
              iconName: 'equalizer',
              route:  Constants.UrlSingleUnit + '/Worbis/' + Constants.UrlTableOutput,
              level: 1,
            },
            {
              displayName: 'Ertrag (Diagramme)',
              iconName: 'show_chart',
              route:  Constants.UrlSingleUnit + '/Worbis/' + Constants.UrlDiagramOutput,
              level: 1,
            },
            {
              displayName: 'Status (Tabelle)',
              iconName: 'check',
              route:  Constants.UrlSingleUnit + '/Worbis/' + Constants.UrlTableStatus,
              level: 1,
            },
            {
              displayName: 'Status (Diagramme)',
              iconName: 'bar_chart',
              route:  Constants.UrlSingleUnit + '/Worbis/' + Constants.UrlDiagramStatus,
              level: 1,
            }
          ]
        },
        {
            displayName: 'Duderstadt',
            iconName: 'enhanced_encryption',
            route: Constants.UrlSingleUnit + '/Duderstadt',
            level: 0,
            children: [
              {
                displayName: 'Ertrag (Tabelle)',
                iconName: 'equalizer',
                route:  Constants.UrlSingleUnit + '/Duderstadt/' + Constants.UrlTableOutput,
                level: 1,
              },
              {
                displayName: 'Ertrag (Diagramme)',
                iconName: 'show_chart',
                route:  Constants.UrlSingleUnit + '/Duderstadt/' + Constants.UrlDiagramOutput,
                level: 1,
              },
              {
                displayName: 'Status (Tabelle)',
                iconName: 'check',
                route:  Constants.UrlSingleUnit + '/Duderstadt/' + Constants.UrlTableStatus,
  	            level: 1,
              },
              {
                displayName: 'Status (Diagramme)',
                iconName: 'bar_chart',
                route:  Constants.UrlSingleUnit + '/Duderstadt/' + Constants.UrlDiagramStatus,
                level: 1,
              }
            ]
          },
          {
            displayName: 'Einstellungen',
            iconName: 'settings',
            route: Constants.UrlProperties,
            level: 0,
            // children: [
            //   {
            //     displayName: 'Ebene 1',
            //     iconName: 'star_rate',
            //     route: 'Einstellungen/Ebene1',
            //     level: 1,
            //   }
            // ]
      },
      {
        displayName: 'Hilfe',
        iconName: 'help_outline',
        route: Constants.UrlHelp,
        level: 0
      },
      ];
}
