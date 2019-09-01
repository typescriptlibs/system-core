/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define(["require", "exports", "./index", "./System/Runtime/Environment.tests", "./System/Object.tests"], function (require, exports, index_1, Environment_tests_1, Object_tests_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Constructor
    //
    ////
    try {
        Environment_tests_1.default();
        Object_tests_1.default();
    }
    catch (catchedError) {
        console.error('🆘 ', catchedError);
        process.exit(-1);
    }
    finally {
        console.info('✅ ', index_1.TestUtility.getAssertCounter() + ' tests succeeded.');
    }
});
//# sourceMappingURL=index.tests.js.map