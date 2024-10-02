import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jordan Wakelam Développeur Web orienté Back-end",
  description: "Porte folio Développeur Web Jordan Wakelam",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  themeColor: "#ffffff",
  applicationName: "Jordan Wakelam Portfolio",
  msapplicationTileColor: "#da532c",
};

const fav = {
  masterPicture: "../img/logo.png",
  iconsPath: "/",
  design: {
    ios: {
      pictureAspect: "noChange",
      assets: {
        ios6AndPriorIcons: false,
        ios7AndLaterIcons: false,
        precomposedIcons: false,
        declareOnlyDefaultIcon: true,
      },
    },
    desktopBrowser: {
      design: "raw",
    },
    windows: {
      pictureAspect: "noChange",
      backgroundColor: "#da532c",
      onConflict: "override",
      assets: {
        windows80Ie10Tile: false,
        windows10Ie11EdgeTiles: {
          small: false,
          medium: true,
          big: false,
          rectangle: false,
        },
      },
    },
    androidChrome: {
      pictureAspect: "noChange",
      themeColor: "#ffffff",
      manifest: {
        display: "standalone",
        orientation: "notSet",
        onConflict: "override",
        declared: true,
      },
      assets: {
        legacyIcon: false,
        lowResolutionIcons: false,
      },
    },
    safariPinnedTab: {
      pictureAspect: "silhouette",
      themeColor: "#5bbad5",
    },
  },
  settings: {
    scalingAlgorithm: "Mitchell",
    errorOnImageTooSmall: false,
    readmeFile: false,
    htmlCodeFile: false,
    usePathAsIs: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="business">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
