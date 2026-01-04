"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/contexts/language-context"

// Service data with images and emojis
const serviceData = [
    {
        emoji: "🦴",
        image: "/services/Joint & Muscle Pain Management.jpg",
        alt: "Joint and Muscle Pain Management",
    },
    {
        emoji: "🏥",
        image: "/services/Post-Surgical Rehabilitation.jpg",
        alt: "Post-Surgical Rehabilitation",
    },
    {
        emoji: "⚽",
        image: "/services/Sports Injury Rehabilitation.jpg",
        alt: "Sports Injury Rehabilitation",
    },
    {
        emoji: "🧠",
        image: "/services/Neurological Physiotherapy.jpg",
        alt: "Neurological Physiotherapy",
    },
    {
        emoji: "👴",
        image: "/services/Geriatric Physiotherapy.jpg",
        alt: "Geriatric Physiotherapy",
    },
    {
        emoji: "🪑",
        image: "/services/Posture Correction & Ergonomic Advice.jpg",
        alt: "Posture Correction & Ergonomic Advice",
    },
    {
        emoji: "🩸",
        image: "/services/Hijama Therapy (Wet Cupping).jpg",
        alt: "Hijama Therapy (Wet Cupping)",
    },
    {
        emoji: "📍",
        image: "/services/Acupuncture Therapy.jpg",
        alt: "Acupuncture Therapy",
    },
    {
        emoji: "👐",
        image: "/services/Chiropractic Treatment.jpg",
        alt: "Chiropractic Treatment",
    },
]

export function ServicesClient() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/5 to-background py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {t.services.items.map((service, index) => (
                            <Card
                                key={index}
                                className="group overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                            >
                                {/* Image Section */}
                                <div className="relative h-48 w-full overflow-hidden bg-muted">
                                    <Image
                                        src={serviceData[index].image}
                                        alt={serviceData[index].alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Emoji Overlay */}
                                    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg backdrop-blur-sm">
                                        {serviceData[index].emoji}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ul className="space-y-3">
                                        {service.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        asChild
                                        variant="default"
                                        size="sm"
                                        className="group/btn mt-4 w-full gap-2"
                                    >
                                        <Link href="/booking">
                                            {t.ui.bookThisService}
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-muted/30 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                        {t.about.ctaTitle}
                    </h2>
                    <p className="mb-8 text-lg text-muted-foreground">
                        {t.about.ctaSubtitle}
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/booking">
                                {t.ui.bookAppointment}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="gap-2">
                            <Link href="/contact">
                                {t.ui.goToContactPage}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
