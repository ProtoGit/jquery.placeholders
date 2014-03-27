# jQuery Placeholder Plug-in

An HTML4 / XHTML compatible jQuery placeholder plug-in.

## Usage

### Mark-up

Just use the ``title`` attribute in place of the ``placeholder`` attribute:

    <input type="text" title="Placeholder text..." />

### jQuery

Use the plug-in with a specific form:

    // Specific forms
    $('#contact-form').placeholders();

Use with all forms:

    // All forms
    $('form').placeholders();