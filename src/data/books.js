export const books = [
  // Fiction
  {
    id: 1,
    title: "The Librarian's Secret",
    author: "Emma Clarke",
    price: 24.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "A captivating tale of mystery and romance set in an ancient library.",
    rating: 4.7,
    reviews: [
      { user: "Sarah M.", rating: 5, comment: "Couldn't put it down!" },
      { user: "John D.", rating: 4, comment: "Great storytelling" }
    ]
  },
  {
    id: 2,
    title: "Whispers in the Stacks",
    author: "Michael Stone",
    price: 19.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    description: "A haunting story about a forgotten bookshop and its secrets.",
    rating: 4.5,
    reviews: [
      { user: "Lisa K.", rating: 5, comment: "Beautifully written" }
    ]
  },
  {
    id: 3,
    title: "The Reading Room",
    author: "Sophie Bennett",
    price: 22.50,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "An intimate portrait of readers and the books that changed their lives.",
    rating: 4.6
  },
  {
    id: 4,
    title: "Bookshop Tales",
    author: "David Miller",
    price: 18.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    description: "Short stories inspired by independent bookshops around the world.",
    rating: 4.5,
    reviews: [
      { user: "Emma R.", rating: 4, comment: "Charming collection" }
    ]
  },
  {
    id: 5,
    title: "The Last Chapter",
    author: "Rachel Adams",
    price: 21.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "A moving story about endings, beginnings, and the stories in between.",
    rating: 4.4
  },
  {
    id: 6,
    title: "Midnight in the Library",
    author: "Oliver Wright",
    price: 23.50,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400",
    description: "When the clock strikes twelve, the books come alive with stories untold.",
    rating: 4.6
  },
  {
    id: 7,
    title: "The Book Thief's Daughter",
    author: "Victoria Chase",
    price: 26.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "A thrilling tale of redemption set in post-war Europe's rare book world.",
    rating: 4.8
  },
  {
    id: 8,
    title: "Pages of Tomorrow",
    author: "Nathan Cross",
    price: 20.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    description: "A science fiction journey through time via enchanted manuscripts.",
    rating: 4.3
  },

  // Mystery
  {
    id: 9,
    title: "The Manuscript Hunter",
    author: "James Morrison",
    price: 26.99,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400",
    description: "A thriller following a rare book dealer tracking down lost manuscripts.",
    rating: 4.7,
    reviews: [
      { user: "Tom H.", rating: 5, comment: "Edge of my seat!" }
    ]
  },
  {
    id: 10,
    title: "Murder in the Archives",
    author: "Catherine Holmes",
    price: 24.50,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1577495917084-08703d1ffdcd?w=400",
    description: "A detective must solve a murder hidden within centuries of documents.",
    rating: 4.6
  },
  {
    id: 11,
    title: "The Cipher Manuscript",
    author: "Alexander Knight",
    price: 27.99,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    description: "Decode the mystery hidden in an ancient coded text.",
    rating: 4.7
  },
  {
    id: 12,
    title: "Death Between the Lines",
    author: "Margaret Swift",
    price: 23.99,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
    description: "A literary critic finds deadly secrets in a famous author's unpublished work.",
    rating: 4.5
  },
  {
    id: 13,
    title: "The Vanishing Bookshop",
    author: "Henry Blake",
    price: 25.50,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=400",
    description: "A bookshop that appears only at night holds the key to a century-old mystery.",
    rating: 4.4
  },
  {
    id: 14,
    title: "Secrets in Leather",
    author: "Diana Frost",
    price: 28.99,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "A rare leather-bound book contains clues to a family's dark past.",
    rating: 4.6
  },

  // Non-Fiction
  {
    id: 15,
    title: "The Writer's Journey",
    author: "Christopher Vogler",
    price: 29.99,
    category: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
    description: "Mythic structure for writers exploring storytelling craft.",
    rating: 4.6
  },
  {
    id: 16,
    title: "The Art of Reading",
    author: "Harold Bloom",
    price: 32.50,
    category: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
    description: "Essays on the importance of literature in modern life.",
    rating: 4.4
  },
  {
    id: 17,
    title: "Book Lovers: A History",
    author: "Susan Hill",
    price: 27.99,
    category: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
    description: "The cultural history of readers and their passion for books.",
    rating: 4.3
  },
  {
    id: 18,
    title: "The Library: A World History",
    author: "James Campbell",
    price: 35.00,
    category: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "From Alexandria to the digital age: the story of libraries.",
    rating: 4.7
  },
  {
    id: 19,
    title: "On Writing Well",
    author: "William Zinsser",
    price: 18.99,
    category: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
    description: "The classic guide to writing nonfiction.",
    rating: 4.8
  },
  {
    id: 20,
    title: "Reading Matters",
    author: "Margaret Atwood",
    price: 24.99,
    category: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    description: "Essays on literature, reading, and the power of books.",
    rating: 4.5
  },

  // Photography
  {
    id: 21,
    title: "Literary Landscapes",
    author: "Robert Hammond",
    price: 28.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
    description: "Photographs of places that inspired famous writers.",
    rating: 4.8,
    reviews: [
      { user: "Mark T.", rating: 5, comment: "Stunning visuals" }
    ]
  },
  {
    id: 22,
    title: "Vintage Covers",
    author: "Patricia Moore",
    price: 35.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=400",
    description: "A visual history of book cover design through the decades.",
    rating: 4.9,
    reviews: [
      { user: "Anna P.", rating: 5, comment: "Absolutely gorgeous" }
    ]
  },
  {
    id: 23,
    title: "Coffee & Chapters",
    author: "Elena Rodriguez",
    price: 17.25,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "Beautiful photography celebrating cozy reading moments.",
    rating: 4.8,
    reviews: [
      { user: "Chris B.", rating: 5, comment: "Makes me want to read!" }
    ]
  },
  {
    id: 24,
    title: "The Quiet Library",
    author: "Thomas Lee",
    price: 32.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
    description: "Serene photographs of libraries around the world.",
    rating: 4.6
  },
  {
    id: 25,
    title: "Bookshop Windows",
    author: "Claire Dubois",
    price: 29.99,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "Charming window displays from independent bookshops worldwide.",
    rating: 4.7
  },
  {
    id: 26,
    title: "Reading Spaces",
    author: "Marcus Johnson",
    price: 33.50,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400",
    description: "Personal libraries and reading nooks from around the globe.",
    rating: 4.8
  },

  // Poetry
  {
    id: 27,
    title: "Atlas of Wonder",
    author: "Maya Angelou",
    price: 25.00,
    category: "Poetry",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    description: "A collection of poems celebrating the journey of discovery.",
    rating: 4.9,
    reviews: [
      { user: "Rachel W.", rating: 5, comment: "Life-changing poetry" }
    ]
  },
  {
    id: 28,
    title: "Poems for Book Lovers",
    author: "Various Authors",
    price: 10.50,
    category: "Poetry",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    description: "Verses celebrating the love of reading and books.",
    rating: 4.2
  },
  {
    id: 29,
    title: "Autumn Reads",
    author: "Emily Dickinson",
    price: 12.99,
    category: "Poetry",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    description: "Poetry perfect for cozy fall reading sessions.",
    rating: 4.4
  },
  {
    id: 30,
    title: "Between the Pages",
    author: "Pablo Neruda",
    price: 16.99,
    category: "Poetry",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    description: "Love poems inspired by the written word.",
    rating: 4.6
  },
  {
    id: 31,
    title: "Verses and Volumes",
    author: "Rumi",
    price: 14.50,
    category: "Poetry",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "Mystical poetry about knowledge and enlightenment.",
    rating: 4.7
  },

  // Essays
  {
    id: 32,
    title: "Chapter by Chapter",
    author: "Joan Didion",
    price: 11.99,
    category: "Essays",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400",
    description: "Essays on literature, life, and everything in between.",
    rating: 4.3
  },
  {
    id: 33,
    title: "Paper Lanterns",
    author: "Stephen King",
    price: 11.50,
    category: "Essays",
    image: "https://images.unsplash.com/photo-1577495917084-08703d1ffdcd?w=400",
    description: "Reflections on the craft of writing and storytelling.",
    rating: 4.2
  },
  {
    id: 34,
    title: "The Reading Life",
    author: "Virginia Woolf",
    price: 19.99,
    category: "Essays",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
    description: "Essays exploring how books shape our existence.",
    rating: 4.6
  },
  {
    id: 35,
    title: "Words on Words",
    author: "Umberto Eco",
    price: 22.50,
    category: "Essays",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
    description: "Philosophical musings on language and literature.",
    rating: 4.5
  },

  // Craft
  {
    id: 36,
    title: "The Bookbinder's Craft",
    author: "Thomas Gray",
    price: 38.00,
    category: "Craft",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
    description: "A master class in traditional bookbinding techniques.",
    rating: 4.7,
    reviews: [
      { user: "David L.", rating: 5, comment: "Excellent guide!" }
    ]
  },
  {
    id: 37,
    title: "Leather & Gold",
    author: "Isabella Parker",
    price: 29.99,
    category: "Craft",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
    description: "The art of luxury book restoration and repair.",
    rating: 4.8,
    reviews: [
      { user: "Sophie N.", rating: 5, comment: "Beautiful and informative" }
    ]
  },
  {
    id: 38,
    title: "Handmade Books",
    author: "Jennifer Martinez",
    price: 24.99,
    category: "Craft",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
    description: "Create your own journals, notebooks, and artist books.",
    rating: 4.5
  },
  {
    id: 39,
    title: "Paper & Ink",
    author: "William Foster",
    price: 27.50,
    category: "Craft",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Traditional techniques for making paper and natural inks.",
    rating: 4.4
  },

  // More Fiction
  {
    id: 40,
    title: "Silent Pages",
    author: "Haruki Murakami",
    price: 24.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=400",
    description: "A surreal journey through a world where books hold magical powers.",
    rating: 4.2
  },
  {
    id: 41,
    title: "Rare & Beautiful",
    author: "Isabel Allende",
    price: 45.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400",
    description: "Photography book showcasing the world's most valuable and stunning books.",
    rating: 4.9,
    reviews: [
      { user: "Alex F.", rating: 5, comment: "Museum-quality!" }
    ]
  },
  {
    id: 42,
    title: "Bookish Dreams",
    author: "Neil Gaiman",
    price: 8.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    description: "Short stories for book lovers, by book lovers.",
    rating: 4.1
  },
  {
    id: 43,
    title: "Sundial Stories",
    author: "Kate Atkinson",
    price: 9.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "Time-bending tales set in a magical bookshop.",
    rating: 4.0
  },
  {
    id: 44,
    title: "The Forgotten Shelf",
    author: "Jeanette Winterson",
    price: 21.50,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    description: "A woman discovers her destiny in a dusty corner of an old library.",
    rating: 4.5
  },
  {
    id: 45,
    title: "Words of Fire",
    author: "Chimamanda Ngozi Adichie",
    price: 23.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    description: "A powerful novel about banned books and the fight for free expression.",
    rating: 4.8
  },
  {
    id: 46,
    title: "The Illuminated Text",
    author: "Umberto Eco",
    price: 31.99,
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    description: "A medieval scholar uncovers a conspiracy hidden in illuminated manuscripts.",
    rating: 4.9
  },
  {
    id: 47,
    title: "Library of Dreams",
    author: "Carlos Ruiz Zafón",
    price: 26.50,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400",
    description: "A gothic tale set in Barcelona's Cemetery of Forgotten Books.",
    rating: 4.7
  },
  {
    id: 48,
    title: "The Storyteller's Secret",
    author: "Khaled Hosseini",
    price: 22.99,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1577495917084-08703d1ffdcd?w=400",
    description: "Three generations connected through the power of storytelling.",
    rating: 4.6
  }
]

// Featured books - highest rated
export const featuredBooks = books.filter(book => book.rating >= 4.7).slice(0, 8)

// Popular books - with reviews, sorted by rating
export const popularBooks = books
  .filter(book => book.reviews && book.reviews.length > 0)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 10)

// New arrivals - last 8 books
export const newArrivals = books.slice(-8).reverse()

// Budget picks - under $15
export const budgetPicks = books.filter(book => book.price < 15).slice(0, 8)

// Get all unique categories
export const categories = [...new Set(books.map(book => book.category))]
