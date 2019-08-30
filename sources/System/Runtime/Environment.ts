/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Classes
//
////

/**
 * Provides information and functions for the current runtime session.
 */
export module Environment
{
    ////
    //
    //  Constants
    //
    ////

    /**
     * Return the bigint class of the runtime engine.
     */
    export const esBigInt: typeof BigInt = BigInt;

    /**
     * Return the boolean class of the runtime engine.
     */
    export const esBoolean: typeof Boolean = Boolean;

    /**
     * Return the number class of the runtime engine.
     */
    export const esNumber: typeof Number = Number;

    /**
     * Returns the object class of the runtime engine.
     */
    export const esObject: typeof Object = Object;

    /**
     * Return the string class of the runtime engine.
     */
    export const esString: typeof String = String;

    /**
     * Return the symbol class of the runtime engine.
     */
    export const esSymbol: typeof Symbol = Symbol;

    /**
     * Returns the global namespace.
     */
    export const globalNamespace: typeof globalThis = ( globalThis || window || self || global );

    /**
     * Returns true, if the runtime engine is of client type.
     */
    export const isClient: boolean = ( window instanceof Window );

    /**
     * Returns true, if the runtime engine is of server type.
     */
    export const isServer: boolean = ( global instanceof Object );

    /**
     * Returns true, if the runtime engine is of worker type.
     */
    export const isWorker: boolean = ( self instanceof Worker );

    /**
     * Returns the largest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    export const maxSafeInteger: number = 0x1FFFFFFFFFFFFF;

    /**
     * Returns the lowest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    export const minSafeInteger: number = -0x1FFFFFFFFFFFFF;

    /**
     * Returns the newline string for this environment.
     */
    export const newLine: string = '\n';

    /**
     * Returns an array of possible newline strings.
     */
    export const newLineAll: string[] = ['\n', '\r', '\r\n'];
}

////
//
//  Export
//
////

export default Environment;
