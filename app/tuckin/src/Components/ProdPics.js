// Prod1
import Prod1WhiteMain from "../images/prodpics/Prod1/Prod1-white-main.png";
import Prod1White1 from "../images/prodpics/Prod1/Prod1-white-1.png";
import Prod1White2 from "../images/prodpics/Prod1/Prod1-white-2.png";

import Prod1SageMain from "../images/prodpics/Prod1/Prod1-sage-main.webp";
import Prod1Sage1 from "../images/prodpics/Prod1/Prod1-sage-1.webp";

import Prod1PinkMain from "../images/prodpics/Prod1/Prod1-pink-main.webp";
import Prod1Pink1 from "../images/prodpics/Prod1/Prod1-pink-1.webp";
import Prod1Pink2 from "../images/prodpics/Prod1/Prod1-pink-2.webp";

import Prod1StripMain from "../images/prodpics/Prod1/Prod1-strip-main.jpg";
import Prod1Strip1 from "../images/prodpics/Prod1/Prod1-strip-1.jpg";
import Prod1Strip2 from "../images/prodpics/Prod1/Prod1-strip-2.jpg";

import Prod2CharMain from "../images/prodpics/Prod2/Prod2-charcoal-main.jpg";

import Prod3TwillMain from "../images/prodpics/Prod3/Prod3-twill-main.jpg";
import Prod3Twill1 from "../images/prodpics/Prod3/Prod3-twill-1.jpg";
import Prod3Twill2 from "../images/prodpics/Prod3/Prod3-twill-2.jpg";

import Prod4WhiteMain from "../images/prodpics/Prod4/Prod4-white-main.jpg";
import Prod4White1 from "../images/prodpics/Prod4/Prod4-white-1.jpg";

import Prod4GreenMain from "../images/prodpics/Prod4/Prod4-green-main.gif";
import Prod4Green1 from "../images/prodpics/Prod4/Prod4-green-1.jpg";

import Prod4GreyMain from "../images/prodpics/Prod4/Prod4-gray-main.jpg";
import Prod4Grey1 from "../images/prodpics/Prod4/Prod4-gray-1.jpg";

import Prod4PinkMain from "../images/prodpics/Prod4/Prod4-pink-main.jpg";
import Prod4Pink1 from "../images/prodpics/Prod4/Prod4-pink-1.jpg";

const Prod1Pics = {
  white: [Prod1WhiteMain, Prod1White1, Prod1White2],
  sage: [Prod1SageMain, Prod1Sage1],
  pink: [Prod1PinkMain, Prod1Pink1, Prod1Pink2],
  strip: [Prod1StripMain, Prod1Strip1, Prod1Strip2],
};

const Prod4Pics = {
  white: [Prod4WhiteMain, Prod4White1],
  green: [Prod4GreenMain, Prod4Green1],
  pink: [Prod4PinkMain, Prod4Pink1],
  grey: [Prod4GreyMain, Prod4Grey1],
};

const Prod2Pics = Prod2CharMain;

const Prod3Pics = [Prod3TwillMain, Prod3Twill1, Prod3Twill2];

const ProdPics = {
  one: Prod1Pics,
  two: Prod2Pics,
  three: Prod3Pics,
  four: Prod4Pics,
};

export default ProdPics;
