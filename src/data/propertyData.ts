
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
  details: {
    title: {
      en: string;
      el: string;
    };
    subtitle: {
      en: string;
      el: string;
    };
    amenities: {
      categories: {
        name: {
          en: string;
          el: string;
        };
        items: {
          en: string;
          el: string;
        }[];
      }[];
    };
    location: {
      attractions: {
        name: {
          en: string;
          el: string;
        };
        distance: number;
      }[];
      beaches: {
        name: {
          en: string;
          el: string;
        };
        distance: number;
      }[];
      dining: {
        name: string;
        type: {
          en: string;
          el: string;
        };
        distance: number;
      }[];
    };
    houseRules: {
      general: {
        en: string;
        el: string;
      }[];
      additional: {
        en: string;
        el: string;
      }[];
    };
    faqs: {
      question: {
        en: string;
        el: string;
      };
      answer: {
        en: string;
        el: string;
      };
    }[];
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
  },
  details: {
    title: {
      en: "Property Details",
      el: "Λεπτομέρειες Ακινήτου"
    },
    subtitle: {
      en: "Everything you need to know about Stone House in olive Grove",
      el: "Όλα όσα πρέπει να γνωρίζετε για το Πέτρινο Σπίτι σε Ελαιώνα"
    },
    amenities: {
      categories: [
        {
          name: {
            en: "Main Features",
            el: "Κύρια Χαρακτηριστικά"
          },
          items: [
            {
              en: "220 m² villa size",
              el: "220 τ.μ. μέγεθος βίλας"
            },
            {
              en: "5 bedrooms",
              el: "5 υπνοδωμάτια"
            },
            {
              en: "2 bathrooms",
              el: "2 μπάνια"
            },
            {
              en: "Accommodates 7 guests",
              el: "Φιλοξενεί 7 άτομα"
            },
            {
              en: "Private entrance",
              el: "Ιδιωτική είσοδος"
            }
          ]
        },
        {
          name: {
            en: "Connectivity & Entertainment",
            el: "Συνδεσιμότητα & Ψυχαγωγία"
          },
          items: [
            {
              en: "Free WiFi in all areas",
              el: "Δωρεάν WiFi σε όλους τους χώρους"
            },
            {
              en: "Flat-screen TV",
              el: "Τηλεόραση επίπεδης οθόνης"
            },
            {
              en: "Radio",
              el: "Ραδιόφωνο"
            },
            {
              en: "Books, DVDs, music for children",
              el: "Βιβλία, DVD, μουσική για παιδιά"
            }
          ]
        },
        {
          name: {
            en: "Kitchen & Dining",
            el: "Κουζίνα & Τραπεζαρία"
          },
          items: [
            {
              en: "Fully equipped kitchen",
              el: "Πλήρως εξοπλισμένη κουζίνα"
            },
            {
              en: "Dishwasher",
              el: "Πλυντήριο πιάτων"
            },
            {
              en: "Refrigerator",
              el: "Ψυγείο"
            },
            {
              en: "Oven",
              el: "Φούρνος"
            },
            {
              en: "Coffee machine",
              el: "Καφετιέρα"
            },
            {
              en: "Dining table",
              el: "Τραπέζι φαγητού"
            }
          ]
        },
        {
          name: {
            en: "Bedrooms & Living Room",
            el: "Υπνοδωμάτια & Σαλόνι"
          },
          items: [
            {
              en: "1 large double bed",
              el: "1 μεγάλο διπλό κρεβάτι"
            },
            {
              en: "1 double bed",
              el: "1 διπλό κρεβάτι"
            },
            {
              en: "1 single bed",
              el: "1 μονό κρεβάτι"
            },
            {
              en: "3 sofa beds",
              el: "3 καναπέδες κρεβάτι"
            },
            {
              en: "Linen provided",
              el: "Παρέχονται σεντόνια"
            },
            {
              en: "Wardrobe or closet",
              el: "Ντουλάπα"
            }
          ]
        },
        {
          name: {
            en: "Bathroom & Laundry",
            el: "Μπάνιο & Πλυντήριο"
          },
          items: [
            {
              en: "2 bathrooms with free toiletries",
              el: "2 μπάνια με δωρεάν προϊόντα περιποίησης"
            },
            {
              en: "Bath and shower",
              el: "Μπανιέρα και ντους"
            },
            {
              en: "Hairdryer",
              el: "Στεγνωτήρας μαλλιών"
            },
            {
              en: "Washing machine",
              el: "Πλυντήριο ρούχων"
            },
            {
              en: "Tumble dryer",
              el: "Στεγνωτήριο ρούχων"
            },
            {
              en: "Clothes rack",
              el: "Απλώστρα ρούχων"
            }
          ]
        },
        {
          name: {
            en: "Outdoor Features",
            el: "Εξωτερικοί Χώροι"
          },
          items: [
            {
              en: "Garden with sea view",
              el: "Κήπος με θέα στη θάλασσα"
            },
            {
              en: "Terrace",
              el: "Βεράντα"
            },
            {
              en: "Balcony",
              el: "Μπαλκόνι"
            },
            {
              en: "Outdoor furniture",
              el: "Έπιπλα εξωτερικού χώρου"
            },
            {
              en: "BBQ facilities",
              el: "Εγκαταστάσεις BBQ"
            },
            {
              en: "Sun terrace",
              el: "Ηλιόλουστη βεράντα"
            },
            {
              en: "Beach chairs/sun loungers",
              el: "Καρέκλες/ξαπλώστρες παραλίας"
            }
          ]
        },
        {
          name: {
            en: "Comfort & Convenience",
            el: "Άνεση & Ευκολία"
          },
          items: [
            {
              en: "Air conditioning",
              el: "Κλιματισμός"
            },
            {
              en: "Heating",
              el: "Θέρμανση"
            },
            {
              en: "Soundproofing",
              el: "Ηχομόνωση"
            },
            {
              en: "Family rooms",
              el: "Οικογενειακά δωμάτια"
            },
            {
              en: "Non-smoking rooms",
              el: "Δωμάτια για μη καπνίζοντες"
            },
            {
              en: "Iron and ironing facilities",
              el: "Σίδερο και εγκαταστάσεις σιδερώματος"
            },
            {
              en: "Free private parking on site",
              el: "Δωρεάν ιδιωτικός χώρος στάθμευσης στο χώρο"
            }
          ]
        },
        {
          name: {
            en: "Activities & Transport",
            el: "Δραστηριότητες & Μεταφορές"
          },
          items: [
            {
              en: "Beach access",
              el: "Πρόσβαση στην παραλία"
            },
            {
              en: "Bicycle rental (additional charge)",
              el: "Ενοικίαση ποδηλάτου (επιπλέον χρέωση)"
            },
            {
              en: "Car hire",
              el: "Ενοικίαση αυτοκινήτου"
            },
            {
              en: "Private check-in/check-out",
              el: "Ιδιωτικό check-in/check-out"
            }
          ]
        }
      ]
    },
    location: {
      attractions: [
        {
          name: {
            en: "Byzantine Ecclesiastical Museum",
            el: "Εκκλησιαστικό Βυζαντινό Μουσείο"
          },
          distance: 5
        },
        {
          name: {
            en: "Mazarakata Tombs",
            el: "Τάφοι Μαζαρακάτων"
          },
          distance: 6
        },
        {
          name: {
            en: "Castle of Agios Georgios",
            el: "Κάστρο Αγίου Γεωργίου"
          },
          distance: 6
        },
        {
          name: {
            en: "Korgialenio Historic and Folklore Museum",
            el: "Κοργιαλένειο Ιστορικό και Λαογραφικό Μουσείο"
          },
          distance: 9
        },
        {
          name: {
            en: "Museum of Natural History of Kefalonia",
            el: "Μουσείο Φυσικής Ιστορίας Κεφαλονιάς"
          },
          distance: 19
        }
      ],
      beaches: [
        {
          name: {
            en: "Trapezaki Beach",
            el: "Παραλία Τραπεζάκι"
          },
          distance: 1.3
        },
        {
          name: {
            en: "Kanali Beach",
            el: "Παραλία Κανάλι"
          },
          distance: 1.6
        },
        {
          name: {
            en: "Agios Thomas Beach",
            el: "Παραλία Άγιος Θωμάς"
          },
          distance: 2.8
        },
        {
          name: {
            en: "Lourda Beach",
            el: "Παραλία Λουρδά"
          },
          distance: 4.2
        },
        {
          name: {
            en: "Pessada Beach",
            el: "Παραλία Πεσσάδα"
          },
          distance: 5
        }
      ],
      dining: [
        {
          name: "Astra Cocktail Bar",
          type: {
            en: "Cafe/Bar",
            el: "Καφέ/Μπαρ"
          },
          distance: 2.3
        },
        {
          name: "Lorraine's Magic Hill",
          type: {
            en: "Restaurant",
            el: "Εστιατόριο"
          },
          distance: 3.7
        },
        {
          name: "Mpotsolos Restaurant",
          type: {
            en: "Restaurant",
            el: "Εστιατόριο"
          },
          distance: 7
        }
      ]
    },
    houseRules: {
      general: [
        {
          en: "Check-in from 15:00 to 21:00",
          el: "Άφιξη από 15:00 έως 21:00"
        },
        {
          en: "Check-out from 08:00 to 11:00",
          el: "Αναχώρηση από 08:00 έως 11:00"
        },
        {
          en: "Quiet hours between 23:00 and 08:00",
          el: "Ώρες ησυχίας μεταξύ 23:00 και 08:00"
        },
        {
          en: "No smoking inside the property",
          el: "Απαγορεύεται το κάπνισμα εντός του ακινήτου"
        },
        {
          en: "No parties or events allowed",
          el: "Δεν επιτρέπονται πάρτι ή εκδηλώσεις"
        },
        {
          en: "Pets are not allowed",
          el: "Δεν επιτρέπονται τα κατοικίδια"
        }
      ],
      additional: [
        {
          en: "A damage deposit of €200 is required on arrival (cash only)",
          el: "Απαιτείται εγγύηση ζημιών €200 κατά την άφιξη (μόνο μετρητά)"
        },
        {
          en: "Please inform the property in advance of your expected arrival time",
          el: "Παρακαλούμε ενημερώστε το κατάλυμα εκ των προτέρων για την ώρα άφιξής σας"
        },
        {
          en: "Children of all ages are welcome",
          el: "Γίνονται δεκτά παιδιά όλων των ηλικιών"
        },
        {
          en: "Baby cot available on request (free of charge)",
          el: "Βρεφική κούνια διαθέσιμη κατόπιν αιτήματος (δωρεάν)"
        },
        {
          en: "License/Registration Number: 00002461782",
          el: "Αριθμός μητρώου/αδείας: 00002461782"
        }
      ]
    },
    faqs: [
      {
        question: {
          en: "How many guests can the Stone House accommodate?",
          el: "Πόσους επισκέπτες μπορεί να φιλοξενήσει το Πέτρινο Σπίτι;"
        },
        answer: {
          en: "The Stone House in olive Grove can accommodate up to 7 guests with its 5 bedrooms and multiple sleeping arrangements.",
          el: "Το Πέτρινο Σπίτι σε Ελαιώνα μπορεί να φιλοξενήσει έως 7 επισκέπτες με τα 5 υπνοδωμάτια και τις πολλαπλές επιλογές ύπνου."
        }
      },
      {
        question: {
          en: "Does the property have balconies or terraces?",
          el: "Διαθέτει το ακίνητο μπαλκόνια ή βεράντες;"
        },
        answer: {
          en: "Yes, the property features multiple balconies and terraces with beautiful views of the sea, garden, and mountains.",
          el: "Ναι, το ακίνητο διαθέτει πολλά μπαλκόνια και βεράντες με όμορφη θέα στη θάλασσα, τον κήπο και τα βουνά."
        }
      },
      {
        question: {
          en: "What are the check-in and check-out times?",
          el: "Ποιες είναι οι ώρες άφιξης και αναχώρησης;"
        },
        answer: {
          en: "Check-in is from 15:00 to 21:00, and check-out is from 08:00 to 11:00. Please inform the property in advance about your expected arrival time.",
          el: "Η άφιξη είναι από 15:00 έως 21:00 και η αναχώρηση από 08:00 έως 11:00. Παρακαλούμε ενημερώστε το κατάλυμα εκ των προτέρων για την αναμενόμενη ώρα άφιξής σας."
        }
      },
      {
        question: {
          en: "How far is the property from the nearest beach?",
          el: "Πόσο μακριά είναι το ακίνητο από την πλησιέστερη παραλία;"
        },
        answer: {
          en: "The nearest beach (Trapezaki Beach) is just 1.3 km away from the property, about a 15-minute walk.",
          el: "Η πλησιέστερη παραλία (Παραλία Τραπεζάκι) απέχει μόνο 1,3 χλμ από το ακίνητο, περίπου 15 λεπτά με τα πόδια."
        }
      },
      {
        question: {
          en: "Is the property suitable for families with children?",
          el: "Είναι το ακίνητο κατάλληλο για οικογένειες με παιδιά;"
        },
        answer: {
          en: "Yes, the Stone House in olive Grove is popular with families. Children of all ages are welcome, and we offer baby cots upon request free of charge. We also provide books, DVDs, and music for children.",
          el: "Ναι, το Πέτρινο Σπίτι σε Ελαιώνα είναι δημοφιλές στις οικογένειες. Γίνονται δεκτά παιδιά όλων των ηλικιών και προσφέρουμε βρεφικές κούνιες κατόπιν αιτήματος χωρίς χρέωση. Επίσης, παρέχουμε βιβλία, DVD και μουσική για παιδιά."
        }
      },
      {
        question: {
          en: "What activities are available at or near the property?",
          el: "Ποιες δραστηριότητες είναι διαθέσιμες στο ή κοντά στο ακίνητο;"
        },
        answer: {
          en: "Guests can enjoy beach activities, bicycle rental (available for an additional charge), and car hire services. There are also several attractions, museums, and historical sites to visit nearby.",
          el: "Οι επισκέπτες μπορούν να απολαύσουν δραστηριότητες στην παραλία, ενοικίαση ποδηλάτων (διαθέσιμη με επιπλέον χρέωση) και υπηρεσίες ενοικίασης αυτοκινήτων. Υπάρχουν επίσης διάφορα αξιοθέατα, μουσεία και ιστορικά μνημεία για επίσκεψη στην περιοχή."
        }
      },
      {
        question: {
          en: "Is there a security deposit required?",
          el: "Απαιτείται εγγύηση ασφαλείας;"
        },
        answer: {
          en: "Yes, a damage deposit of €200 is required upon arrival. This payment must be made in cash and will be fully refunded at check-out after an inspection of the property.",
          el: "Ναι, απαιτείται μία εγγύηση ζημιών ύψους 200€ κατά την άφιξη. Αυτή η πληρωμή πρέπει να γίνει σε μετρητά και θα επιστραφεί πλήρως κατά την αναχώρηση μετά από έλεγχο του ακινήτου."
        }
      },
      {
        question: {
          en: "Is WiFi available throughout the property?",
          el: "Είναι διαθέσιμο το WiFi σε όλο το ακίνητο;"
        },
        answer: {
          en: "Yes, free WiFi is available throughout the entire property.",
          el: "Ναι, το δωρεάν WiFi είναι διαθέσιμο σε ολόκληρο το ακίνητο."
        }
      },
      {
        question: {
          en: "Are pets allowed at the property?",
          el: "Επιτρέπονται τα κατοικίδια στο ακίνητο;"
        },
        answer: {
          en: "No, pets are not allowed at the property.",
          el: "Όχι, τα κατοικίδια δεν επιτρέπονται στο ακίνητο."
        }
      },
      {
        question: {
          en: "Is parking available at the property?",
          el: "Υπάρχει διαθέσιμος χώρος στάθμευσης στο ακίνητο;"
        },
        answer: {
          en: "Yes, free private parking is available on site. No reservation is needed.",
          el: "Ναι, διατίθεται δωρεάν ιδιωτικός χώρος στάθμευσης στον χώρο. Δεν απαιτείται κράτηση."
        }
      }
    ]
  }
};
