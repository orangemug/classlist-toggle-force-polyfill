var origToggle = DOMTokenList.prototype.toggle;

// Has the polyfill been applied
var fixed = false;

/**
 * The polyfill method
 * @api private
 */
function method(val, force) {
  var ret, el = this;

  if(force === true) {
    this.add(val);
  } else if(force === false) {
    this.remove(val);
  } else {
    return origToggle.call(this, val);
  }
  return this.contains(val);
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

  return false;
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
