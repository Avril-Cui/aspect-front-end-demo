import styles from "../styles/front.module.css";
import { sanityClient } from "../sanity";
import { Post } from "../typings";
import OverviewChart from "../components/front_page/overview_charts";
import News from "../components/front_page/news";
import Terms from "../components/front_page/terms";
import ScreenerTable from "../components/simulator/screener_table";
import LeaderBoard from "../components/simulator/LeaderBoard";
import Head from "next/head";
import ExploreSection from "../components/front_page/ExploreSection";
import { useSelector, useDispatch } from "react-redux";
import { requestPrice } from "../features/newPrice.js";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Product from "./game";
import { useAuth0 } from "@auth0/auth0-react";
import SeasonReview from "./season-review";

const Tour = dynamic(() => import("reactour"), { ssr: false });
interface Props {
  index: [Post];
  posts: [Post];
  end_season: [Post];
  companies: any;
}

export default function Front({ index, posts, end_season, companies }: Props) {
  const { isAuthenticated } = useAuth0();

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let current_month = month[today.getMonth()];
  const dispatch = useDispatch();
  const WAIT_TIME = 4000;
  let price_data = useSelector((state: any) => state.price.value);

  const [isPrice, setIsPrice] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const axios = require("axios");
    axios
      .request({
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.serverConnection}/is-end-game`,
      })
      .then((response: any) => {
        if (response.data == "0") {
          setIsEnd(true);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });

    const data = setInterval(() => {
      dispatch(requestPrice() as any);
      setIsPrice(true);
    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [isPrice, dispatch, isEnd]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const togglePopup = () => {
    setIsOpen(true);
  };

  const togglePopclose = () => {
    setIsOpen(false);
  };

  const togglePopup1 = () => {
    setIsOpen1(true);
  };

  const togglePopclose1 = () => {
    setIsOpen1(false);
  };

  const togglePopup2 = () => {
    setIsOpen2(true);
  };

  const togglePopclose2 = () => {
    setIsOpen2(false);
  };

  const togglePopup3 = () => {
    setIsOpen3(true);
  };

  const togglePopclose3 = () => {
    setIsOpen3(false);
  };

  const togglePopup4 = () => {
    setIsOpen4(true);
  };

  const togglePopclose4 = () => {
    setIsOpen4(false);
  };

  const [enabled, setEnabled] = useState(false);

  const toggleStartTutorial = () => {
    setEnabled(true);
    setIsOpen(false);
  };
  const onExit = () => {
    setEnabled(false);
  };
  const steps = [
    {
      selector: "#index_graph",
      content: "Hover over the graph to the the daily price trends.",
    },
    {
      selector: "#news",
      content: "Read and analyze news to make investment decisions.",
    },
    {
      selector: "#terms",
      content: "Learn terminologies to assist financial analysis.",
    },
    {
      selector: "#companies",
      content: "Explore companies with various characteristics and businesses.",
    },
    {
      selector: "#screener",
      content:
        "View companies' real-time prices and click on the links to view the profile page of each company.",
    },
    {
      selector: "#leaderboard",
      content: "See top users' rankings in the game.",
    },
  ];

  return (
    <div>
      <Product />
      {/* <SeasonReview index={end_season} /> */}
      {/* /
      {isAuthenticated ? (
        <SeasonReview index={end_season} />
      ) : (
        <Product />
      )} */}
    </div>
  );
}

export const getStaticProps = async () => {
  const companies: any = {
    ast: {
      index: 0,
      id: "ast",
      short_name: "A",
      name: "Astral Company Limited",
      name2: "Astral",
      overview:
        "Astral Company Limited (AST) is a car manufacturer that focuses on three mainstream: automotive, electric vehicle, and batteries. Starting in 2010, the company continues to invest in its electric vehicle and batteries business segments, aiming to establish its leading position in the two areas.",
      news_type: "31e2f577-9583-4864-b22d-21869fa422a8",
      industry: "IT",
      p_e: 48.14,
      p_b: 3.88,
      p_s: 1.29,
      ev: "68.13B",
      overview2:
        "AST is a car manufacturer that develops vehicles with new technologies. Astral's business operation focuses on three mainstream: automotive, electric vehicle, and batteries. Earlier, its main products focused on traditional automotive, including ASTL 001 and ASTL 777, which gained substantial popularity and customer base. Starting in 7010, the company continues investing in electric vehicles and batteries. Electric vehicles Stellar 100 and Stellar 101 both achieved successful sales. The company is also continuously researching and developing lithium-, nickel batteries, and Superchargers for electric cars.",
    },
    dsc: {
      index: 1,
      id: "dsc",
      short_name: "D",
      name: "Doshacom Group",
      name2: "Doshacom",
      overview:
        "Doshacom is a leading provider of telecommunications, media, and technology services . The company offers wireless, wireline, satellite, and strategic data services, including Virtual Private Networks (VPN), Ethernet and broadband services. It is one of the biggest wireline and wireless providers in the US.",
      news_type: "534aaba1-a048-4c59-af4f-26ad5a951f9a",
      industry: "Communications",
      p_e: 2.1,
      p_b: 0.4,
      p_s: 0.57,
      overview2:
        "Doshacom is a leading provider of telecommunications, media, and technology services globally. The company offers wireless, wireline, satellite, and strategic data services, including Virtual Private Networks (VPN), Ethernet and broadband services. It is one of the biggest wireline and wireless providers in the US. While having the US supply the majority of the company's revenue, Doshapone also reaches the Middle East and Asia through subsidiaries and joint ventures.",
    },
    fsin: {
      index: 2,
      id: "fsin",
      short_name: "F",
      name: "FlashIn, Inc.",
      name2: "FlashIn",
      overview:
        "FlashIn, Inc. (FSIN) is a fashion company based in France that designs and produces clothes, accessories, and sneakers. By 2072, FlashIn had started more than 1,000 retail stores worldwide. The company focuses on athletic apparel and streetwear, building a solid customer base among younger generations.",
      news_type: "6d3c59be-ec9e-442b-81c9-e4498ee670d2",
      industry: "Cons. Disc.",
      p_e: 73.3,
      p_b: 5.64,
      p_s: 1.09,
      overview2:
        "FlashIn, Inc. (FSIN) is a fashion company based in France that designs and produces clothing, accessories, and sneakers across the world. Till 2072, FlashIn had started more than 1,000 retail stores worldwide. The company mainly focuses on athletic apparel and streetwear, building a solid customer base among younger generations. Its production series Flash, Inside, Light became widely popular and soon became the symbol of pop culture.",
    },
    hhw: {
      index: 3,
      id: "hhw",
      short_name: "W",
      name: "Hahawa & Co.",
      name2: "Hahawa",
      overview:
        "Hahawa & Co. (HHW) is an American chain of department stores founded in 1858 by Chinese immigrant Qing Hou. As of 2021, Hahawa was the largest U.S. department store company by retail sales with 608 physical department stores, including ten flagship stores, 178 magnet, 250 core, and 117 neighborhood stores.",
      news_type: "d7e6b3bd-d8a9-46ac-94f6-bb0f7ef94eee",
      industry: "Retail",
      p_e: 40.19,
      p_b: 3.82,
      p_s: 0.69,
      overview2:
        "Hahawa & Co. (HHW) is an American chain of department stores founded in 1858 by Chinese immigrant Qing Hou. It became a division of the Philadelphia-based Federated Department Stores in 1995. As of 2021, Hahawa was the largest U.S. department store company by retail sales, with 608 physical department stores, including 10 flagship stores, 178 magnet stores, 250 core stores, 117 neighborhood stores, and 53 other stores. The company had 125,000 employees and earned annual revenue of $23.3 billion as of Dec. 2021.",
    },
    jky: {
      index: 4,
      id: "jky",
      short_name: "J",
      name: "Jileky Investment, Inc.",
      name2: "Jileky",
      overview:
        "Jileky Investment, Inc.(JKY) offers financial services among three major businesses: Corporate & Investment Bank, Commercial Banking, and Asset & Wealth Management. The company provides services to fulfill various client needs, including investment and lending products, deposit, cash management,…",
      news_type: "973458a0-eb3a-4e85-bd2a-f7513bf73bab",
      industry: "Financials",
      p_e: 14.05,
      p_b: 2.56,
      p_s: 3.23,
      overview2:
        "Jileky Investment, Inc. provides financial services for clients across the world. It offers three major businesses: Corporate & Investment Bank (CIB), Commercial Banking (CB), and Asset & Wealth Management (AWM). The company provides services to fulfill various client needs, including investment and lending products, deposit, cash management, risk management solutions, mortgages, retirement products, etc.",
    },

    sgo: {
      index: 5,
      id: "sgo",
      short_name: "S",
      name: "Surgo Corporation",
      name2: "Surgo",
      overview:
        "Surgo (SGO) is a biomedical company that focuses on three segments: Medical devices, pharmaceuticals, and Consumer Health. It has established popularity through products in body lotion and facial cleansers. Recently, Surgo successfully invented AlphaTech, BetaTech, and other advanced surgical techs.",
      news_type: "5da3cc57-215d-413e-bae4-92d6b5d05e74",
      industry: "Healthcare",
      p_e: 32.79,
      p_b: 5.18,
      p_s: 4.37,
      overview2:
        "Surgo (SGO) is a US-based biomedical company focusing on three segments: Medical devices, pharmaceuticals, and Consumer Health. It is known for its leading technique in traditional and novel medical areas. Surgo is leading in the Consumer Health industry through its well-known products in body lotion and facial cleansers. In recent years, Surgo invested much of its R&D in the Medical Device and Pharmaceutical industry. Surgo successfully invented AlphaTech, BetaTech, GammaTech, and other advanced surgical technologies within five years. It is currently enlarging its biology lab to process its GeneNext project in the Pharmaceutical industry.",
    },
    wrkn: {
      index: 5,
      id: "wrkn",
      short_name: "W",
      name: "Wakron, Inc.",
      name2: "Wakron",
      overview:
        "Wakron, Inc. (WRKN) is a technology company headquartered in California, United States. The company develops products for people to connect and socialize with friends, families, and partners. Wakron’s main product WaKO, a decentralized platform for users to chat in text, video calls, and groups.",
      news_type: "d8488564-bc41-4874-a820-9ac245c07af1",
      industry: "I.T.",
      p_e: 56.87,
      p_b: 6.18,
      p_s: 6.45,
      overview2:
        "Wakron, Inc. (WRKN) is a technology company headquartered in California. The company develops products to connect and socialize with friends, families, and partners. Wakron’s main product WaKO, a decentralized platform to chat in text, video calls, and groups, gained over 80 million monthly active users in 2070. Other products under Wakron include KonNect, project and business management software, and Wakron Pay, a digital payment application. Starting in 2069, Wakron began expanding its business toward the gaming industry. Until 2072, it promoted over ten hype-game, gaining popularity among the players.",
    },
  };

  const MainQuery = `*[_type == "simulator_news"]{
    _id,
    title,
  
    author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
    categories[0]
  }`;

  const EndQuery = `*[_type == "end_season_news"]{
    _id,
    title,
  
    author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
    categories[0]
  }`;

  const query = `*[_type == "post"]{
    _id,
    title,
  
    author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
    categories[0]
  }`;

  const result_index = await sanityClient.fetch(MainQuery);
  const posts = await sanityClient.fetch(query);
  const end_season = await sanityClient.fetch(EndQuery);

  const index = result_index;

  return {
    props: {
      index,
      posts,
      companies,
      end_season,
    },
  };
};
