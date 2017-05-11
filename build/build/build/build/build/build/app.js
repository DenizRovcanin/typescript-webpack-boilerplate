"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.render = function (elem, text) {
        var el = document.querySelector(elem);
        el.textContent = text;
        el.innerText = text;
    };
    return MyClass;
}());
window.onload = function () {
    var myClass = new MyClass();
    myClass.render('body', 'Hello World!');
};
//# sourceMappingURL=app.js.map