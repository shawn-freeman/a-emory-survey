export class HttpHandler {
   //TODO: Replace default baseUrl parameter with a value from environment/appsetting
   constructor(baseUrl = 'https://localhost:7240/'){
      this.baseUrl = baseUrl;
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
 }