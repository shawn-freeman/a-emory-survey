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
          if(response.status === 200){
            if(response.bodyUsed === true){
               return response.body.json(); 
            }else{
               return true;
            }
          }else{
             alert(`API RETURN ERROR: ${response.json()}`);
          }
         })
       .catch((error) => {
          console.error("Error: " + error);
       });

       return result;
    }
    
    async GetSurveyQuestions(){
      let result = await fetch(`${this.baseUrl}SurveyQuestion/GetSurveyQuestions`, {
         method: 'GET'
      })
      .then((response) => { 
         if(response.status === 200){
           if(response.bodyUsed === true){
              return response.body.json(); 
           }else{
              return true;
           }
         }else{
            alert(`API RETURN ERROR: ${response.json()}`);
         }
        })
      .catch((error) => {
         console.error("Error: " + error);
      });

      return result;
   }
 }