/**
 * https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet
 * 
 * NOTES:
 *   It is necessary to include Leaflet  styles and assets in "angular.json":
 *     - Leaflet assets in "assets" secction
 *     - Leaflet styles in "styles" section
 */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators} from '@angular/forms';
import { translate } from '@angular/localize/src/translate';
import { AppComponent } from 'src/app/app.component';
import * as L from 'leaflet';


// Must include Leaflet assets and styles in "angular.json"
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, AfterViewInit {
  constructor(private fb:FormBuilder, public appComponent:AppComponent) {
    this.langs = appComponent.langs
   }
  private map;
  private itAcademyMarker = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [41.4025497, 2.1945471]
    },
    "properties": {
      "name": "IT Academy"
    }
  }
  FormNotLogged: FormGroup = new FormGroup({
    Sender: new FormControl('', [Validators.required, Validators.minLength(2)]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    Message: new FormControl('',[Validators.required, Validators.maxLength(500)]),
    SubscribeNewsLetter: new FormControl(false),
    Terms: new FormControl(false,[Validators.required, Validators.requiredTrue])
  })
  langs:string[]=[]
get Sender(){return this.FormNotLogged.get('Sender')}
get Email(){return this.FormNotLogged.get('Email')}
get Message(){return this.FormNotLogged.get('Message')}
get Terms(){return this.FormNotLogged.get('Terms')}
  

  ngOnInit(): void {
  }

  
  isValidInput(data:string):boolean{
    const input:any = this.FormNotLogged.get(data)
    return input.touched && input.invalid
  }
  onSubmit(e:Event, formdata:any):void{
    if(this.FormNotLogged.valid){
      console.log(formdata)
    }
  }
  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang)
  }
  ngAfterViewInit(): void {
    this.initMap();
    this.addMarker(this.map, this.itAcademyMarker);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.itAcademyMarker.geometry.coordinates,
      zoom: 15
    });

    // Must include Leaflet assets and styles in "angular.json"
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
    tiles.addTo(this.map);
  }

  private addMarker(map: L.map, geoJSON: any): void {
    const lat = geoJSON.geometry.coordinates[0];
    const lon = geoJSON.geometry.coordinates[1];
    console.log('lat', lat);
    console.log('lon', lon);
    const marker = L.marker([lat, lon], iconDefault).addTo(map);
    console.log('Marker added!!!');
  }
}
