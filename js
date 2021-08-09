import { LightningElement, wire } from 'lwc';
import getAcc from '@salesforce/apex/accController.getAcc';
import getCon from '@salesforce/apex/accController.getCon';
import { NavigationMixin } from 'lightning/navigation';
export default class CustomIteration extends NavigationMixin(LightningElement) {
  accounts;
  contacts;
  something = false;
  connectedCallback()
  {

      getAcc({}).then(result => 
        {
            this.accounts = result;
        });
  }
handleClick(event)
{
    const selectedId = event.target.name;
    alert(selectedId);
    getCon({accId : selectedId}).then(result => {
        this.contacts = result;
    })
}
}
