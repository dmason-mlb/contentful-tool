# Queries

The root query type provides the following operations:

## _node

**Return Type:** `_Node`

**Arguments:**

- `id`: `ID!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## _nodes

**Return Type:** `[_Node]!`

**Arguments:**

- `ids`: `[ID!]!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## asset

**Return Type:** `Asset`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## assetCollection

**Return Type:** `AssetCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[AssetOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `AssetFilter`

---

## browsMenuListSection

**Return Type:** `BrowsMenuListSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browsMenuListSectionCollection

**Return Type:** `BrowsMenuListSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowsMenuListSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowsMenuListSectionFilter`

---

## browseHeroSection

**Return Type:** `BrowseHeroSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseHeroSectionCollection

**Return Type:** `BrowseHeroSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseHeroSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseHeroSectionFilter`

---

## browseMenu

**Return Type:** `BrowseMenu`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseMenuAccount

**Return Type:** `BrowseMenuAccount`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseMenuAccountCollection

**Return Type:** `BrowseMenuAccountCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseMenuAccountOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseMenuAccountFilter`

---

## browseMenuCard

**Return Type:** `BrowseMenuCard`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseMenuCardCollection

**Return Type:** `BrowseMenuCardCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseMenuCardOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseMenuCardFilter`

---

## browseMenuCollection

**Return Type:** `BrowseMenuCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseMenuOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseMenuFilter`

---

## browseMenuHero

**Return Type:** `BrowseMenuHero`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseMenuHeroCollection

**Return Type:** `BrowseMenuHeroCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseMenuHeroOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseMenuHeroFilter`

---

## browseMenuListItem

**Return Type:** `BrowseMenuListItem`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseMenuListItemCollection

**Return Type:** `BrowseMenuListItemCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseMenuListItemOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseMenuListItemFilter`

---

## browseMenuSection

**Return Type:** `BrowseMenuSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## browseMenuSectionCollection

**Return Type:** `BrowseMenuSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[BrowseMenuSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `BrowseMenuSectionFilter`

---

## entryCollection

**Return Type:** `EntryCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[EntryOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `EntryFilter`

---

## header

**Return Type:** `Header`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## headerCollection

**Return Type:** `HeaderCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[HeaderOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `HeaderFilter`

---

## loginWallConfig

**Return Type:** `LoginWallConfig`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## loginWallConfigCollection

**Return Type:** `LoginWallConfigCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[LoginWallConfigOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `LoginWallConfigFilter`

---

## loginWallText

**Return Type:** `LoginWallText`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## loginWallTextCollection

**Return Type:** `LoginWallTextCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[LoginWallTextOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `LoginWallTextFilter`

---

## onboardingConfig

**Return Type:** `OnboardingConfig`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## onboardingConfigCollection

**Return Type:** `OnboardingConfigCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[OnboardingConfigOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `OnboardingConfigFilter`

---

## playerSection

**Return Type:** `PlayerSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## playerSectionCollection

**Return Type:** `PlayerSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[PlayerSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `PlayerSectionFilter`

---

## promoBannerSection

**Return Type:** `PromoBannerSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## promoBannerSectionCollection

**Return Type:** `PromoBannerSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[PromoBannerSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `PromoBannerSectionFilter`

---

## screen

**Return Type:** `Screen`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## screenCollection

**Return Type:** `ScreenCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[ScreenOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `ScreenFilter`

---

## sduiDeeplink

**Return Type:** `SduiDeeplink`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## sduiDeeplinkCollection

**Return Type:** `SduiDeeplinkCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[SduiDeeplinkOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `SduiDeeplinkFilter`

---

## sduiScreen

**Return Type:** `SduiScreen`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## sduiScreenCollection

**Return Type:** `SduiScreenCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[SduiScreenOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `SduiScreenFilter`

---

## standingsBlurb

**Return Type:** `StandingsBlurb`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## standingsBlurbCollection

**Return Type:** `StandingsBlurbCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[StandingsBlurbOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `StandingsBlurbFilter`

---

## standingsColumn

**Return Type:** `StandingsColumn`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## standingsColumnCollection

**Return Type:** `StandingsColumnCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[StandingsColumnOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `StandingsColumnFilter`

---

## standingsConfig

**Return Type:** `StandingsConfig`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## standingsConfigCollection

**Return Type:** `StandingsConfigCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[StandingsConfigOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `StandingsConfigFilter`

---

## standingsSection

**Return Type:** `StandingsSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## standingsSectionCollection

**Return Type:** `StandingsSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[StandingsSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `StandingsSectionFilter`

---

## standingsTab

**Return Type:** `StandingsTab`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## standingsTabCollection

**Return Type:** `StandingsTabCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[StandingsTabOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `StandingsTabFilter`

---

## supportedUserType

**Return Type:** `SupportedUserType`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## supportedUserTypeCollection

**Return Type:** `SupportedUserTypeCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[SupportedUserTypeOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `SupportedUserTypeFilter`

---

## textButton

**Return Type:** `TextButton`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## textButtonCollection

**Return Type:** `TextButtonCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[TextButtonOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `TextButtonFilter`

---

## textListItem

**Return Type:** `TextListItem`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## textListItemCollection

**Return Type:** `TextListItemCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[TextListItemOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `TextListItemFilter`

---

## textListSection

**Return Type:** `TextListSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## textListSectionCollection

**Return Type:** `TextListSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[TextListSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `TextListSectionFilter`

---

## tileGridItem

**Return Type:** `TileGridItem`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## tileGridItemCollection

**Return Type:** `TileGridItemCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[TileGridItemOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `TileGridItemFilter`

---

## tileGridSection

**Return Type:** `TileGridSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## tileGridSectionCollection

**Return Type:** `TileGridSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[TileGridSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `TileGridSectionFilter`

---

## webviewSection

**Return Type:** `WebviewSection`

**Arguments:**

- `id`: `String!` (required)
- `locale`: `String`
- `preview`: `Boolean`

---

## webviewSectionCollection

**Return Type:** `WebviewSectionCollection`

**Arguments:**

- `limit`: `Int` - Default: `100`
- `locale`: `String`
- `order`: `[WebviewSectionOrder]`
- `preview`: `Boolean`
- `skip`: `Int` - Default: `0`
- `where`: `WebviewSectionFilter`

---

## _entities

**Return Type:** `[_Entity]!`

**Arguments:**

- `representations`: `[_Any!]!` (required)

---

## _service

**Return Type:** `_Service!`

---

