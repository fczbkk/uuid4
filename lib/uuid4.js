/*
UUID4, v1.0.0
by Riki Fridrich <riki@fczbkk.com> (https://github.com/fczbkk)
https://github.com/fczbkk/uuid4
*/
(function() {
    var UUID4, root;
    UUID4 = {
        validate: function(id) {
            var re;
            re = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/;
            return re.test(id);
        },
        generate: function() {
            var char, getRandomChar, pattern, replacements, result, _i, _len, _ref;
            pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            replacements = {
                x: "0123456789abcdef",
                y: "89ab"
            };
            getRandomChar = function(char_list) {
                var random_position;
                random_position = Math.floor(Math.random() * char_list.length);
                return char_list.charAt(random_position);
            };
            result = "";
            _ref = pattern.split("");
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                char = _ref[_i];
                result += replacements[char] != null ? getRandomChar(replacements[char]) : char;
            }
            return result;
        }
    };
    root = typeof exports === "object" ? exports : this;
    root.UUID4 = UUID4;
}).call(this);