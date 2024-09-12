import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const jestConfig: Config = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
    globalSetup: "jest-preset-angular/global-setup",
    moduleNameMapper: {
        // HACK: see https://github.com/jsverse/transloco/issues/704 to more details
        '^flat$': '<rootDir>/node_modules/flat/index.js',
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" })
    }
};

export default jestConfig;
