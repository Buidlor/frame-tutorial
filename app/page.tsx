import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQMLkjV47tnpHFyHpMQwbi3F9oDwRg7deMXbNS9QeU6xb/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});
//update metadata with frame
export const metadata: Metadata = {
  title: "twin cats",
  description: "A frame telling the story twin cats",
  openGraph: {
    title: "twin cats",
    description: "A frame telling the story twin cats",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQMLkjV47tnpHFyHpMQwbi3F9oDwRg7deMXbNS9QeU6xb/0.jpg`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Twin cats story</h1>
    </>
  );
}
