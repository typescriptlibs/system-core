/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define(["require", "exports", "../../index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Tests
    //
    ////
    function test() {
        test_globalNamespace();
        test_isClient();
        test_isServer();
        test_isWorker();
        test_maxSafeInteger();
        test_minSafeInteger();
        test_newLine();
        test_newLineAll();
    }
    exports.test = test;
    function test_globalNamespace() {
        index_1.TestUtility.assertEqual(global, index_1.Environment.globalNamespace, 'Environment.globalNamespace should be equal to global.');
    }
    function test_isClient() {
        index_1.TestUtility.assertEqual(index_1.Environment.isClient, false, 'Environment.isClient should be false.');
    }
    function test_isServer() {
        index_1.TestUtility.assertEqual(index_1.Environment.isServer, true, 'Environment.isServer should be true.');
    }
    function test_isWorker() {
        index_1.TestUtility.assertEqual(index_1.Environment.isWorker, false, 'Environment.isWorker should be false.');
    }
    function test_maxSafeInteger() {
        index_1.TestUtility.assertEqual(index_1.Environment.maxSafeInteger, Number.MAX_SAFE_INTEGER, 'Environment.maxSafeInteger should be equal to Number.MAX_SAFE_INTEGER.');
    }
    function test_minSafeInteger() {
        index_1.TestUtility.assertEqual(index_1.Environment.minSafeInteger, Number.MIN_SAFE_INTEGER, 'Environment.minSafeInteger should be equal to Number.MIN_SAFE_INTEGER.');
    }
    function test_newLine() {
        index_1.TestUtility.assertEqual(index_1.Environment.newLine, '\n', 'Environment.newLine should be POSIX standard.');
    }
    function test_newLineAll() {
        index_1.TestUtility.assertDeepEqual(index_1.Environment.newLineAll, ['\r\n', '\n', '\r'], 'Environment.newLineAll should contain new line characters for Windows, POSIX, and MacOS.');
    }
    ////
    //
    //  Export
    //
    ////
    exports.default = test;
});
//# sourceMappingURL=Environment.tests.js.map