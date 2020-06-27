export class Constants {
    public static readonly  UrlLogin:string                 = "Login";
    public static readonly UrlAllUnits:string               = "Alle_Anlagen";
    public static readonly UrlSingleUnit:string             = "Anlage";

    public static readonly UrlTableOutput:string            = 'Tabelle/Ertrag';
    public static readonly UrlTableStatus:string            = 'Tabelle/Status';
    public static readonly UrlDiagramOutput:string          = 'Diagramm/Ertrag';
    public static readonly UrlDiagramStatus:string          = 'Diagramm/Status';

    public static readonly UrlProperties:string             = "Einstellungen";
    public static readonly UrlHelp:string                   = "Hilfe";


    public static readonly UrlAllUnitsTableOutput:string    = Constants.UrlAllUnits +'/' + Constants.UrlTableOutput;
    public static readonly UrlAllUnitsDiagramOutput:string  = Constants.UrlAllUnits +'/' + Constants.UrlDiagramOutput;
    public static readonly UrlAllUnitsTableStatus:string    = Constants.UrlAllUnits +'/' + Constants.UrlTableStatus;
    public static readonly UrlAllUnitsDiagramStatus:string  = Constants.UrlAllUnits +'/' + Constants.UrlDiagramStatus;


}
