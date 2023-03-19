import {describe, expect, it, expectTypeOf} from "vitest";
import {uniqueId} from "@/utils/uniqueID";

describe('unique ID', () => {
    it('new ID ', () => {
        expect(uniqueId())
    });
})
