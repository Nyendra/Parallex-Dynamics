"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function LowercaseRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && /[A-Z]/.test(pathname)) {
      const lower = pathname.toLowerCase();
      const query = searchParams && searchParams.toString() ? `?${searchParams.toString()}` : "";
      router.replace(`${lower}${query}`);
    }
  }, [pathname, router, searchParams]);

  return null;
}
