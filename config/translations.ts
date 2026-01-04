export type Language = "en" | "bn"

export const translations = {
  en: {
    // Common UI
    ui: {
      bookAppointment: "Book Appointment",
      chatOnWhatsApp: "Chat on WhatsApp",
      learnMore: "Learn more",
      bookThisService: "Book this service",
      viewAllServices: "View All Services",
      goToContactPage: "Go to Contact Page",
      bookAnotherAppointment: "Book Another Appointment",
      submitting: "Submitting...",
      submitAppointmentRequest: "Submit Appointment Request",
      required: "*",
    },

    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      personalizedCare: "Personalized physiotherapy care by",
      forPainRelief: "for pain relief, recovery, and better movement.",
      evidenceBased:
        "Evidence-based treatment, one-to-one sessions, and a friendly environment to help you move without pain.",
      yearsOf: "Years of",
      experience: "Experience",
    },

    // Highlights Section
    highlights: {
      title: "Why Choose CSPP?",
      subtitle: "Experience personalized care with evidence-based treatments tailored to your unique needs",
      items: [
        {
          title: "One-to-One Personalized Sessions",
          description: "Every session is tailored to your condition and goals.",
        },
        {
          title: "Evidence-Based Physiotherapy",
          description: "Treatments based on the latest physiotherapy research and best practices.",
        },
        {
          title: "Focus on Long-Term Recovery",
          description: "We aim not just to relieve pain but to restore function and prevent recurrence.",
        },
        {
          title: "Comfortable & Friendly Environment",
          description: "A calm, welcoming clinic where patients feel heard and supported.",
        },
      ],
    },

    // Services Section
    services: {
      title: "Physiotherapy Services",
      subtitle: "Comprehensive treatment options for various conditions and needs",
      items: [
        {
          title: "Joint & Muscle Pain Management",
          description: [
            "Neck, back, shoulder, knee, hip pain",
            "Soft tissue and joint mobilization",
            "Pain reduction and range-of-motion improvement",
          ],
        },
        {
          title: "Post-Surgical Rehabilitation",
          description: [
            "Rehab after orthopedic surgery",
            "Strength and mobility restoration",
            "Individualized exercise programs",
          ],
        },
        {
          title: "Sports Injury Rehabilitation",
          description: [
            "Sprains, strains, and sports-related pain",
            "Return-to-sport planning",
            "Performance optimization",
          ],
        },
        {
          title: "Neurological Physiotherapy",
          description: ["Stroke rehabilitation", "Nerve injury treatment", "Balance and coordination problems"],
        },
        {
          title: "Geriatric Physiotherapy",
          description: [
            "Elderly mobility improvement",
            "Balance and fall prevention",
            "Age-related condition management",
          ],
        },
        {
          title: "Posture Correction & Ergonomic Advice",
          description: ["Workstation assessment", "Posture training", "Corrective exercises"],
        },
        {
          title: "Hijama Therapy (Wet Cupping)",
          description: [
            "Traditional wet cupping therapy",
            "Improve blood circulation",
            "Relieve pain and promote natural healing",
          ],
        },
        {
          title: "Acupuncture Therapy",
          description: [
            "Evidence-based acupuncture treatment",
            "Reduce pain and improve nerve function",
            "Restore energy balance",
          ],
        },
        {
          title: "Chiropractic Treatment",
          description: [
            "Spinal adjustment and alignment",
            "Back and neck pain relief",
            "Joint mobility improvement",
          ],
        },
      ],
    },

    // Doctor Section
    doctor: {
      title: "Meet Your Physiotherapist",
      subtitle: "Expert care from an experienced and qualified professional",
      bpaRegistration: "BPA Registration No:",
      learnMoreAbout: "Learn more about Dr. Ali",
      connectOnSocial: "Connect on Social Media",
      linkedIn: "LinkedIn",
      facebook: "Facebook",
    },

    // Testimonials Section
    testimonials: {
      title: "What Our Patients Say",
      subtitle: "Real experiences from people who have trusted us with their care",
      items: [
        {
          name: "Rahim M.",
          quote: "My back pain has reduced significantly after a few sessions. Highly recommended.",
        },
        {
          name: "Fatima K.",
          quote: "Professional, caring, and very thorough. I finally understand my condition.",
        },
        {
          name: "Kamal H.",
          quote: "The exercises and guidance helped me return to work without fear of pain.",
        },
      ],
    },

    // Location Section
    location: {
      title: "Find Us",
      subtitle: "Visit our clinic for personalized physiotherapy care",
      serviceHours: "Service Hours:",
    },

    // Footer
    footer: {
      contact: "Contact",
      location: "Location",
      quickLinks: "Quick Links",
      allRightsReserved: "All rights reserved.",
    },

    // About Page
    about: {
      clinicTitle: "About Care Specialized Physiotherapy Point",
      clinicParagraph1:
        "CSPP is a specialized physiotherapy clinic located in Dhaka, Bangladesh, dedicated to providing personalized, evidence-based physiotherapy care. Our clinic focuses on helping patients achieve lasting relief from pain, recover from injuries, and improve their overall quality of movement.",
      clinicParagraph2:
        "We believe in one-to-one sessions where every patient receives individualized attention and a treatment plan tailored to their specific needs and goals. Our approach combines the latest physiotherapy research with compassionate care, ensuring you understand your condition and actively participate in your recovery journey.",
      doctorTitle: "About",
      doctorSubtitle: "Expert physiotherapy care from a qualified professional",
      qualifications: "Qualifications",
      connectWithDoctor: "Connect with Dr. Ali",
      treatmentApproachTitle: "Our Treatment Approach",
      treatmentApproachSubtitle: "A systematic, patient-centered approach to physiotherapy care",
      treatmentSteps: [
        { title: "Detailed Assessment", description: "Comprehensive evaluation of your condition and medical history" },
        {
          title: "Clear Explanation",
          description: "We explain the problem in simple terms so you understand your condition",
        },
        {
          title: "Individualized Plan",
          description: "A treatment plan tailored specifically to your needs and goals",
        },
        { title: "Manual Therapy", description: "Hands-on techniques combined with exercise-based treatment" },
        { title: "Home Exercise Programs", description: "Self-management strategies for lasting results" },
        { title: "Progress Tracking", description: "Regular review and adjustment of your treatment plan" },
      ],
      ctaTitle: "Ready to start your recovery journey?",
      ctaSubtitle: "Book an appointment today and take the first step towards pain-free movement.",
    },

    // Contact Page
    contact: {
      title: "Contact & Visit CSPP",
      subtitle: "Get in touch with us to schedule an appointment or learn more about our services",
      personalizedCare: "Personalized physiotherapy care for pain relief, recovery, and better movement.",
      address: "Address",
      serviceHours: "Service Hours",
      phoneWhatsApp: "Phone / WhatsApp",
      email: "Email",
      locationLabel: "Location",
      locationDescription:
        "Located in Chamelibagh, Shantinagar Mor, near Madhumita Mishtighar, above DHL Courier, Dhaka 1217.",
    },

    // Booking Form
    booking: {
      title: "Book an Appointment",
      subtitle: "Fill out the form below and we will contact you to confirm your appointment",
      thankYou: "Thank You!",
      successMessage: "Your appointment request has been received. We will contact you soon to confirm your schedule.",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      fullNameRequired: "Full name is required",
      phone: "Phone / WhatsApp",
      phonePlaceholder: "+880 1XXX-XXXXXX",
      phoneRequired: "Phone number is required",
      emailOptional: "Email (optional)",
      emailPlaceholder: "your@email.com",
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time",
      problemType: "Type of Problem / Pain Area",
      selectConcern: "Select your concern",
      additionalDetails: "Additional Details",
      additionalPlaceholder: "Please describe your condition or any additional information...",
      problemTypes: {
        backPain: "Back Pain",
        neckPain: "Neck Pain",
        shoulderPain: "Shoulder Pain",
        kneePain: "Knee Pain",
        sportsInjury: "Sports Injury",
        postSurgery: "Post-Surgery Rehabilitation",
        neurological: "Neurological Condition",
        posture: "Posture Correction",
        hijama: "Hijama Therapy (Wet Cupping)",
        acupuncture: "Acupuncture Therapy",
        other: "Other",
        chiropractic: "Chiropractic Treatment",
      },
    },

    // Gallery Section
    gallery: {
      title: "Our Clinic Gallery",
      subtitle: "Take a look at our facilities and treatment environment",
    },
  },

  bn: {
    // Common UI
    ui: {
      bookAppointment: "অ্যাপয়েন্টমেন্ট বুক করুন",
      chatOnWhatsApp: "হোয়াটসঅ্যাপে চ্যাট করুন",
      learnMore: "আরও জানুন",
      bookThisService: "এই সেবা বুক করুন",
      viewAllServices: "সকল সেবা দেখুন",
      goToContactPage: "যোগাযোগ পাতায় যান",
      bookAnotherAppointment: "আরেকটি অ্যাপয়েন্টমেন্ট বুক করুন",
      submitting: "জমা দেওয়া হচ্ছে...",
      submitAppointmentRequest: "অ্যাপয়েন্টমেন্ট অনুরোধ জমা দিন",
      required: "*",
    },

    // Navigation
    nav: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবাসমূহ",
      contact: "যোগাযোগ",
    },

    // Hero Section
    hero: {
      personalizedCare: "ব্যক্তিগত ফিজিওথেরাপি সেবা প্রদান করছেন",
      forPainRelief: "ব্যথা উপশম, পুনরুদ্ধার এবং উন্নত চলাচলের জন্য।",
      evidenceBased: "প্রমাণ-ভিত্তিক চিকিৎসা, একের পর এক সেশন, এবং বন্ধুত্বপূর্ণ পরিবেশ যা আপনাকে ব্যথামুক্ত চলাচলে সাহায্য করবে।",
      yearsOf: "বছরের",
      experience: "অভিজ্ঞতা",
    },

    // Highlights Section
    highlights: {
      title: "কেন CSPP বেছে নেবেন?",
      subtitle: "আপনার অনন্য প্রয়োজনের জন্য তৈরি প্রমাণ-ভিত্তিক চিকিৎসার সাথে ব্যক্তিগত যত্ন অনুভব করুন",
      items: [
        {
          title: "একের পর এক ব্যক্তিগত সেশন",
          description: "প্রতিটি সেশন আপনার অবস্থা এবং লক্ষ্য অনুযায়ী তৈরি।",
        },
        {
          title: "প্রমাণ-ভিত্তিক ফিজিওথেরাপি",
          description: "সর্বশেষ ফিজিওথেরাপি গবেষণা এবং সর্বোত্তম অনুশীলনের উপর ভিত্তি করে চিকিৎসা।",
        },
        {
          title: "দীর্ঘমেয়াদী পুনরুদ্ধারের উপর মনোযোগ",
          description: "আমরা শুধু ব্যথা উপশম নয়, কার্যক্ষমতা পুনরুদ্ধার এবং পুনরাবৃত্তি রোধ করতে লক্ষ্য রাখি।",
        },
        {
          title: "আরামদায়ক ও বন্ধুত্বপূর্ণ পরিবেশ",
          description: "একটি শান্ত, স্বাগত জানানো ক্লিনিক যেখানে রোগীরা শোনা এবং সমর্থিত অনুভব করেন।",
        },
      ],
    },

    // Services Section
    services: {
      title: "ফিজিওথেরাপি সেবাসমূহ",
      subtitle: "বিভিন্ন অবস্থা এবং প্রয়োজনের জন্য ব্যাপক চিকিৎসার বিকল্প",
      items: [
        {
          title: "জয়েন্ট ও মাংসপেশীর ব্যথা ব্যবস্থাপনা",
          description: [
            "ঘাড়, পিঠ, কাঁধ, হাঁটু, নিতম্বের ব্যথা",
            "নরম টিস্যু এবং জয়েন্ট মবিলাইজেশন",
            "ব্যথা হ্রাস এবং গতির পরিসীমা উন্নতি",
          ],
        },
        {
          title: "অস্ত্রোপচার পরবর্তী পুনর্বাসন",
          description: ["অর্থোপেডিক সার্জারির পর পুনর্বাসন", "শক্তি এবং গতিশীলতা পুনরুদ্ধার", "ব্যক্তিগত ব্যায়াম কর্মসূচি"],
        },
        {
          title: "খেলাধুলায় আঘাতের পুনর্বাসন",
          description: ["মচকানো, টান এবং খেলা-সম্পর্কিত ব্যথা", "খেলায় ফিরে আসার পরিকল্পনা", "পারফরম্যান্স অপ্টিমাইজেশন"],
        },
        {
          title: "স্নায়বিক ফিজিওথেরাপি",
          description: ["স্ট্রোক পুনর্বাসন", "স্নায়ুর আঘাতের চিকিৎসা", "ভারসাম্য এবং সমন্বয় সমস্যা"],
        },
        {
          title: "জেরিয়াট্রিক ফিজিওথেরাপি",
          description: ["বয়স্কদের গতিশীলতার উন্নতি", "ভারসাম্য এবং পতন প্রতিরোধ", "বয়স-সম্পর্কিত অবস্থার ব্যবস্থাপনা"],
        },
        {
          title: "ভঙ্গি সংশোধন ও এরগোনমিক পরামর্শ",
          description: ["ওয়ার্কস্টেশন মূল্যায়ন", "ভঙ্গি প্রশিক্ষণ", "সংশোধনমূলক ব্যায়াম"],
        },
        {
          title: "হিজামা থেরাপি (ওয়েট কাপিং)",
          description: [
            "ঐতিহ্যবাহী ওয়েট কাপিং থেরাপি",
            "রক্ত সঞ্চালন উন্নত করা",
            "ব্যথা উপশম এবং প্রাকৃতিক নিরাময় প্রচার",
          ],
        },
        {
          title: "আকুপাংচার থেরাপি",
          description: [
            "প্রমাণ-ভিত্তিক আকুপাংচার চিকিৎসা",
            "ব্যথা কমানো এবং স্নায়ুর কার্যকারিতা উন্নত করা",
            "শক্তির ভারসাম্য পুনরুদ্ধার করা",
          ],
        },
        {
          title: "কাইরোপ্র্যাকটিক চিকিৎসা",
          description: [
            "মেরুদণ্ড এবং হাড়ের বিন্যাস ঠিক করা",
            "পিঠ ও ঘাড়ের ব্যথা নিরাময়",
            "শরীরের নড়াচড়া ও কার্যক্ষমতা বৃদ্ধি",
          ],
        },
      ],
    },

    // Doctor Section
    doctor: {
      title: "আপনার ফিজিওথেরাপিস্টের সাথে পরিচিত হন",
      subtitle: "একজন অভিজ্ঞ এবং যোগ্য পেশাদারের কাছ থেকে বিশেষজ্ঞ যত্ন",
      bpaRegistration: "বিপিএ নিবন্ধন নং:",
      learnMoreAbout: "ডাঃ আলী সম্পর্কে আরও জানুন",
      connectOnSocial: "সোশ্যাল মিডিয়ায় যোগাযোগ করুন",
      linkedIn: "লিংকডইন",
      facebook: "ফেসবুক",
    },

    // Testimonials Section
    testimonials: {
      title: "আমাদের রোগীরা কী বলেন",
      subtitle: "যারা তাদের যত্নের জন্য আমাদের বিশ্বাস করেছেন তাদের বাস্তব অভিজ্ঞতা",
      items: [
        {
          name: "রহিম এম.",
          quote: "কয়েকটি সেশনের পরে আমার পিঠের ব্যথা উল্লেখযোগ্যভাবে কমেছে। অত্যন্ত সুপারিশ করছি।",
        },
        {
          name: "ফাতিমা কে.",
          quote: "পেশাদার, যত্নশীল এবং খুব পুঙ্খানুপুঙ্খ। অবশেষে আমি আমার অবস্থা বুঝতে পারছি।",
        },
        {
          name: "কামাল এইচ.",
          quote: "ব্যায়াম এবং নির্দেশনা আমাকে ব্যথার ভয় ছাড়াই কাজে ফিরে যেতে সাহায্য করেছে।",
        },
      ],
    },

    // Location Section
    location: {
      title: "আমাদের খুঁজুন",
      subtitle: "ব্যক্তিগত ফিজিওথেরাপি সেবার জন্য আমাদের ক্লিনিকে যান",
      serviceHours: "সেবার সময়:",
    },

    // Footer
    footer: {
      contact: "যোগাযোগ",
      location: "অবস্থান",
      quickLinks: "দ্রুত লিঙ্ক",
      allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
    },

    // About Page
    about: {
      clinicTitle: "কেয়ার স্পেশালাইজড ফিজিওথেরাপি পয়েন্ট সম্পর্কে",
      clinicParagraph1:
        "সিএসপিপি ঢাকা, বাংলাদেশে অবস্থিত একটি বিশেষায়িত ফিজিওথেরাপি ক্লিনিক, যা ব্যক্তিগত, প্রমাণ-ভিত্তিক ফিজিওথেরাপি সেবা প্রদানে নিবেদিত। আমাদের ক্লিনিক রোগীদের ব্যথা থেকে স্থায়ী উপশম, আঘাত থেকে পুনরুদ্ধার এবং তাদের সামগ্রিক চলাচলের মান উন্নত করতে সাহায্য করার দিকে মনোযোগ দেয়।",
      clinicParagraph2:
        "আমরা একের পর এক সেশনে বিশ্বাস করি যেখানে প্রতিটি রোগী ব্যক্তিগত মনোযোগ এবং তাদের নির্দিষ্ট প্রয়োজন ও লক্ষ্য অনুযায়ী তৈরি চিকিৎসা পরিকল্পনা পান। আমাদের পদ্ধতি সর্বশেষ ফিজিওথেরাপি গবেষণাকে সহানুভূতিশীল যত্নের সাথে একত্রিত করে, নিশ্চিত করে যে আপনি আপনার অবস্থা বুঝতে পারেন এবং আপনার পুনরুদ্ধার যাত্রায় সক্রিয়ভাবে অংশগ্রহণ করেন।",
      doctorTitle: "সম্পর্কে",
      doctorSubtitle: "একজন যোগ্য পেশাদারের কাছ থেকে বিশেষজ্ঞ ফিজিওথেরাপি যত্ন",
      qualifications: "যোগ্যতা",
      connectWithDoctor: "ডাঃ আলীর সাথে যোগাযোগ করুন",
      treatmentApproachTitle: "আমাদের চিকিৎসা পদ্ধতি",
      treatmentApproachSubtitle: "ফিজিওথেরাপি সেবায় একটি পদ্ধতিগত, রোগী-কেন্দ্রিক পদ্ধতি",
      treatmentSteps: [
        { title: "বিস্তারিত মূল্যায়ন", description: "আপনার অবস্থা এবং চিকিৎসা ইতিহাসের ব্যাপক মূল্যায়ন" },
        { title: "স্পষ্ট ব্যাখ্যা", description: "আমরা সমস্যাটি সহজ ভাষায় ব্যাখ্যা করি যাতে আপনি আপনার অবস্থা বুঝতে পারেন" },
        { title: "ব্যক্তিগত পরিকল্পনা", description: "আপনার প্রয়োজন এবং লক্ষ্য অনুযায়ী বিশেষভাবে তৈরি চিকিৎসা পরিকল্পনা" },
        { title: "ম্যানুয়াল থেরাপি", description: "ব্যায়াম-ভিত্তিক চিকিৎসার সাথে হাতে-কলমে কৌশল" },
        { title: "বাড়ির ব্যায়াম কর্মসূচি", description: "স্থায়ী ফলাফলের জন্য স্ব-ব্যবস্থাপনা কৌশল" },
        { title: "অগ্রগতি ট্র্যাকিং", description: "আপনার চিকিৎসা পরিকল্পনার নিয়মিত পর্যালোচনা এবং সমন্বয়" },
      ],
      ctaTitle: "আপনার পুনরুদ্ধার যাত্রা শুরু করতে প্রস্তুত?",
      ctaSubtitle: "আজই অ্যাপয়েন্টমেন্ট বুক করুন এবং ব্যথামুক্ত চলাচলের দিকে প্রথম পদক্ষেপ নিন।",
    },

    // Contact Page
    contact: {
      title: "CSPP-তে যোগাযোগ করুন ও আসুন",
      subtitle: "অ্যাপয়েন্টমেন্ট নির্ধারণ করতে বা আমাদের সেবা সম্পর্কে আরও জানতে আমাদের সাথে যোগাযোগ করুন",
      personalizedCare: "ব্যথা উপশম, পুনরুদ্ধার এবং উন্নত চলাচলের জন্য ব্যক্তিগত ফিজিওথেরাপি সেবা।",
      address: "ঠিকানা",
      serviceHours: "সেবার সময়",
      phoneWhatsApp: "ফোন / হোয়াটসঅ্যাপ",
      email: "ইমেইল",
      locationLabel: "অবস্থান",
      locationDescription: "চামেলীবাগ, শান্তিনগর মোড়, মধুমিতা মিষ্টিঘরের কাছে, ডিএইচএল কুরিয়ারের উপরে, ঢাকা ১২১৭।",
    },

    // Booking Form
    booking: {
      title: "অ্যাপয়েন্টমেন্ট বুক করুন",
      subtitle: "নিচের ফর্মটি পূরণ করুন এবং আমরা আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করতে আপনার সাথে যোগাযোগ করব",
      thankYou: "ধন্যবাদ!",
      successMessage: "আপনার অ্যাপয়েন্টমেন্ট অনুরোধ পাওয়া গেছে। আমরা শীঘ্রই আপনার সময়সূচী নিশ্চিত করতে আপনার সাথে যোগাযোগ করব।",
      fullName: "পূর্ণ নাম",
      fullNamePlaceholder: "আপনার পূর্ণ নাম লিখুন",
      fullNameRequired: "পূর্ণ নাম প্রয়োজন",
      phone: "ফোন / হোয়াটসঅ্যাপ",
      phonePlaceholder: "+৮৮০ ১XXX-XXXXXX",
      phoneRequired: "ফোন নম্বর প্রয়োজন",
      emailOptional: "ইমেইল (ঐচ্ছিক)",
      emailPlaceholder: "your@email.com",
      preferredDate: "পছন্দের তারিখ",
      preferredTime: "পছন্দের সময়",
      problemType: "সমস্যার ধরন / ব্যথার এলাকা",
      selectConcern: "আপনার সমস্যা নির্বাচন করুন",
      additionalDetails: "অতিরিক্ত বিবরণ",
      additionalPlaceholder: "অনুগ্রহ করে আপনার অবস্থা বা অন্য কোনো তথ্য বর্ণনা করুন...",
      problemTypes: {
        backPain: "পিঠে ব্যথা",
        neckPain: "ঘাড়ে ব্যথা",
        shoulderPain: "কাঁধে ব্যথা",
        kneePain: "হাঁটুতে ব্যথা",
        sportsInjury: "খেলাধুলায় আঘাত",
        postSurgery: "অস্ত্রোপচার পরবর্তী পুনর্বাসন",
        neurological: "স্নায়বিক অবস্থা",
        posture: "ভঙ্গি সংশোধন",
        hijama: "হিজামা থেরাপি (ওয়েট কাপিং)",
        acupuncture: "আকুপাংচার থেরাপি",
        other: "অন্যান্য",
        chiropractic: "কাইরোপ্র্যাকটিক চিকিৎসা",
      },
    },

    // Gallery Section
    gallery: {
      title: "আমাদের ক্লিনিক গ্যালারি",
      subtitle: "আমাদের সুবিধা এবং চিকিৎসা পরিবেশ দেখুন",
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
