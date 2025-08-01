import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { albumPC } from './../assets/records/album-pc';
import { nonAlbumPC } from './../assets/records/non-album-pc';
import { rockystPC } from './../assets/records/rockyst-pc';
import { blankPC } from './../assets/records/blank-pc';
import { astroAlbumPC, astroNonAlbumPC } from './../assets/records/astro-album-pc';
import { arohaPC, sgPC, astroadPC, aafPC, rorohaPC, magzPC, othersPC} from './../assets/records/astro-non-album-pc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  update = '250801';
  public template = 'Rocky album photocards';

  private albumPC = albumPC
  private nonAlbumPC = nonAlbumPC
  private rockystPC = rockystPC
  private blankPC = blankPC
  private astroAlbumPC = astroAlbumPC
  private astroNonAlbumPC = astroNonAlbumPC
  private arohaPC = arohaPC
  private sgPC = sgPC
  private astroadPC = astroadPC
  private aafPC = aafPC 
  private rorohaPC = rorohaPC
  private magzPC = magzPC
  private othersPC = othersPC

  albumPC_: { caption: string, filename: string }[] = [];
  nonAlbumPC_: { caption: string, filename: string, nophoto: boolean }[] = [];
  rockystPC_: { caption: string, filename: string }[] = [];
  blankPC_: { caption: string, filename: string }[] = [];
  astroAlbumPC_: { caption: string, filename: string }[] = [];
  astroNonAlbumPC_: { caption: string, filename: string }[] = [];
  arohaPC_: { caption: string, filename: string }[] = [];
  sgPC_: { caption: string, filename: string }[] = [];
  astroadPC_ : { caption: string, filename: string }[] = [];
  aafPC_: { caption: string, filename: string }[] = []; 
  rorohaPC_: { caption: string, filename: string }[] = [];
  magzPC_: { caption: string, filename: string }[] = [];
  othersPC_: { caption: string, filename: string }[] = [];

  astroPC = [
    { name: 'Album' , val:'showAstroAlbumPC'}, 
    { name: 'Non-Album' , val:'showNonAstroAlbumPC'}, 
    { name: 'AROHA Gen Kit' , val:'showArohaPC'},
    { name: 'Seasong Greetings' , val:'showSGPC'}, 
    { name: 'ASTROAD' , val:'showAstroadPC'}, 
    { name: 'Astro Aroha Festival' , val:'showAAFPC'}, 
    { name: 'Roroha' , val:'showRorohaPC'}, 
    { name: 'Magazine PB' , val:'showMagPC'}, 
    { name: 'Others' , val:'showOthersPC'}
  ]; 

  selectedAstroPC: string[] = [
    'showAstroAlbumPC', 'showNonAstroAlbumPC', 'showArohaPC', 'showSGPC', 'showAstroadPC', 'showAAFPC', 'showRorohaPC', 'showMagPC', 'showOthersPC'
  ]
  ngOnInit() {
    this.loadPhotoGroup(this.albumPC, 'albumPC')
    this.loadPhotoGroup(this.nonAlbumPC, 'nonAlbumPC')
    this.loadPhotoGroup(this.rockystPC, 'rockystPC')
    this.loadPhotoGroup(this.blankPC, 'blankPC')
    this.loadPhotoGroup(this.astroAlbumPC, 'astroAlbumPC')
    this.loadPhotoGroup(this.astroNonAlbumPC, 'astroNonAlbumPC')
    this.loadPhotoGroup(this.arohaPC, 'arohaPC')
    this.loadPhotoGroup(this.sgPC, 'sgPC')
    this.loadPhotoGroup(this.astroadPC, 'astroadPC')
    this.loadPhotoGroup(this.aafPC, 'aafPC')
    this.loadPhotoGroup(this.rorohaPC, 'rorohaPC')
    this.loadPhotoGroup(this.magzPC, 'magzPC')
    this.loadPhotoGroup(this.othersPC, 'othersPC')
  }

  public loadPhotoGroup(data_: any, type: string){
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
            nophoto: group.nophoto ? true : false,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'rockystPC'){
          this.rockystPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'blankPC'){
          this.blankPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'astroAlbumPC'){
          this.astroAlbumPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'astroNonAlbumPC'){
          this.astroNonAlbumPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'arohaPC'){
          this.arohaPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'sgPC'){
          this.sgPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'astroadPC'){
          this.astroadPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'aafPC'){
          this.aafPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'rorohaPC'){
          this.rorohaPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'magzPC'){
          this.magzPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }else if(type === 'othersPC'){
          this.othersPC_.push({
            caption: group.caption,
            filename: `${groupIndex}-${i}.jpg`
          });
        }
      }
    });
  }

  public captureAndDownload() {
    const element = document.getElementById("rocky-photocards");
    const select = element?.querySelector('mat-form-field');
    const loader = document.getElementById("loader");

    if (!element) {
      alert('Capture area not found!');
      return;
    }

    // Show loader
    if (loader) loader.style.display = 'flex';

    if (select) (select as HTMLElement).style.display = 'none';

    html2canvas(element).then((canvas: any) => {
      if (select) (select as HTMLElement).style.display = '';

      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = this.template;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Hide loader
      if (loader) loader.style.display = 'none';

    }).catch((err: any) => {
      console.error('Error capturing:', err);

      // Hide loader in case of error
      if (loader) loader.style.display = 'none';
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
      case 4:
        this.template = 'ASTRO photocards';
        break;
      default:
        this.template = 'Rocky album photocards';
    }
  }

  onChangeDislay(selected: string[]) {
    this.selectedAstroPC = selected;

  }

  get showAstroAlbumPC(): boolean {
    return this.selectedAstroPC.includes('showAstroAlbumPC');
  }

  get showNonAstroAlbumPC(): boolean {
    return this.selectedAstroPC.includes('showNonAstroAlbumPC');
  }

  get showArohaPC(): boolean {
    return this.selectedAstroPC.includes('showArohaPC');
  }

  get showSGPC(): boolean {
    return this.selectedAstroPC.includes('showSGPC');
  }

  get showAstroadPC(): boolean {
    return this.selectedAstroPC.includes('showAstroadPC');
  }

  get showAAFPC(): boolean {
    return this.selectedAstroPC.includes('showAAFPC');
  }

  get showRorohaPC(): boolean {
    return this.selectedAstroPC.includes('showRorohaPC');
  }

  get showMagPC(): boolean {
    return this.selectedAstroPC.includes('showMagPC');
  }

  get showOthersPC(): boolean {
    return this.selectedAstroPC.includes('showOthersPC');
  }
}