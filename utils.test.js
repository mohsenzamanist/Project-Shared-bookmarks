import { sortBookmarksByDate } from "./utils";

test("returns sorted bookmarks reverse chronologically", () => {
  const bookmark = [
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
