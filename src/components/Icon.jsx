import * as Icone from "./icons";

export function Icon({ name }) {
  switch (name) {
    case "logo":
      return <Icone.Logo />;
    case "logoredonda":
      return <Icone.LogoRedonda />;
    case "efeitobubble1":
      return <Icone.EfeitoBubble1 />;
    case "BlogSvg":
      return <Icone.BlogSvg />;
    case "BlogData":
      return <Icone.BlogData />;
    case "BlogTempo":
      return <Icone.BlogTempo />;
    case "FundoSpotify":
      return <Icone.FundoSpotify />;
    case "FundoQuemSou":
      return <Icone.FundoQuemSou />;
    case "LogoLetras":
      return <Icone.LogoLetras />;
    case "TextoInstagram":
      return <Icone.TextoInstagram />;
    case "LogoLetrasVertical":
      return <Icone.LogoLetrasVertical />;
    case "FolhasInstagram":
      return <Icone.FolhasInstagram />;
  }
}
