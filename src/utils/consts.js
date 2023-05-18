import logo from "../images/logo.prod-a.apple.png";
//////////AboutUs//////////
import imgAboutOne from "../images/stock.png";
import imgAboutTwo from "../images/snow.png";
import imgAboutThree from "../images/logistics.png";
import imgAboutFour from "../images/good-quality.png";
import imgAboutFive from "../images/support.png";
//////////BtnMessage//////////
import imgQuestion from "../images/question-mark.png";
import imgWhatsapp from "../images/whatsapp.png";
import imgPhone from "../images/telephone-handler.png";
//////////Catalog//////////
import tableMeat from "../images/tableMeat.png";
import tableChicken from "../images/tableChicken.png";
import tableDumpings from "../images/tableDumpings.png";
import meat from "../images/meat.jpg";
import chicken from "../images/chicken.jpg";
import dumpings from "../images/dumpings.jpg";
//////////Contacts//////////
import imgContactsLocation from "../images/location-marker.png";
import imgContactsPhone from "../images/phone-call.png";
import imgContactsEmail from "../images/mail.png";
//////////Picture//////////
import imgPicture from "../images/top-img.jpg";
//////////Footer//////////
import linksFreepik from "../utils/links-freepik.docx"

//////////AboutUs//////////
export const listInfoAboutUs = {
  aboutTitle: "Немного о нас",
  aboutText:
    "Прод альянс - крупный дистрибьютор мясных продуктов международных и российских брендов. Поставляем в торговые сети мясные продукты от ведущих торговых марок. Реализуем полуфабрикаты: пельмени, котлеты, блинчики и др.",
  listAdvantages: [
    {
      id: 1,
      img: imgAboutOne,
      title: "Объемные склады",
      text: "с низкотемпературными камерами",
    },
    {
      id: 2,
      img: imgAboutTwo,
      title: "Современное",
      text: "холодильное оборудование",
    },
    {
      id: 3,
      img: imgAboutThree,
      title: "Отлаженная",
      text: "логистическая система",
    },
    {
      id: 4,
      img: imgAboutFour,
      title: "Только качественные и вкусные",
      text: "продукты",
    },
  ],
  aboutSupportTitle: "Поддержка",
  aboutSupportText:
    "Оказываем поддержку во ведении продукции партнеров-производителей в сегменте HoReCa и торговые сети",
  aboutSupportImg: imgAboutFive,
};

//////////BtnMessage//////////
export const listInfoBtnMessage = {
  btnMessageImgWhatsapp: imgWhatsapp,
  hrefWhatsapp:
    "https://api.whatsapp.com/send?phone=79037221826&text=Добрый%20день.%20При%20посeщении%20вашего%20сайта%20у%20меня%20возникли%20вопросы:",
  btnMessageImgPhone: imgPhone,
  hrefPhone: "tel:+79037221826",
  btnMessageImgQuestion: imgQuestion,
};

//////////Catalog//////////
export const listInfoCatalog = {
  catalogTitle: "ПРОД АЛЬЯНС",
  catalogSpanTitle: "- оптовые поставки мяса и полуфабрикатов",
  catalogSpanTitleMobile: "оптовые поставки мяса и полуфабрикатов",
  productsListName: [
    { name: "Мясо", img: meat },
    { name: "Птица", img: chicken },
    { name: "Полуфабрикаты", img: dumpings },
  ],
  tableMeat: tableMeat,
  tableChicken: tableChicken,
  tableDumpings: tableDumpings,
};

//////////CatalogPopup//////////
export const listInfoCatalogPopup = {
  catalogPopupText:
    "Данная информация предоставлена для ознакомления, позиции могут изменяться, для более точных данных запросите прайс-лист или свяжитесь с нами.",
};

//////////Contacts//////////
export const listInfoContacts = {
  contactsTitle: "Контакты",
  listContacts: [
    {
      id: 1,
      img: imgContactsLocation,
      title: "МЕСТОПОЛОЖЕНИЕ",
      text: "2-й Котляковский переулок, 18",
    },
    {
      id: 2,
      img: imgContactsPhone,
      title: "ТЕЛЕФОН",
      text: "+7 (903) 722-18-26",
    },
    {
      id: 3,
      img: imgContactsEmail,
      title: "ПОЧТА",
      text: "Rifor_m@mail.ru",
    },
  ],
};

//////////Footer//////////
export const listInfoFooter = {
  footerLogo: logo,
  footerLogoText: "ПРОД АЛЬЯНС",
  resourcesTitle: "Используемые ресурсы",
  resourcesLinks: [
    {
      id: 1,
      href: "https://www.flaticon.com/ru/free-icons/",
      text: "Иконки от Flaticon",
    },
    {
      id: 2,
      href: linksFreepik,
      text: "Изображения на Freepik",
    },
  ],
  footerCopyright: "© 2023 ПРОД АЛЬЯНС Все права защищены.",
};

//////////Logo//////////
export const listInfoLogo = {
  logo: logo,
};

//////////Navigation//////////
export const listInfoNavigation = {
  navListName: [
    { name: "Продукция", src: "#products" },
    { name: "О нас", src: "#about-us" },
    { name: "Контакты", src: "#contacts" },
  ],
};

//////////MobileNavigation//////////
export const listInfoMobileNavigation = {
  mobileNavListName: [
    { name: "Главная", src: "#header" },
    { name: "Продукция", src: "#products" },
    { name: "О нас", src: "#about-us" },
    { name: "Контакты", src: "#contacts" },
  ],
};

//////////Picture//////////
export const listInfoPicture = {
  img: imgPicture,
  altImg: "картинки мясной продукций",
};

//////////RequestPopup//////////
export const listInfoRequestPopup = {
  requestPopupSubtitle:
    "В течение 10-20 минут наш менеджер отправит актуальный прайс-лист на Ваш email.",
  requestPopupText:
    "Если у вас возникли вопросы, можете позвонить по телефону: +7 (903) 722-18-26 или напишите на наш email: Rifor_m@mail.ru",
};
