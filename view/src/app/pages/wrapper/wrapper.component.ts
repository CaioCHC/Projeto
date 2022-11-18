import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public tituloPainel: string = '';
  public widthPainel: number = 100;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.configurarTela();
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.configurarTela();
    });
  }

  configurarTela() {
    this.tituloPainel = this.route.snapshot.firstChild?.data?.['tituloPainel'];
    this.widthPainel = this.route.snapshot.firstChild?.data?.['widthPainel'];
  }
}
