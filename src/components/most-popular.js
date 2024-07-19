import pic1 from "../Assets/courses/course-1.jpg"
import pic2 from "../Assets/courses/course-2.jpg"
import pic3 from "../Assets/courses/course-3.jpg"
import pic4 from "../Assets/courses/course-16.jpg"
import pic5 from "../Assets/courses/course-5.jpg"
import pic6 from "../Assets/courses/course-6.jpg"
import pic7 from "../Assets/courses/course-7.jpg"
import pic8 from "../Assets/courses/course-8.jpg"
import pic9 from "../Assets/courses/course-9.jpg"
import pic10 from "../Assets/courses/course-10.jpg"
import pic11 from "../Assets/courses/course-11.jpg"
import pic12 from "../Assets/courses/course-12.jpg"
import pic13 from "../Assets/courses/course-13.jpg"
import pic14 from "../Assets/courses/course-14.jpg"




function MostPopular() {
    return (
        <>
            <section className="container">
                <div>
                    <h1>Most Popular</h1>
                    <p>Pick the Best Fit</p>
                    <div className="course-container">
                        <div className="course">
                            <img src={pic14}/>
                                <h3>2023 python data visualisation master class</h3>
                                <p>Col steele</p>
                                <p>4.8&#11088;&#11088;&#11088;&#11088;</p>
                                <p>&#8377;1199 <del>&#8377;1599</del></p>
                        </div>
                        <div className="course">
                            <img src={pic13}/>
                                <h3>Web development bootcamp 2023 | advance</h3>
                                <p>Col steele</p>
                                <p>3.2&#11088;&#11088;&#11088;</p>
                                <p>&#8377;499 <del>&#8377;1499</del></p>
                        </div>
                        <div className="course">
                            <img src={pic12}/>
                                <h3>Master UI/UX Designing with Figma</h3>
                                <p>Col steele</p>
                                <p>4.8&#11088;&#11088;&#11088;&#11088;</p>
                                <p>&#8377;499 <del>&#8377;1999</del></p>
                        </div>
                        <div className="course">
                            <img src={pic11}/>
                                <h3>Basics to Advance Java Core Training</h3>
                                <p>Col steele</p>
                                <p>4.8&#11088;&#11088;&#11088;&#11088;</p>
                                <p>&#8377;449 <del>&#8377;1499</del></p>

                        </div>

                    </div>
                    <div className="course-container">
                        <div className="course">
                            <img src={pic10}/>
                                <h3>2023 python data visualisation master class</h3>
                                <p>Col steele</p>
                                <p>4.8&#11088;&#11088;&#11088;&#11088;</p>
                                <p>&#8377;1199 <del>&#8377;1599</del></p>
                        </div>
                        <div className="course">
                            <img src={pic9}/>
                                <h3>Web development bootcamp 2023 | advance</h3>
                                <p>Col steele</p>
                                <p>3.2&#11088;&#11088;&#11088;</p>
                                <p>&#8377;499 <del>&#8377;1499</del></p>
                        </div>
                        <div className="course">
                            <img src={pic8}/>
                                <h3>Master UI/UX Designing with Figma</h3>
                                <p>Col steele</p>
                                <p>4.8&#11088;&#11088;&#11088;&#11088;</p>
                                <p>&#8377;499 <del>&#8377;1999</del></p>
                        </div>
                        <div className="course">
                            <img src={pic7}/>
                                <h3>Basics to Advance Java Core Training</h3>
                                <p>Col steele</p>
                                <p>4.8&#11088;&#11088;&#11088;&#11088;</p>
                                <p>&#8377;449 <del>&#8377;1499</del></p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default MostPopular