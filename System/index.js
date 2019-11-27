(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Enum", "./Object", "./Object", "./Reflection/index", "./Runtime/index", "./Type"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./Enum"));
    __export(require("./Object"));
    var Object_1 = require("./Object");
    exports.Object = Object_1.OBJECT;
    __export(require("./Reflection/index"));
    __export(require("./Runtime/index"));
    __export(require("./Type"));
});
//# sourceMappingURL=index.js.map