(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Environment", "./Namespace", "./Package", "./RuntimeUtility", "./TestUtility"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./Environment"));
    __export(require("./Namespace"));
    __export(require("./Package"));
    __export(require("./RuntimeUtility"));
    __export(require("./TestUtility"));
});
//# sourceMappingURL=index.js.map