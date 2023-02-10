import React from 'react'

export const fetchdata = () => {
    const[item,setItem] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/ade6d28c-29c0-42af-9d9f-115e1fab231e')
        .then(res =>res.json()).then(data=>setItem(data));
    }
    ,[])
  return (
    <div>

    </div>
  )
}
