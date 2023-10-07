const Hello = { 
    world: async (req, res) => {
        return res.json({
            message: "Hello from Sourcing!",
        });
    },
}
module.exports = Hello;
