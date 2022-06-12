import images from '../images.js';

export function getMembers() {
    let members = [];
    let name = ["Roshan","Rohan","Pariakhar","Jacob","Manoj"];
    let position = ["President - IT", "Founder", "Co-founder", "CTO", "Developer"]
    images.map((image, index) => {
        members.push({
            image: image,
            name: name[index], 
            position: position[index]
        })
    })
    return members;
}