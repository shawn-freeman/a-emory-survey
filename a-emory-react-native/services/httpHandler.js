import { env } from "../config/index.js"

export class HttpHandler {
   constructor(){
      this.baseUrl = env.api_base_url;
   }
   baseUrl;
    state = {
       data: ''
    }
    
    async GetIsEmailValid(email){
       let result = await fetch(`${this.baseUrl}EmailVerification/ValidateEmail?email=${encodeURIComponent(email)}`, {
          method: 'GET'
       })
       .then((response) => { 
          return response.json(); 
         })
         .then(responseData => {
           return responseData;
         })
       .catch((error) => {
          console.error("Error: " + error);
       });

       return result;
    }
    
    async GetSurveyQuestions(code){
      let result = await fetch(`${this.baseUrl}SurveyQuestions/GetSurveyQuestions?code=${code}`, {
         method: 'GET',
         // headers: {
         //    "Accept": "application/json",
         //    'Content-Type': 'application/json'
         //    }
        })
        .then(response => { return response.json();})
        .then(responseData => {
           return responseData;
         })
         .catch((error) => {
         console.error("Error: " + error);
      });

      return result;
   }

   async AnswerQuestion(question){
      let result = await fetch(`${this.baseUrl}SurveyQuestions/AnswerQuestion`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
         body: JSON.stringify(question),
        })
        .then(response => { return response.json();})
        .then(responseData => {
           return responseData;
         })
         .catch((error) => {
         console.error("Error: " + error);
      });

      return result;
   }
 }