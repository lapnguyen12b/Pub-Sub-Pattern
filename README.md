## Pub-Sub-Pattern
Design patterns in Javascript: Publish-Subscribe or PubSub

refer : [Publish-Subscribe or PubSub](https://dev.to/anishkumar/design-patterns-in-javascript-publish-subscribe-or-pubsub-20gf)
- pubsub.js
```bash
export default class PubSub {
  constructor(){
    // this is where we maintain list of subscribers for our PubSub
    this.subscribers = []
  }

  subscribe(subscriber){
    // add the subscriber to existing list
    this.subscribers = [...this.subscribers, subscriber]
  }

  unsubscribe(subscriber){
   // remove the subscriber from existing list
    this.subscribers = this.subscribers.filter(sub => sub!== subscriber)
  }

  publish(payload){
   // publish payload to existing subscribers by invoking them
    this.subscribers.forEach(subscriber => subscriber(payload))
  }
}
```
- main.js
```bash
import PubSub from './PubSub';

const pubSubInstance = new PubSub();

export default pubSubInstance
```
- app.js
```bash
import pubSubInstance from './main.js';

pubSubInstance.subscribe(payload => {
  // do something here
  showMessage(payload.message)
})
```
- home.js
```bash
import pubSubInstance from './main.js';

pubSubInstance.publish({ message: 'Hola!' });
```