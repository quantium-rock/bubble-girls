import cherry from "./data/cherry.js";


const path = "images/collections/cherry/";
const length = 9;

export var Id = Math.floor(Math.random()*length);

var png = () => { return path.concat( Id, ".png"); }
export var Image = png();

export var Name = cherry[Id].name;
export var Habitat = cherry[Id].attributes[1].value;
export var Skin = cherry[Id].attributes[2].value;
export var Outfit = cherry[Id].attributes[3].value;

const iconsPath = "images/icons/";

export var iconType = iconsPath.concat("type/", "love.png");

const Habitat_name = Habitat.split("#");
const Skin_name = Skin.split("#");
const Outfit_name = Outfit.split("#");
export var iconHabitat = iconsPath.concat("habitat/", Habitat_name[0], ".png");
export var iconSkin = iconsPath.concat("skin/", Skin_name[0], ".png");
export var iconOutfit = iconsPath.concat("outfit/", Outfit_name[0], ".png");

export var rarityLevel = parseInt( 100 - ( ( parseFloat(Habitat_name[1]) + parseFloat(Skin_name[1]) + parseFloat(Outfit_name[1]) ) / 3 ) );
export default rarityLevel; 

var Gem = '';
var Rar = '';

if ( rarityLevel > 70 ) {
    Gem = 'diamond.png';
    Rar = 'ORIGIN';
} else if ( rarityLevel > 50 ) {
    Gem = 'graphite.png';
    Rar = 'LEGENDARY';
}
else if ( rarityLevel > 30 ) {
    Gem = 'amethyst.png';
    Rar = 'SUPER-RARE';
}
else if ( rarityLevel > 10 ) {
    Gem = 'jade.png';
    Rar = 'RARE';
}



export var Type = Rar;

export var iconGems = iconsPath.concat("gems/", Gem);
