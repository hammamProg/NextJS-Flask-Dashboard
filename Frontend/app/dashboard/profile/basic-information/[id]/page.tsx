"use client";

import { useEffect, useState, use } from "react";
import BasicProfileInfoCard from "@/components/profile-components/BasicProfileInfoCard";

const Page = ({
  params: promiseParams,
}: {
  params: Promise<{ id: string }>;
}) => {
  const params = use(promiseParams);

  const [user, setUser] = useState<{
    description: string;
    email: string;
    id: number;
    location: string;
    name: string;
    phone: string;
    rating: string;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8111/user/${params.id}`);

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error(
            `Failed to fetch user with status ${response.status}`
          );
        }
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchUser();
  }, [params.id]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {user ? (
        <BasicProfileInfoCard
          username={user.name}
          rating={user.rating}
          link=""
          location={user.location}
          phone_number={user.phone}
          email_address={user.email}
          description={user.description}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
