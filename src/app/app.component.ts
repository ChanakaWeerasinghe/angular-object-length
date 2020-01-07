import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

data={
    "responses": [
        {
            "Detection": {
                "Images": [
                    {"url":"https:URL"}, 
                ],
                "Ages": [
                    {"age":"33"}, 
                ],
                "Labels":[
                    {"label":"game"}
                ]
            }
        }
    ]
}
constructor(){
this.data.responses[0].Detection.Ages[0].age
let ages=this.data.responses[0].Detection.Ages

 if(ages.length)
 {
   console.log("Age object present :",ages.length);
 }
console.log("Age :",this.data.responses[0].Detection.Ages[0].age);
}

}
