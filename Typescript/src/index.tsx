import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

ReactDOM.render(
    <Hello compiler="Typescrit" framework="react"></Hello>,
    document.getElementById("example")
);