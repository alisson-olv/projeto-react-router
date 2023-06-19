import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`

  const { data: items, error, loading } = useFetch(url);

  return (
    <>
      <h3>
        Produto {id}
      </h3>
      {error && <p>Houve um problema ao carregar os dados.</p>}
      {loading && <p>Carregando...</p>}
      {items && (
        <div key={items.id}>
          <h4>
            {items.name}
          </h4>
          <p>
            Preço: R$ {items.price}
          </p>
          <Link to={`/products/${items.id}/info`}>Ver info</Link>
        </div>
      )}
    </>
  )
}

export default Product