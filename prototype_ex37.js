// excersise 37
/*
HtmlElement:
- click
- proto - focus
(console.log statements)

e.click() --> 'clicked'
e.focus() --> 'focused'

HtmlSelectElement:
constructor optionally takes array of ints
--> items, array from construction
addItem()
removeItem()
s.addItem('1')
s.addItem('2')
s.removeItem('2')
--> should "inherit" from HtmlElement
*/

function HtmlElement() {
    this.click = function() {
        console.log("clicked");
    }
}
HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item),1);
    }
    this.render = function() {
        return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
    }
}

// Earlier, we used:
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// But this only inherits whats in the prototype of HtmlElement
// In order to get the methods from constructor, instead of an 
// empty object (which is what Object.create makes) use the 
// HtmlElement object:
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;




function HtmlImageElement(src) {
    this.src = src;
    this.render = new function() {
        // template string... ES6 ...
        return `<imgs src="${this.src}" />`
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;





