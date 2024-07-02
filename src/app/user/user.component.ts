import { Component, signal, computed, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

let randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)


  
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUsers = signal(DUMMY_USERS[ randomIndex ])
  // @Input({required: true}) id !: string
  // @Input({required: true}) avatar!: string
  // @Input({ required: true }) name !: string
  @Input({required: true}) selected !: boolean
  @Input({ required: true }) user !: User;

  @Output() select = new EventEmitter()

  //  input using signal. This are read only values. cannot manipulate using set method
  // avatar = input.required<string>()
  // name = input.required<string>()

  // using signal
  // imagePath = () => 'assets/users/' + this.selectedUsers().avatar

  // using zone
  get imagePath() {
    return () => 'assets/users/' + this.user.avatar
  }

  onSelectUser(id: string) {
    this.select.emit(this.user.id)
  }
}
