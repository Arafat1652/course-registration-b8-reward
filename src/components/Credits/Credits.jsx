import { totalCreditHr } from "../../App";

const Credits = ({courses, priceTag, creditHr}) => {
    console.log(courses,'from credits')
    return (
        <div className='w-[60%] bg-slate-100 h-full p-5 rounded-xl'>
         <div>
                <h3 className="text-xl text-primary font-semibold">Credit Hour Remaining {totalCreditHr-creditHr}hr</h3>
            </div>
            <div className="divider"></div>
            <div className="text-xl font-bold">
                <h3>Course Name</h3>
            </div>
            <div className="p-4">
            <ol className="list-decimal">
                 {
                    courses.map(course=><li key={course.id}>{course.name}</li>)
                 }
                </ol>
            </div>
            <div className="divider"></div>
            <div><h3>Total Credit Hour: {creditHr}</h3></div>
            <div className="divider"></div>
            <div><h3>Total Price: {priceTag} USD</h3></div>
        </div>
    );
};

export default Credits;