const GREETINGS = [
    "QI ICHP Test. Hello!",
    "Well hello there!",
    "What's up?",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};