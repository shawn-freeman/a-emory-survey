export class HttpHandler {
   //TODO: Replace default baseUrl parameter with a value from environment/appsetting
   //constructor(baseUrl = 'https://localhost:7240/'){
   constructor(baseUrl = 'http://testefdeploycoreonlinuxenv-env.eba-7hb3whd2.us-east-1.elasticbeanstalk.com/'){
      this.baseUrl = baseUrl;
      let foo = process.env.REACT_APP_API_URL;
      console.log(foo);
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