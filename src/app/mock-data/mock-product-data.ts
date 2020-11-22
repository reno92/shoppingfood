import { Product } from '../service/product';

export class MockData {

    public static products: Product[] = [
        {
            'id': 1,
            'roomId': 1,
            'name': 'Beurre',
            'quantity': 1,
            'imageUrl' : 'https://www.president.fr/wp-content/uploads/2020/01/plaquette-gastronomique-president-doux-1-540x540.jpg'
        },
        {
            'id': 2,
            'roomId': 1,
            'name': 'Sel',
            'quantity': 0,
            'imageUrl' : 'https://www.rcinet.ca/fr/wp-content/uploads/sites/2/2018/10/sel-saliere.jpg'
        },
        {
            'id': 3,
            'roomId': 1,
            'name': 'Oeuf',
            'quantity': 4,
            'imageUrl' : 'https://www.framboizeinthekitchen.com/wp-content/uploads/2018/04/oeufs.jpg'
        },
        {
            'id': 4,
            'roomId': 1,
            'name': 'Lait',
            'quantity': 0,
            'imageUrl' : 'http://leblogdulait.fr/wp-content/uploads/2015/06/bouteils-de-lait-274x300.jpg'
         },
         {
          'id': 5,
          'roomId': 2,
          'name': 'Savon',
          'quantity': 1,
          'imageUrl' : 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw970d66f8/images/hi-res/SKU/SKU_3/309202_swatch.jpg'
       }
    ];

}

