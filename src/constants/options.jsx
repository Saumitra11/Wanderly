export const SelectTravelersList = [
    {
        id: 1,
        title: 'Solo Explorer',
        desc: 'Embrace your journey with a solo adventure',
        icon: '🧳',
        people: '1'
    },
    {
        id: 2,
        title: 'Romantic Escape',
        desc: 'For those intimate getaways with your special someone',
        icon: '❤️',
        people: '2'
    },
    {
        id: 3,
        title: 'Family Fun',
        desc: 'Create unforgettable memories with the whole family',
        icon: '👨‍👩‍👧‍👦',
        people: '3-5 people'
    },
    {
        id: 4,
        title: 'Adventure Crew',
        desc: 'Gather your friends for an epic adventure',
        icon: '🤙',
        people: '3-6 people'
    }
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Budget-Friendly',
        desc: 'Travel smart with affordable options and great value',
        icon: '💸',
    },
    {
        id: 2,
        title: 'Comfort Plus',
        desc: 'Strike the perfect balance between comfort and cost',
        icon: '💵',
    },
    {
        id: 3,
        title: '5-Star Luxury',
        desc: 'Indulge in lavish experiences with premium stays and services',
        icon: '💎',
    }
];

export const AI_PROMPT = "Generate Travel Plan for Location : {location}, for {days} days for {people} with a {budget} Budget, Give me a hotels options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, rating, time travel each of the location for {days} days with each day plan with best time to visit in json format. All real and working urls needed for website."