import { Product } from '../service/product';

export class MockData {

    public static products: Product[] = [
        {
            'id': 1,
            'name': 'Beurre',
            'quantity': 1,
            'imageUrl' : 'https://www.rcinet.ca/fr/wp-content/uploads/sites/2/2018/10/sel-saliere.jpg'
        },
        {
            'id': 2,
            'name': 'Sel',
            'quantity': 0,
            'imageUrl' : 'https://www.rcinet.ca/fr/wp-content/uploads/sites/2/2018/10/sel-saliere.jpg'
        },
        {
            'id': 3,
            'name': 'Oeuf',
            'quantity': 4,
            'imageUrl' : 'https://www.rcinet.ca/fr/wp-content/uploads/sites/2/2018/10/sel-saliere.jpg'
        },
        {
            'id': 4,
            'name': 'Lait',
            'quantity': 0,
            'imageUrl' : 'https://www.rcinet.ca/fr/wp-content/uploads/sites/2/2018/10/sel-saliere.jpg'
         }
    ];

}

