import 'reflect-metadata';
import * as http from "node:http";
import supertest from "supertest";
import {describe, it, beforeAll, afterAll, expect} from "@jest/globals"
import app from "../src/app.ts";

describe('app', () => {
    let server: http.Server;
    let request: supertest.Agent;
    beforeAll(() => {
        request = supertest((server = app.listen(3000)));
    })
    afterAll(() => {
        server.close();
    })
    it('should start the app', (): void => {
        expect(server.listening).toBe(true)
    });
    it('GET / should return a 200 response', async () => {
        return request
            .get('/')
            .expect(200)
            .then((response: supertest.Response) => {
                expect(response.body.message).toBe("Hello, World!")
            })
    });
    it('POST /upload should return a 200 response', async () => {
        return request
            .post('/upload')
            .attach('file', 'package.json')
            .expect(200)
            .then((response: supertest.Response) => {
                expect(response.body.message).toBe("1 files uploaded")
            })
    })
});
