const Gio = imports.gi.Gio;

try {
    const file = Gio.File.new_for_path('data/week1.js');
    const [, contents] = file.load_contents(null);
    const decoder = new TextDecoder('utf-8');
    const code = decoder.decode(contents);
    eval(code);
    print("Success!");
} catch (e) {
    print("Error message: " + e.message);
    print("Error line: " + e.lineNumber);
    print("Error column: " + e.columnNumber);
    print("Error stack: " + e.stack);
}
