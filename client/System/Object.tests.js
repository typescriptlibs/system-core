/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define(["require", "exports", "../index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Tests
    //
    ////
    function test() {
        test_getHashCode();
        test_getType();
    }
    exports.test = test;
    function test_getHashCode() {
        var object = new index_1.OBJECT();
        index_1.TestUtility.assertEqual(object.getHashCode() <= -1, true, 'Object.getHashCode should return negative value.');
    }
    function test_getType() {
        var object = new index_1.OBJECT();
        var type = object.getType();
        index_1.TestUtility.assertEqual(type.fullName, '@tsl/system-core/System.Object', 'Object.getType() should return fullName.');
    }
    ////
    //
    //  Export
    //
    ////
    exports.default = test;
});
//# sourceMappingURL=Object.tests.js.map