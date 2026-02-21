import { beforeEach, describe, expect, test, vi } from "vitest"
import { getRandomDogImage } from "../services/dogService"

describe("dogService", () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    //1. POS, 2p
    test("pos: return a dog image successfully", async () => {
        const mocks = {
            message: "http://images.dog.ceo/dog.jpg",
            status: "success"
        }

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => mocks
        } as any)

        const result = await getRandomDogImage()
        expect(result.imageUrl).toBe(mocks.message)
        expect(result.status).toBe(mocks.status)
        expect(fetch).toHaveBeenCalledOnce()
    })

    //2. NEG, 2p
    test("neg: throws error when req fails", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            satus: 500
        } as any)

        await expect(getRandomDogImage())
            .rejects
            .toThrow("Failed to fetch dog image: Dog API returned status undefined")
    })
})