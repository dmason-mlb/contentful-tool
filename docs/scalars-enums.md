# Scalars and Enums

## Scalar Types

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### DateTime

A date-time string at UTC, such as 2007-12-03T10:15:30Z,
    compliant with the 'date-time' format outlined in section 5.6 of
    the RFC 3339 profile of the ISO 8601 standard for representation
    of dates and times using the Gregorian calendar.

### Dimension

The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`.

### HexColor

The 'HexColor' type represents color in `rgb:ffffff` string format.

### JSON

The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).

### Quality

The 'Quality' type represents quality as whole numeric values between `1` and `100`.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### _FieldSet

### _Any

## Enum Types

### AssetOrder

**Values:**

- `contentType_ASC`
- `contentType_DESC`
- `fileName_ASC`
- `fileName_DESC`
- `height_ASC`
- `height_DESC`
- `size_ASC`
- `size_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `url_ASC`
- `url_DESC`
- `width_ASC`
- `width_DESC`

---

### BrowsMenuListSectionItemsCollectionOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `deepLink_ASC`
- `deepLink_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `isExternalLink_ASC`
- `isExternalLink_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowsMenuListSectionLinkingCollectionsBrowseMenuCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `lastMeaningfulUpdate_ASC`
- `lastMeaningfulUpdate_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### BrowsMenuListSectionOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `label_ASC`
- `label_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseHeroSectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `backgroundImageUrl_ASC`
- `backgroundImageUrl_DESC`
- `buttonText_ASC`
- `buttonText_DESC`
- `deepLink_ASC`
- `deepLink_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `rightImageUrl_ASC`
- `rightImageUrl_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`

---

### BrowseMenuAccountLinkingCollectionsBrowseMenuCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `lastMeaningfulUpdate_ASC`
- `lastMeaningfulUpdate_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### BrowseMenuAccountOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `defaultDisplayText_ASC`
- `defaultDisplayText_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `label_ASC`
- `label_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseMenuCardLinkingCollectionsBrowseMenuSectionCollectionOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `label_ASC`
- `label_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseMenuCardOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `deepLink_ASC`
- `deepLink_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `isExternalLink_ASC`
- `isExternalLink_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseMenuHeroLinkingCollectionsBrowseMenuCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `lastMeaningfulUpdate_ASC`
- `lastMeaningfulUpdate_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### BrowseMenuHeroOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `backgroundUrl_ASC`
- `backgroundUrl_DESC`
- `deepLink_ASC`
- `deepLink_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseMenuListItemLinkingCollectionsBrowsMenuListSectionCollectionOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `label_ASC`
- `label_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseMenuListItemOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `deepLink_ASC`
- `deepLink_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `isExternalLink_ASC`
- `isExternalLink_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### BrowseMenuOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `lastMeaningfulUpdate_ASC`
- `lastMeaningfulUpdate_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### BrowseMenuSectionLinkingCollectionsBrowseMenuCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `lastMeaningfulUpdate_ASC`
- `lastMeaningfulUpdate_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### BrowseMenuSectionOrder

**Values:**

- `accessibilityString_ASC`
- `accessibilityString_DESC`
- `label_ASC`
- `label_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### EntryOrder

**Values:**

- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### HeaderLinkingCollectionsTextListSectionCollectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### HeaderLinkingCollectionsTileGridSectionCollectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### HeaderLinkingCollectionsWebviewSectionCollectionOrder

**Values:**

- `allowScrolling_ASC`
- `allowScrolling_DESC`
- `aspectRatio_ASC`
- `aspectRatio_DESC`
- `authentication_ASC`
- `authentication_DESC`
- `height_ASC`
- `height_DESC`
- `pullToRefreshEnabled_ASC`
- `pullToRefreshEnabled_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### HeaderOrder

**Values:**

- `a11yHeaderText_ASC`
- `a11yHeaderText_DESC`
- `headerText_ASC`
- `headerText_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`

---

### ImageFormat

**Values:**

- `AVIF` - AVIF image format.
- `JPG` - JPG image format.
- `JPG_PROGRESSIVE` - Progressive JPG format stores multiple passes of an image in progressively higher detail.
        When a progressive image is loading, the viewer will first see a lower quality pixelated version which
        will gradually improve in detail, until the image is fully downloaded. This is to display an image as
        early as possible to make the layout look as designed.
- `PNG` - PNG image format
- `PNG8` - 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
        The 8-bit PNG format is mostly used for simple images, such as icons or logos.
- `WEBP` - WebP image format.

---

### ImageResizeFocus

**Values:**

- `BOTTOM` - Focus the resizing on the bottom.
- `BOTTOM_LEFT` - Focus the resizing on the bottom left.
- `BOTTOM_RIGHT` - Focus the resizing on the bottom right.
- `CENTER` - Focus the resizing on the center.
- `FACE` - Focus the resizing on the largest face.
- `FACES` - Focus the resizing on the area containing all the faces.
- `LEFT` - Focus the resizing on the left.
- `RIGHT` - Focus the resizing on the right.
- `TOP` - Focus the resizing on the top.
- `TOP_LEFT` - Focus the resizing on the top left.
- `TOP_RIGHT` - Focus the resizing on the top right.

---

### ImageResizeStrategy

**Values:**

- `CROP` - Crops a part of the original image to fit into the specified dimensions.
- `FILL` - Resizes the image to the specified dimensions, cropping the image if needed.
- `FIT` - Resizes the image to fit into the specified dimensions.
- `PAD` - Resizes the image to the specified dimensions, padding the image if needed.
        Uses desired background color as padding color.
- `SCALE` - Resizes the image to the specified dimensions, changing the original aspect ratio if needed.
- `THUMB` - Creates a thumbnail from the image.

---

### LoginWallConfigOrder

**Values:**

- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### LoginWallTextOrder

**Values:**

- `key_ASC`
- `key_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `textValue_ASC`
- `textValue_DESC`

---

### OnboardingConfigOrder

**Values:**

- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### OnboardingConfigPlayerSelectionConfigCollectionOrder

**Values:**

- `label_ASC`
- `label_DESC`
- `moduleId_ASC`
- `moduleId_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### OnboardingConfigScreensCollectionOrder

**Values:**

- `id_ASC`
- `id_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### PlayerSectionLinkingCollectionsOnboardingConfigCollectionOrder

**Values:**

- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### PlayerSectionOrder

**Values:**

- `label_ASC`
- `label_DESC`
- `moduleId_ASC`
- `moduleId_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### PromoBannerSectionLinkingCollectionsSduiScreenCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `triggerServiceUpdate_ASC`
- `triggerServiceUpdate_DESC`

---

### PromoBannerSectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `backgroundImageUrl_ASC`
- `backgroundImageUrl_DESC`
- `buttonText_ASC`
- `buttonText_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `rightImageUrl_ASC`
- `rightImageUrl_DESC`
- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### ScreenLinkingCollectionsOnboardingConfigCollectionOrder

**Values:**

- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### ScreenOrder

**Values:**

- `id_ASC`
- `id_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### SduiDeeplinkLinkingCollectionsPromoBannerSectionCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `backgroundImageUrl_ASC`
- `backgroundImageUrl_DESC`
- `buttonText_ASC`
- `buttonText_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `rightImageUrl_ASC`
- `rightImageUrl_DESC`
- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### SduiDeeplinkLinkingCollectionsTextButtonCollectionOrder

**Values:**

- `a11yText_ASC`
- `a11yText_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `text_ASC`
- `text_DESC`

---

### SduiDeeplinkLinkingCollectionsTextListItemCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `displayText_ASC`
- `displayText_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `secondaryDisplayText_ASC`
- `secondaryDisplayText_DESC`
- `supportedPlatforms_ASC`
- `supportedPlatforms_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### SduiDeeplinkLinkingCollectionsTileGridItemCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### SduiDeeplinkOrder

**Values:**

- `destination_ASC`
- `destination_DESC`
- `id_ASC`
- `id_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### SduiScreenOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `triggerServiceUpdate_ASC`
- `triggerServiceUpdate_DESC`

---

### StandingsBlurbOrder

**Values:**

- `moreText_ASC`
- `moreText_DESC`
- `moreUrl_ASC`
- `moreUrl_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### StandingsColumnLinkingCollectionsStandingsSectionCollectionOrder

**Values:**

- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### StandingsColumnOrder

**Values:**

- `displayName_ASC`
- `displayName_DESC`
- `fieldName_ASC`
- `fieldName_DESC`
- `name_ASC`
- `name_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### StandingsConfigOrder

**Values:**

- `hideStandingsOnAppleWatch_ASC`
- `hideStandingsOnAppleWatch_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### StandingsSectionColumnsCollectionOrder

**Values:**

- `displayName_ASC`
- `displayName_DESC`
- `fieldName_ASC`
- `fieldName_DESC`
- `name_ASC`
- `name_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### StandingsSectionLinkingCollectionsStandingsTabCollectionOrder

**Values:**

- `displayName_ASC`
- `displayName_DESC`
- `isDefault_ASC`
- `isDefault_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `type_ASC`
- `type_DESC`
- `url_ASC`
- `url_DESC`
- `year_ASC`
- `year_DESC`

---

### StandingsSectionOrder

**Values:**

- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### StandingsTabOrder

**Values:**

- `displayName_ASC`
- `displayName_DESC`
- `isDefault_ASC`
- `isDefault_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `type_ASC`
- `type_DESC`
- `url_ASC`
- `url_DESC`
- `year_ASC`
- `year_DESC`

---

### StandingsTabStandingsSectionsCollectionOrder

**Values:**

- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `title_ASC`
- `title_DESC`

---

### SupportedUserTypeLinkingCollectionsPromoBannerSectionCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `backgroundImageUrl_ASC`
- `backgroundImageUrl_DESC`
- `buttonText_ASC`
- `buttonText_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `rightImageUrl_ASC`
- `rightImageUrl_DESC`
- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### SupportedUserTypeLinkingCollectionsTextListSectionCollectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### SupportedUserTypeLinkingCollectionsTileGridItemCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### SupportedUserTypeLinkingCollectionsTileGridSectionCollectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### SupportedUserTypeOrder

**Values:**

- `logginStatus_ASC`
- `logginStatus_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### TextButtonLinkingCollectionsHeaderCollectionOrder

**Values:**

- `a11yHeaderText_ASC`
- `a11yHeaderText_DESC`
- `headerText_ASC`
- `headerText_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`

---

### TextButtonOrder

**Values:**

- `a11yText_ASC`
- `a11yText_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `text_ASC`
- `text_DESC`

---

### TextListItemLinkingCollectionsTextListSectionCollectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### TextListItemOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `displayText_ASC`
- `displayText_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `secondaryDisplayText_ASC`
- `secondaryDisplayText_DESC`
- `supportedPlatforms_ASC`
- `supportedPlatforms_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### TextListSectionItemsCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `displayText_ASC`
- `displayText_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `secondaryDisplayText_ASC`
- `secondaryDisplayText_DESC`
- `supportedPlatforms_ASC`
- `supportedPlatforms_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### TextListSectionLinkingCollectionsSduiScreenCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `triggerServiceUpdate_ASC`
- `triggerServiceUpdate_DESC`

---

### TextListSectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### TileGridItemLinkingCollectionsTileGridSectionCollectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### TileGridItemOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### TileGridSectionItemsCollectionOrder

**Values:**

- `a11yDisplayText_ASC`
- `a11yDisplayText_DESC`
- `analyticsOnClick_ASC`
- `analyticsOnClick_DESC`
- `iconUrl_ASC`
- `iconUrl_DESC`
- `label_ASC`
- `label_DESC`
- `passAuthenticationCredentials_ASC`
- `passAuthenticationCredentials_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### TileGridSectionLinkingCollectionsSduiScreenCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `triggerServiceUpdate_ASC`
- `triggerServiceUpdate_DESC`

---

### TileGridSectionOrder

**Values:**

- `supportedLayout_ASC`
- `supportedLayout_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `uniqueId_ASC`
- `uniqueId_DESC`
- `visibleToUserType_ASC`
- `visibleToUserType_DESC`

---

### WebviewSectionLinkingCollectionsSduiScreenCollectionOrder

**Values:**

- `analyticsPageView_ASC`
- `analyticsPageView_DESC`
- `slug_ASC`
- `slug_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`
- `triggerServiceUpdate_ASC`
- `triggerServiceUpdate_DESC`

---

### WebviewSectionOrder

**Values:**

- `allowScrolling_ASC`
- `allowScrolling_DESC`
- `aspectRatio_ASC`
- `aspectRatio_DESC`
- `authentication_ASC`
- `authentication_DESC`
- `height_ASC`
- `height_DESC`
- `pullToRefreshEnabled_ASC`
- `pullToRefreshEnabled_DESC`
- `sys_firstPublishedAt_ASC`
- `sys_firstPublishedAt_DESC`
- `sys_id_ASC`
- `sys_id_DESC`
- `sys_publishedAt_ASC`
- `sys_publishedAt_DESC`
- `sys_publishedVersion_ASC`
- `sys_publishedVersion_DESC`

---

### __TypeKind

An enum describing what kind of type a given `__Type` is.

**Values:**

- `SCALAR` - Indicates this type is a scalar.
- `OBJECT` - Indicates this type is an object. `fields` and `interfaces` are valid fields.
- `INTERFACE` - Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.
- `UNION` - Indicates this type is a union. `possibleTypes` is a valid field.
- `ENUM` - Indicates this type is an enum. `enumValues` is a valid field.
- `INPUT_OBJECT` - Indicates this type is an input object. `inputFields` is a valid field.
- `LIST` - Indicates this type is a list. `ofType` is a valid field.
- `NON_NULL` - Indicates this type is a non-null. `ofType` is a valid field.

---

### __DirectiveLocation

A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.

**Values:**

- `QUERY` - Location adjacent to a query operation.
- `MUTATION` - Location adjacent to a mutation operation.
- `SUBSCRIPTION` - Location adjacent to a subscription operation.
- `FIELD` - Location adjacent to a field.
- `FRAGMENT_DEFINITION` - Location adjacent to a fragment definition.
- `FRAGMENT_SPREAD` - Location adjacent to a fragment spread.
- `INLINE_FRAGMENT` - Location adjacent to an inline fragment.
- `VARIABLE_DEFINITION` - Location adjacent to a variable definition.
- `SCHEMA` - Location adjacent to a schema definition.
- `SCALAR` - Location adjacent to a scalar definition.
- `OBJECT` - Location adjacent to an object type definition.
- `FIELD_DEFINITION` - Location adjacent to a field definition.
- `ARGUMENT_DEFINITION` - Location adjacent to an argument definition.
- `INTERFACE` - Location adjacent to an interface definition.
- `UNION` - Location adjacent to a union definition.
- `ENUM` - Location adjacent to an enum definition.
- `ENUM_VALUE` - Location adjacent to an enum value definition.
- `INPUT_OBJECT` - Location adjacent to an input object type definition.
- `INPUT_FIELD_DEFINITION` - Location adjacent to an input object field definition.

---

