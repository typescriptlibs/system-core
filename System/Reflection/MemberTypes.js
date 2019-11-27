/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Enum", "../../package"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Import
    //
    ////
    var Enum_1 = require("../Enum");
    var package_1 = require("../../package");
    ////
    //
    //  Enums
    //
    ////
    var MemberTypes = /** @class */ (function (_super) {
        __extends(MemberTypes, _super);
        function MemberTypes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MemberTypes_1 = MemberTypes;
        var MemberTypes_1;
        ////
        //
        //  Static Properties
        //
        ////
        MemberTypes.Constructor = new MemberTypes_1(1);
        MemberTypes.Event = new MemberTypes_1(2);
        MemberTypes.Field = new MemberTypes_1(4);
        MemberTypes.Method = new MemberTypes_1(8);
        MemberTypes.Property = new MemberTypes_1(16);
        MemberTypes.TypeInfo = new MemberTypes_1(32);
        MemberTypes.Custom = new MemberTypes_1(64);
        MemberTypes.NestedType = new MemberTypes_1(128);
        MemberTypes = MemberTypes_1 = __decorate([
            package_1.default
        ], MemberTypes);
        return MemberTypes;
    }(Enum_1.default));
    exports.MemberTypes = MemberTypes;
    ////
    //
    //  Export
    //
    ////
    exports.default = MemberTypes;
});
//# sourceMappingURL=MemberTypes.js.map