export const GallaryPage = ()=>{
const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://cataas.com/api/cats?limit=10")
      .then(res => res.json())
      .then(data => setCats(data));
  }, []);

  return (
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
