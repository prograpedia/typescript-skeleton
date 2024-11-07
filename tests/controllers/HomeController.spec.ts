import "reflect-metadata";
import {describe, it, beforeAll as _beforeAll, afterAll as _afterAll, expect} from '@jest/globals';
import HomeController from "../../src/controllers/HomeController.ts";

describe('HomeController', () => {
    it('GET / should return a message', () => {
        const response = HomeController.prototype.index({} as Request)
        expect(response.message).toBe("Hello, World!");
    })
    it('POST /upload should return a message', () => {
        const response = HomeController.prototype.upload({} as Request, [] as [])
        expect(response.message).toBe("0 files uploaded");
    })
})
