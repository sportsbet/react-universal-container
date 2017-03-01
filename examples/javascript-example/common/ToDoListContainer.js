import { ReactUniversalContainer } from 'react-universal-container';
function didTapItem(item) {
    console.log("The most important `shared` code is executed here");
    // A more realistic kind of 'shared' callback action would be dispatching 
    // redux actions to a redux store inside this function. Or using business 
    // logic to determine what should happen; or start a HTTP API request. The 
    // main point is that you write this _important_ code once, here.
}
/**
 * ReactUniversalContainer subclasses are usually just prop and state holders.
 * A common use case would be for `ToDoListContainer` to connect to redux and
 * map Dispatch actions so that the `component` object has those functions
 * available to via its own props.
 */
export class ToDoListContainer extends ReactUniversalContainer {
}
