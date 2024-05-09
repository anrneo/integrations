import { Component, EventEmitter, ViewChild, inject } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs'; 
import { FormControl } from '@angular/forms';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { Location } from '@angular/common';
import { IntegrationService } from '../_services/integration.service';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [SidenavComponent,
            MatSidenavModule,
            MatTabsModule,
            CommonModule,
            MatProgressSpinnerModule,
            MatTooltipModule,
            MatTableModule,
            MatMenuModule,
            MatCheckboxModule,
            MatIconModule,
            MatPaginatorModule
          ],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {

  @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav | undefined;
  integrationService: IntegrationService = inject(IntegrationService)

  isLoadingSpinner = false;
  isLoading = true;
  dataLength = 0;
  selectedTab = new FormControl(0);
  dataSource:any;
  displayedColumns: string[] = [
    'codigo',
    'estado',
    'nombre',
    'pais',
    'gerencia',
    'unidad_negocio',
    'certificacion',
    'actions'
  ];
  selectedApp = []
  currentApplicationId = '';
  certified = false;
  showSidenav = false;
  paises: any[] = [];
  unitsArray: any[] = [];
  status = [{id: 1, name: 'Activa'}, {id: 2, name: 'Inactivo'}]
  filterValue : object[] = [];
  appType = [
    { name: 'Todas', value: 'all' },
    { name: 'Certificadas', value: 'certificada' },
    { name: 'Pendientes', value: 'pendiente' },
    { name: 'Bloqueadas', value: 'bloqueada' },
    { name: 'Baja', value: 'baja' }
  ];
  filterActiveStatus = false;
  filterActiveCountry = false;
  filterStatus = false;

  filterEventEmitter = new EventEmitter<any>();
  searchEventEmitter = new EventEmitter<any>();

  constructor(
    private location: Location,
  ){}
  
  ngOnInit() {
    this.isLoading = false;
    this.integrationService.getGeneralInfo()
    
  }




  changeTab(index:any) {
    this.displayedColumns =  (index == 4) ?
        [
            'codigo',
            'estado',
            'nombre',
            'pais',
            'gerencia',
            'unidad_negocio'
        ] :
        [
            'codigo',
            'estado',
            'nombre',
            'pais',
            'gerencia',
            'unidad_negocio',
            'certificacion',
            'actions'
        ]; 
    
    this.filterValue = this.filterValue.filter(function(value, _index, arr) {
        return Object.keys(value)[0] !== 'type';
    });
    if (index != 0) {
        this.setFilters([true, { type: this.appType[index].value }]);
    }
    this.filterEventEmitter.emit();
  }

  
  setFilters(info:any) {
    const checked = info[0];
    const filterValue = info[1];

    if (checked) {
        this.filterValue.push(filterValue);
    } else {
        this.filterValue = this.filterValue.filter(function(value, index, arr) {
            return JSON.stringify(value) !== JSON.stringify(filterValue);
        });
    }
    const filtersKeysArray = this.filterValue.map((a) => Object.keys(a)[0]);

    this.filterActiveCountry = filtersKeysArray.includes('pais');
    this.filterActiveStatus = filtersKeysArray.includes('unidad_negocio');
    this.filterStatus = filtersKeysArray.includes('status');

  }

  download() {
    
  }

  search(e:any) {
    if (
        (e.which >= 65 && e.which <= 90) ||
        (e.which >= 48 && e.which <= 57) ||
        (e.which >= 96 && e.which <= 105) ||
        e.which === 8 ||
        e.which === 32 ||
        e.which === 46
    ) {
        // teclas alfanuméricas, espacio y delete
        this.searchEventEmitter.emit(e.target.value);
    }
  }

  toString(array:any) {
    return array.join(', ');
  }

  openSidenav(id:any, certified:any) {
    //this.selectedApp = this.data ? this.data.filter(x=>x.codigo==id) : []
    this.currentApplicationId = id;
    this.certified = certified;
    this.sidenav?.open();
    this.showSidenav = true;
    this.location.replaceState('/aplicaciones?id=' + id);
}


}
