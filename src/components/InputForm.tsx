import { useState } from "react";
import { sortNumberList } from "../utils/sortNumbers";

interface InputFormProps {
    onSubmit: (array: number[], target: number) => void;
  }
  
  const InputForm: React.FC<InputFormProps> = ({onSubmit}) => {

    

    const [numsList, setNumsList] = useState<string>("");
    const [targetNum, setTargetNum] = useState<string>("");
    const [displayedNums, setDisplayedNums] = useState<string>();

    

    const handleSubmit = (e: React.FormEvent) =>{
      e.preventDefault();
      console.log("List of Numbers:", numsList);
      console.log("target Number" , targetNum);
      
      if (numsList) {
      const sortedArray = sortNumberList(numsList);
      console.log("sortedList", sortedArray);
      setDisplayedNums(sortedArray.join(", "));
      onSubmit(sortedArray, Number(targetNum) || 0);
    }

     

    };

    return (
      <aside className="w-72 p-8 bg-s-1 fixed top-16 left-0 h-screen shadow-md z-0 overflow-y-auto hidden lg:block">
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="input  bg-s-1 input-md flex items-center gap-2">
              List of Numbers
              <input 
              type="text" 
              placeholder="e.g., 1,2,3" 
              className="grow" 
              value={numsList}
              onChange={(e)=> setNumsList(e.target.value)} 
              />
            </label>
          </div>
          <div>
            <label className="input input-md bg-s-1 flex items-center gap-2">
              Target Number
              <input 
              type="text" 
              className="grow" 
              placeholder="5" 
              value={targetNum}
              onChange={(e)=> setTargetNum(e.target.value)}/>
              <span className="badge bg-h-1 badge-xs">Optional</span>
            </label>
          </div>
          <button 
          type="submit" 
          className=" btn btn-wide btn-outline hover:bg-h-1 border-hidden"
          >
            Start Search
          </button>
        </form>
        {displayedNums ? (
        <div className="card bg-h-1 shadow-md mt-4">
          <h3 className="card-title text-sm">Entered Values</h3>
            <div className="card-body">
   
              <p>{displayedNums}</p>
              
            </div>
        </div>
        ) : null}
      </aside>
    );
  };
  
  export default InputForm;