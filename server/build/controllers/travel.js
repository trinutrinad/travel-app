export const getDestinations = (req, res) => {
    res.json([
        { name: 'Paris', country: 'France' },
        { name: 'Tokyo', country: 'Japan' }
    ]);
};
