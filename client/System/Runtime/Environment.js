/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Classes
    //
    ////
    /**
     * Provides information and functions for the current runtime session.
     */
    var Environment;
    (function (Environment) {
        ////
        //
        //  Types
        //
        ////
        ////
        //
        //  Constants
        //
        ////
        /**
         * Returns the global namespace.
         */
        Environment.globalNamespace = (typeof globalThis !== 'undefined' ? globalThis :
            typeof self !== 'undefined' ? self :
                global);
        /**
         * Returns true, if the runtime engine is of client type.
         */
        Environment.isClient = (typeof self !== 'undefined' && self instanceof Window);
        /**
         * Returns true, if the runtime engine is of worker type.
         */
        Environment.isWorker = (typeof self !== 'undefined' && self instanceof Worker);
        /**
         * Returns true, if the runtime engine is of server type.
         */
        Environment.isServer = (!Environment.isClient && !Environment.isWorker);
        /**
         * Returns the largest integer float number that can be used without
         * precision problems in every runtime engine.
         */
        Environment.maxSafeInteger = 0x1FFFFFFFFFFFFF;
        /**
         * Returns the lowest integer float number that can be used without
         * precision problems in every runtime engine.
         */
        Environment.minSafeInteger = -0x1FFFFFFFFFFFFF;
        /**
         * Returns the newline string for this environment.
         */
        Environment.newLine = '\n';
        /**
         * Returns an array of possible newline strings.
         */
        Environment.newLineAll = ['\r\n', '\n', '\r'];
    })(Environment = exports.Environment || (exports.Environment = {}));
    ////
    //
    //  Export
    //
    ////
    exports.default = Environment;
});
//# sourceMappingURL=Environment.js.map