import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rocky template photocards';
  update = '250727';

  albumPC = [
    { caption: 'ROCKYST: Classic Ver', total: 9 },
    { caption: 'ROCKYST: Modern Ver', total: 9 },
    { caption: 'ROCKYST: Platform Ver - random', total: 9 },
    { caption: 'ROCKYST: Platform Ver - set', total: 8 },
    { caption: 'ROCKYST: Platform Ver- qr', total: 1 },
    { caption: 'BLANK: Burgundy Ver', total: 6 },
    { caption: 'BLANK: White Ver', total: 6 },

  ];

  nonAlbumPC = [
    { caption: 'Broke Rookie Star', total: 1 },
    { caption: 'ROCKYST - Trading Card 231203', total: 10 },
    { caption: 'ROCKYST - Live Streaming', total: 3 },
    { caption: 'Ittabook Vol.11 - Sweet ver', total: 2 },
    { caption: 'Ittabook Vol.11 - Love ver', total: 2 },   
    { caption: 'Ittabook Vol.11 - Moment ver', total: 1 },
    { caption: 'ROCKYST - Live streaming Replay Pt1', total: 3 },
    { caption: 'ROCKYST - Live streaming Replay Pt2', total:  3 },
    { caption: 'ROCKYST : Trading Card 240112', total: 10 },
    { caption: 'ROCKYST : Purchased >6k yen 240112', total: 5},
    { caption: 'FIND ME - Taipei', total: 6},
    { caption: 'FIND ME - Macau', total: 6},
    { caption: 'Immortal Song King of King', total: 3 },
    { caption: 'Dance With Rocky - Chile', total: 2 },
    { caption: 'Dance With Rocky - Colombia', total: 2 },
    { caption: 'Dance With Rocky - Brazil', total: 2 },
    { caption: 'Dance With Rocky - Mexico', total: 2 },
    { caption: '[MASTERP1ECE] Trading Card', total: 10 },
    { caption: '[MASTERP1ECE] HAMO ZONE', total: 2 },
    { caption: 'JFC HAMO Kit', total: 2 },
    { caption: 'Stargraphy 250607 VIP', total: 2 },
    { caption: 'Stargraphy 250607 Fanclub', total: 1 },
    { caption: 'Stargraphy 250607 Scratch Coupon Winner', total: 1 },
    { caption: 'Stargraphy 250608 VIP', total: 2 },
    { caption: 'Stargraphy 250608 Fanclub', total: 1 },
    { caption: 'Stargraphy 250608 Scratch Coupon Winner', total: 1 },
    { caption: 'Stargraphy: Live Streaming Korea', total: 1},
    { caption: 'Stargraphy - Japan 250628', total: 2 },
    { caption: 'Stargraphy - Japan 250629', total: 2 },
    { caption: 'Stargraphy: Trading Card', total: 5 },
    { caption: 'Stargraphy: Purchased >50k won Offline', total: 1 },
    { caption: 'Stargraphy: Purchased >50k won Online', total: 1 },
    { caption: 'Stargraphy - Japan MD : Tin Case', total: 1 },
    { caption: 'Stargraphy - Japan MD : Photopack', total: 2 },
    { caption: 'Stargraphy - Exhibition : MD', total: 3 },
    { caption: 'Stargraphy - Exhibition : Purchased >70k won', total: 1 },
    { caption: 'K-POP ANDEAN FS Colombia', total: 1},
    { caption: 'Read You Feel You - Bangkok Pt1', total: 2 },
    { caption: 'Read You Feel You - Bangkok Pt2', total: 2 },
    { caption: 'Read You Feel You - Bangkok : MD Keyring', total: 1 },
    { caption: 'Read You Feel You - Bangkok : MD Instant PC', total: 3 },
    { caption: 'Read You Feel You - Bangkok : MD Backstage Pt1', total: 5 },
    { caption: 'Read You Feel You - Bangkok : MD Backstage Pt2', total: 5 },
    { caption: 'Read You Feel You - Bangkok : MD purchased > 50k won', total: 3 },
    { caption: 'Read You Feel You - Singpaore Pt1', total: 2 },
    { caption: 'Read You Feel You - Singpaore Pt2', total: 2 },
    { caption: 'Read You Feel You - Taipei Pt1', total: 2 },
    { caption: 'Read You Feel You - Taipei Pt2', total: 2 },
    { caption: 'Read You Feel You - Taipei Fansign', total: 3 },
    { caption: 'Read You Feel You - Taipei Fansign Winner', total: 1 },
    { caption: 'Fill In The Blank Manila', total: 2 },

  ];

  albumPC_: { caption: string, filename: string }[] = [];
  nonAlbumPC_: { caption: string, filename: string }[] = [];

  ngOnInit() {

    this.getPhotoGroup(this.albumPC, 'albumPC')
    this.getPhotoGroup(this.nonAlbumPC, 'nonAlbumPC')

  }

  public getPhotoGroup(data_: any, type: string){
    data_.forEach((group:any, groupIndex:number) => {
      for (let i = 0; i < group.total; i++) {
        if(type === 'albumPC'){
          this.albumPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'nonAlbumPC'){
          this.nonAlbumPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }
        
      }
    });
  }
}