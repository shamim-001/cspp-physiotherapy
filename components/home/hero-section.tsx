"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">{siteConfig.tagline}</p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {siteConfig.name}
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl text-pretty">
                {t.hero.personalizedCare} {siteConfig.doctor.name} {t.hero.forPainRelief}
              </p>
              <p className="text-muted-foreground text-pretty">{t.hero.evidenceBased}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="#booking">
                  {t.ui.bookAppointment}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t.ui.chatOnWhatsApp}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[9/16] max-h-[600px] mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/tgkcSlT5MPc?autoplay=1&mute=1&loop=1&playlist=tgkcSlT5MPc&controls=0&modestbranding=1&rel=0"
                title="Physiotherapy treatment video"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">5+</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.hero.yearsOf}</p>
                  <p className="text-sm text-muted-foreground">{t.hero.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
