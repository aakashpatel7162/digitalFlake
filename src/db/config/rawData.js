
import { Images } from './assets/Images';
export const rawData={
     navLinks:[
        { name: "Home", href: "#home",icon:Images.homeIcon},
        { name: "Category", href: "#category", icon: Images.category },
        { name: "Subcategory", href: "#subcategory",icon: Images.subCategory }, 
        { name: "Product", href: "#product", icon:Images.productIcon}, 
      ],
      searchOptions:{
        home:{home:"home"},
        category: { label: 'Search by Category', placeholder: 'Enter category...', image:Images.category },
        subcategory: { label: 'Search by Subcategory', placeholder: 'Enter subcategory...', image:Images.subCategory },
        product: { label: 'Search by Product', placeholder: 'Enter product name...', image: Images.productIcon },
      },
       columnStructure:{
        category: ['Category Name', 'Image', 'Status', 'Action'],
        subcategory: ['Subcategory Name', 'Category Name', 'Image', 'Status', 'Action'],
        product: ['Product Name', 'Subcategory Name', 'Category Name', 'Image', 'Status', 'Action'],
      },
      
        categories: [
          {
            "name": "Electronics",
            "image": "electronics.jpg",
            "status": "Active",
            "action": "edit",
            "subcategories": [
              {
                "subcategory": "Mobile Phones",
                "category": "Electronics",
                "image": "mobile-phones.jpg",
                "status": "Active",
                "action": "edit",
                "products": [
                  {
                    "product": "iPhone 15",
                    "subcategory": "Mobile Phones",
                    "category": "Electronics",
                    "image": "iphone15.jpg",
                    "status": "Active",
                    "action": "buy"
                  },
                  {
                    "product": "Samsung Galaxy S23",
                    "subcategory": "Mobile Phones",
                    "category": "Electronics",
                    "image": "samsung-s23.jpg",
                    "status": "Inactive",
                    "action": "buy"
                  }
                ]
              },
              {
                "subcategory": "Laptops",
                "category": "Electronics",
                "image": "laptops.jpg",
                "status": "Inactive",
                "action": "edit",
                "products": [
                  {
                    "product": "MacBook Pro",
                    "subcategory": "Laptops",
                    "category": "Electronics",
                    "image": "macbook-pro.jpg",
                    "status": "Active",
                    "action": "buy"
                  },
                  {
                    "product": "Dell XPS 15",
                    "subcategory": "Laptops",
                    "category": "Electronics",
                    "image": "dell-xps15.jpg",
                    "status": "Inactive",
                    "action": "buy"
                  }
                ]
              }
            ]
          },
          {
            "name": "Clothing",
            "image": "clothing.jpg",
            "status": "Active",
            "action": "edit",
            "subcategories": [
              {
                "subcategory": "Men's Fashion",
                "category": "Clothing",
                "image": "mens-fashion.jpg",
                "status": "Active",
                "action": "edit",
                "products": [
                  {
                    "product": "T-shirt",
                    "subcategory": "Men's Fashion",
                    "category": "Clothing",
                    "image": "tshirt.jpg",
                    "status": "Active",
                    "action": "buy"
                  }
                ]
              }
            ]
          }
        ]
      
      
    
}
