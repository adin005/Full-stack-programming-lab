    const axios = require("axios");

    jest.mock("axios");

    const {
    getHeadlinesByCountry,
    searchHeadlines
    } = require("../src/services/newsService");

    describe("News Service Unit Tests", () => {

    test("getHeadlinesByCountry formats response correctly", async () => {

        axios.get.mockResolvedValue({
        data: {
            totalResults: 1,
            articles: [
            {
                title: "Breaking News",
                source: { name: "BBC" },
                url: "https://example.com",
                publishedAt: "2025-01-01T00:00:00Z"
            }
            ]
        }
        });

        const result = await getHeadlinesByCountry("us");

        expect(result.country).toBe("US");
        expect(result.articles.length).toBe(1);
        expect(result.articles[0].title).toBe("Breaking News");

    });

    test("searchHeadlines returns keyword results", async () => {

        axios.get.mockResolvedValue({
        data: {
            totalResults: 1,
            articles: [
            {
                title: "AI News",
                source: { name: "CNN" },
                url: "https://example.com",
                publishedAt: "2025-01-01T00:00:00Z"
            }
            ]
        }
        });

        const result = await searchHeadlines("AI");

        expect(result.keyword).toBe("AI");
        expect(result.articlesReturned).toBe(1);
    });

    });