import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "wall-1": "./images/wallpapers/wallpaper1.png",
        "wall-2": "./images/wallpapers/wallpaper6.png",
        "wall-3": "./images/wallpapers/wallpaper3.jpg",
        "wall-4": "./images/wallpapers/wallpaper4.png",
        "wall-5": "./images/wallpapers/wallpaper5.jpg",
        "wall-6": "./images/wallpapers/wallpaper6.png",
        "wall-7": "./images/wallpapers/wallpaper7.png",
      
    };
    return (
        <div style={{ backgroundImage: `url(${bg_images[props.img]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
