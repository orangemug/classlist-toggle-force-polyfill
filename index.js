var origToggle = DOMTokenList.prototype.toggle;
var fixed = false;

/**
 * The polyfill method
 * @api private
 */
function method(val, force) {
  var ret, el = this;

  if(force === true) {
    this.add(val);
    return this.contains(val);
  } else if(force === false) {
    this.remove(val);
    return this.contains(val);
  } else {
    return origToggle.apply(this, val);
  }
}


/**
 * Test if the fix is required
 * @return {Boolean} 
 * @api public
 */
function required(initialValue) {
  var ret, el = document.createElement("div");

  if(initialValue && fixed)  {
    return true;
  }

  // Test force on
  ret = el.classList.toggle("t", true);
  if(ret !== true || !el.classList.contains("t")) {
    return true;
  }

  // Test force off
  ret = el.classList.toggle("o", false);
  if (ret !== false || el.classList.contains("o")) {
    return true;
  }
}


/**
 * Fix the toggle if required.
 * @return {Function} method used in fix.
 */
function fix() {
  if(required()) {
    fixed = true;
    DOMTokenList.prototype.toggle = method;
    return method;
  }
}


module.exports = {
  fix:      fix,
  required: required
};
