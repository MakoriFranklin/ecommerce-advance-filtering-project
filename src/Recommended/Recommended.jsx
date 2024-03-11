import "./Recommended.css";
import Button from "../components/Button";
function Recommended({handleClick}) {
  return (
    <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClick={handleClick} value="" title="All products"/>        
        <Button onClick={handleClick} value="Nike" title="Nike"/>
        <Button onClick={handleClick} value="Adidas" title="Adidas"/>
        <Button onClick={handleClick} value="Puma" title="Puma"/>
        <Button onClick={handleClick} value="Vans" title="Vans"/>
        
        


      </div>
    </div>
      
    </>
  )
}

export default Recommended
