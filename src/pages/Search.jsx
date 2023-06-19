import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = 'http://localhost:3000/products?' + searchParams;

  const { data: items } = useFetch(url);

  return (
    <div>
      <h3>
        Resultados da Pesquisa:
      </h3>
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

export default Search