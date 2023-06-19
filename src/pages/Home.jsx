import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import './Home.css';

const Home = () => {
  const url = 'http://localhost:3000/products';

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h2>
        Home
      </h2>
      <h3>
        Produtos
      </h3>
      {error && <p>Houve um problema ao carregar os dados.</p>}
      {loading && <p>Carregando...</p>}
      {items && items.map((item) => (
        <div key={item.id}>
          <h4>
            {item.name}
          </h4>
          <p>
            R$ {item.price}
          </p>
          <Link to={`/products/${item.id}`}>Detalhes</Link>
        </div>
      ))}
    </div>
  )
}

export default Home