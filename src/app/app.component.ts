import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { astroAlbumPC, astroNonAlbumPC } from './../assets/records/astro-album-pc';
import { arohaPC, sgPC, astroadPC, aafPC, rorohaPC, magzPC, othersPC} from './../assets/records/astro-non-album-pc';
import { HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public template = 'Rocky album photocards';
  public tabSelected = 0;
  showToDo = false;
  showNote = false;
  update: string = '';
  note: string = '';
  intro: string = '';
  photoSections: any[] = [];
  hasNoPhotoMap: Record<string, boolean> = {};
  tabLoadCount: Record<number, number> = {};

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

  constructor(private http: HttpClient) {}

  @ViewChild('stickyDiv', { static: true }) stickyDiv!: ElementRef;
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.stickyDiv.nativeElement.contains(event.target)) {
      this.showNote = false;
      this.showToDo = false;
    }
  }

  ngOnInit() {
    this.loadNotice();
    this.loadPhotoSections();
  }

  public loadNotice(){
    this.http.get<any>('assets/records/notice.json').subscribe(data => {
      this.update = data.update;
      this.note = data.note;
      this.intro = data.intro;
    });
  }
  loadPhotoSections() {
    this.http.get<any[]>('assets/records/master.json').subscribe(config => {
      this.photoSections = config;
      this.photoSections.forEach(section => {
        if (section.type === 'rocky') {
          this.hasNoPhotoMap[section.dataProp] = !!section.hasNoPhoto;
        } else if (section.type === 'astro') {
          section.subSections.forEach((sub: any)=> {
            this.hasNoPhotoMap[sub.dataProp] = false;
          });
        }
      });
    });
  }

  loadPhotoGroup(data_: any[], dataProp: any) {
    data_.forEach((group, gi) => {
      for (let i = 0; i < group.total; i++) {
        const photo = {
          caption: group.caption,
          filename: group.nophoto ? undefined : `${gi}-${i}.jpg`
        };
        (this as any)[dataProp].push(photo);
      }
    });
  }

  public loadCaption(section: any){
    this.http.get<any[]>(`assets/records/${section.folder}.json`).subscribe((data) => {
      this.loadPhotoGroup(data, section.dataProp)
    });
  }

  onTabChange(index: number) {
    this.tabSelected = index;
    const section = this.photoSections.find(s => s.tabIndex === index);
    if (!section) return;

    this.template = section.name;
    this.tabLoadCount[index] = (this.tabLoadCount[index] || 0) + 1;
    if (this.tabLoadCount[index] > 1) return;

    if (section.type === 'rocky') {
      this.loadCaption(section);
    } else if (section.type === 'astro') {
      section.subSections.forEach((sub: any) =>
        this.loadPhotoGroup((this as any)[sub.folderRecords], sub.dataProp)
      );
    }
  }

  public captureAndDownload() {
    const element = document.getElementById("rocky-photocards");
    const select = element?.querySelector('mat-form-field');
    const loader = document.getElementById("loader");

    if (!element) {
      alert('Capture area not found!');
      return;
    }

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

      if (loader) loader.style.display = 'none';

    }).catch((err: any) => {
      console.error('Error capturing:', err);
      if (loader) loader.style.display = 'none';
    });
  }

  onChangeDislay(selected: string[]) {
    this.selectedAstroPC = selected;
  }

  refresh(){
    setTimeout(() => this.forceReloadImages(), 100);
  }

  forceReloadImages() {
    const tabContent = document.querySelectorAll('.mat-tab-body-active img');
    tabContent.forEach((el) => {
      const img = el as HTMLImageElement; // Cast to HTMLImageElement
      const src = img.getAttribute('src');
      if (src) {
        const baseSrc = src.split('?')[0]; // Remove any existing query string
        img.src = `${baseSrc}?t=${new Date().getTime()}`;
      }
    });
  }

  getPhotoArray(prop: string) {
    return (this as any)[prop] || [];
  }
}