import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { astroAlbumPC, astroNonAlbumPC } from './../assets/records/astro-album-pc';
import { arohaPC, sgPC, astroadPC, aafPC, rorohaPC, magzPC, othersPC} from './../assets/records/astro-non-album-pc';
import { HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('filterSidenav') filterSidenav: any;

  public template = 'Rocky album photocards';
  public activeTab = 0;
  public activeButton = 'home'
  showToDo = false;
  showNote = false;
  update: string = '';
  note: string = '';
  intro: string = '';
  photoSections: any[] = [];
  hasNoPhotoMap: Record<string, boolean> = {};
  tabLoadCount: Record<number, number> = {};
  categories: string[] = [];
  years: number[] = [];
  selectedYear: number[] = [];
  selectedCategory: string[] = [];
  nonAlbumFiltered: any[] = [];
  excludePhoto = false;
  
  //dont remove dont comment
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

  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) {}

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
    this.loadDropdownOptions();
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
      this.route.queryParams.subscribe(params => {
        const pc = params['pc'];
        if(pc){
          this.activeTab = this.photoSections.findIndex(s => s.tabKey === pc);
          this.onTabChange(this.activeTab === -1 ? 0 : this.activeTab);
        }
      }); 
    });
  }
  public loadDropdownOptions(){
    this.http.get<any>('assets/records/dropdown-options.json').subscribe(data => {
      this.categories = data.categories;
      this.years = data.years
    });

    this.nonAlbumFiltered = (this as any)["nonAlbumPC_"]
  }

  loadPhotoGroup(data_: any[], dataProp: any) {
    data_.forEach((group, gi) => {
      for (let i = 0; i < group.total; i++) {
        const photo = {
          ...group,
          filename: group.nophoto ? undefined : `${gi}-${i}.jpg`,
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

    this.activeTab = index;

    const section = this.photoSections.find(s => s.tabIndex === index);
    if (!section) return;

    this.template = section.name;

    // ✅ Load photos only once
    if (!this.tabLoadCount[index]) {
      this.tabLoadCount[index] = 1;

      if (section.type === 'rocky') {
        this.loadCaption(section);
      } else if (section.type === 'astro') {
        section.subSections.forEach((sub: any) =>
          this.loadPhotoGroup(
            (this as any)[sub.folderRecords],
            sub.dataProp
          )
        );
      }
    }

    if (index !== 0 && this.filterSidenav) {
      this.filterSidenav.close();
    }

    this.router.navigate([], {
      queryParams: { pc: section.tabKey },
      queryParamsHandling: 'merge',
    });
  }


  public captureAndDownload() {
    const element = document.getElementById("rocky-photocards");
    const select = element?.querySelector('mat-form-field');
    const loader = document.getElementById("loader");
    const toggle = document.getElementById("toggle");

    if (!element) {
      alert('Capture area not found!');
      return;
    }

    if (loader) loader.style.display = 'flex';
    if (select) (select as HTMLElement).style.display = 'none';
    if (toggle) (toggle as HTMLElement).style.display = 'none';

    html2canvas(element, { scale: 3, useCORS: true, scrollY: 0 }).then((canvas: any) => {
      // ✅ Restore hidden elements and layout
      if (select) (select as HTMLElement).style.display = '';
      if (toggle) (toggle as HTMLElement).style.display = '';

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

  onImageError(event: Event, photo: any) {
    // Mark this photo as missing
    photo.missing = true;

    const img = event.target as HTMLImageElement;
    
    if (this.excludePhoto) {
      // Hide broken image
      img.style.display = 'none';
    } else {
      // Show fallback image
      img.src = 'assets/images/nophoto.png';
    }

    this.cdr.detectChanges();
}

  public want: { caption: string, path: string, album: string }[] = [];
  public customizeTemplate =  false;
  addWant(caption: string, photo: any, folder: string, album: string ){
    const path = `assets/images/${folder}/${photo}`;
    const index = this.want.findIndex(p => p.path === path);

    if (index > -1) {
      this.want.splice(index, 1);
    } else {
      this.want.push({ caption, path, album });
    }
  }

  getSelected(folder: string, filename:string)
  {
     return this.want.some(p => p.path === 'assets/images/' + folder + '/' + filename)
  }

  viewWant(){
    this.appService.setData(this.want);
    this.customizeTemplate = true;
    this.template = 'Rocky-photocards'
    this.activeButton = 'viewWant';
  }

  home() {
    this.customizeTemplate = false;
    this.activeButton = 'home';
  }

  getFilteredPhotos() {
    const temp = (this as any)["nonAlbumPC_"]
    this.nonAlbumFiltered = (this as any)["nonAlbumPC_"]
    const filtered = temp.filter((photo: any) => {
      const matchYear =
        !this.selectedYear || this.selectedYear.length === 0 ||
        this.selectedYear.includes(photo.year);

      const matchCategory =
        !this.selectedCategory || this.selectedCategory.length === 0 ||
         this.selectedCategory.includes(photo.category);

      return matchYear && matchCategory;
    });

    this.nonAlbumFiltered = [...filtered];
  }
}

@Component({
  selector: 'app-customize-template',
  templateUrl: './customize-template.html',
  styleUrls: ['./app.component.css']
})
export class CustomizeTemplate {

  public photos: any;


  constructor(private appService: AppService) {}
  ngOnInit() {
    this.photos = this.appService.getData();
  }

  remove(i: number){
    this.photos.splice(i, 1);
  }

}