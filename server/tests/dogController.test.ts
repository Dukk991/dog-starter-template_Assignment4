import { describe, expect, test, vi } from "vitest"
import { getDogImage } from "../controllers/dogController"
import * as dogService from "../services/dogService"

describe("dogController", () => {
    test("pos: returns json", async () => {
        const mocks = {
            imageUrl: "http://images.dog.ceo/dog.jpg",
            status: "success"
        }

        vi.spyOn(dogService, "getRandomDogImage")
            .mockResolvedValue(mocks)
        
        const req = {} as any

        const res = {
            json: vi.fn()
        } as any

        await getDogImage(req, res)

        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: mocks
        })
    })
})