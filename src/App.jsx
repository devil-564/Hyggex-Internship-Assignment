import './App.css'
import Navbar from "../src/components/Navbar/index"
import Sitemap from "../src/components/Sitemap/index"
import Calculator from "../src/components/CalculatorBoxOption/index"
import Publisher from '../src/components/Publisher/index'
import FAQ from "../src/components/FAQ/index"
function App() {

  return (
    <>
      <div className=' w-11/12 h-full m-auto mt-0'>
        <Navbar />
        <Sitemap />
        <h1 className=' text-2xl ml-2 cursor-pointer text-blue-800 font-bold translate-x-12'>Relation and Functions ( Mathematics )</h1>
        <br />
        <Calculator />
        <br />
        <Publisher />
        <br /><br />
        <h1 className=' text-2xl cursor-pointer text-blue-800 font-bold translate-x-12'>FAQ</h1>
        <br />
        <div className=' w-11/12 m-auto'>
          <FAQ question="Can education flashcards be used for all age groups?" answer="Place the answer over here" />
          <FAQ question="How do education flashcards work" answer="Place the answer over here?" />
          <FAQ question="Can education flashcards be used for test preparation?" answer="Place the answer over here" />
        </div>
      </div>
    </>
  )
}

export default App
