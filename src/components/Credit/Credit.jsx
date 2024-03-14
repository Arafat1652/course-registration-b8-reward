
const Credit = () => {
    return (
        <div className="w-[60%] bg-slate-100 h-[500px] p-5 rounded-xl">
            <div>
                <h3 className="text-xl text-primary font-semibold">Credit Hour Remaining 7 hr</h3>
            </div>
            <div className="divider"></div>
            <div className="text-xl font-bold">
                <h3>Course Name</h3>
            </div>
            <div className="p-4">
            <ol className="list-decimal">
                    <li className="">introduction</li>
                    <li className="">introduction</li>
                    <li className="">introduction</li>
                </ol>
            </div>
            <div className="divider"></div>
            <div><h3>Total Credit Hour: 13</h3></div>
            <div className="divider"></div>
            <div><h3>Total Price: 48000 USD</h3></div>
        </div>
    );
};

export default Credit;