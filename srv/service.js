const cds = require('@sap/cds')
const axios = require('axios')


function mapCharacterData(data) {
    return data.map(e => ({
        id: e.id,
        name: e.name,
        house: e.house,
        core: e.wand.core,
        wood: e.wand.wood,
        length: e.wand.length,
        patronus: e.patronus,
        species: e.species,
        dateOfBirth: e.dateOfBirth,
        ancestry: e.ancestry,
        alive: e.alive,
        image: e.image
    }));
}

module.exports = cds.service.impl(function() {

    // Read all characters from API
    this.on('READ', 'Characters', async () =>{
        const {data} = await axios.get('https://hp-api.onrender.com/api/characters'); 
        const result = mapCharacterData(data);
        return result;
    });

    // Read a character by id from API
    this.on('getCharacterById', async (req) => {
        const { id } = req.data;
        const {data} = await axios.get(`https://hp-api.onrender.com/api/character/${id}`);
        const result = mapCharacterData(data);
        return result;
      });
})



