"use client"; // <-- add this at the very top

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface User {
  id: number;
  name: string;
  email: string;
  roles?: { id: number; slug: string }[];
  permissions?: string[];
}

export function useAdminCurrentUser() {
  const router = useRouter(); // now safe
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminAuthToken");
    const userData = localStorage.getItem("adminAuthUser");

    if (!token || !userData) {
      router.push("/admin/login"); // redirect
      return;
    }

    try {
      const parsedUser: User = JSON.parse(userData);
      setUser(parsedUser);
    } catch (err) {
      console.error("Failed to parse user:", err);
      localStorage.removeItem("adminAuthToken");
      localStorage.removeItem("adminAuthUser");
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("adminAuthUser");
    router.push("/admin/login");
  };

  return { user, loading, logout };
}
