import MultiSelect from 'multiselect-react-dropdown';
// npm install multiselect-react-dropdown  
const FaInputForm = () => {

    

    return (
        <div className="flex flex-col justify-center shadow-xl w-[50%] p-10 rounded border mt-5">
          <div className="text-4xl font-bold mb-5 text-[#15284C]">
            Design Finite Automata
          </div>
          {/* //input alphabet */}
          <div className="flex flex-col gap-2">
            <label htmlFor="alphabet" className="font-bold">
              Define Alphabet
            </label>
            <input 
            type="text" 
            name="alphabet"
            placeholder="a,b or 0,1"
            className="px-2 py-2 rounded border-2 outline-none border-gray-300"
            />
          </div>
          {/* //input states */}
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="states" className="font-bold">
              Define States
            </label>
            <input 
            type="text" 
            name="states"
            placeholder="q0,q1,q2,..."
            className="px-2 py-2 rounded border-2 outline-none border-gray-300"
            />
          </div>
          {/* // select state state */}
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="startState" className="font-bold">
              Start State
            </label>
            <MultiSelect
              placeholder='Select Start State...'
              name='start_state'
              className="rounded border border-gray-300"
            />
          </div>
          {/* // select final state */}
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="finalState" className="font-bold">
              Final State
            </label>
            <MultiSelect
              placeholder='Select Final State...'
              name='final_state'
              className="rounded border border-gray-300"
            />
          </div>
          {/* //Epsilon Transition(ε) */}
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="states" className="font-bold">
            Epsilon(ε)
            </label>
            <select 
              name="epsolon"
              defaultValue={false}
              className='px-2 py-2 rounded border-2 outline-none border-gray-300 text-gray-300'
            >
              <option value="false">No Epsolon</option>
              <option value="true">Include Epsolon</option>
            </select>
          </div>
        </div>
      );
}
export default FaInputForm;