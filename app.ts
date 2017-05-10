class MyClass {
    public render (docEl: string, text: string) {
        let el: HTMLElement = document.querySelector(docEl);
        el.textContent = text;
        el.innerText = text;
    }
}

window.onload = () => {
    let myClass = new MyClass();
    myClass.render('body', 'Hello World!');
};