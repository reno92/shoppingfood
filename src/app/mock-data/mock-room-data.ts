import { Room } from './../service/room';

export class MockData {

    public static rooms: Room[] = [
        {
            'id': 1,
            'name': 'Cuisine',
            'imageUrl' : 'https://www.lapeyre.fr/img/contrib/3379f2b610005c1b/V.jpg'
        },
        {
            'id': 2,
            'name': 'Salle de Bain',
            'imageUrl' : 'https://www.tikamoon.com/library/img/loader.svg'
        },

        {
            'id': 3,
            'name': 'Toilettes',
            'imageUrl' : 'https://www.tikamoon.com/library/img/loader.svg'
        }
    ];

}


