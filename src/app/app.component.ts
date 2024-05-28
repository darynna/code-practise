import { Component } from '@angular/core';
import { WishItem } from '../shared/modules/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular', false),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself', true)
  ];
  title = 'code-practise';

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
