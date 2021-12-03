import "./CardComponent.css";
import RarityLevel from "./RarityLevel";
import { Image, Name, Habitat, Skin, Outfit, iconType, iconHabitat, iconSkin, iconOutfit, iconGems, Type } from "./CardContents";

export default function CardComponent() {
    
    function renderCards() {
    
        return (
            <div className="card-container box-contents">
                <div className="card-image-container">
                    <img src={Image} alt="card" className="card-image" />
                </div>
                <div className="card-content">
                    <div className="rarity-container">
                        <img src={iconType} alt="typeIcon" className="type-image" />
                        <span className="card-title">{Name}</span> 
                    </div>
                    <hr className="card-separator" />
                    <div className="rarity-container">
                        <img src={iconHabitat} alt="habitatIcon" className="rarity-image2" />
                        <span className="rarity-text">HABITAT: </span>
                        <span className="rarity-text2">{Habitat}</span>
                    </div>
                    <div className="rarity-container"> 
                        <img src={iconSkin} alt="author" className="rarity-image2" />
                        <span className="rarity-text">SKIN: </span>
                        <span className="rarity-text2">{Skin}</span>
                    </div>
                    <div className="rarity-container">  
                        <img src={iconOutfit} alt="author" className="rarity-image2" />
                        <div className="rarity-text">OUTFIT: </div>
                        <span className="rarity-text2">{Outfit}</span>
                    </div>
                    
                    <RarityLevel />
                    <div className="rarity-container2">
                        <img src={iconGems} alt="habitatIcon" className="rarity-image3" />
                        <span className="rarity-title">{Type}</span>
                    </div>
                    
                    
                    
                </div>
            </div>
        )
    }
    return (
        <div className="card" >
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            {renderCards()}
        </div>
    )
}
