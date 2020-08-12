abstract class Dialog {
  public abstract createButton(): Button;

  public render(): string {
    // Call the method to create a button
    const okButton = this.createButton(); // use the button
    okButton.onClick();
    okButton.render();

    return 'Dialog: sussess render the button as well';
  }
}

class WindowDialog extends Dialog {
  public createButton(): Button {
    return new WindowButton();
  }
}

class WebDialog extends Dialog {
  public createButton(): Button {
    return new HTMLButton();
  }
}

interface Button {
  onClick(): any;
  render(): string;
}

class HTMLButton implements Button {
  public onClick() {}
  public render(): string {
    return 'Result of HTMLButton impletments';
  }
}

class WindowButton implements Button {
  public onClick() {}
  public render(): string {
    return 'Result of WindowButton implements';
  }
}

// The implement works with an instancee of a button actions
function clientCode(dialog: Dialog) {
  console.log(
    "Button: `I'm not aware of the dialog's class, but is still works.",
  );
  console.log(dialog.render());
}

// The application picks a dialogs's type depending on the configuration
// or enviroment
console.log('App: Launched with the WindowDialog');
clientCode(new WindowDialog());
console.log('');

console.log('App: Launched with the WebDialog');
clientCode(new WebDialog());
console.log('');
