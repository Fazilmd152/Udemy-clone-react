import Navbar from "./components/navbar"
import Categories from "./components/categories"
import Sales from "./components/salesCard"
import Courses from "./components/course-container"
import Topics from "./components/topics"
import MostPopular from "./components/most-popular"
import Footer from "./components/footer"




function App() {
  return (
    <>
      <Navbar></Navbar>
      <Categories></Categories>
      <Sales></Sales>
      <Courses></Courses>
      <Topics></Topics>
      <MostPopular></MostPopular>
      <Footer></Footer>
    </>

  )
}


export default App