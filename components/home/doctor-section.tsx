"use client"

import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export function DoctorSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.doctor.title} subtitle={t.doctor.subtitle} />
        <div className="space-y-12">
          {siteConfig.doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden border-border/50 bg-card">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5">
                  <div className="relative lg:col-span-2">
                    <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
                      <img
                        src={doctor.image}
                        alt={doctor.fullName}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 p-8 lg:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{doctor.fullName}</h3>
                      {doctor.registrationNo && (
                        <p className="mt-1 text-sm text-primary">
                          {t.doctor.bpaRegistration} {doctor.registrationNo}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      {doctor.qualifications.slice(0, 4).map((qual, qIndex) => (
                        <div key={qIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{doctor.shortBio}</p>
                    {doctor.social && (
                      <Button asChild variant="outline" className="gap-2 bg-transparent">
                        <Link href="/about">
                          {t.doctor.learnMoreAbout}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
