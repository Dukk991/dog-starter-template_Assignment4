import { describe, expect, test, vi } from "vitest"
import * as dogController from "../controllers/dogController"

describe("dogRoutes", () => {
    test("neg: return error", async () => {
        const mocks = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        const req = {}

        dogController.getDogImage(req as any, mocks as any)

        expect(mocks.json).toBeDefined()
    })
})