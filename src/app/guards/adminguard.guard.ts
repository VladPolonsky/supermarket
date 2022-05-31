import { AdmincheckService } from './../services/admincheck.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  public isAdmin:Boolean
  constructor(public admincheckService:AdmincheckService,private router: Router) { }
  ngOnInit(){
    this.admincheckService.isAdmin.subscribe(val=>{
      this.isAdmin = val
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if ( this.admincheckService.getIsAdmin()=== true) {
      return true
      
    } else {
      alert( this.admincheckService.getIsAdmin() )
      this.router.navigate(['products'])
      return false
    }
  }
  
}
