# React Universal Container

Allows React and React-Native front end Components to use the same properties, and gives you the ability to write your `important` code once.

  - Supports Typescript!

# Why?

If you have started to build a multi front-end React based system, you'll know that code reuse is one of the primary motivators. To help you write your `important` application code only once, use a `React Universal Container` to sit in the middle of our platform specific components. The universal container is used to: 
- define the `props` structure for the presentation component
- prescribe callback functions to the presentation component as `props`. The functions execute in one place only.

# Example

```
// Container.jsx
import { UniversalContainer } from 'react-universal-container'

<UniversalContainer
  component={YourPlatformSpecificComponent}
  title={"I'm a common property for these front ends"}
  businessLogicFunction={() => { console.log("I'm only written once") }}
/>
  
// YourReactPlatformSpecificComponent.jsx
class YourReactPlatformSpecificComponent extends React.Component {
    render() {
        return ( <button onClick={()=>{this.props.businessLogicFunction}}> {this.props.title} </button> )
    }
}

// YourReactNativePlatformSpecificComponent.jsx
class YourReactNativePlatformSpecificComponent extends React.Component {
    render() {
        return ( <TouchableHighlight onPress={()=> {this.props.businessLogicFunction}}> {this.props.title} </TouchableHighlight> )
    }
}
```
  - See **examples** folder for a more thorough implementation



# License:

```
The MIT License

Copyright (c) 2017 Sportsbet Pty Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
