var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.render = function () {
        // Call the method to create a button
        var okButton = this.createButton(); // use the button
        okButton.onClick();
        okButton.render();
        return "Dialog: sussess render the button as well";
    };
    return Dialog;
}());
var WindowDialog = /** @class */ (function (_super) {
    __extends(WindowDialog, _super);
    function WindowDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowDialog.prototype.createButton = function () {
        return new WindowButton();
    };
    return WindowDialog;
}(Dialog));
var WebDialog = /** @class */ (function (_super) {
    __extends(WebDialog, _super);
    function WebDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDialog.prototype.createButton = function () {
        return new HTMLButton();
    };
    return WebDialog;
}(Dialog));
var HTMLButton = /** @class */ (function () {
    function HTMLButton() {
    }
    HTMLButton.prototype.onClick = function () { };
    HTMLButton.prototype.render = function () {
        return "Result of HTMLButton impletments";
    };
    return HTMLButton;
}());
var WindowButton = /** @class */ (function () {
    function WindowButton() {
    }
    WindowButton.prototype.onClick = function () { };
    WindowButton.prototype.render = function () {
        return "Result of WindowButton implements";
    };
    return WindowButton;
}());
// The implement works with an instancee of a button actions
function clientCode(dialog) {
    console.log("Button: `I'm not aware of the dialog's class, but is still works.");
    console.log(dialog.render());
}
// The application picks a dialogs's type depending on the configuration
// or enviroment
console.log("App: Launched with the WindowDialog");
clientCode(new WindowDialog());
console.log("");
console.log("App: Launched with the WebDialog");
clientCode(new WebDialog());
console.log("");
