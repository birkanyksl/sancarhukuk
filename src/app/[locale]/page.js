import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("indexpage")
  return (
    <div className="flex justify-center items-center gap-2">
      <p>{t("car")}</p>
      <p>{t("home")}</p>
    </div>
  )
}
