/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { IPackageClassDecorator } from './System/Runtime/Package';
/**
 * Returns the package name.
 */
export declare const PackageName: string;
/**
 * Returns the package namespace.
 */
export declare const PackageNamespace: string;
/**
 * Returns the internal class decorator of the package.
 * @private
 */
export declare const PackageClassDecorator: IPackageClassDecorator;
export default PackageClassDecorator;
