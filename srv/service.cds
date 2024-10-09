using { ELTE } from '../db/catalog';


service Endpoint {

    entity Characters as projection on ELTE.Characters;

    function getCharacterById(id: UUID) returns Characters;

}

