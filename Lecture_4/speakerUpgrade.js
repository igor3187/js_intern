class Speaker {
    constructor(name, verb) {
        this.name = name;
        this.verb = verb || 'says';
    }

    speak(text) {
        console.log(this.name + " " + this.verb + " ," + text + ",");
        return text;
    }
}

class Shouter extends Speaker {
    constructor(name, verb) {
        super(name, verb);
        this._name = name;
        this._verb = verb;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get verb() {
        return this._verb;
    }

    set verb(value) {
        this._verb = value;
    }

    speak(text) {
        return super.speak.call(this, text.toUpperCase());
    }
}

let shouter = new Shouter("Dr. Loudmouth", "speak");
shouter.speak(`hello there`);
