import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import News from "./components/News/News";

import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import Setting from "./pages/Setting";


const news = {"articles": [
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "Indu Bhan",
    "title": "Delhi High Court seeks details from Tesla Power India in trademark case with Tesla Inc",
    "description": "The Delhi High Court has requested Gurugram-based Tesla Power India to submit an affidavit detailing the sales figures of electric vehicle scooters and the current inventory in a trademark dispute with US electric vehicle giant Tesla Inc. Justice Anish Dayal …",
    "url": "https://economictimes.indiatimes.com/industry/renewables/delhi-high-court-seeks-details-from-tesla-power-india-in-trademark-case-with-tesla-inc/articleshow/110503628.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-110503656,width-1200,height-630,imgsize-69888,overlay-economictimes/photo.jpg",
    "publishedAt": "2024-05-28T14:53:32Z",
    "content": "The Delhi High Court on Tuesday asked Gurugram-based Tesla Power India to furnish an affidavit detailing the number of electric vehicle scooters sold and the current stocks available with it in a tra… [+2135 chars]"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "Indu Bhan",
    "title": "Delhi High Court seeks details from Tesla Power India in trademark case with Tesla Inc",
    "description": "The Delhi High Court has requested Gurugram-based Tesla Power India to submit an affidavit detailing the sales figures of electric vehicle scooters and the current inventory in a trademark dispute with US electric vehicle giant Tesla Inc. Justice Anish Dayal …",
    "url": "https://economictimes.indiatimes.com/industry/renewables/delhi-high-court-seeks-details-from-tesla-power-india-in-trademark-case-with-tesla-inc/articleshow/110516144.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-110503656,width-1200,height-630,imgsize-69888,overlay-etmarkets/photo.jpg",
    "publishedAt": "2024-05-28T14:53:32Z",
    "content": "The Delhi High Court on Tuesday asked Gurugram-based Tesla Power India to furnish an affidavit detailing the number of electric vehicle scooters sold and the current stocks available with it in a tra… [+2130 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Europapress.es"
    },
    "author": null,
    "title": "Tesla se desploma en Bolsa después de que Glass Lewis inste a accionistas a rechazar el sueldo de Musk",
    "description": "Las acciones de Tesla se desplomaban más de un 3% durante los primeros compases de la sesión bursátil en Estados Unidos después de que el proxy --empresa de asesoramiento, normalmente, de inversores institucionales-- Glass Lewis haya recomendado a los accioni…",
    "url": "https://www.europapress.es/motor/sector-00644/noticia-tesla-desploma-bolsa-despues-glass-lewis-inste-accionistas-rechazar-sueldo-musk-20240528165120.html",
    "urlToImage": "https://img.europapress.es/fotoweb/fotonoticia_20240528165120_1200.jpg",
    "publishedAt": "2024-05-28T14:51:20Z",
    "content": "MADRID, 28 May. (EUROPA PRESS) - \r\n Las acciones de Tesla se desplomaban más de un 3% durante los primeros compases de la sesión bursátil en Estados Unidos después de que el proxy --empresa de asesor… [+2388 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Feber.se"
    },
    "author": "Bobby Green",
    "title": "Giannini Spettacolo är starkaste Abarthen",
    "description": "Det lilla krutpaketet bjuder på 250 hästar\n\n\n\n\n\n\n\n\n\n\n\n\nDen italienska tuningfirman Giannini Automobili presenterar nu Giannini Spettacolo. Det är en ännu vassare version av redan potenta Abarth 595. Här har man skruvat upp allt ytterligare och skrämt upp den …",
    "url": "https://feber.se/bil/giannini-spettacolo-ar-starkaste-abarthen/468083/",
    "urlToImage": "https://static.feber.se/article_images/58/98/41/589841.jpg",
    "publishedAt": "2024-05-28T14:40:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+42085 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "TelecomTV"
    },
    "author": "TelecomTV Staff",
    "title": "What’s up with… T-Mobile/UScellular, China’s chip fund, Digi & OTE",
    "description": "T-Mobile US strikes $4.4bn deal to acquire UScellularChina sets up $47.5bn chip sector fundDigi lines up deal to buy Romanian mobile operation from OTE",
    "url": "https://www.telecomtv.com/content/access-evolution/what-s-up-with-t-mobile-uscellular-china-s-chip-fund-digi-ote-50467/",
    "urlToImage": "https://assets.telecomtv.com/assets/telecomtv/t-mobile-us-15591.jpeg?w=1200",
    "publishedAt": "2024-05-28T14:39:59Z",
    "content": "The global race to attain chip R&amp;D and production supremacy has shifted up yet another gear… Only days after South Korea unveiled a support package for its semiconductor industry worth $19bn, Chi… [+6322 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "Nästa månads PlayStation Plus-spel",
    "description": "Snart kan du vara Kenny Omega\n\n\n\n\n\n\nSnart är det juni, och det innebär även att det snart dyker upp lite nya spel för folk som nöjer sig med PlayStation Plus Essential.\n\nSpelen som PlayStation Plus Essential-prenumeranter får tillgång till från den 4 juni är …",
    "url": "https://feber.se/spel/nasta-manads-playstation-plus-spel/468109/",
    "urlToImage": "https://static.feber.se/article_images/58/99/18/589918.jpg",
    "publishedAt": "2024-05-28T14:30:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+41636 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Quartz India"
    },
    "author": "Ryan Erik King / Jalopnik",
    "title": "Tesla batteries degrade faster than Tesla says",
    "description": "A recent study found that Tesla vehicle batteries degrade at a faster rate than the manufacturer’s warranty assures. Recurrent discovered that the range plummeted to 64% of the EPA-rated range after three years after combing data from 12,198 Tesla Model 3 and…",
    "url": "https://qz.com/tesla-batteries-degrade-warranty-1851503458",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ff3459e750e6c99c1a2b36d6e14d69b3.jpg",
    "publishedAt": "2024-05-28T14:26:09Z",
    "content": "A recent study found that Tesla vehicle batteries degrade at a faster rate than the manufacturers warranty assures. Recurrent discovered that the range plummeted to 64% of the EPA-rated range after t… [+1958 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Investing.com"
    },
    "author": "Investing.com",
    "title": "Nvidia shares jump as Elon Musk’s AI startup secures $6 billion in funding",
    "description": "Nvidia shares jump as Elon Musk’s AI startup secures $6 billion in funding",
    "url": "https://www.investing.com/news/stock-market-news/nvidia-shares-jump-as-elon-musks-ai-startup-secures-6-billion-in-funding-432SI-3459200",
    "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEHAH0WT_L.jpg",
    "publishedAt": "2024-05-28T14:26:02Z",
    "content": "Shares in Nvidia (NASDAQ:NVDA) jumped at the Tuesday market open, boosted in part by the announcement that Elon Musks artificial intelligence startup, xAI, has raised $6 billion in a bid to challenge… [+1647 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Jalopnik"
    },
    "author": "Collin Woodard",
    "title": "Cybertruck Reportedly Draws Blood Before New Owner Can Even Drive It",
    "description": "The Tesla Cybertruck’s launch has been far from smooth, to say the least. We’ve heard about the time a car wash bricked a Cybertruck, the frunk’s taste for fingers and that coolant leaks aren’t covered by the warranty even if you’ve only driven 35 miles since…",
    "url": "https://jalopnik.com/cybertruck-reportedly-draws-blood-before-new-owner-can-1851503430",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5eb5a98c7b0a8363abf6c2ded7cfd64b.jpg",
    "publishedAt": "2024-05-28T14:25:00Z",
    "content": "The Tesla Cybertrucks launch has been far from smooth, to say the least. Weve heard about the time a car wash bricked a Cybertruck, the frunks taste for fingers and that coolant leaks arent covered b… [+3144 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "GlobeNewswire"
    },
    "author": "Pomerantz LLP",
    "title": "SHAREHOLDER ALERT: Pomerantz Law Firm Reminds Shareholders with Losses on their Investment in VinFast Auto Ltd. of Class Action Lawsuit and Upcoming Deadlines – VFS",
    "description": "NEW YORK, May 28, 2024 (GLOBE NEWSWIRE) -- Pomerantz LLP announces that a class action lawsuit has been filed against VinFast Auto Ltd.  (“VinFast” or the “Company”) f/k/a Black Spade Acquisition Co., (“Black Spade”) (NASDAQ: VFS) and certain officers.   The …",
    "url": "https://www.globenewswire.com/news-release/2024/05/28/2889154/1087/en/SHAREHOLDER-ALERT-Pomerantz-Law-Firm-Reminds-Shareholders-with-Losses-on-their-Investment-in-VinFast-Auto-Ltd-of-Class-Action-Lawsuit-and-Upcoming-Deadlines-VFS.html",
    "urlToImage": null,
    "publishedAt": "2024-05-28T14:23:00Z",
    "content": "NEW YORK, May 28, 2024 (GLOBE NEWSWIRE) -- Pomerantz LLP announces that a class action lawsuit has been filed against VinFast Auto Ltd.  (VinFast or the Company) f/k/a Black Spade Acquisition Co., (B… [+8112 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hvg.hu"
    },
    "author": "hvg@hvg.hu",
    "title": "A féligazságok szimbóluma lett a szegedi Tesla, amit egy dízelaggregátorról töltenek",
    "description": "Kétségkívül ellentmondásos jelenet, amiből sok mindent ki lehet hozni.",
    "url": "https://hvg.hu/cegauto/20240528_szegedi-tesla-dizelaggregator-toltes",
    "urlToImage": "https://img.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/0f3c7c54-4b6a-479f-bb30-142acd4081b6.jpg",
    "publishedAt": "2024-05-28T14:21:01Z",
    "content": "A Magyar Kerékpárosklub szegedi alszervezete hétfn egy képet tett közzé, amelyen egy bordó Tesla Model Y látható, utánfutóként egy nagy méret aggregátorral, amirl elvileg a kocsit éppen töltik. A bej… [+1180 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "Microsoft bekräftar Call of Duty till Game Pass",
    "description": "Något annat vore ju konstigt\n\n\n\n\n\n\n\n\n\n\nTidigare i dag fick ett antal Game Pass-prenumeranter fick en liten notis om att årets Call of Duty-spel, Call of Duty: Black Ops 6, kommer att släppas till Game Pass när spelet väl lanseras under hösten. I samband med a…",
    "url": "https://feber.se/spel/microsoft-bekraftar-call-of-duty-till-game-pass/468102/",
    "urlToImage": "https://i.ytimg.com/vi/V08UPqchVgQ/hqdefault.jpg",
    "publishedAt": "2024-05-28T14:20:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+41537 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Quartz India"
    },
    "author": "Owen Bellwood / Jalopnik",
    "title": "Tesla shareholders should reject Elon Musk’s huge pay package, advisory firm says",
    "description": "After it transpired that Tesla was buying advertising to try and convince shareholders to back its massive new pay package for boss Elon Musk, investors are now being urged to vote down the $56 billion pay by an external advisory firm.Read more...",
    "url": "https://qz.com/tesla-elon-musk-pay-shareholder-vote-glass-lewis-1851503432",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0f32d6b58799d51967c54606879200fd.jpg",
    "publishedAt": "2024-05-28T14:18:21Z",
    "content": "After it transpired that Tesla was buying advertising to try and convince shareholders to back its massive new pay package for boss Elon Musk, investors are now being urged to vote down the $56 billi… [+2107 chars]"
  },
  {
    "source": {
      "id": "der-tagesspiegel",
      "name": "Der Tagesspiegel"
    },
    "author": "Oliver von Riegen, dpa",
    "title": "„Erfüllungsgehilfe“ von Elon Musk: Brandenburger Linke kritisiert Tesla-Ansiedlung",
    "description": "Die Kritik am US-Elektroautobauer ist in diesem Jahr deutlich gewachsen. Die Linksfraktion im Brandenburger Landtag will ein Schwarzbuch zur Ansiedlung erstellen.",
    "url": "https://www.tagesspiegel.de/potsdam/brandenburg/erfullungsgehilfe-von-elon-musk-brandenburger-linke-kritisiert-tesla-ansiedlung-11729240.html",
    "urlToImage": "https://www.tagesspiegel.de/images/abstimmung-uber-tesla-erweiterung/alternates/BASE_16_9_W1400/abstimmung-ueber-tesla-erweiterung.jpeg",
    "publishedAt": "2024-05-28T14:16:46Z",
    "content": "Brandenburgs Linksfraktionschef Sebastian Walter hält die Ansiedlung von US-Elektroautobauer Tesla mit derzeit rund 12.000 Beschäftigten für ein Negativbeispiel für eine fehlende Einbindung der Regio… [+2540 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Yahoo.co.jp"
    },
    "author": "ギズモード・ジャパン",
    "title": "テスラの充電部門トップ、イーロン・マスクに逆らい部門ごと消される（ギズモード・ジャパン） - Yahoo!ニュース",
    "description": "部門消滅、衝撃の舞台裏。 全米でEV急速充電設備の増設を進めるTesla（テスラ）のスーパーチャージャー部門が、4月30日いきなり消滅。担当社員500人全員がレイオフされ、EV業界に激震が走っています。 アメリカでは全車EV化の未来に向け、2030年までに全米50万カ所に充電網を拡大する計画が急ピッチで進行中です。最初は...",
    "url": "https://news.yahoo.co.jp/articles/e89b117cd64e4a3939e138cb64324fa15eda1cc4",
    "urlToImage": "https://newsatcl-pctr.c.yimg.jp/t/amd-img/20240528-00000021-giz-000-1-view.jpg?exp=10800",
    "publishedAt": "2024-05-28T14:12:41Z",
    "content": "EVTesla430500EV\r\nEV203050TeslaTeslaTesla"
  },
  {
    "source": {
      "id": null,
      "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "Nu kan du spela MultiVersus",
    "description": "Lanserades på riktigt i dag\n\n\n\n\n\n\n\n\n\n\nEfter en längre tid med betor har nu Warner Bros. Games officiellt lanserat MultiVersus på PlayStation, Xbox och Windows. Som bekant är detta Smash Bros.-liknande spel helt gratis att spela, men om man verkligen vill kan …",
    "url": "https://feber.se/spel/nu-kan-du-spela-multiversus/468108/",
    "urlToImage": "https://i.ytimg.com/vi/qX5AUVIAg_o/hqdefault.jpg",
    "publishedAt": "2024-05-28T14:10:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+41723 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Caradisiac.com"
    },
    "author": "Julien Bertaux",
    "title": "Pourquoi les voitures électriques sont-elles plus chères à réparer ?",
    "description": "C’est la conclusion d’une étude qui s’est penchée sur 800 000 rapports d’expertise. Pour un même modèle de voiture, la version électrique s’avère plus onéreuse à réparer, de l'ordre de 15 % en moyenne.",
    "url": "https://www.caradisiac.com/pourquoi-les-voitures-electriques-sont-elles-plus-cheres-a-reparer-209062.htm",
    "urlToImage": "https://images.caradisiac.com/images/9/0/6/2/209062/S7-209062-803249.jpg",
    "publishedAt": "2024-05-28T14:08:34Z",
    "content": "Au quotidien, faire le plein délectrons s'avère nettement moins coûteux que de remplir son réservoir de carburant, à condition déviter les bornes rapides. En revanche, une voiture électrique est plus… [+2313 chars]"
  }
]}

function App() {
  return (
    <div className="p-6 ">
      <Navbar />
      <Search />
      {/* <News title="News - Top General Headlines" news={news.articles}/> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:category" component={Category} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/settings" component={Setting} />

        {/* <Route path="*" component={NotFound} /> */}
        

      </Switch>

   
    </div>
  );
}

export default App;



