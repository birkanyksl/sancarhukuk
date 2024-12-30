"use client";
import practiceDetailsEN from "@/data/practiceDetailsEN";
import practiceDetails from "@/data/practiceDetails";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const LocaleSwitcherSelect = ({ children, defaultValue, label }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = ({ target: { value: newLocale } }) => {
    const { singlePractice } = params || {};
    const isPracticeDetailPage = pathname.includes(singlePractice);

    // Update locale for the current route
    startTransition(() => {
      router.replace({ pathname, params }, { locale: newLocale });
    });

    // If on a single practice page, replace single practice with the new practice from the new locale and match it with the id
    if (isPracticeDetailPage) {
      const detail = newLocale === "tr" ? practiceDetails : practiceDetailsEN;

      const otherDetail =
        newLocale === "tr" ? practiceDetailsEN : practiceDetails;

      // go to the detail object and find the practice with the id of the current singlePractice
      const newPractice = Object.keys(detail).find(
        (practice) => detail[practice].id === otherDetail[singlePractice].id
      );

      startTransition(() => {
        router.replace(
          {
            pathname: pathname.replace(singlePractice, newPractice),
            params: { singlePractice: newPractice },
          },
          { locale: newLocale }
        );
      });
    }
  };

  return (
    <label className={`flex items-center ${isPending ? "opacity-50" : ""}`}>
      <select
        value={defaultValue}
        onChange={onSelectChange}
        className="border p-2 rounded"
        disabled={isPending}
      >
        {children}
      </select>
    </label>
  );
};

export default LocaleSwitcherSelect;
