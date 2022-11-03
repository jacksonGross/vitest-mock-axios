import { describe, expect, it, vi } from 'vitest';

import MockAxios from "../lib/index";
import { getData } from "./cancel";
import Cancel from "../lib/cancel/Cancel";

describe("cancel", () => {
    it("cancels request (shouldCancel = true)", () => new Promise(done => {
        const thenFn = vi.fn();
        const catchFn = vi.fn();
        const promise = getData(true).then(thenFn).catch(catchFn)

        setTimeout(async () => {
            MockAxios.mockResponse({data: "example response"}, undefined, true);
            await promise;
            expect(thenFn).not.toHaveBeenCalled()
            expect(catchFn).toHaveBeenCalledWith(expect.any(Cancel))
            done()
        })
    }))

    it("does not cancel request (shouldCancel = false)", () => new Promise(done => {
        const thenFn = vi.fn();
        const catchFn = vi.fn();
        const promise = getData(false).then(thenFn).catch(catchFn)

        setTimeout(async () => {
            MockAxios.mockResponse({data: "example response"}, undefined, true);
            await promise;
            expect(thenFn).toHaveBeenCalled()
            expect(catchFn).not.toHaveBeenCalled()
            done()
        })
    }))
})
