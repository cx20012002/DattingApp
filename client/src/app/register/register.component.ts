import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../_services/account.service";
import {User} from "../_models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();
  model: any = {};

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe((response: User) => {
      console.log(response)
      this.cancel();
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
