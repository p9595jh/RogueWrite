import { HostListener } from "@angular/core";

export class ComponentCanDeactivate {
 
    canDeactivate(): boolean {
        return false;
    }

    @HostListener('window: beforeunload', ['$event'])
    unloadNotification($event: any) {
        if ( !this.canDeactivate() ) {
            $event.returnValue = true;
        }
    }
}
