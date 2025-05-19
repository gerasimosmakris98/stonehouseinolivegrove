
export interface PropertyData {
  hero: {
    title: {
      en: string;
      el: string;
    };
    subtitle: {
      en: string;
      el: string;
    };
  };
  overview: {
    title: {
      en: string;
      el: string;
    };
    description: {
      en: string;
      el: string;
    };
    features: {
      icon: string;
      name: {
        en: string;
        el: string;
      };
    }[];
  };
  gallery: {
    title: {
      en: string;
      el: string;
    };
    subtitle: {
      en: string;
      el: string;
    };
  };
  reviews: {
    title: {
      en: string;
      el: string;
    };
    subtitle: {
      en: string;
      el: string;
    };
    rating: string;
    items: {
      name: string;
      country: {
        en: string;
        el: string;
      };
      date: string;
      rating: number;
      comment: {
        en: string;
        el: string;
      };
    }[];
  };
  booking: {
    title: {
      en: string;
      el: string;
    };
    buttonText: {
      en: string;
      el: string;
    };
    links: {
      en: string;
      el: string;
    };
  };
  contact: {
    title: {
      en: string;
      el: string;
    };
    address: {
      en: string;
      el: string;
    };
    email: string;
    phone: string;
  };
}

export const propertyData: PropertyData = {
  hero: {
    title: {
      en: "Stone House in olive Grove",
      el: "Πέτρινο Σπίτι σε Ελαιώνα"
    },
    subtitle: {
      en: "A peaceful retreat in Trapezaki, Kefalonia",
      el: "Μια γαλήνια απόδραση στο Τραπεζάκι, Κεφαλονιά"
    }
  },
  overview: {
    title: {
      en: "About Our Villa",
      el: "Σχετικά με τη Βίλα μας"
    },
    description: {
      en: "Nestled among olive trees with panoramic sea views, our traditional stone house offers a perfect blend of rustic charm and modern comfort. Enjoy the serene surroundings, beautiful sea views and authentic Greek hospitality. The villa features spacious rooms, fully equipped kitchen, and private terraces to enjoy the Mediterranean sunshine.",
      el: "Κρυμμένο ανάμεσα σε ελαιόδεντρα με πανοραμική θέα στη θάλασσα, το παραδοσιακό πέτρινο σπίτι μας προσφέρει έναν τέλειο συνδυασμό αγροτικής γοητείας και σύγχρονης άνεσης. Απολαύστε το γαλήνιο περιβάλλον, την όμορφη θέα στη θάλασσα και την αυθεντική ελληνική φιλοξενία. Η βίλα διαθέτει ευρύχωρα δωμάτια, πλήρως εξοπλισμένη κουζίνα και ιδιωτικές βεράντες για να απολαύσετε τον μεσογειακό ήλιο."
    },
    features: [
      {
        icon: "wifi",
        name: {
          en: "Free WiFi",
          el: "Δωρεάν WiFi"
        }
      },
      {
        icon: "map-pin",
        name: {
          en: "Sea View",
          el: "Θέα στη Θάλασσα"
        }
      },
      {
        icon: "home",
        name: {
          en: "Stone Architecture",
          el: "Πέτρινη Αρχιτεκτονική"
        }
      },
      {
        icon: "bed",
        name: {
          en: "Comfortable Beds",
          el: "Άνετα Κρεβάτια"
        }
      }
    ]
  },
  gallery: {
    title: {
      en: "Photo Gallery",
      el: "Φωτογραφική Γκαλερί"
    },
    subtitle: {
      en: "Explore our beautiful property",
      el: "Εξερευνήστε την όμορφη ιδιοκτησία μας"
    }
  },
  reviews: {
    title: {
      en: "Guest Reviews",
      el: "Κριτικές Επισκεπτών"
    },
    subtitle: {
      en: "What our guests are saying",
      el: "Τι λένε οι επισκέπτες μας"
    },
    rating: "9.4/10",
    items: [
      {
        name: "Paul",
        country: {
          en: "United Kingdom",
          el: "Ηνωμένο Βασίλειο"
        },
        date: "September 2023",
        rating: 10,
        comment: {
          en: "We had a wonderful time, great location. The Villa was superb and Angela could not of been more helpful many thanks once again.",
          el: "Περάσαμε υπέροχα, εξαιρετική τοποθεσία. Η Βίλα ήταν υπέροχη και η Angela δεν θα μπορούσε να είναι πιο εξυπηρετική, ευχαριστούμε και πάλι."
        }
      },
      {
        name: "Corrado",
        country: {
          en: "Italy",
          el: "Ιταλία"
        },
        date: "August 2023",
        rating: 9,
        comment: {
          en: "Superb. Spacious villa, large bathrooms and in order, equipped terraces on all sides, brand new appliances and complete kitchen equipment.",
          el: "Υπέροχο. Ευρύχωρη βίλα, μεγάλα μπάνια και σε τάξη, εξοπλισμένες βεράντες σε όλες τις πλευρές, ολοκαίνουργιες συσκευές και πλήρης εξοπλισμός κουζίνας."
        }
      },
      {
        name: "Ioana",
        country: {
          en: "Romania",
          el: "Ρουμανία"
        },
        date: "August 2023",
        rating: 10,
        comment: {
          en: "Exceptional! Beautiful property with amazing views and wonderful hosts.",
          el: "Εξαιρετικό! Όμορφη ιδιοκτησία με εκπληκτική θέα και υπέροχους οικοδεσπότες."
        }
      }
    ]
  },
  booking: {
    title: {
      en: "Book Your Stay",
      el: "Κάντε Κράτηση"
    },
    buttonText: {
      en: "Book Now",
      el: "Κράτηση Τώρα"
    },
    links: {
      en: "https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.en-gb.html?lang=en-gb&soz=1&lang_changed=1",
      el: "https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.el.html?lang=el&soz=1&lang_changed=1"
    }
  },
  contact: {
    title: {
      en: "Contact Us",
      el: "Επικοινωνήστε μαζί μας"
    },
    address: {
      en: "Stone House in olive Grove, Trapezaki, Kefalonia, 28100, Greece",
      el: "Πέτρινο Σπίτι σε Ελαιώνα, Τραπεζάκι, Κεφαλονιά, 28100, Ελλάδα"
    },
    email: "info@stonehouse-kefalonia.gr",
    phone: "+30 6912345678"
  }
};
