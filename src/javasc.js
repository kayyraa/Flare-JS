function format(type, data, get) {
    const types = ["size", "decimal"];

    if (type in types) {
        if (type == types[0]) {
            var bytes = data;
            var kilo = bytes / 1000;
            var mega = kilo / 1000;
            var giga = mega / 1000;
            var tera = giga / 1000;

            const list = [bytes, kilo, mega, giga, tera];

            return list[get];
        }
    }
}

export { format }