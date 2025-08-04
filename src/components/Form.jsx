import { useSearchParams } from "react-router-dom"; 
 
 
 export const Form =()=>{
     const [searchParams, setSearchParams] = useSearchParams()
return <>

        <input
          type="text"
        //   value={tag}
          onChange={(e) => setSearchParams({catName:e.target.value})}
        />
       {/* {loading ? (
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
            </ul>)} */}
            </>
           }
   

