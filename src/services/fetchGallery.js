import NekosBest from "./NekosBest";
import WaifuPics from "./WaifuPics";
import NekosAPI from "./NekosAPI";
import DefaultGallery from "./DefaultGallery";

export default async function fetchGallery(
  setGallery,
  nekosBest,
  nekosAPI,
  waifuPICS,
  tag,
  origin
) {
  try {
    let fetchNumber = 18;
    if (origin !== null) {
      fetchNumber = 1;
    } else {
      if (nekosAPI && nekosBest && waifuPICS) {
        fetchNumber = 6;
      } else if (
        (nekosAPI && nekosBest) ||
        (nekosAPI && waifuPICS) ||
        (waifuPICS && nekosBest)
      ) {
        fetchNumber = 9;
      } else if (!nekosBest && !nekosAPI && !waifuPICS) {
        fetchNumber = 18;
      }
    }
    let arr = [];
    for (let i = 0; i < fetchNumber; i++) {
      if (nekosBest) {
        const imageNekosBest = await NekosBest(tag, origin);
        if (imageNekosBest) {
          imageNekosBest.constructor == Array
            ? imageNekosBest.forEach((item) => arr.push(item))
            : arr.push(imageNekosBest);
        }
      }
      if (nekosAPI) {
        const imagesNekosAPI = await NekosAPI(tag, origin);
        if (imagesNekosAPI) {
          imagesNekosAPI.constructor == Array
            ? imagesNekosAPI.forEach((item) => arr.push(item))
            : arr.push(imagesNekosAPI);
        }
      }
      if (waifuPICS) {
        const imagesWaifuPics = await WaifuPics(tag, origin);
        if (imagesWaifuPics) {
          imagesWaifuPics.constructor == Array
            ? imagesWaifuPics.map((item) => arr.push(item))
            : arr.push(imagesWaifuPics);
        }
      } else if (!waifuPICS && !nekosAPI && !nekosBest) {
        const defaultGallery = await DefaultGallery(tag, origin);
        arr.push(defaultGallery);
      }
    }
    console.log(fetchNumber);
    setGallery(arr);
  } catch (err) {
    return console.log(err);
  }
}
