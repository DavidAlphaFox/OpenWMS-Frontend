import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public backToTable() {
    this.router.navigateByUrl('/workspace/basic-data/staff-table/page/1');
  }
}
