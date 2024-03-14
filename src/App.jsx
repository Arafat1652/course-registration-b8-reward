
import Carts from "./components/Carts/Carts"
import Credit from "./components/Credit/Credit"



function App() {

  return (
    <>
        <h1 className="text-3xl font-bold text-center p-8">
        Course Registration
      </h1>
     <div className="flex max-w-7xl mx-auto">
     <div>
      <Carts></Carts>
      </div>
      <Credit></Credit>
     </div>
    </>
  )
}

export default App
