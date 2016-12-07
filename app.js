require("./components/counter/counter.tag");
require("./components/colorDisplay/colorDisplay.tag");
var riot = require("riot");
riot.mount('colorDisplay', {});
riot.mount('counter', { initialValue : 42})