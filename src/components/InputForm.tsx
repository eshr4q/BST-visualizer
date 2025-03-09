import { useState } from "react";

interface InputFormProps {
    onSubmit: (array: number[], target: number) => void;
  }
  
  const InputForm: React.FC<InputFormProps> = ({}) => {

    const [numsList, setNumsList] = useState<string>("");
    const [targetNum, setTargetNum] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) =>{
      e.preventDefault();
      console.log("List of Numbers:", numsList);
      console.log("target Number" , targetNum);

    };

    return (
      <aside className="w-full md:w-72 p-4 pt-16 bg-base-300 hidden md:block lg:fixed h-screen top-10 left-0 z-0 shadow-md">
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="input input-info input-md flex items-center gap-2">
              List of Numbers
              <input 
              type="text" 
              placeholder="e.g., 1,2,3" 
              className="grow" 
              value={numsList}
              onChange={(e)=> setNumsList(e.target.value)} />
            </label>
          </div>
          <div>
            <label className="input input-info input-md flex items-center gap-2">
              Target Number
              <input 
              type="text" 
              className="grow" 
              placeholder="5" 
              value={targetNum}
              onChange={(e)=> setTargetNum(e.target.value)}/>
              <span className="badge badge-neutral badge-xs">Optional</span>
            </label>
          </div>
          <button 
          type="submit" 
          className="btn w-full"
          >
            Start Search
          </button>
        </form>
      </aside>
    );
  };
  
  export default InputForm;