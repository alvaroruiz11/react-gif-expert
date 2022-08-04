import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Prueba en <GifExpertApp/>', () => {

    test('debe hacer macth con el snapshot', () => {

        const { container } = render( <GifExpertApp/> );

        expect( container ).toMatchSnapshot();
    });

    test('debe de haber el titulo de la aplicacion', () => {
        
        render( <GifExpertApp/> );

        expect( screen.getByText('GifExpertApp')).toBeTruthy();
    });

});