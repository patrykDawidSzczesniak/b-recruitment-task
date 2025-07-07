import {checkOrientationOnLoad, checkOrientationOnChange} from "./utils/checkOrientation";


document.querySelector('#app').innerHTML = `
  <div onLoad={${checkOrientationOnLoad()} onChange={${checkOrientationOnChange()}}>
    <h1>Hello</h1>
  </div>
`
