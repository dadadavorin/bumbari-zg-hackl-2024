"use client";
import useSWR from "swr";
import { fetcher } from "../../../fetchers/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { swrKeys } from "../../../fetchers/swrKeys";

interface IAuthRedirectProps {
  to: string;
  condition: "loggedIn" | "loggedOut";
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  const router = useRouter();
  const { data, isLoading } = useSWR(swrKeys.me, fetcher<{ uuid: string }>);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!data && condition === "loggedOut") {
      router.push(to);
    }

    if (data && condition === "loggedIn") {
      console.log("Logged in, redirecting");
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;
};
