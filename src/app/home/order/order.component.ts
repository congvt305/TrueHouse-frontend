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
  @Input() houseId: number;
  @Input() price: number;
  checkin: number ;
  model: IOrder;
  numberRoom: number = 2;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService
    ) { }

  ngOnInit(): void {
    this.formCreateOrder = this.fb.group({
      customer_name: ["", [Validators.required]],
      customer_phone: ["", [Validators.required]],
      house_id: [this.houseId],
      user_id: [sessionStorage.getItem("token")],
      date: ["", [Validators.required]],
      checkin: [],
      checkout: [],
      totalPrice: [],
    });
  }

  onSubmit(data) {
    this.model = data;
    const dateStart = data.date.start;
    const dateEnd = data.date.end;
    this.model.checkin = dateStart.format();    
    this.model.checkout = dateEnd.format();
    // const totalDateStart = (dateStart.format('Y') * 365) + (dateStart.format('M') * 30) + dateStart.format('D');
    // const totalDateEnd = (dateEnd.format('Y') * 365) + (dateEnd.format('M') * 30) + dateEnd.format('D');
    this.model.totalPrice = 10000; 
    this.orderService.create(this.model).subscribe((result: any) => {
      alert('Đặt phòng thành công!');      
      location.reload();
    });
  }
}
