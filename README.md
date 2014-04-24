# classlist-toggle-force-polyfill
Polyfill DOMTokenList#toggle's force argument

    el.classlist.toggle("classToBeRemoved", false);
    el.classlist.toggle("classToBeAdded", true);

[![browser support](https://ci.testling.com/orangemug/classlist-toggle-force-polyfill.png)](https://ci.testling.com/orangemug/classlist-toggle-force-polyfill)


## Install

    npm install git://github.com/orangemug/classlist-toggle-force-polyfill.git


## Usage
Require it

    var forcePolyfill = require("classlist-toggle-force-polyfill");

To polyfill force in DOMTokenList#toggle, run

    forcePolyfill.fix();

You can also find out if its required

    forcePolyfill.required();

However note if the fix has already been run the above will always return `true`. To find out if it was required initially pass `true` to the method

    forcePolyfill.required(true);


## License
MIT
