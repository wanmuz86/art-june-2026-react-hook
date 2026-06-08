
import './App.css'
import ConditionalRendering from './ConditionalRendering'
import Counter from './Counter'
import DataFetcher from './DataFetcher'
import StatusMessage from './StatusMessage'
function App() {
  

  return (
    <>
    <Counter/>
    <hr />
    <DataFetcher/>
    <hr/>
    <ConditionalRendering/>
    <hr />
    <StatusMessage/>
    </>

  )
}

export default App
