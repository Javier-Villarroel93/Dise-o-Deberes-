import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'Play Station 5 Portatil', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.ytimg.com/vi_webp/SQ4sV9LILJY/maxresdefault.webp'
    },
    { 
      name: 'Play 4 Slim', 
      price: 999, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://www.artefacta.com/media/catalog/product/1/3/138875-1_estkifrdkjwbcia9.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1040&width=1040&canvas=1040:1040'
    },
    { 
      name: 'Play 5', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.computron.com.ec/wp-content/uploads/2023/08/CFI-1215A-652-600x600.jpg'
    },
    { 
      name: 'Play 2', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://phantom-marca.unidadeditorial.es/9862718e3980f41729ef11ba81301459/crop/0x0/988x556/f/webp/assets/multimedia/imagenes/2021/03/04/16148648628020.jpg'
    },
    { 
      name: 'Play 3', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://http2.mlstatic.com/D_800486-MLA80819337660_122024-O.jpg'
    },
    { 
      name: 'PSP', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/PlayStation_Vita_illustration.svg/1200px-PlayStation_Vita_illustration.svg.png'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
