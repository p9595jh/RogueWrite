import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ComponentCanDeactivate } from './component-can-deactivate';

@Injectable()
export class DeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {
    if( !component.canDeactivate() ) return confirm('나가시겠습니까?');
    return true;
  }
}
