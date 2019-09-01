/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export declare module TestUtility {
    function assertDeepEqual<T>(value: T, expected: T, errorMessage?: string): void;
    function assertEqual<T>(value: T, expected: T, errorMessage?: string): void;
    function assertNotEqual<T>(value: T, notExpected: T, errorMessage?: string): void;
    function clear(): void;
    function getAssertCounter(): number;
}
export default TestUtility;
