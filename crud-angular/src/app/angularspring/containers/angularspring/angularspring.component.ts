import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { AngspringsService } from '../../services/angsprings.service';
import { Angspring } from '../../model/angspring';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angularspring',
  templateUrl: './angularspring.component.html',
  styleUrls: ['./angularspring.component.scss']
})
export class AngularspringComponent implements OnInit {

  angsprings$: Observable<Angspring[]>;
 // angsprings: Angspring[]=[];



  //angspringsService :  AngspringsService;

  constructor(
    private angspringsService :  AngspringsService,
    public dialog: MatDialog,
    private router: Router,
    private route:ActivatedRoute
    ) {
    //this.angspringsService = new AngspringsService(); //this.angsprings=[];

    this.angsprings$ = this.angspringsService.list()
    .pipe(
      catchError(error => {
        this.onError('Error to load curs.');
       return of([]);
      })
    );

    // this.angspringsService.list().subscribe( angsprings => this.angsprings = angsprings);
}

 onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}

  onAdd(){

    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
