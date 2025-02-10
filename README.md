# E-Commerce Form

This is a simple e-commerce product submission form built using React, EJS, Node.js, Express, and MongoDB. The project allows users to submit product details such as name, price, description, category, and image. The submitted products are stored in a MongoDB database, and images are uploaded to Cloudinary.

🚀 Live Demo: [E-Commerce Form](https://ecommerce-form.onrender.com/)

## Features

- Submit product details through a web form.
- Upload product images using Cloudinary.
- Store product information in a MongoDB Atlas database.
- Render success confirmation using EJS templates.
- Secure environment configuration using dotenv.

## Tech Stack

- **Frontend:** HTML, CSS, EJS (Embedded JavaScript Templates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Image Hosting:** Cloudinary
- **Middleware:** Body-Parser, Multer, Cloudinary Storage

## Installation

- **Prerequisites**

  - Node.js installed on your system

  - MongoDB Atlas database set up

  - Cloudinary account for image hosting

## Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saumya1620/ecommerce-form.git

2. **Navigate to the project directory:**
   ```bash
   cd ecommerce-form
   
3. **Install Dependencies:**
   ```bash
   npm install
   
4. **Set up environment variables**
Create a .env file in the root directory and add:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret


4. **Run the server:**
   ```bash
   npm start
The server will start at http://localhost:5000

## Usage

1. Open http://localhost:5000 in your browser.
2. Fill in the product details and submit.
3. The product details will be stored in the database, and an image will be uploaded to Cloudinary.
4. A success page will display the submitted product details.

## Future Enhancements

- Add authentication for admin users.

- Implement product listing and deletion.

- Improve UI with better styling and responsiveness.

## Contributing

Feel free to fork the repository and submit a pull request with improvements!

## License

This project is licensed under the MIT License.

Made with ❤️ by Saumya Jain
