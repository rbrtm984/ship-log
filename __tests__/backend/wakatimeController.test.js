const request = require('supertest');
const app = require('../../server/server.js');

describe('wakatimeController Tests', () => {
    it('should fetch data for a valid project', async () => {
        const res = await request(app).get('/api/wakatime?projectName=wakasmith');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('name');
    });
});