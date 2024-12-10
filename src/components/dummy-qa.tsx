import QAcard from "@/components/qa-card";

const dummyQA = {
  id: 1,
  content: "What's todays date?",
  answers: [
    {
      id: 1,
      content: "It's October 3rd",
      created_at: "12-2024-24",
    },
  ],
  is_anonymous: true,

  answerer: {
    username: "Cady",
    email: "https://github.com/cady.png",
  },

  created_at: new Date(Date.now() - 10 * 60 * 1000),
  status: "answered" as const,
};

export default function DummyQA() {
  return <QAcard {...dummyQA} />;
}
