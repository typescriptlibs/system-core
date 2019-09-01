/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/**
 * Provides information and functions for the current runtime session.
 */
export declare module Environment {
    /**
     * Declares the most basic types.
     */
    type BasicType = (object | Function | PrimitiveType);
    /**
     * Declares a constructor with an index.
     */
    type ConstructorType = (Function & Record<string, unknown>);
    /**
     * Declares the primitive value types. These value types get converted by
     * the runtime engine to a full basic type, if necessary.
     */
    type PrimitiveType = (bigint | boolean | number | string | symbol);
    /**
     * Returns the global namespace.
     */
    const globalNamespace: typeof globalThis;
    /**
     * Returns true, if the runtime engine is of client type.
     */
    const isClient: boolean;
    /**
     * Returns true, if the runtime engine is of worker type.
     */
    const isWorker: boolean;
    /**
     * Returns true, if the runtime engine is of server type.
     */
    const isServer: boolean;
    /**
     * Returns the largest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    const maxSafeInteger: number;
    /**
     * Returns the lowest integer float number that can be used without
     * precision problems in every runtime engine.
     */
    const minSafeInteger: number;
    /**
     * Returns the newline string for this environment.
     */
    const newLine: string;
    /**
     * Returns an array of possible newline strings.
     */
    const newLineAll: string[];
}
export default Environment;
