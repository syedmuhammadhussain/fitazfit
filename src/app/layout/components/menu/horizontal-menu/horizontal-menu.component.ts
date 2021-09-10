import { AuthenticationService } from "app/auth/service";
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";
import { User } from "app/auth/models";

import { CoreConfigService } from "@core/services/config.service";
import { CoreMenuService } from "@core/components/core-menu/core-menu.service";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";

@Component({
  selector: "horizontal-menu",
  templateUrl: "./horizontal-menu.component.html",
  styleUrls: ["./horizontal-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HorizontalMenuComponent implements OnInit, OnDestroy {
  coreConfig: any;
  menu: any;

  // Private
  private _unsubscribeAll: Subject<any>;
  public currentUser: User;
  public userLoggedIn: boolean = false;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _coreMenuService: CoreMenuService,
    private _coreSidebarService: CoreSidebarService,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */
  ngOnInit(): void {
    this._authenticationService.loggedInUser.subscribe((res) => {
      if (res) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Subscribe config change
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });

    // Get current menu
    this._coreMenuService.onMenuChanged
      .pipe(
        filter((value) => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this.menu = this._coreMenuService.getCurrentMenu();
      });
  }

  redirect() {
    this._router.navigateByUrl("/pages/authentication/login-v2");
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
