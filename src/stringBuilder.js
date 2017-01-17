var stringProcessor = (function () {
    function stringProcessor(input) {
        //input = data;
        this.data = input;
    }
    stringProcessor.prototype.getString = function () {
        return this.data;
    };
    stringProcessor.prototype.setString = function (data) {
        this.data = data;
    };
    stringProcessor.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 0; i < (chars.length - 1) / 2; i++) {
            var cTmp = chars[i];
            chars[i] = chars[chars.length - 1 - i];
            chars[chars.length - 1 - i] = cTmp;
        }
        this.data = chars.join('');
    };
    return stringProcessor;
}());
