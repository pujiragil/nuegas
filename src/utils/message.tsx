interface User {
  id: string;
  user: {
    avatar: string;
    name: string;
    isOnline: boolean;
  };
  link: string;
}

type Messages = Array<User>;

const messages: Messages = [
  {
    id: "7014da40172fcd40f073747086b84b21",
    user: {
      avatar: "/profile.png",
      name: "Budi Begal",
      isOnline: true,
    },
    link: "budi-begal",
  },
  {
    id: "eb8c8bc348026efca98091447aac4f46",
    user: {
      avatar: "/profile.png",
      name: "Ratna Serum Wajah",
      isOnline: false,
    },
    link: "ratna-serum-wajah",
  },
  {
    id: "70a927f913c36a30bb603596afa91d90",
    user: {
      avatar: "/profile.png",
      name: "Adi Bakso",
      isOnline: false,
    },
    link: "adi-bakso",
  },
  {
    id: "f2d6d95f5f62fac5bc63e62184a26b87",
    user: {
      avatar: "/profile.png",
      name: "Rudi Pecel",
      isOnline: true,
    },
    link: "rudi-pecel",
  },
];

export default messages;
