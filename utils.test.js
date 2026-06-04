import { sortBookmarksByDate, formatTimestamp } from "./utils";

test("returns sorted bookmarks reverse chronologically", () => {
  const bookmark = [
    {
      title: "Google",
      url: "https://google.com",
      description: "Goes to google.com",
      timeStamp: "2026-06-02T23:19:57.738Z", // 3rd
      likes: 0,
    },
    {
      title: "yahoo",
      url: "https://yahoo.com",
      description: "Goes to yahoo.com",
      timeStamp: "2026-06-02T23:17:19.037Z", // 4th (oldest)
      likes: 2,
    },
    {
      title: "Code Your Future",
      url: "https://codeyourfuture.io",
      description: "Goes to cyf",
      timeStamp: "2026-06-02T23:21:02.142Z", // 1st (newest)
      likes: 0,
    },
    {
      title: "MSN",
      url: "https://msn.com",
      description: "Goes to MSN.com",
      timeStamp: "2026-06-02T23:20:25.082Z", // 2nd
      likes: 0,
    },
  ];

  const expectedResult = [
    {
      title: "Code Your Future",
      url: "https://codeyourfuture.io",
      description: "Goes to cyf",
      timeStamp: "2026-06-02T23:21:02.142Z",
      likes: 0,
    },
    {
      title: "MSN",
      url: "https://msn.com",
      description: "Goes to MSN.com",
      timeStamp: "2026-06-02T23:20:25.082Z",
      likes: 0,
    },
    {
      title: "Google",
      url: "https://google.com",
      description: "Goes to google.com",
      timeStamp: "2026-06-02T23:19:57.738Z",
      likes: 0,
    },
    {
      title: "yahoo",
      url: "https://yahoo.com",
      description: "Goes to yahoo.com",
      timeStamp: "2026-06-02T23:17:19.037Z",
      likes: 2,
    },
  ];

  expect(sortBookmarksByDate(bookmark)).toEqual(expectedResult);
});

test("formats ISO timestamp to readable date", () => {
  const result = formatTimestamp("2026-06-02T23:21:02.142Z");
  expect(result).toContain("2026");
  expect(result).toContain("June");
  expect(result).toContain("2");
});
