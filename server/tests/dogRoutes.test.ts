import { describe, expect, test, vi } from "vitest"
import * as dogController from "../controllers/dogController"

describe("dogRoutes", () => {

    test("pos: controller call", async () => {
        const mocks = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        const req = {}

        vi.spyOn(dogController, "getDogImage")
            .mockImplementation(() => ({} as any))

        dogController.getDogImage(req as any, mocks as any)

        expect(dogController.getDogImage).toHaveBeenCalled()
    })
})