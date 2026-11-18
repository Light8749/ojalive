import { LiveSession } from "./sessions";

export type ChatMessage = {
  id: number;
  name: string;
  text: string;
  isVendor?: boolean;
};

// mock chat so the live page does not look empty
export function getStarterMessages(session: LiveSession): ChatMessage[] {
  return [
    { id: 1, name: "Chioma", text: "Good evening, I just joined" },
    { id: 2, name: "Tunde_B", text: "How much is delivery to Ibadan?" },
    {
      id: 3,
      name: session.vendor,
      text: "Ibadan is 3,500 naira, it gets there in 2 days",
      isVendor: true,
    },
    { id: 4, name: "Amaka", text: "Please show it closer to the camera" },
    { id: 5, name: "Ifeanyi", text: "Is the price negotiable?" },
    {
      id: 6,
      name: session.vendor,
      text: "Price is fixed for now but I will add a small gift for orders today",
      isVendor: true,
    },
    { id: 7, name: "Zainab", text: "Do you have it in another colour?" },
  ];
}
