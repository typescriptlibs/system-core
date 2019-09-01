/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define(["require", "exports", "./Environment"], function (require, exports, Environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Classes
    //
    ////
    /**
     * Provides special functions for the runtime session.
     */
    var RuntimeUtility;
    (function (RuntimeUtility) {
        ////
        //
        //  Constants
        //
        ////
        var _disposableCleanUpThreshold = 100;
        var _generatedStringHashCodeSalt = (1 + (Math.random() * (Environment_1.default.maxSafeInteger - 1)));
        ////
        //
        //  Constructor
        //
        ////
        initialize();
        ////
        //
        //  Variables
        //
        ////
        var _disposableCleanUpCountdown = _disposableCleanUpThreshold;
        var _disposableRegistry = {};
        var _generatedUniqueHashCodeCounter = Environment_1.default.minSafeInteger;
        ////
        //
        //  Functions
        //
        ////
        /**
         * Cleans up registered disposable objects.
         */
        function cleanUpDisposables() {
            Object
                .keys(_disposableRegistry)
                .forEach(function (id) {
                if (_disposableRegistry[id].isDisposed === true) {
                    delete _disposableRegistry[id];
                }
            });
        }
        /**
         * Dispose registered objects.
         */
        function dispose() {
            Object
                .values(_disposableRegistry)
                .forEach(function (object) {
                if (object.isDisposed === false) {
                    object.dispose();
                }
            });
        }
        /**
         * Terminates the current runtime session and returns an exit code to the
         * runtime engine.
         *
         * @param exitCode
         * Exit code for the runtime engine.
         */
        function exit(exitCode) {
            if (exitCode === void 0) { exitCode = 0; }
            dispose();
            if (Environment_1.default.isServer) {
                Environment_1.default.globalNamespace.process.exit(exitCode);
            }
            else {
                Environment_1.default.globalNamespace.close();
            }
        }
        RuntimeUtility.exit = exit;
        /**
         * Generates and returns a unique code for a string. This code is only
         * unique during the current runtime session.
         *
         * @param str
         * String to generate the unique code of.
         */
        function generateStringHashCode(str) {
            var hash1 = 5381;
            var hash2 = hash1;
            var len = str.length;
            while (len > 2) {
                hash1 = ((hash1 << 5) + hash1 + (hash1 >> 27)) ^ str.charCodeAt(len - 1);
                hash2 = ((hash2 << 5) + hash2 + (hash2 >> 27)) ^ str.charCodeAt(len - 2);
                len -= 2;
            }
            if (len > 0) {
                hash1 = ((hash1 << 5) + hash1 + (hash1 >> 27)) ^ str.charCodeAt(len - 1);
            }
            hash1 ^= _generatedStringHashCodeSalt;
            return (hash1 + (hash2 * 1566083941));
        }
        RuntimeUtility.generateStringHashCode = generateStringHashCode;
        /**
         * Generates and returns a unique code for an object instances. This code is
         * only unique during the current runtime session.
         */
        function generateUniqueHashCode() {
            return ++_generatedUniqueHashCodeCounter;
        }
        RuntimeUtility.generateUniqueHashCode = generateUniqueHashCode;
        /**
         * Initialize runtime utility.
         */
        function initialize() {
            if (Environment_1.default.isServer) {
                initializeServer();
            }
            else {
                initializeClient();
            }
        }
        /**
         * Initialize client runtime.
         */
        function initializeClient() {
            Environment_1.default.globalNamespace.addEventListener('beforeunload', dispose);
        }
        /**
         * Initialize server runtime.
         */
        function initializeServer() {
            var signal = function () {
                exit();
            };
            process.on('exit', exit);
            process.on('SIGBREAK', signal);
            process.on('SIGHUP', signal);
            process.on('SIGINT', signal);
            process.on('SIGUSR1', signal);
            process.on('SIGUSR2', signal);
            process.on('SIGTERM', signal);
        }
        /**
         * Registers a disposable object for handling of unmanaged data on runtime
         * termination. There is no guarantee that the dispose function gets called,
         * because a runtime engine can be forced to terminate immediately.
         *
         * @param object
         * Disposable object to handle.
         */
        function registerDisposable(object) {
            _disposableRegistry[object.getHashCode().toString(16)] = object;
            if (--_disposableCleanUpCountdown === 0) {
                cleanUpDisposables();
                _disposableCleanUpCountdown = _disposableCleanUpThreshold;
            }
        }
        RuntimeUtility.registerDisposable = registerDisposable;
    })(RuntimeUtility = exports.RuntimeUtility || (exports.RuntimeUtility = {}));
    ////
    //
    //  Export
    //
    ////
    exports.default = RuntimeUtility;
});
//# sourceMappingURL=RuntimeUtility.js.map