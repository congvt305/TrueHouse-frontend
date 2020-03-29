import { IOrder } from '../../interface/i-order';
import { OrderService } from '../../service/order.service';
import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selected: { start: Date, end: Date };
  formCreateOrder;
  @Input() house_id: string;
  checkin: number ;
  model: IOrder;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService
    ) { }

  ngOnInit(): void {
    this.formCreateOrder = this.fb.group({
      customer_name: ["", [Validators.required]],
      customer_phone: ["", [Validators.required]],
      house_id: [this.house_id],
      user_id: [sessionStorage.getItem("token")],
      date: ["", [Validators.required]]
    });
  }

  onSubmit(data) {
    this.model = data;
    this.model['checkin'] = data.date.start.format();
    this.model['checkout'] = data.date.end.format();
    this.model['totalPrice'] = '100000';

    this.orderService.create(this.model).subscribe((result: any) => {
      this.router.navigate(["/"]);
    });

    this.checkin = data.date.start.format();
    console.log(this.checkin);    
  }
}
