const events = [
    {
        id: 1,
        title: "Music Festival",
        date: "12 June 2026",
        category: "Music",
        image: "/assets/event1.jpg"
    },

    {
        id: 2,
        title: "Tech Conference",
        date: "20 July 2026",
        category: "Technology",
        image: "/assets/event2.jpg"
    }
];

exports.getHomePage = (req, res) => {
    res.render("index", { events });
};

exports.getEventDetails = (req, res) => {
    const eventId = req.params.id;

    const event = events.find(
        event => event.id == eventId
    );

    res.render("event-details", { event });
};