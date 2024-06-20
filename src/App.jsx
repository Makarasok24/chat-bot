import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ReactMarkdown from "react-markdown";
import axios from "axios";
function App() {
  const [question,setQuestion] = useState("");
  const [answer  ,setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(){
    setGeneratingAnswer(true);
    setAnswer("Loading...");
    try{
      const response = await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD-S6ZrA8UKNXk-Adb6BRfNmP1743-o4m0",
        method:"post",
        data:{
            contents:[{parts:[{text:question}]},
          ],
        },
      });
      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    }catch (error){
      console.log(error);
      setAnswer("Sorry! Something when wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }
  return (
    <div  className="bg-white h-screen p-3">
      <form 
      // onSubmit={generateAnswer}
      className='w-full a-auto text-center bg-gray-50 py-2'
      >
        <h1
        className='text-3xl text-center font-bold'
        >
          ChatBot
        </h1>
        <input 
        type="text"
        required 
        placeholder='Ask anything...'
        className='border-2 p-3 w-[50%]'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            {generateAnswer}
          }
        }}
        />
        <button
        //  type='submit'
        onClick={generateAnswer}
         disabled={generatingAnswer}
         className='bg-[#15284C] p-3 text-white border-2 bottom-[30px]'
        >
          Send
        </button>
      </form>
      <div className="w-full md:w-2/3 m-auto text-justify rounded bg-gray-50 my-1">
          <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App
