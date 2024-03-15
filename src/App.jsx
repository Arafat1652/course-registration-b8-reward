
import { useState } from "react"
import Carts from "./components/Carts/Carts"
import Credits from "./components/Credits/Credits"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const totalCreditHr = 15 

function App() {
  const [courses, setCourse] = useState([])
  const [priceTag, setPriceTag] = useState(0)
  const [creditHr, setCreditHr] = useState(0)

  const handleCredit =(cart, price, credit) =>{
    const newCourses = [...courses, cart]
    if (creditHr+cart.credit>totalCreditHr) {
      return toast.error(`only ${totalCreditHr} credit hour is allowed`)
    }
    const alreadyExist = courses.find(c => c.id ==cart.id)
    
    if(alreadyExist){
      toast.warning("Course alredy selected");
    }else{
      setCourse(newCourses)
      setPriceTag(priceTag+price)
      setCreditHr(creditHr+credit)
      toast.success("Course successfully added !");

   }


  }

  return (
    <>
        <h1 className="text-3xl font-bold text-center p-8">
        Course Registration
      </h1>
     <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
     <div>
      <Carts handleCredit={handleCredit}></Carts>
      </div>
     <Credits courses={courses} priceTag={priceTag} creditHr={creditHr}></Credits>
     </div>
     <ToastContainer/>
    </>
  )
}

export default App
