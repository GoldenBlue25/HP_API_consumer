namespace ELTE;

@cds.persistence.skip
entity Characters{
    key id: String;
    name: String;
    house: String;
    patronus: String;
    species: String;
    dateOfBirth: Date;
    ancestry: String;
    alive: String;
    image: String;
    core: String;
    wood: String;
    length: String;
}


