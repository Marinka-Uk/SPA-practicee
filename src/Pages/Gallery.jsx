import { useLoaderData } from "react-router-dom";
export const GallaryPage = ()=>{
const cats = useLoaderData;

  // useEffect(() => {
  //   fetch("https://cataas.com/api/cats?limit=10")
  //     .then(res => res.json())
  //     .then(data => setCats(data));
  // }, []);

  return (
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cats.map((cat) => (
            <li key={cat.id} >
              <img
                src={`https://cataas.com/cat/${cat.id}`}
                alt="Cat"
              />
            </li>))}
            </ul>)}
            
    <div>
      <h2>Gallery</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
          </li>
        ))}
      </ul>
    </div>
  );
}

