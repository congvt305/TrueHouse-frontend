import { IOrder } from '../../interface/i-order';
import { OrderService } from '../../service/order.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selected: { start: Date, end: Date };
  formCreateOrder;
  @Input() houseId: number;
  @Input() userId: number;
  @Input() price: number;
  userName;
  userLogin = sessionStorage.getItem("token");
  checkin: number;
  model: IOrder;
  numberRoom: number = 2;

  ERROR_MESSAGE = {
    customer_name: [{ type: "required", message: "Name is required." }],
    customer_phone: [{ type: "required", message: "Phone type is required." }],
    date: [{ type: "required", message: "Date type is required." }],
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formCreateOrder = this.fb.group({
      customer_name: ["", [Validators.required]],
      customer_phone: ["", [Validators.required]],
      house_id: [this.houseId],
      user_id: [this.userLogin],
      date: ["", [Validators.required]],
      checkin: [],
      checkout: [],
      totalPrice: [],
    });

    this.userService.findById(this.userId).subscribe(result => {
      this.userName = result['data']['name'];
    })
  }

  onSubmit(data) {
    if (!this.userLogin) {
      alert('Bạn cần đăng nhập để đặt phòng');
    } else {
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
}
