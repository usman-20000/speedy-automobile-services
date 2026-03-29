// components/CallButton.tsx
"use client"; // This is a Client Component

export default function CallButton() {
  const handleCallClick = () => {
    window.location.href = "tel:+971505993679";
  };

  return (
    <button
      onClick={handleCallClick}
      className="bg-black text-white px-6 py-3 rounded-lg"
    >
      Call Now
    </button>
  );
}