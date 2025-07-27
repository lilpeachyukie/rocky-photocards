import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rocky Photocards';
  update = '250727';
  public template = 'Rocky album photocards';

  albumPC = [
    { caption: 'ROCKYST: Classic', total: 9 },
    { caption: 'ROCKYST: Modern', total: 9 },
    { caption: 'ROCKYST: Platform - random', total: 9 },
    { caption: 'ROCKYST: Platform - set', total: 8 },
    { caption: 'ROCKYST: Platform - qr', total: 1 },
    { caption: 'BLANK: Burgundy', total: 6 },
    { caption: 'BLANK: White', total: 6 },

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
    { caption: 'Stargraphy - Japan MD : Photopack', total: 1 },
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
    { caption: 'Read You Feel You - Taipei FS', total: 3 },
    { caption: 'Read You Feel You - Taipei FS Winner', total: 1 },
    { caption: 'Fill In The Blank Manila', total: 2 },

  ];

  rockystEvent = [
    { caption: 'FLNK/Rocky Website - POB', total: 6 }, 
    { caption: 'FLNK - FS Korea', total: 3 },
    { caption: 'FLNK - VC Global', total: 3 },
    { caption: 'FLNK - VC Japan', total: 3 },
    { caption: 'KTown4U - POB', total: 3 },
    { caption: 'Dear My Muse - POB', total: 3 },
    { caption: 'Dear My Muse - FS', total: 3 },
    { caption: 'Everline - FS', total: 3 },
    { caption: 'Everline - VC', total: 3 },
    { caption: 'Apple Music - Sp. Event', total: 6 },
    { caption: 'Apple Music - FS 1', total: 3 },
    { caption: 'Apple Music - VC 1', total: 3 },
    { caption: 'Apple Music - FS 2', total: 3 },
    { caption: 'Apple Music - VC 2', total: 3 },
    { caption: 'Apple Music - FS 3', total: 3 },
    { caption: 'Apple Music - VC 3', total: 3 },
    { caption: 'Apple Music - Showcase', total: 1 },
    { caption: 'Withmuu - Showcase', total: 1 },
    { caption: 'Everline - POB', total: 2 },
    { caption: 'Tower Records Shibuya', total: 2 },
  ]

  blankEvent = [
    { caption: 'YES24 - POB', total: 4 }, 
    { caption: 'Tower Record Shibuya', total: 3 },
    { caption: 'Aladin - POB', total: 4 },
    { caption: 'Hottracks - POB', total: 4 },
    { caption: 'KTown4U - POB', total: 4 },
    { caption: 'Ktown4u - FS/VC', total: 4 },
    { caption: 'Soundwave - FS', total: 3 },
    { caption: 'Soundwave - VC ', total: 3 },
    { caption: 'Apple Music POB', total: 4 },
    { caption: 'Apple Music - VC ', total: 4 },
    { caption: 'Apple Music - FS Encore', total: 3 },
    { caption: 'Apple Music - VC Encore', total: 3 },
    { caption: 'Counting Star - VC', total: 3 },
    { caption: 'MusicArt - VC', total: 3 },
    { caption: 'MusicArt - VC 2', total: 3 },
    { caption: 'MMT - FS', total: 4 },
    { caption: 'MMT - VC', total: 4 },
    { caption: 'Joeun Music - FS', total: 3 },
    { caption: 'Joeun Music - VC', total: 3 },
    { caption: 'JJMuse - FS', total: 3 },
    { caption: 'JJMuse - VC', total: 3 },
    { caption: 'JJMuse - VC Encore', total: 3 },
    { caption: 'Danal Ent Music - VC Encore', total: 3 },
    { caption: 'Rising Star - VC', total: 3 },
    { caption: 'Jump Up - FS', total: 3 },
    { caption: 'Jump Up - VC', total: 3 },
    { caption: 'DMM - FS', total: 3 },
    { caption: 'DMM - VC', total: 3 },
    { caption: 'DMM - FS Encore', total: 3 },
    { caption: 'DMM - VC Encore', total: 3 },
    { caption: 'Makestar - FS', total: 3 },
    { caption: 'Makestar - VC', total: 3 },
    { caption: 'Makestar - FS Encore', total: 3 },
    { caption: 'Makestar - VC Encore', total: 3 },
    { caption: 'Music & Drama - VC Encore', total: 4 },
    { caption: 'Beatroad - FS Encore', total: 3 },
    { caption: 'Beatroad - VC Encore', total: 3 },
    { caption: 'FLNK - FS Encore', total: 3 },
    { caption: 'FLNK - VC Encore', total: 3 },
    { caption: 'Everline - FS', total: 3 },
    { caption: 'Everline - VC', total: 3 },
    { caption: 'Everline - FS Encore', total: 3 },
    { caption: 'Everline - VC Encore', total: 3 },
    { caption: 'Japan mini event', total: 6 },

  ]

  albumPC_: { caption: string, filename: string }[] = [];
  nonAlbumPC_: { caption: string, filename: string }[] = [];
  rockystEvent_: { caption: string, filename: string }[] = [];
  blankEvent_: { caption: string, filename: string }[] = [];

  ngOnInit() {

    this.getPhotoGroup(this.albumPC, 'albumPC')
    this.getPhotoGroup(this.nonAlbumPC, 'nonAlbumPC')
    this.getPhotoGroup(this.rockystEvent, 'rockystEvent')
    this.getPhotoGroup(this.blankEvent, 'blankEvent')

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
        }else if(type === 'rockystEvent'){
          this.rockystEvent_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'blankEvent'){
          this.blankEvent_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }
        
      }
    });
  }

  public captureAndDownload() {
    const element = document.getElementById("rocky-photocards");
    if (!element) {
      alert('Capture area not found!');
      return;
    }
    html2canvas(element).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');

      // Create a link and trigger download
      const link = document.createElement('a');
      link.href = imgData;
      link.download = this.template;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((err:any) => {
      console.error('Error capturing:', err);
    });
  }

  public onTabChange(index: number){
    switch (index) {
      case 0:
        this.template = 'Rocky album photocards'
        break;
      case 1:
        this.template = 'Rocky non-album photocards';
        break;
      case 2:
        this.template = 'Rockyst event photocards';
        break;
      case 3:
        this.template = 'Blank event photocards';
        break;
      default:
        this.template = 'Rocky album photocards';

    }
  }
}