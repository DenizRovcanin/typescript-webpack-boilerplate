var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.render = function (docEl, text) {
        var el = document.querySelector(docEl);
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