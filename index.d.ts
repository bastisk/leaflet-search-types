/// <reference types="Leaflet" />

declare namespace L {
    namespace Control {
        export interface SearchConstuctorOptions {
            url?: string;
            layer?: LayerGroup;
            sourceData?: string;
            jsonpParam?: string;
            propertyLoc?: [string];
            propertyName?: string;
            formatData?: any;
            filterData?: any;
            moveToLocation?: any;
            buildTip?: any;
            container?: string;
            zoom?: number;
            minLength?: number;
            initial?: boolean;
            casesensitive?: boolean;
            autoType?: boolean;
            delayType?: number;
            tooltipLimit?: number;
            tipAutoSubmit?: boolean;
            firstTipSubmit?: boolean;
            autoResize?: boolean;
            collapsed?: true;
            autoCollapse?: boolean;
            autoCollapseTime?: number;
            textErr?: string;
            textCancel?: string;
            textPlaceholder?: string;
            position?: string;
            hideMarkerOnCollapse?: boolean;
            marker?: Search.Marker;
            
        }

        export interface setLayer{
            layers?: LayerGroup;
        }

        export interface showAlert{
            message?: string;
        }

        export interface searchText{
            text?: string;
        }

        namespace Search {
            export interface SearchMarkerConstructorOptions {
                icon?: Icon;
                animate?: boolean;
                circle?: Circle;
            }
            
            export class Marker {
                constructor(options?: SearchMarkerConstructorOptions);
            }
        }

        export interface Search extends Control {

        }

        export class Search {
            constructor(options?: SearchConstuctorOptions);
        }


    }
}