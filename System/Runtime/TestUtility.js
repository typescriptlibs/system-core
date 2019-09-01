"use strict";
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
Object.defineProperty(exports, "__esModule", { value: true });
////
//
//  Modules
//
////
var TestUtility;
(function (TestUtility) {
    ////
    //
    //  Properties
    //
    ////
    var _assertCounter = 0;
    ////
    //
    //  Functions
    //
    ////
    function assertDeepEqual(value, expected, errorMessage) {
        if (value !== null && expected !== null && typeof value === 'object' && typeof expected === 'object') {
            assertEqual(JSON.stringify(value, jsonFormatter, '  '), JSON.stringify(expected, jsonFormatter, '  '), errorMessage);
        }
        else {
            assertEqual(value, expected);
        }
    }
    TestUtility.assertDeepEqual = assertDeepEqual;
    function assertEqual(value, expected, errorMessage) {
        if (typeof value !== typeof expected || value !== expected) {
            throw new Error((errorMessage || 'Values should be equal.') +
                '\nExpected: ' + expected +
                '\nActual: ' + value);
        }
        ++_assertCounter;
    }
    TestUtility.assertEqual = assertEqual;
    function assertNotEqual(value, notExpected, errorMessage) {
        if (value === notExpected) {
            throw new Error((errorMessage || 'Values should not be equal.') +
                '\nNot Expected: ' + notExpected +
                '\nActual: ' + value);
        }
        ++_assertCounter;
    }
    TestUtility.assertNotEqual = assertNotEqual;
    function clear() {
        _assertCounter = 0;
    }
    TestUtility.clear = clear;
    function getAssertCounter() {
        return _assertCounter;
    }
    TestUtility.getAssertCounter = getAssertCounter;
    function jsonFormatter(key, value) {
        if (typeof value !== 'string') {
            return value;
        }
        return value.replace('\n', '\\n').replace('\r', '\\r');
    }
})(TestUtility = exports.TestUtility || (exports.TestUtility = {}));
////
//
//  Export
//
////
exports.default = TestUtility;
//# sourceMappingURL=TestUtility.js.map