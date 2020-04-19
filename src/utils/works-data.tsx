import manufolio from '../assets/images/work/Manufolio.png';
import trustmate from '../assets/images/work/TrustMate.png';
import blockchainhouse from '../assets/images/work/BlockchainHouse.png';
import buycoinnow from '../assets/images/work/BuyCoinNow.png';
import blockchain24 from '../assets/images/work/Blockchain24.png';
import rockwallinvestments from '../assets/images/work/RockwallInvestments.png';

export type WorksItems = {
  img: string;
  link: string;
  name: string;
  slug: string;
};

export const works: WorksItems[] = [
  {
    img: manufolio,
    link: 'https://github.com/bartekmanu/manufolio',
    name: 'manufolio',
    slug: 'manufolio',
  },
  {
    img: trustmate,
    link: 'https://www.youtube.com/',
    name: 'TrustMate',
    slug: 'trustmate',
  },
  {
    img: blockchainhouse,
    link: 'https://www.youtube.com/',
    name: 'Blockchain House',
    slug: 'blockchain-house',
  },
  {
    img: buycoinnow,
    link: 'https://www.youtube.com/',
    name: 'Buy Coin Now',
    slug: 'buy-coin-now',
  },
  {
    img: blockchain24,
    link: 'https://www.youtube.com/',
    name: 'Blockchain 24',
    slug: 'blockchain-24',
  },
  {
    img: rockwallinvestments,
    link: 'https://www.youtube.com/',
    name: 'Rockwall Investments',
    slug: 'rockwall-investments',
  },
];

export default {};
