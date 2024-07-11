export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  //increase quality(byN) > only increases/decreases if it's >=0 and <=50
  //decrease sellIn
  //case: Aged Brie
  //case: Backstage passes
  //case: Sulfuras


  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      /*switch() {

      case Sulfuras:
      Quality and SellIn stay the same
      break;

      case Backstage passes:
      sellIn -1
      (sellIn <= 5) Quality + 3
      (sellIn <= 10) Quality + 2
      (sellIn > 0) Quality + 1
      (sellIn === 0) Quality = 0
      break;

      case Aged Brie:
      Quality + 1
      SellIn -1
      break;

      case anything else:
      sellIn - 1
      Quality - 1
      (sellIn < 0) Quality -2

      */

      switch(this.items[i].name) {

        case 'Sulfuras, Hand of Ragnaros':
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          if (this.items[i].quality < 50) {
            switch (true) {
              case (this.items[i].sellIn <= 0):
                this.items[i].quality = 0
                break;
              case (this.items[i].sellIn <= 5):
                this.items[i].quality++
                break;
              case (this.items[i].sellIn <= 10):
                this.items[i].quality++
                break;
              case (this.items[i].sellIn > 0):
                this.items[i].quality++
                break;
            }
          }
          this.items[i].sellIn--;
          break;

        case 'Aged Brie':
          break;

        default:
          break;
      }
    
    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }

    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }

    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1
    //       }
    //     }
    //   }
    }

    return this.items;
  }
}
