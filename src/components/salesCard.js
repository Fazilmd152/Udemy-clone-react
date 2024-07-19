import one from "../Assets/courses/Sale-image.jpg"
function Sales(){
    return(
        <>
        <div className="sales-card">
            <img src={one} alt="hello" />
            <div className="sale-content">
            <h2>Udemy Flash sales! 24 hours to save</h2>
            <p>Get the top course for just 499. just one day to save but life time to learn</p>
            </div>
        </div>
        </>
    )
}
export default Sales