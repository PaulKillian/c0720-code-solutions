// the object with values stored in "createElement" is being imported from the lib directory
import { createElement } from '../lib';
// a class is being defined with the name "TodoForm", with an opening curlybrace for the code block
class TodoForm {
  // the is a constructor with 1 parameter, onSubmit, then there is the opening curlybrace for the code block
  constructor(onSubmit) {
    // an empty string is being assign the property newTask of the this object
    this.newTask = '';
    // null is being assign the property element of the this object
    this.element = null;
    // the value stored in the variable onSubmit is being assign the property onSubmit of the this object
    this.onSubmit = onSubmit;
    // the bind method of the handleChange property of the this object is being called with one arguments, the value stored
    // in this and the rturn value is being assined the handleChange property of the this object
    this.handleChange = this.handleChange.bind(this);
    // the bind method of the handleSubmit property of the this object is being called with one arguments, the value stored
    // in this and the rturn value is being assined the handleSubmit property of the this object
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // the handleChange function is being called with 1 arguments, "event", then there is the opening curlybrace for the codeblock
  handleChange(event) {
    // the return of the value property of the target object of the event object is being assigned to the newTask property of th this
    // object
    this.newTask = event.target.value;
  }

  // the handleSubmit function is being called with 1 arguments, "event", then there is the opening curlybrace for the codeblock
  handleSubmit(event) {
    // the preventDefault method of the event object is being called with no argumentss
    event.preventDefault();
    // the on Submit method of the this object is being called with 1 arguments, the newTask proprty of the this object
    this.onSubmit(this.newTask);
    // an empty string is being assigned to the newTask property of the this object
    this.newTask = '';
    // the reset method of the target property of the event object is being called
    event.target.reset();

    event.target.querySelector('input').focus();
  }

  // the render function is being called with no argumentss, then there is the opening curlybrace for the codeblock
  render() {
    // there is an if statement evaluating the condition of whether or not the element property of the this object is truthy
    // if this evaluates to true, the element property of the this object will be retured
    if (this.element) return this.element;
    // the emlement method of the this object is being called
    this.element = (
      // the cleateElement function is being called with 3 argumentss, "form", an object with 1 property and 1 value, and opening bracket for an array
      createElement('form', { class: 'shadow-sm mb-4' }, [
        // tthe createElement function is being called with 3 argumentss, "div", an object with 1 property, and the opening bracket for the sub-array
        createElement('div', { class: 'input-group' }, [
          // the createElement function is being called with 2 argumentss, "input" an the opening curlybrace for an object
          createElement('input', {
            // the object has 4 properties
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          // tthe createElement function is being called with 3 argumentss, "div", an object with 1 property, and the opening bracket for a sub-array for the sub-array
          createElement('div', { class: 'input-group-append' }, [
            // the createElement function is being called with 3 argumentss, "button", an object with 2 properties, "add Todo"
            createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          // closing bracket for the sub-array of the sub-of the sub-array an the closing parentheses for the createElement definition
          ])
          // closing bracket for the sub-array and the closing parentheses for the createElement definition
        ])
        // closing bracket for the array and the closing parentheses for the createElement definition
      ])
      // the closing parentheses for the createElement definition
    );
    // the addEventListener of the element propery of the this object is being called with 2 arguments, "change" an the handleChange property of the this object
    this.element.addEventListener('change', this.handleChange);
    // the addEventListener of the element propery of the this object is being called with 2 arguments, "submit" an the handleSubmit property of the this object
    this.element.addEventListener('submit', this.handleSubmit);
    // the element property of the this object is being retured
    return this.element;
  }
}
// the value stored in "TodoForm" is being exported as a default
export default TodoForm;
