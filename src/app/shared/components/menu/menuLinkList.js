export const categoriesMenuLinkList = [
  {
    link: "Menu",
    rightBackIcon: true,
    onClick(setState) {
      setState(true);
    },
    width: "80%",
  },
  {
    link: "Rewards",
    onClick(setState) {
      setState(false, false);
    },
  },
  {
    link: "GiftCards",
    onClick(setState) {
      setState(false, false);
    },
  },
];

export const normalMenuLinkList = [
  {
    link: "Menu",
    leftBackIcon: true,
    onClick(setState) {
      setState(false, false);
    },
    isMenu: true,
    width: '80%'
  },
  {
    link: "All products",
    path: "/menu",
    onClick(setState) {
      setState(false, true);
    },
  },
  {
    link: "Featured",
    path: "/menu/featured",
    onClick(setState) {
      setState(false, true);
    },
  },
  {
    link: "Previous Orders",
    onClick(setState) {
      setState(true, false);
    },
  },

  {
    link: "Favorite Products",
    onClick(setState) {
      setState(true, false);
    },
  },
];
