import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayNavbar!: string;
  control = new FormControl();
  streets: string[] = [
    'Champs-Élysées',
    'Lombard Street',
    'Abbey Road',
    'Fifth Avenue',
  ];
  filteredStreets!: Observable<string[]>;
  constructor() {}

  ngOnInit(): void {
    this.displayNavbar = '1';
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter((street) =>
      this._normalizeValue(street).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  toggleNavbar() {
    if (this.displayNavbar == '0') {
      this.displayNavbar = '1';
      //  alert(this.displayNavbar);
    }
    if (this.displayNavbar == '1') {
      //    alert("1 - Changing to 0");
      this.displayNavbar = '0';
    } else {
      this.displayNavbar = '1';
    }
  }
}
