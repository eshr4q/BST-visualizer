
interface InputFormProps {
    onSubmit: (array: number[], target: number) => void;
  }
  
  const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
    return (
      <aside className="w-72 p-4 pt-16 bg-base-300 fixed h-screen top-10 left-0 z-0 shadow-md">
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          
          const arrayInput = (e.target as any)[0]?.value.split(',').map(Number) || [];
          const targetInput = Number((e.target as any)[1]?.value) || 0;
          onSubmit(arrayInput, targetInput);
        }}>
          <div>
            <label className="input input-info input-md flex items-center gap-2">
              List of Numbers
              <input type="text" placeholder="e.g., 1,2,3" className="grow" />
            </label>
          </div>
          <div>
            <label className="input input-info input-md flex items-center gap-2">
              Target Number
              <input type="text" className="grow" placeholder="5" />
              <span className="badge badge-neutral badge-xs">Optional</span>
            </label>
          </div>
          <button type="submit" className="btn w-full">
            Start Search
          </button>
        </form>
      </aside>
    );
  };
  
  export default InputForm;