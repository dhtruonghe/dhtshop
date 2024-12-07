import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customers } from '../../common/customers';

@Component({
  selector: 'app-customers-list',
  standalone: false,
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {
  Customers: Customers[] = [];
  constructor(private CustomersService: CustomersService) { }
  ngOnInit(): void {
    this.listCustomers();
  }
  listCustomers() {
    this.CustomersService.getCustomersList().subscribe(
      data => {
        this.Customers = data;
      }
    )
  }
}
