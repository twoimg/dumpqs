import { QuestionsResponse } from "@/types";

export const dummyQAs = [
  {
    id: "qa1",
    content: "What's the tea on Taylor Swift and Travis Kelce?",
    answerer: {
      username: "Cady",
      avatar: "https://github.com/cady.png",
    },
    answers: [
      {
        id: 1,
        content:
          "mother taylor said NFL wife era and hasn't missed since 💅 the way she's collecting men like infinity stones... we have to stan 😮‍💨✨",
        created_at: new Date("2024-01-15"),
      },
    ],
    created_at: new Date("2024-01-15"),
    is_anonymous: true,
    status: "answered" as const,
  },
  {
    id: "qa2",
    content: "What's your favorite memory from high school?",
    answerer: {
      username: "Cady",
      avatar: "https://github.com/cady.png",
    },
    answers: [
      {
        id: 2,
        content:
          "skipping class to get starbies with the girlies 🤪 those were the days fr fr",
        created_at: new Date("2024-01-14"),
      },
    ],
    created_at: new Date("2024-01-14"),
    is_anonymous: false,
    status: "answered" as const,
  },
  {
    id: "qa3",
    content: "What's your biggest ick?",
    answerer: {
      username: "Cady",
      avatar: "https://github.com/cady.png",
    },
    answers: [
      {
        id: 3,
        content: "when he thinks marvel movies are peak cinema... like bffr 🙄",
        created_at: new Date("2024-01-13"),
      },
    ],
    created_at: new Date("2024-01-13"),
    is_anonymous: true,
    status: "answered" as const,
  },
  {
    id: "qa4",
    content: "What's your go-to Starbucks order?",
    answerer: {
      username: "Cady",
      avatar: "https://github.com/cady.png",
    },
    answers: [
      {
        id: 4,
        content:
          "iced white mocha with sweet cream cold foam and extra caramel drizzle... basic? maybe. delicious? absolutely 💅",
        created_at: new Date("2024-01-12"),
      },
    ],
    created_at: new Date("2024-01-12"),
    is_anonymous: false,
    status: "answered" as const,
  },
  {
    id: "qa5",
    content: "What's your biggest hot take?",
    answerer: {
      username: "Cady",
      avatar: "https://github.com/cady.png",
    },
    created_at: new Date("2024-01-11"),
    is_anonymous: true,
    status: "unanswered" as const,
  },
];
