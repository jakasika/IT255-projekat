import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { User } from 'src/app/shared/services/user';
import { AdminAuthGuard } from 'src/app/shared/guard/admin-auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isUserAdmin: boolean;

  constructor(
    public authService: AuthService,
    public adminAuth: AdminAuthGuard,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

}
