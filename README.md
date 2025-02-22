# **Frontend - Shopping Catalog**

## **Introduction**
This project was designed to offer a seamless and intuitive shopping experience, making it easy for users to browse products and access special discounts.

## **Local Setup & Execution**
To run the project locally, follow these steps:

1. **Create the `.env.local` file** in the root directory.
2. **Add the API URL** in the environment variable:
   ```
   VITE_API_URL=your_backend_url_here
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Start the project**:
   ```sh
   npm run dev
   ```
5. Open your browser and go to **`http://localhost:5173`** (or the port defined in your environment).

## **Technical Choices Justification**
- **React with Vite**: Ensures fast development with optimized builds and hot module replacement.
- **Material UI**: Provides a professional, responsive, and consistent UI across different devices.
- **React Hook Form**: Efficiently manages form validation and state with minimal re-renders.
- **React Router**: Handles navigation and routing seamlessly, making the app more dynamic.
- **Axios**: Simplifies API requests and response handling.
- **Sonner**: Offers clean and efficient toast notifications for better user feedback.

These choices were made to enhance **developer productivity, performance, and maintainability**, ensuring a smooth user experience.

## **Project Structure**
The project follows a **clean and scalable architecture**:

```
/frontend
│── /src
│   │── /api         # API configuration and requests
│   │── /interfaces  # TypeScript interfaces
│   │── /views       # Main application views (Register, Login, Catalog)
│   │── /routes      # Application routing configuration
│   │── /styles      # CSS and global styles
│   │── main.tsx     # Entry point
│   │── App.tsx      # Root component
│── .env.local       # Environment variables
│── package.json     # Dependencies and scripts
│── README.md        # Project documentation
```

