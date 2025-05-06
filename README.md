# Wanderly - Travel Discovery Web App

Wanderly is a responsive and user-friendly website developed using React.js and modern frontend tools. It serves as a platform to explore cities, discover hotels, and find popular places to visit, all presented with a clean UI and real-time data from the Google Places API. It includes graceful fallbacks using Unsplash for a seamless experience.

## Features

- Location-Based Search: Allows users to search for cities and locations using autocomplete.
- Places to Visit: Displays popular attractions and points of interest near the selected city.
- Hotels Nearby: Shows nearby hotel listings with photos and details.
- Destination Information: Provides summaries and descriptions of each destination.
- Image Fallbacks: Uses Unsplash when Google Places doesn't provide images.
- Responsive UI: Works flawlessly across desktops, tablets, and smartphones.
- Fast Build & Performance: Built with Vite and Tailwind CSS for rapid performance.

## Installation and Usage

1. Clone the repository:  
   `git clone https://github.com/your-username/wanderly.git`

2. Navigate to the project directory:  
   `cd wanderly`

3. Install dependencies:  
   `npm install`

4. Set up environment variables:  
   Create a `.env` file in the root folder and add the following:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_google_places_api_key
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```

5. Run the application:  
   `npm run dev`

## Deployment

- You can deploy Wanderly on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.
- Make sure to configure the required environment variables in your deployment dashboard.
- To create a production build:  
  `npm run build`

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS, tw-animate-css
- **APIs**: Google Places API, Unsplash
- **Routing**: React Router
- **Utilities**: Axios, clsx, lucide-react, @radix-ui components
- **Build Tool**: Vite
- **Auth & Integrations** (optional): Firebase, React OAuth

## Contributing

Contributions are welcome! If you have ideas for improvements or want to add new features, feel free to fork the repository and submit a pull request.

## Contact

For questions or feedback, feel free to reach out to me at [saumitrapathak11@gmail.com](mailto:saumitrapathak11@gmail.com).

---

*Disclaimer: This project is for demonstration purposes only and is not intended for production travel booking use.*
