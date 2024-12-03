import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel Name, Hotel Address, Price, Hotel Image Url, Geo Coordinates, Rating, Descriptions and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, rating, time to travel to each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"travelPlan\": {\"location\": \"Las Vegas\", \"duration\": \"3 Days\", \"budget\": \"Cheap\", \"travelers\": \"Couple\", \"hotels\": [{\"hotelName\": \"Circus Circus Hotel & Casino\", \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\", \"price\": \"$40-60\", \"hotelImageUrl\": \"https://www.example.com/circuscircus.jpg\", \"geoCoordinates\": {\"latitude\": 36.1215, \"longitude\": -115.1739}, \"rating\": \"3.5\", \"description\": \"A classic Vegas hotel with a circus theme, affordable rooms, and a variety of entertainment options.\"}, {\"hotelName\": \"The D Las Vegas\", \"hotelAddress\": \"300 Fremont Street, Las Vegas, NV 89101\", \"price\": \"$30-50\", \"hotelImageUrl\": \"https://www.example.com/thed.jpg\", \"geoCoordinates\": {\"latitude\": 36.1667, \"longitude\": -115.1396}, \"rating\": \"4.0\", \"description\": \"Located in the Fremont Street Experience, this hotel offers a vibrant atmosphere and budget-friendly rates.\"}, {\"hotelName\": \"Main Street Station Casino, Brewery & Hotel\", \"hotelAddress\": \"200 S Main St, Las Vegas, NV 89101\", \"price\": \"$40-60\", \"hotelImageUrl\": \"https://www.example.com/mainstreet.jpg\", \"geoCoordinates\": {\"latitude\": 36.167, \"longitude\": -115.144}, \"rating\": \"3.8\", \"description\": \"A historic hotel with a retro vibe, offering affordable accommodations and a brewery on-site.\"}], \"itinerary\": [{\"day\": \"Day 1\", \"plan\": [{\"placeName\": \"Fremont Street Experience\", \"placeDetails\": \"A pedestrian mall with a vibrant atmosphere, light shows, and street performers.\", \"placeImageUrl\": \"https://www.example.com/fremontstreet.jpg\", \"geoCoordinates\": {\"latitude\": 36.1696, \"longitude\": -115.1409}, \"ticketPricing\": \"Free\", \"rating\": \"4.5\", \"travelTime\": \"15 mins from The D Las Vegas\"}, {\"placeName\": \"Neon Museum\", \"placeDetails\": \"An outdoor museum displaying vintage Las Vegas signs.\", \"placeImageUrl\": \"https://www.example.com/neonmuseum.jpg\", \"geoCoordinates\": {\"latitude\": 36.177, \"longitude\": -115.128}, \"ticketPricing\": \"$20\", \"rating\": \"4.0\", \"travelTime\": \"20 mins from Fremont Street Experience\"}]}, {\"day\": \"Day 2\", \"plan\": [{\"placeName\": \"The Strip\", \"placeDetails\": \"Las Vegas Boulevard, home to many of the city's famous hotels and casinos.\", \"placeImageUrl\": \"https://www.example.com/thestrip.jpg\", \"geoCoordinates\": {\"latitude\": 36.1146, \"longitude\": -115.1729}, \"ticketPricing\": \"Free\", \"rating\": \"5.0\", \"travelTime\": \"30 mins from The D Las Vegas\"}, {\"placeName\": \"Bellagio Fountains\", \"placeDetails\": \"Free choreographed water shows set to music.\", \"placeImageUrl\": \"https://www.example.com/bellagiofountains.jpg\", \"geoCoordinates\": {\"latitude\": 36.1147, \"longitude\": -115.1713}, \"ticketPricing\": \"Free\", \"rating\": \"4.8\", \"travelTime\": \"5 mins from The Strip\"}, {\"placeName\": \"Seven Magic Mountains\", \"placeDetails\": \"An art installation featuring colorful stacked boulders.\", \"placeImageUrl\": \"https://www.example.com/sevenmagicmountains.jpg\", \"geoCoordinates\": {\"latitude\": 36.0017, \"longitude\": -115.022}, \"ticketPricing\": \"Free\", \"rating\": \"4.2\", \"travelTime\": \"30 mins drive from The Strip\"}]}, {\"day\": \"Day 3\", \"plan\": [{\"placeName\": \"Red Rock Canyon National Conservation Area\", \"placeDetails\": \"Scenic desert landscape with hiking trails and stunning views.\", \"placeImageUrl\": \"https://www.example.com/redrockcanyon.jpg\", \"geoCoordinates\": {\"latitude\": 36.2049, \"longitude\": -115.7919}, \"ticketPricing\": \"$15 per vehicle\", \"rating\": \"4.6\", \"travelTime\": \"45 mins drive from Las Vegas Strip\"}, {\"placeName\": \"Downtown Container Park\", \"placeDetails\": \"Unique shopping and dining area featuring repurposed shipping containers.\", \"placeImageUrl\": \"https://www.example.com/containerpark.jpg\", \"geoCoordinates\": {\"latitude\": 36.1688, \"longitude\": -115.1407}, \"ticketPricing\": \"Free\", \"rating\": \"4.0\", \"travelTime\": \"15 mins from The Strip\"}]}]}}\n\n```"},
          ],
        },
      ],
    });

  