const API_KEY =import.meta.env.VITE_GEMINI_API_KEY


export const sendMessageToGemini= async(message)=>{
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        contents:[{
            parts:[{text:message}],
        },
    ],
    }),

   });
   if(response.status === 429){
    throw new Error ("Too many requests.please wait and try again.");
}

   if(!response.ok){
    throw new Error ('Failed to fetch Gemini response')
;   } 


const data=await response.json();
const candidate =data.candidates?.[0];
const text =candidate?.content?.parts?.[0]?.text;
 if(!text){
    throw new Error("no response from Gemini");
 }
 return text;
  
}
    
