import { getGifs } from '../../src/helpers/getGIfs';

describe('Pruebas al getGIfs()', () => {

    test('debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch');
        // console.log( gifs );
        //toBeGreaterThan - que sea mayor de 0
        expect( gifs.length ).toBeGreaterThan( 0 );

        //prueba que devuelta tal cual el arreglo
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});