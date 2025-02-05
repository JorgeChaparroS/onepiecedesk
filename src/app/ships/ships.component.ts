import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IShip } from '../interfaces/ship';
import { ShipService } from '../services/ship/ship.service';
import { ShipComponent } from '../ship/ship.component';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.less']
})
export class ShipsComponent {
  ships: IShip[] = [];
  cardsLength: number = 0;
  cardsPerPage: number = 6;
  currentPage: number = 1;
  headerTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private shipService: ShipService
  ) {}

  ngOnInit(): void {
    this.shipService.getShips().subscribe((ships: IShip[]) => {
      this.ships = ships;
      this.cardsLength = this.ships.length;
    });
    this.route.url.subscribe((url: any) => {
      this.headerTitle = url[0].path
        ? url[0].path.charAt(0).toUpperCase() + url[0].path.slice(1)
        : 'Ships';
    });
  }

  handleCurrPageChanged(newPage: number): void {
    this.currentPage = newPage;
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.cardsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.cardsPerPage;
  }

  openShipModal(ship: IShip): void {
    const modalRef = this.modalService.open(ShipComponent);
    modalRef.componentInstance.ship = ship;
  }
}
