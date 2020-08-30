function App() {
    this.formVisible = ko.observable(true);
    this.resultVisible = ko.observable(false);
    this.height = ko.observable().extend({
        validation: {
            message: "Enter valid input",
            validator: function (value) {
                return value > 0;
            }
        }
    });
    this.weight = ko.observable().extend({
        validation: {
            message: "Enter valid input",
            validator: function (value) {
                return value > 0;
            }
        }
    });
    this.bmi = ko.observable();
    this.comment = ko.observable();

    this.submit = function () {
        let m = this.height() / 100;
        let w = this.weight();
        this.errors = ko.validation.group(this);
        if (!this.errors().length)
            {
                result = w / (m * m);
                result = Math.round(result);
                this.bmi(result);
                this.formVisible(false);
                if (this.bmi() < 18)
                    this.comment("🙄  underweight");
                else if (this.bmi() >= 18 && this.bmi() < 25)
                    this.comment("🤩 normal");
                else if (this.bmi() >= 25 && this.bmi() < 30)
                    this.comment("😐 overweight");
                else
                    this.comment("😐 obese");
                this.resultVisible(true);
            }
        
    };

    this.close = function() {
        location.replace('index.html');
    }
}

ko.applyBindings(new App());