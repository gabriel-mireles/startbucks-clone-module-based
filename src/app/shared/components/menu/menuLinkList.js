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
  },
  {
    link: "GiftCards",
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
      setState(false, true);
    },
  },

  {
    link: "Favorite Products",
    onClick(setState) {
      setState(false, true);
    },
  },
];
