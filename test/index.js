var assert = require("assert");
// require("../").fix();

describe("classlist-toggle-force-polyfill", function() {

  describe("without existing class", function() {

    beforeEach(function() {
      this.el = document.createElement('div');
    });

    it("force toggle on", function() {
      var ret = this.el.classList.toggle('test', true);
      assert.equal(ret, true, "Valid return");
      assert(this.el.classList.contains('test'), "Class exists");
    });

    it("force toggle off", function() {
      var ret = this.el.classList.toggle('test', false);
      assert.equal(ret, false, "Valid return");
      assert(!this.el.classList.contains('test'), "Class doesn't exist");
    });
  });

  describe("with existing class", function() {

    beforeEach(function() {
      this.el = document.createElement('div');
      this.el.classList.add("test");
    });

    it("force toggle on", function() {
      var ret = this.el.classList.toggle('test', true);
      assert.equal(ret, true, "Valid return");
      assert(this.el.classList.contains('test'), "Class exists");
    });

    it("force toggle off", function() {
      var ret = this.el.classList.toggle('test', false);
      assert.equal(ret, false, "Valid return");
      assert(!this.el.classList.contains('test'), "Class doesn't exist");
    });
  });

});
