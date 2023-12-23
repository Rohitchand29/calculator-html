import { useState } from "react";

function App() {
  const btnStyle = "w-full rounded-md text-md font-semibold mx-1 py-1 bg-blue-500 text-center cursor-pointer";
  const [str, setStr] = useState("");

  return <>
    <div className=" flex justify-center mt-10">
      <div className="px-6 py-4 border-2 rounded-lg">
        <input className="outline-none font-mono text-xl px-4 py-2 text-right" type="text" onChange={
          (e) => {
            setStr(prev => e.target.value)
          }
        } placeholder="" value={str} />
        <div>
          <div className="flex justify-between mt-3">
            <p onClick={
              (e) => {
                setStr(prev => String(Math.pow(eval(prev), 2)))
              }
            } className={btnStyle}>^2</p>

            <p onClick={
              (e) => {
                setStr(prev => String(Math.pow(10, eval(prev))))
              }
            } className={btnStyle}>10^</p>
            <p onClick={
              (e) => {
                setStr("")
              }
            } className={btnStyle}>C</p>
            <p onClick={
              (e) => {
                setStr(prev => prev.slice(0, prev.length - 1))
              }
            } className={btnStyle}>B</p>
          </div>

          <div className="flex justify-between mt-3">
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"(")
              }
            } className={btnStyle}>(</button>

            <button onClick={
              (e)=>{
                setStr(prev=>prev+")")
              }
            } className={btnStyle}>)</button>

            <button onClick={
              (e)=>{
                setStr(prev=>String(Math.pow(eval(prev),0.5)))
              }
            } className={btnStyle}>√</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"/")
              }
            } className={btnStyle}>÷</button>
          </div>

          <div className="flex justify-between mt-3">
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"7")
              }
            } className={btnStyle}>7</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"8")
              }
            } className={btnStyle}>8</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"9")
              }
            } className={btnStyle}>9</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"*")
              }
            } className={btnStyle}>×</button>
          </div>

          <div className="flex justify-between mt-3">
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"4")
              }
            } className={btnStyle}>4</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"5")
              }
            } className={btnStyle}>5</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"6")
              }
            } className={btnStyle}>6</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"-")
              }
            } className={btnStyle}>-</button>
          </div>
          <div className="flex justify-between mt-3">
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"1")
              }
            } className={btnStyle}>1</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"2")
              }
            } className={btnStyle}>2</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"3")
              }
            } className={btnStyle}>3</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"+")
              }
            } className={btnStyle}>+</button>
          </div>
          <div className="flex justify-between mt-3">
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"00")
              }
            } className={btnStyle}>00</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+"0")
              }
            } className={btnStyle}>0</button>
            <button onClick={
              (e)=>{
                setStr(prev=>prev+".")
              }
            } className={btnStyle}>.</button>
            <button onClick={
              (e)=>{
                setStr(prev=>String(eval(prev)))
              }
            } className={btnStyle}>=</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App;
