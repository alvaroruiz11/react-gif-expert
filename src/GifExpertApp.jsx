import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [ categorias, setCategories ] = useState( ['One Punch'] );

  const onAddCategory = ( newCategory ) => {

    if( categorias.includes( newCategory ) ) return;

    setCategories([
      newCategory,
      ...categorias
    ]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ ( value ) => onAddCategory( value ) }
        />
        <ol>
          {
            categorias.map( c => (
              <GifGrid 
                key={ c } 
                category={ c }
              />
            ))
          }
        </ol>

    </>
  )
}
