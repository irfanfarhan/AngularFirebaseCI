import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  route: { parentRoute: any; childRoute: any; };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }


  ngOnInit() {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => {
    //     let child = this.activatedRoute.firstChild;
    //     this.route = {
    //       parentRoute: this.activatedRoute.firstChild.snapshot,
    //       childRoute: null
    //     };
    //     while (child) {
    //       if (child.firstChild) {
    //         child = child.firstChild;
    //       } else if (child.snapshot.data) {
    //         this.route.childRoute = child.snapshot.data;
    //         return this.route;
    //       } else {
    //         return null;
    //       }
    //     }
    //     return null;
    //   })
    // ).subscribe((routes: any) => {
    //   if (routes) {
    //     const parentRoute = routes.parentRoute.data;
    //     const queryParams = routes.parentRoute.queryParams;
    //     const childRoute = routes.childRoute;
    //     this.titleService.setTitle((parentRoute.title + ' | ' + childRoute.headerTitle));
    //     this.appendAQueryParam(queryParams);
    //   }
    // });
  }

  appendAQueryParam(queryParams: any) {
    const urlTree = this.router.createUrlTree([], {
      queryParams: {
        type: queryParams.type,
        returnAppId: queryParams.returnAppId,
        addressSequence: queryParams.addressSequence,
        partyId: queryParams.partyId,
        since: queryParams.since,
        userId: null,
        tokenId: null,
        returnUrl: null,
        cancelUrl: null
      },
      queryParamsHandling: 'merge',
      preserveFragment: true
    });
    this.router.navigateByUrl(urlTree);
  }
}
