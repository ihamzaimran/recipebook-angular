import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubs: Subscription;
  isAuthenticated = false;
  constructor(private  dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubs = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      // this.isAuthenticated = !!user // same as above
    });
  }

  onSave(): void {
    this.dataStorageService.storeRecipes();
  }

  onFetch(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}
