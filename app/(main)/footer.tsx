import pack from "@/package.json"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("Footer")
  const version = pack.version
  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          {t("section_607-869_2020")}
          {new Date().getFullYear()}{" "}
          <a href={"https://github.com/hamster1963/nezha-dash"}>NezhaDash</a>
        </section>
      </section>
    </footer>
  )
}
