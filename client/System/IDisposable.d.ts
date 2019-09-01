/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Object from './Object';
/**
 * Provides an interface to dispose unmanaged data. The runtime engine dispose
 * unmanaged data during session exit.
 */
export interface IDisposable extends Object {
    /**
     * Returns true, if the dispose function has been called.
     */
    isDisposed: boolean;
    /**
     * The clean up function to dispose unmanaged data.
     */
    dispose(): void;
}
export default IDisposable;
