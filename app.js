import pubSubInstance from './main.js';

pubSubInstance.subscribe(payload => {
  // do something here
  showMessage(payload.message)
})