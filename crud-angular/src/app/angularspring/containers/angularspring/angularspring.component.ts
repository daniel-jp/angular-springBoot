import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { AngspringsService } from '../../services/angsprings.service';
import { Angspring } from '../../model/angspring';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-angularspring',
  templateUrl: './angularspring.component.html',
  styleUrls: ['./angularspring.component.scss']
})
export class AngularspringComponent implements OnInit {
  angsprings$: Observable<Angspring[]> | null = null;
   // angsprings: Angspring[]=[];
  //angspringsService :  AngspringsService;

  constructor(
    private angspringsService :  AngspringsService,
    public dialog: MatDialog,
    private router: Router,
    private route:ActivatedRoute,
    private snackBar: MatSnackBar
    ) {
      this.refresh();
    }

refresh() {
  this.angsprings$ = this.angspringsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
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

  onEdit(angspring: Angspring) {
    this.router.navigate(['edit', angspring._id], { relativeTo: this.route });
  }

  onRemove(angspring: Angspring) {
    this.angspringsService.remove(angspring._id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Curs removed successfull!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      () => this.onError('Erro to remove curs.')
    );
  }

}
