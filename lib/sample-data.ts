import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
    products: [
      {
        name: "Berbere Spice Blend",
        slug: "berbere-spice-blend",
        category: "Ethiopian Spices",
        images: ["/assets/images/p1-1.jpg", "/assets/images/p1-2.jpeg"],
        price: "12.99",
        brand: "BeliBaltina",
        rating: "4.8",
        numReviews: 25,
        stock: 15,
        description:
          "A fiery and flavorful blend of spices, perfect for adding a bold taste to your stews and meats. Made with authentic Ethiopian ingredients.",
        isFeatured: true,
        banner: "/assets/images/banner-1.jpg",
      },
      {
        name: "Mitmita Spice Mix",
        slug: "mitmita-spice-mix",
        category: "Ethiopian Spices",
        images: ["/assets/images/p2-1.jpg", "/assets/images/p2-2.jpg"],
        price: "10.99",
        brand: "BeliBaltina",
        rating: "4.7",
        numReviews: 18,
        stock: 0,
        description:
          "A spicy blend of African bird's eye chili, cardamom, and other spices. Ideal for those who love a hot kick in their dishes.",
        isFeatured: true,
        banner: "/assets/images/banner-2.jpg",
      },
      {
        name: "Shiro Powder",
        slug: "shiro-powder",
        category: "Ethiopian Spices",
        images: ["/assets/images/p3-1.jpg", "/assets/images/p3-2.jpg"],
        price: "8.99",
        brand: "BeliBaltina",
        rating: "4.9",
        numReviews: 22,
        stock: 10,
        description:
          "A finely ground powder of roasted chickpeas and spices, perfect for making the traditional Ethiopian Shiro Wot.",
      },
      {
        name: "Korarima (Ethiopian Cardamom)",
        slug: "korarima",
        category: "Ethiopian Spices",
        images: ["/assets/images/p4-1.jpg", "/assets/images/p4-2.jpg"],
        price: "15.95",
        brand: "BeliBaltina",
        rating: "4.6",
        numReviews: 12,
        stock: 8,
        description:
          "Known as Ethiopian cardamom, Korarima has a unique flavor that adds depth to your dishes. Perfect for both sweet and savory recipes.",
      },
    ],
  };
  
  export default sampleData;
  