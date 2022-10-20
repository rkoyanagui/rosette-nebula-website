const nebulaImage = document.querySelector("img");
const authorAndCopyrightTxt = document.getElementById("author-and-copyright");

const src1 = "images/rosette-ngc-2237-ferretti-bruzzone_nit.jpg";
const src2 = "images/rosette-nebula-ngc-2244-raysastrophotograhy.jpg";

function setImage(imageSrc, imageHref, imageText, authorHref, authorText, licenceHref, licenceText) {
    nebulaImage.setAttribute("src", imageSrc);
    authorAndCopyrightTxt.innerHTML = "";
    
    const imageLink = document.createElement("a");
    imageLink.href = imageHref;
    imageLink.innerHTML = imageText;
    
    const photoDe = document.createTextNode("Photo de ");
    const copyright = document.createTextNode(" Copyright © ");
    
    authorAndCopyrightTxt.appendChild(photoDe);
    authorAndCopyrightTxt.appendChild(imageLink);
    authorAndCopyrightTxt.appendChild(copyright);
    
    const authorLink = document.createElement("a");
    authorLink.href = authorHref;
    authorLink.innerHTML = authorText;
    
    const licenceLink = document.createElement("a");
    licenceLink.href = licenceHref;
    licenceLink.innerHTML = licenceText;
    
    authorAndCopyrightTxt.appendChild(authorLink);
    authorAndCopyrightTxt.appendChild(document.createTextNode(" "));
    authorAndCopyrightTxt.appendChild(licenceLink);
}

nebulaImage.onclick = () => {
    const src = nebulaImage.getAttribute("src");
    if (src === src1) {
        const imageHref = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Rosette_Nebula_NGC_2244.jpg";
        const authorHref = "https://commons.wikimedia.org/w/index.php?title=User:Raysastrophotograhy&action=edit&redlink=1";
        const authorText = "Raysastrophotograhy";
        const licenceHref = "https://creativecommons.org/licenses/by-sa/4.0/deed.en";
        const licenceText = "cc-by-sa/4.0";
        setImage(src2, imageHref, imageHref, authorHref, authorText, licenceHref, licenceText);
    } else {
        const imageHref = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Rosetta_NGC_2237_Ferretti-Bruzzone_Nit.jpg";
        const authorHref = "https://commons.wikimedia.org/w/index.php?title=User:Arorangi-Rangi&action=edit&redlink=1";
        const authorText = "Antonio Ferretti & Attilio Bruzzone";
        const licenceHref = "https://creativecommons.org/licenses/by-sa/4.0/deed.en";
        const licenceText = "cc-by-sa/4.0";
        setImage(src1, imageHref, imageHref, authorHref, authorText, licenceHref, licenceText);
    }
};
