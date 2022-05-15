import './App.css';
import {useEffect,useState} from "react"
function App() {


  const [data,setData] = useState([]);
  

  useEffect(()=>{
    fetch("https://fakestoreapi.com/users")
    .then(Response => Response.json())
    .then(json => setData(json))
   
   
  },[])

  


  const handelClick = (e)=>{
    if(e){
      let sortdata = data.sort((a,b)=>{
        return a.name.firstname.localeCompare(b.name.firstname);
        
      })
      setData([...sortdata])
     
    }
    else if(!e){
        let sortdata = data.sort((a,b)=>{
        return b.name.firstname.localeCompare(a.name.firstname);
        
      })
      setData([...sortdata])
     
    }
    

  }
  

  return (
    <div className="App">
       <div className='container'>
        {
          data.map((e)=>{
            return <div key={e.id}> {e.name.firstname}</div>
          })
        }
        <button className='btn' onClick={()=>{handelClick(true)}}> SortAccending</button>
        <button className='btn' onClick={()=>{handelClick(false)}}> SortDeccending</button>
        
       </div>
    </div>
  );
}

export default App;
