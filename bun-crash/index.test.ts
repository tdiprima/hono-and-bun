// bun test
import { describe, expect, test, beforeAll } from "bun:test";

beforeAll(() => {
    // Set up tests
});

describe("math", () => {
    test("addition", () => {
        expect(2 + 2).toBe(4);
    });
})