'use client'

import { useState } from "react";
import LoginScreen from "@/components/login";

export default function Home({}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <LoginScreen
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="md">
      </LoginScreen>
    </div>
);
}
