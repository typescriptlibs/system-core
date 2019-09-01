/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import IDisposable from '../IDisposable';
/**
 * Provides special functions for the runtime session.
 */
export declare module RuntimeUtility {
    /**
     * Terminates the current runtime session and returns an exit code to the
     * runtime engine.
     *
     * @param exitCode
     * Exit code for the runtime engine.
     */
    function exit(exitCode?: number): void;
    /**
     * Generates and returns a unique code for a string. This code is only
     * unique during the current runtime session.
     *
     * @param str
     * String to generate the unique code of.
     */
    function generateStringHashCode(str: string): number;
    /**
     * Generates and returns a unique code for an object instances. This code is
     * only unique during the current runtime session.
     */
    function generateUniqueHashCode(): number;
    /**
     * Registers a disposable object for handling of unmanaged data on runtime
     * termination. There is no guarantee that the dispose function gets called,
     * because a runtime engine can be forced to terminate immediately.
     *
     * @param object
     * Disposable object to handle.
     */
    function registerDisposable(object: IDisposable): void;
}
export default RuntimeUtility;
