import { v4 as uuidv4 } from "uuid";
import {
  Home,
  Notes,
  Order,
  Post,
  Product,
  Profile,
  Settings,
  Users,
} from "../constants/icons";

export const Menu = [
  {
    id: uuidv4(),
    title: "Main",
    listItems: [
      {
        id: uuidv4(),
        title: "Home",
        url: "/",
        icon: Home,
      },
      {
        id: uuidv4(),
        title: "Profile",
        url: "/profile",
        icon: Profile,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "lists",
    listItems: [
      {
        id: uuidv4(),
        title: "Users",
        url: "/users",
        icon: Users,
      },
      {
        id: uuidv4(),
        title: "Products",
        url: "/products",
        icon: Product,
      },
      {
        id: uuidv4(),
        title: "Orders",
        url: "/orders",
        icon: Order,
      },
      {
        id: uuidv4(),
        title: "Posts",
        url: "/posts",
        icon: Post,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "general",
    listItems: [
      {
        id: uuidv4(),
        title: "Elements",
        url: "/",
        icon: null,
      },
      {
        id: uuidv4(),
        title: "Notes",
        url: "/notes",
        icon: Notes,
      },
      {
        id: uuidv4(),
        title: "Forms",
        url: "/",
        icon: null,
      },
      {
        id: uuidv4(),
        title: "Calendar",
        url: "/",
        icon: null,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "maintenance",
    listItems: [
      {
        id: uuidv4(),
        title: "Settings",
        url: "/",
        icon: Settings,
      },
      {
        id: uuidv4(),
        title: "Backups",
        url: "",
        icon: null,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "analytics",
    listItems: [
      {
        id: uuidv4(),
        title: "Charts",
        url: "",
        icon: null,
      },
      {
        id: uuidv4(),
        title: "Logs",
        url: "",
        icon: null,
      },
    ],
  },
];
