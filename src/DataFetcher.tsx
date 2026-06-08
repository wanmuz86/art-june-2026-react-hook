import React, { useEffect, useState } from 'react'



const DataFetcher: React.FC = () =>{

    // Create state which will store the date from internet
    // null or string (data from internet)
    const [data, setData] = useState<string | null>(null);

    // [] -> Run only once when component is rendered

    // Without [] -> Everytime the component is rendered

    // [data] => Whenever there is change in data (listen to the data)
    useEffect(()=> {
        // Compare this line with axios -> 3 lines , in Axios you will see two lines
        fetch('https://api.github.com/zen')
        .then(response => response.text()) // Transform data into text/json
        .then(text => setData(text)) // set whatever that we retrieved inside variable data
        

    },[])

  return (
    <div>
        <h1>API Data fetcher</h1>
        <p>{data || 'Loading'}</p>
    </div>
  )
}

export default DataFetcher