import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card: Card
  @Input() index: number

  title: string = 'Card title'
  text: string = 'lorem'

  cardDate: Date = new Date()

  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png'

  disabled: boolean = false

  textColor: string

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://vuejs.org/images/logo.png',
      this.disabled = true
    }, 2000)
  }

  changeTitle() {
    this.card.title = 'Title has been changed'
  }
  
  inputHandler(value: string) {
    this.title = value
  }

  changehandler() {
    console.log(this.title);
    
  }

  getInfo(): string {
    return 'Info'
  }
}