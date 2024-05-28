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
  listFilter : String = '0';
  newWishText = '';
  title = 'code-practise';

  visibleItems: WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChange(value : any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1'){
      this.visibleItems = this.items.filter((item) => !item.isComplete)
    }else if (value === '2'){
      this.visibleItems = this.items.filter((item) => item.isComplete)
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
