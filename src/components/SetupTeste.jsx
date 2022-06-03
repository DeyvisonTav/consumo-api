import { useEffect, useState } from "react"


export const SetupTeste = () => { 
  const [nutri,setNutri] = useState([])

  useEffect(() => {
    
   const loadApi=()=>{
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
      .then((res)=>res.json())
      .then((json)=> {
        console.log(json)
        setNutri(json)
      })
    }
  loadApi();

  },[])



 return (
   <div className="w-full flex flex-col justify-center items-center">
      
      <div className="w-full h-16 flex justify-center items-center text-4xl bg-blue-500 text-white shadow-lg shadow-blue-50 border-b-2 border-white">
        <h1>React Nutri</h1>
      </div>
      
       {nutri.map((item)=>{
         return (
           <article key={item.id} className='flex flex-col justify-center w-5/6 bg-white rounded-md m-2 px-4 py-6 border-4 border-white border-opacity-50 shadow-2xl font-serif'  >
               <strong className=" text-2xl mt-2 mb-6 "> {item.titulo}  </strong>
               <img src={item.capa } alt={item.titulo} className='rounded-2xl shadow-lg border border-white' />
               <p className="m-1">{item.subtitulo}</p>
               <a className='mt-4 h-10 bg-blue-500 border hover:border-2 border-white flex justify-center items-center text-white text-xs cursor-pointer hover:bg-blue-50 hover:text-blue-500 shadow-lg font-bold rounded-lg transition-colors'>Acessar</a>
           </article>
         )
       })}  
   </div>
   )
   }