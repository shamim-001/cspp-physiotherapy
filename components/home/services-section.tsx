"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/contexts/language-context"

// Emoji mapping for each service
const serviceEmojis = ["🦴", "🏥", "⚽", "🧠", "👴", "🪑", "🩸", "📍", "👐"]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 text-4xl">{serviceEmojis[index]}</div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="group/btn gap-1 px-0 text-primary hover:bg-transparent hover:text-primary/80"
                >
                  <Link href="#booking">
                    {t.ui.bookThisService}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/services">
              {t.ui.viewAllServices}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
