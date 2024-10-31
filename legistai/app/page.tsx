"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Modal from "@/components/MessageModal";
import NavItem from "@/components/NavItem";

export default function Home() {
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");

  const handleContinue = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !nameRef.current?.value ||
      !locationRef.current?.value ||
      !phoneRef.current?.value ||
      !emailRef.current?.value ||
      !descriptionRef.current?.value ||
      !ratingRef.current?.value
    ) {
      setError("Please complete all fields before proceeding.");
      return;
    }

    const formData = {
      name: nameRef.current.value,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      description: descriptionRef.current.value,
      rating: ratingRef.current.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:8111/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        const userId = data.id;
        setError(""); // Clear any previous error
        // save userId to local storage
        localStorage.setItem("userId", userId);
        router.push(`/dashboard/profile/basic-information/${userId}`);
      } else if (response.status === 400) {
        const errorData = await response.json();
        setError(errorData.message || "An error occurred. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  const closeModal = () => {
    setError(""); // Clear the error state to close the modal
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={handleContinue} className="border p-14 rounded-2xl">
        <h1 className="text-4xl font-bold mb-10 text-center">
          User Information
        </h1>
        <div className="flex flex-col mb-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            className="border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            ref={locationRef}
            className="border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            ref={phoneRef}
            className="border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            className="border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            ref={descriptionRef}
            className="border border-gray-300 rounded-md p-2"
          ></textarea>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            min={0}
            max={5}
            name="rating"
            id="rating"
            ref={ratingRef}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-around">
          <button className="bg-gray-500 text-white px-5 py-2 rounded-full">
            Register
          </button>

          <button
            type="submit"
            className="bg-[#3DBDBC] text-white px-5 py-2 rounded-full"
          >
            Continue
          </button>
        </div>
      </form>
      {error && <Modal message={error} onClose={closeModal} />}
    </div>
  );
}
