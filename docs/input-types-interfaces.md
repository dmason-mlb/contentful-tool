# Input Types and Interfaces

## Input Types

### AssetFilter

**Fields:**

- `AND`: `[AssetFilter]`
- `OR`: `[AssetFilter]`
- `contentType`: `String`
- `contentType_contains`: `String`
- `contentType_exists`: `Boolean`
- `contentType_in`: `[String]`
- `contentType_not`: `String`
- `contentType_not_contains`: `String`
- `contentType_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `description`: `String`
- `description_contains`: `String`
- `description_exists`: `Boolean`
- `description_in`: `[String]`
- `description_not`: `String`
- `description_not_contains`: `String`
- `description_not_in`: `[String]`
- `fileName`: `String`
- `fileName_contains`: `String`
- `fileName_exists`: `Boolean`
- `fileName_in`: `[String]`
- `fileName_not`: `String`
- `fileName_not_contains`: `String`
- `fileName_not_in`: `[String]`
- `height`: `Int`
- `height_exists`: `Boolean`
- `height_gt`: `Int`
- `height_gte`: `Int`
- `height_in`: `[Int]`
- `height_lt`: `Int`
- `height_lte`: `Int`
- `height_not`: `Int`
- `height_not_in`: `[Int]`
- `size`: `Int`
- `size_exists`: `Boolean`
- `size_gt`: `Int`
- `size_gte`: `Int`
- `size_in`: `[Int]`
- `size_lt`: `Int`
- `size_lte`: `Int`
- `size_not`: `Int`
- `size_not_in`: `[Int]`
- `sys`: `SysFilter`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`
- `url`: `String`
- `url_contains`: `String`
- `url_exists`: `Boolean`
- `url_in`: `[String]`
- `url_not`: `String`
- `url_not_contains`: `String`
- `url_not_in`: `[String]`
- `width`: `Int`
- `width_exists`: `Boolean`
- `width_gt`: `Int`
- `width_gte`: `Int`
- `width_in`: `[Int]`
- `width_lt`: `Int`
- `width_lte`: `Int`
- `width_not`: `Int`
- `width_not_in`: `[Int]`

---

### BrowsMenuListSectionFilter

**Fields:**

- `AND`: `[BrowsMenuListSectionFilter]`
- `OR`: `[BrowsMenuListSectionFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `items`: `cfBrowseMenuListItemNestedFilter`
- `itemsCollection_exists`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `sys`: `SysFilter`

---

### BrowseHeroSectionFilter

**Fields:**

- `AND`: `[BrowseHeroSectionFilter]`
- `OR`: `[BrowseHeroSectionFilter]`
- `a11yDisplayText`: `String`
- `a11yDisplayText_contains`: `String`
- `a11yDisplayText_exists`: `Boolean`
- `a11yDisplayText_in`: `[String]`
- `a11yDisplayText_not`: `String`
- `a11yDisplayText_not_contains`: `String`
- `a11yDisplayText_not_in`: `[String]`
- `backgroundImageUrl`: `String`
- `backgroundImageUrl_contains`: `String`
- `backgroundImageUrl_exists`: `Boolean`
- `backgroundImageUrl_in`: `[String]`
- `backgroundImageUrl_not`: `String`
- `backgroundImageUrl_not_contains`: `String`
- `backgroundImageUrl_not_in`: `[String]`
- `buttonText`: `String`
- `buttonText_contains`: `String`
- `buttonText_exists`: `Boolean`
- `buttonText_in`: `[String]`
- `buttonText_not`: `String`
- `buttonText_not_contains`: `String`
- `buttonText_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `rightImageUrl`: `String`
- `rightImageUrl_contains`: `String`
- `rightImageUrl_exists`: `Boolean`
- `rightImageUrl_in`: `[String]`
- `rightImageUrl_not`: `String`
- `rightImageUrl_not_contains`: `String`
- `rightImageUrl_not_in`: `[String]`
- `sys`: `SysFilter`
- `uniqueId`: `String`
- `uniqueId_contains`: `String`
- `uniqueId_exists`: `Boolean`
- `uniqueId_in`: `[String]`
- `uniqueId_not`: `String`
- `uniqueId_not_contains`: `String`
- `uniqueId_not_in`: `[String]`

---

### BrowseMenuAccountFilter

**Fields:**

- `AND`: `[BrowseMenuAccountFilter]`
- `OR`: `[BrowseMenuAccountFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `defaultDisplayText`: `String`
- `defaultDisplayText_contains`: `String`
- `defaultDisplayText_exists`: `Boolean`
- `defaultDisplayText_in`: `[String]`
- `defaultDisplayText_not`: `String`
- `defaultDisplayText_not_contains`: `String`
- `defaultDisplayText_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `sys`: `SysFilter`

---

### BrowseMenuBrowseSectionsFilter

**Fields:**

- `AND`: `[BrowseMenuBrowseSectionsFilter]`
- `OR`: `[BrowseMenuBrowseSectionsFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `sys`: `SysFilter`

---

### BrowseMenuCardFilter

**Fields:**

- `AND`: `[BrowseMenuCardFilter]`
- `OR`: `[BrowseMenuCardFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `isExternalLink`: `Boolean`
- `isExternalLink_exists`: `Boolean`
- `isExternalLink_not`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sys`: `SysFilter`

---

### BrowseMenuFilter

**Fields:**

- `AND`: `[BrowseMenuFilter]`
- `OR`: `[BrowseMenuFilter]`
- `analyticsPageView`: `String`
- `analyticsPageView_contains`: `String`
- `analyticsPageView_exists`: `Boolean`
- `analyticsPageView_in`: `[String]`
- `analyticsPageView_not`: `String`
- `analyticsPageView_not_contains`: `String`
- `analyticsPageView_not_in`: `[String]`
- `browseSections`: `cfbrowseSectionsMultiTypeNestedFilter`
- `browseSectionsCollection_exists`: `Boolean`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `lastMeaningfulUpdate`: `DateTime`
- `lastMeaningfulUpdate_exists`: `Boolean`
- `lastMeaningfulUpdate_gt`: `DateTime`
- `lastMeaningfulUpdate_gte`: `DateTime`
- `lastMeaningfulUpdate_in`: `[DateTime]`
- `lastMeaningfulUpdate_lt`: `DateTime`
- `lastMeaningfulUpdate_lte`: `DateTime`
- `lastMeaningfulUpdate_not`: `DateTime`
- `lastMeaningfulUpdate_not_in`: `[DateTime]`
- `slug`: `String`
- `slug_contains`: `String`
- `slug_exists`: `Boolean`
- `slug_in`: `[String]`
- `slug_not`: `String`
- `slug_not_contains`: `String`
- `slug_not_in`: `[String]`
- `sys`: `SysFilter`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`

---

### BrowseMenuHeroFilter

**Fields:**

- `AND`: `[BrowseMenuHeroFilter]`
- `OR`: `[BrowseMenuHeroFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `backgroundUrl`: `String`
- `backgroundUrl_contains`: `String`
- `backgroundUrl_exists`: `Boolean`
- `backgroundUrl_in`: `[String]`
- `backgroundUrl_not`: `String`
- `backgroundUrl_not_contains`: `String`
- `backgroundUrl_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sys`: `SysFilter`

---

### BrowseMenuListItemFilter

**Fields:**

- `AND`: `[BrowseMenuListItemFilter]`
- `OR`: `[BrowseMenuListItemFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `isExternalLink`: `Boolean`
- `isExternalLink_exists`: `Boolean`
- `isExternalLink_not`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `supportingText`: `String`
- `supportingText_contains`: `String`
- `supportingText_exists`: `Boolean`
- `supportingText_in`: `[String]`
- `supportingText_not`: `String`
- `supportingText_not_contains`: `String`
- `supportingText_not_in`: `[String]`
- `sys`: `SysFilter`

---

### BrowseMenuSectionFilter

**Fields:**

- `AND`: `[BrowseMenuSectionFilter]`
- `OR`: `[BrowseMenuSectionFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `items`: `cfitemsMultiTypeNestedFilter`
- `itemsCollection_exists`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `sys`: `SysFilter`

---

### BrowseMenuSectionItemsFilter

**Fields:**

- `AND`: `[BrowseMenuSectionItemsFilter]`
- `OR`: `[BrowseMenuSectionItemsFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `isExternalLink`: `Boolean`
- `isExternalLink_exists`: `Boolean`
- `isExternalLink_not`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sys`: `SysFilter`

---

### ContentfulMetadataFilter

**Fields:**

- `tags`: `ContentfulMetadataTagsFilter`
- `tags_exists`: `Boolean`
- `concepts_exists`: `Boolean`
- `concepts`: `ContentfulMetadataConceptsFilter`

---

### ContentfulMetadataConceptsFilter

**Fields:**

- `id_contains_all`: `[String]`
- `id_contains_some`: `[String]`
- `id_contains_none`: `[String]`
- `descendants`: `ContentfulMetadataConceptsDescendantsFilter`

---

### ContentfulMetadataConceptsDescendantsFilter

**Fields:**

- `id_contains_all`: `[String]`
- `id_contains_some`: `[String]`
- `id_contains_none`: `[String]`

---

### ContentfulMetadataTagsFilter

**Fields:**

- `id_contains_all`: `[String]`
- `id_contains_none`: `[String]`
- `id_contains_some`: `[String]`

---

### EntryFilter

**Fields:**

- `AND`: `[EntryFilter]`
- `OR`: `[EntryFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sys`: `SysFilter`

---

### HeaderFilter

**Fields:**

- `AND`: `[HeaderFilter]`
- `OR`: `[HeaderFilter]`
- `a11yHeaderText`: `String`
- `a11yHeaderText_contains`: `String`
- `a11yHeaderText_exists`: `Boolean`
- `a11yHeaderText_in`: `[String]`
- `a11yHeaderText_not`: `String`
- `a11yHeaderText_not_contains`: `String`
- `a11yHeaderText_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `headerText`: `String`
- `headerText_contains`: `String`
- `headerText_exists`: `Boolean`
- `headerText_in`: `[String]`
- `headerText_not`: `String`
- `headerText_not_contains`: `String`
- `headerText_not_in`: `[String]`
- `sys`: `SysFilter`
- `textButton`: `cfTextButtonNestedFilter`
- `textButton_exists`: `Boolean`
- `uniqueId`: `String`
- `uniqueId_contains`: `String`
- `uniqueId_exists`: `Boolean`
- `uniqueId_in`: `[String]`
- `uniqueId_not`: `String`
- `uniqueId_not_contains`: `String`
- `uniqueId_not_in`: `[String]`

---

### ImageTransformOptions

**Fields:**

- `backgroundColor`: `HexColor` - Desired background color, used with corner radius or `PAD` resize strategy.
        Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
- `cornerRadius`: `Int` - Desired corner radius in pixels.
        Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
        Defaults to `0`. Uses desired background color as padding color,
        unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
- `format`: `ImageFormat` - Desired image format. Defaults to the original image format.
- `height`: `Dimension` - Desired height in pixels. Defaults to the original image height.
- `quality`: `Quality` - Desired quality of the image in percents.
        Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
- `resizeFocus`: `ImageResizeFocus` - Desired resize focus area. Defaults to `CENTER`.
- `resizeStrategy`: `ImageResizeStrategy` - Desired resize strategy. Defaults to `FIT`.
- `width`: `Dimension` - Desired width in pixels. Defaults to the original image width.

---

### LoginWallConfigFilter

**Fields:**

- `AND`: `[LoginWallConfigFilter]`
- `OR`: `[LoginWallConfigFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `playersJSON_exists`: `Boolean`
- `slug`: `String`
- `slug_contains`: `String`
- `slug_exists`: `Boolean`
- `slug_in`: `[String]`
- `slug_not`: `String`
- `slug_not_contains`: `String`
- `slug_not_in`: `[String]`
- `sys`: `SysFilter`
- `textEntriesCollection_exists`: `Boolean`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`

---

### LoginWallTextFilter

**Fields:**

- `AND`: `[LoginWallTextFilter]`
- `OR`: `[LoginWallTextFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `key`: `String`
- `key_contains`: `String`
- `key_exists`: `Boolean`
- `key_in`: `[String]`
- `key_not`: `String`
- `key_not_contains`: `String`
- `key_not_in`: `[String]`
- `sys`: `SysFilter`
- `textValue`: `String`
- `textValue_contains`: `String`
- `textValue_exists`: `Boolean`
- `textValue_in`: `[String]`
- `textValue_not`: `String`
- `textValue_not_contains`: `String`
- `textValue_not_in`: `[String]`

---

### OnboardingConfigFilter

**Fields:**

- `AND`: `[OnboardingConfigFilter]`
- `OR`: `[OnboardingConfigFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `playerSelectionConfig`: `cfPlayerSectionNestedFilter`
- `playerSelectionConfigCollection_exists`: `Boolean`
- `screens`: `cfScreenNestedFilter`
- `screensCollection_exists`: `Boolean`
- `slug`: `String`
- `slug_contains`: `String`
- `slug_exists`: `Boolean`
- `slug_in`: `[String]`
- `slug_not`: `String`
- `slug_not_contains`: `String`
- `slug_not_in`: `[String]`
- `sys`: `SysFilter`

---

### PlayerSectionFilter

**Fields:**

- `AND`: `[PlayerSectionFilter]`
- `OR`: `[PlayerSectionFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `moduleId`: `String`
- `moduleId_contains`: `String`
- `moduleId_exists`: `Boolean`
- `moduleId_in`: `[String]`
- `moduleId_not`: `String`
- `moduleId_not_contains`: `String`
- `moduleId_not_in`: `[String]`
- `sys`: `SysFilter`

---

### PromoBannerSectionFilter

**Fields:**

- `AND`: `[PromoBannerSectionFilter]`
- `OR`: `[PromoBannerSectionFilter]`
- `a11yDisplayText`: `String`
- `a11yDisplayText_contains`: `String`
- `a11yDisplayText_exists`: `Boolean`
- `a11yDisplayText_in`: `[String]`
- `a11yDisplayText_not`: `String`
- `a11yDisplayText_not_contains`: `String`
- `a11yDisplayText_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `backgroundImageUrl`: `String`
- `backgroundImageUrl_contains`: `String`
- `backgroundImageUrl_exists`: `Boolean`
- `backgroundImageUrl_in`: `[String]`
- `backgroundImageUrl_not`: `String`
- `backgroundImageUrl_not_contains`: `String`
- `backgroundImageUrl_not_in`: `[String]`
- `buttonText`: `String`
- `buttonText_contains`: `String`
- `buttonText_exists`: `Boolean`
- `buttonText_in`: `[String]`
- `buttonText_not`: `String`
- `buttonText_not_contains`: `String`
- `buttonText_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `rightImageUrl`: `String`
- `rightImageUrl_contains`: `String`
- `rightImageUrl_exists`: `Boolean`
- `rightImageUrl_in`: `[String]`
- `rightImageUrl_not`: `String`
- `rightImageUrl_not_contains`: `String`
- `rightImageUrl_not_in`: `[String]`
- `sduiDeepLink`: `cfSduiDeeplinkNestedFilter`
- `sduiDeepLink_exists`: `Boolean`
- `supportedLayout`: `String`
- `supportedLayout_contains`: `String`
- `supportedLayout_exists`: `Boolean`
- `supportedLayout_in`: `[String]`
- `supportedLayout_not`: `String`
- `supportedLayout_not_contains`: `String`
- `supportedLayout_not_in`: `[String]`
- `supportedUserType`: `cfSupportedUserTypeNestedFilter`
- `supportedUserType_exists`: `Boolean`
- `sys`: `SysFilter`
- `uniqueId`: `String`
- `uniqueId_contains`: `String`
- `uniqueId_exists`: `Boolean`
- `uniqueId_in`: `[String]`
- `uniqueId_not`: `String`
- `uniqueId_not_contains`: `String`
- `uniqueId_not_in`: `[String]`
- `visibleToUserType`: `String`
- `visibleToUserType_contains`: `String`
- `visibleToUserType_exists`: `Boolean`
- `visibleToUserType_in`: `[String]`
- `visibleToUserType_not`: `String`
- `visibleToUserType_not_contains`: `String`
- `visibleToUserType_not_in`: `[String]`

---

### ScreenFilter

**Fields:**

- `AND`: `[ScreenFilter]`
- `OR`: `[ScreenFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `id`: `String`
- `id_contains`: `String`
- `id_exists`: `Boolean`
- `id_in`: `[String]`
- `id_not`: `String`
- `id_not_contains`: `String`
- `id_not_in`: `[String]`
- `sys`: `SysFilter`

---

### SduiDeeplinkFilter

**Fields:**

- `AND`: `[SduiDeeplinkFilter]`
- `OR`: `[SduiDeeplinkFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `destination`: `String`
- `destination_contains`: `String`
- `destination_exists`: `Boolean`
- `destination_in`: `[String]`
- `destination_not`: `String`
- `destination_not_contains`: `String`
- `destination_not_in`: `[String]`
- `id`: `String`
- `id_contains`: `String`
- `id_exists`: `Boolean`
- `id_in`: `[String]`
- `id_not`: `String`
- `id_not_contains`: `String`
- `id_not_in`: `[String]`
- `staticParameters_contains_all`: `[String]`
- `staticParameters_contains_none`: `[String]`
- `staticParameters_contains_some`: `[String]`
- `staticParameters_exists`: `Boolean`
- `sys`: `SysFilter`

---

### SduiScreenFilter

**Fields:**

- `AND`: `[SduiScreenFilter]`
- `OR`: `[SduiScreenFilter]`
- `analyticsPageView`: `String`
- `analyticsPageView_contains`: `String`
- `analyticsPageView_exists`: `Boolean`
- `analyticsPageView_in`: `[String]`
- `analyticsPageView_not`: `String`
- `analyticsPageView_not_contains`: `String`
- `analyticsPageView_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sections`: `cfsectionsMultiTypeNestedFilter`
- `sectionsCollection_exists`: `Boolean`
- `slug`: `String`
- `slug_contains`: `String`
- `slug_exists`: `Boolean`
- `slug_in`: `[String]`
- `slug_not`: `String`
- `slug_not_contains`: `String`
- `slug_not_in`: `[String]`
- `sys`: `SysFilter`
- `triggerServiceUpdate`: `Boolean`
- `triggerServiceUpdate_exists`: `Boolean`
- `triggerServiceUpdate_not`: `Boolean`

---

### SduiScreenSectionsFilter

**Fields:**

- `AND`: `[SduiScreenSectionsFilter]`
- `OR`: `[SduiScreenSectionsFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sys`: `SysFilter`

---

### StandingsBlurbFilter

**Fields:**

- `AND`: `[StandingsBlurbFilter]`
- `OR`: `[StandingsBlurbFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `description`: `String`
- `description_contains`: `String`
- `description_exists`: `Boolean`
- `description_in`: `[String]`
- `description_not`: `String`
- `description_not_contains`: `String`
- `description_not_in`: `[String]`
- `moreText`: `String`
- `moreText_contains`: `String`
- `moreText_exists`: `Boolean`
- `moreText_in`: `[String]`
- `moreText_not`: `String`
- `moreText_not_contains`: `String`
- `moreText_not_in`: `[String]`
- `moreUrl`: `String`
- `moreUrl_contains`: `String`
- `moreUrl_exists`: `Boolean`
- `moreUrl_in`: `[String]`
- `moreUrl_not`: `String`
- `moreUrl_not_contains`: `String`
- `moreUrl_not_in`: `[String]`
- `sys`: `SysFilter`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`

---

### StandingsColumnFilter

**Fields:**

- `AND`: `[StandingsColumnFilter]`
- `OR`: `[StandingsColumnFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `displayName`: `String`
- `displayName_contains`: `String`
- `displayName_exists`: `Boolean`
- `displayName_in`: `[String]`
- `displayName_not`: `String`
- `displayName_not_contains`: `String`
- `displayName_not_in`: `[String]`
- `fieldName`: `String`
- `fieldName_contains`: `String`
- `fieldName_exists`: `Boolean`
- `fieldName_in`: `[String]`
- `fieldName_not`: `String`
- `fieldName_not_contains`: `String`
- `fieldName_not_in`: `[String]`
- `name`: `String`
- `name_contains`: `String`
- `name_exists`: `Boolean`
- `name_in`: `[String]`
- `name_not`: `String`
- `name_not_contains`: `String`
- `name_not_in`: `[String]`
- `sys`: `SysFilter`

---

### StandingsConfigFilter

**Fields:**

- `AND`: `[StandingsConfigFilter]`
- `OR`: `[StandingsConfigFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `hideStandingsOnAppleWatch`: `Boolean`
- `hideStandingsOnAppleWatch_exists`: `Boolean`
- `hideStandingsOnAppleWatch_not`: `Boolean`
- `slug`: `String`
- `slug_contains`: `String`
- `slug_exists`: `Boolean`
- `slug_in`: `[String]`
- `slug_not`: `String`
- `slug_not_contains`: `String`
- `slug_not_in`: `[String]`
- `standingsTabsCollection_exists`: `Boolean`
- `sys`: `SysFilter`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`

---

### StandingsSectionFilter

**Fields:**

- `AND`: `[StandingsSectionFilter]`
- `OR`: `[StandingsSectionFilter]`
- `columns`: `cfStandingsColumnNestedFilter`
- `columnsCollection_exists`: `Boolean`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sys`: `SysFilter`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`

---

### StandingsTabFilter

**Fields:**

- `AND`: `[StandingsTabFilter]`
- `OR`: `[StandingsTabFilter]`
- `blurb_exists`: `Boolean`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `displayName`: `String`
- `displayName_contains`: `String`
- `displayName_exists`: `Boolean`
- `displayName_in`: `[String]`
- `displayName_not`: `String`
- `displayName_not_contains`: `String`
- `displayName_not_in`: `[String]`
- `isDefault`: `Boolean`
- `isDefault_exists`: `Boolean`
- `isDefault_not`: `Boolean`
- `standingsColumnsCollection_exists`: `Boolean`
- `standingsSections`: `cfStandingsSectionNestedFilter`
- `standingsSectionsCollection_exists`: `Boolean`
- `sys`: `SysFilter`
- `type`: `String`
- `type_contains`: `String`
- `type_exists`: `Boolean`
- `type_in`: `[String]`
- `type_not`: `String`
- `type_not_contains`: `String`
- `type_not_in`: `[String]`
- `url`: `String`
- `url_contains`: `String`
- `url_exists`: `Boolean`
- `url_in`: `[String]`
- `url_not`: `String`
- `url_not_contains`: `String`
- `url_not_in`: `[String]`
- `year`: `Int`
- `year_exists`: `Boolean`
- `year_gt`: `Int`
- `year_gte`: `Int`
- `year_in`: `[Int]`
- `year_lt`: `Int`
- `year_lte`: `Int`
- `year_not`: `Int`
- `year_not_in`: `[Int]`

---

### SupportedUserTypeFilter

**Fields:**

- `AND`: `[SupportedUserTypeFilter]`
- `OR`: `[SupportedUserTypeFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `logginStatus`: `String`
- `logginStatus_contains`: `String`
- `logginStatus_exists`: `Boolean`
- `logginStatus_in`: `[String]`
- `logginStatus_not`: `String`
- `logginStatus_not_contains`: `String`
- `logginStatus_not_in`: `[String]`
- `sys`: `SysFilter`

---

### SysFilter

**Fields:**

- `firstPublishedAt`: `DateTime`
- `firstPublishedAt_exists`: `Boolean`
- `firstPublishedAt_gt`: `DateTime`
- `firstPublishedAt_gte`: `DateTime`
- `firstPublishedAt_in`: `[DateTime]`
- `firstPublishedAt_lt`: `DateTime`
- `firstPublishedAt_lte`: `DateTime`
- `firstPublishedAt_not`: `DateTime`
- `firstPublishedAt_not_in`: `[DateTime]`
- `id`: `String`
- `id_contains`: `String`
- `id_exists`: `Boolean`
- `id_in`: `[String]`
- `id_not`: `String`
- `id_not_contains`: `String`
- `id_not_in`: `[String]`
- `publishedAt`: `DateTime`
- `publishedAt_exists`: `Boolean`
- `publishedAt_gt`: `DateTime`
- `publishedAt_gte`: `DateTime`
- `publishedAt_in`: `[DateTime]`
- `publishedAt_lt`: `DateTime`
- `publishedAt_lte`: `DateTime`
- `publishedAt_not`: `DateTime`
- `publishedAt_not_in`: `[DateTime]`
- `publishedVersion`: `Float`
- `publishedVersion_exists`: `Boolean`
- `publishedVersion_gt`: `Float`
- `publishedVersion_gte`: `Float`
- `publishedVersion_in`: `[Float]`
- `publishedVersion_lt`: `Float`
- `publishedVersion_lte`: `Float`
- `publishedVersion_not`: `Float`
- `publishedVersion_not_in`: `[Float]`

---

### TextButtonFilter

**Fields:**

- `AND`: `[TextButtonFilter]`
- `OR`: `[TextButtonFilter]`
- `a11yText`: `String`
- `a11yText_contains`: `String`
- `a11yText_exists`: `Boolean`
- `a11yText_in`: `[String]`
- `a11yText_not`: `String`
- `a11yText_not_contains`: `String`
- `a11yText_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sduiDeepLink`: `cfSduiDeeplinkNestedFilter`
- `sduiDeepLink_exists`: `Boolean`
- `sys`: `SysFilter`
- `text`: `String`
- `text_contains`: `String`
- `text_exists`: `Boolean`
- `text_in`: `[String]`
- `text_not`: `String`
- `text_not_contains`: `String`
- `text_not_in`: `[String]`

---

### TextListItemFilter

**Fields:**

- `AND`: `[TextListItemFilter]`
- `OR`: `[TextListItemFilter]`
- `a11yDisplayText`: `String`
- `a11yDisplayText_contains`: `String`
- `a11yDisplayText_exists`: `Boolean`
- `a11yDisplayText_in`: `[String]`
- `a11yDisplayText_not`: `String`
- `a11yDisplayText_not_contains`: `String`
- `a11yDisplayText_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `displayText`: `String`
- `displayText_contains`: `String`
- `displayText_exists`: `Boolean`
- `displayText_in`: `[String]`
- `displayText_not`: `String`
- `displayText_not_contains`: `String`
- `displayText_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sduiDeepLink`: `cfSduiDeeplinkNestedFilter`
- `sduiDeepLink_exists`: `Boolean`
- `secondaryDisplayText`: `String`
- `secondaryDisplayText_contains`: `String`
- `secondaryDisplayText_exists`: `Boolean`
- `secondaryDisplayText_in`: `[String]`
- `secondaryDisplayText_not`: `String`
- `secondaryDisplayText_not_contains`: `String`
- `secondaryDisplayText_not_in`: `[String]`
- `supportedPlatforms`: `String`
- `supportedPlatforms_contains`: `String`
- `supportedPlatforms_exists`: `Boolean`
- `supportedPlatforms_in`: `[String]`
- `supportedPlatforms_not`: `String`
- `supportedPlatforms_not_contains`: `String`
- `supportedPlatforms_not_in`: `[String]`
- `sys`: `SysFilter`

---

### TextListSectionFilter

**Fields:**

- `AND`: `[TextListSectionFilter]`
- `OR`: `[TextListSectionFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `header`: `cfHeaderNestedFilter`
- `header_exists`: `Boolean`
- `items`: `cfTextListItemNestedFilter`
- `itemsCollection_exists`: `Boolean`
- `supportedLayout`: `String`
- `supportedLayout_contains`: `String`
- `supportedLayout_exists`: `Boolean`
- `supportedLayout_in`: `[String]`
- `supportedLayout_not`: `String`
- `supportedLayout_not_contains`: `String`
- `supportedLayout_not_in`: `[String]`
- `supportedUserType`: `cfSupportedUserTypeNestedFilter`
- `supportedUserType_exists`: `Boolean`
- `sys`: `SysFilter`
- `uniqueId`: `String`
- `uniqueId_contains`: `String`
- `uniqueId_exists`: `Boolean`
- `uniqueId_in`: `[String]`
- `uniqueId_not`: `String`
- `uniqueId_not_contains`: `String`
- `uniqueId_not_in`: `[String]`
- `visibleToUserType`: `String`
- `visibleToUserType_contains`: `String`
- `visibleToUserType_exists`: `Boolean`
- `visibleToUserType_in`: `[String]`
- `visibleToUserType_not`: `String`
- `visibleToUserType_not_contains`: `String`
- `visibleToUserType_not_in`: `[String]`

---

### TileGridItemFilter

**Fields:**

- `AND`: `[TileGridItemFilter]`
- `OR`: `[TileGridItemFilter]`
- `a11yDisplayText`: `String`
- `a11yDisplayText_contains`: `String`
- `a11yDisplayText_exists`: `Boolean`
- `a11yDisplayText_in`: `[String]`
- `a11yDisplayText_not`: `String`
- `a11yDisplayText_not_contains`: `String`
- `a11yDisplayText_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sduiDeepLink`: `cfSduiDeeplinkNestedFilter`
- `sduiDeepLink_exists`: `Boolean`
- `supportedUserType`: `cfSupportedUserTypeNestedFilter`
- `supportedUserType_exists`: `Boolean`
- `sys`: `SysFilter`

---

### TileGridSectionFilter

**Fields:**

- `AND`: `[TileGridSectionFilter]`
- `OR`: `[TileGridSectionFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `header`: `cfHeaderNestedFilter`
- `header_exists`: `Boolean`
- `items`: `cfTileGridItemNestedFilter`
- `itemsCollection_exists`: `Boolean`
- `supportedLayout`: `String`
- `supportedLayout_contains`: `String`
- `supportedLayout_exists`: `Boolean`
- `supportedLayout_in`: `[String]`
- `supportedLayout_not`: `String`
- `supportedLayout_not_contains`: `String`
- `supportedLayout_not_in`: `[String]`
- `supportedUserType`: `cfSupportedUserTypeNestedFilter`
- `supportedUserType_exists`: `Boolean`
- `sys`: `SysFilter`
- `uniqueId`: `String`
- `uniqueId_contains`: `String`
- `uniqueId_exists`: `Boolean`
- `uniqueId_in`: `[String]`
- `uniqueId_not`: `String`
- `uniqueId_not_contains`: `String`
- `uniqueId_not_in`: `[String]`
- `visibleToUserType`: `String`
- `visibleToUserType_contains`: `String`
- `visibleToUserType_exists`: `Boolean`
- `visibleToUserType_in`: `[String]`
- `visibleToUserType_not`: `String`
- `visibleToUserType_not_contains`: `String`
- `visibleToUserType_not_in`: `[String]`

---

### WebviewSectionFilter

**Fields:**

- `AND`: `[WebviewSectionFilter]`
- `OR`: `[WebviewSectionFilter]`
- `allowScrolling`: `Boolean`
- `allowScrolling_exists`: `Boolean`
- `allowScrolling_not`: `Boolean`
- `aspectRatio`: `Float`
- `aspectRatio_exists`: `Boolean`
- `aspectRatio_gt`: `Float`
- `aspectRatio_gte`: `Float`
- `aspectRatio_in`: `[Float]`
- `aspectRatio_lt`: `Float`
- `aspectRatio_lte`: `Float`
- `aspectRatio_not`: `Float`
- `aspectRatio_not_in`: `[Float]`
- `authentication`: `String`
- `authentication_contains`: `String`
- `authentication_exists`: `Boolean`
- `authentication_in`: `[String]`
- `authentication_not`: `String`
- `authentication_not_contains`: `String`
- `authentication_not_in`: `[String]`
- `blockedDomains_contains_all`: `[String]`
- `blockedDomains_contains_none`: `[String]`
- `blockedDomains_contains_some`: `[String]`
- `blockedDomains_exists`: `Boolean`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `header`: `cfHeaderNestedFilter`
- `header_exists`: `Boolean`
- `height`: `Int`
- `height_exists`: `Boolean`
- `height_gt`: `Int`
- `height_gte`: `Int`
- `height_in`: `[Int]`
- `height_lt`: `Int`
- `height_lte`: `Int`
- `height_not`: `Int`
- `height_not_in`: `[Int]`
- `pullToRefreshEnabled`: `Boolean`
- `pullToRefreshEnabled_exists`: `Boolean`
- `pullToRefreshEnabled_not`: `Boolean`
- `sys`: `SysFilter`
- `url`: `String`
- `url_contains`: `String`
- `url_exists`: `Boolean`
- `url_in`: `[String]`
- `url_not`: `String`
- `url_not_contains`: `String`
- `url_not_in`: `[String]`

---

### cfBrowseMenuListItemNestedFilter

**Fields:**

- `AND`: `[cfBrowseMenuListItemNestedFilter]`
- `OR`: `[cfBrowseMenuListItemNestedFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `isExternalLink`: `Boolean`
- `isExternalLink_exists`: `Boolean`
- `isExternalLink_not`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `supportingText`: `String`
- `supportingText_contains`: `String`
- `supportingText_exists`: `Boolean`
- `supportingText_in`: `[String]`
- `supportingText_not`: `String`
- `supportingText_not_contains`: `String`
- `supportingText_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfHeaderNestedFilter

**Fields:**

- `AND`: `[cfHeaderNestedFilter]`
- `OR`: `[cfHeaderNestedFilter]`
- `a11yHeaderText`: `String`
- `a11yHeaderText_contains`: `String`
- `a11yHeaderText_exists`: `Boolean`
- `a11yHeaderText_in`: `[String]`
- `a11yHeaderText_not`: `String`
- `a11yHeaderText_not_contains`: `String`
- `a11yHeaderText_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `headerText`: `String`
- `headerText_contains`: `String`
- `headerText_exists`: `Boolean`
- `headerText_in`: `[String]`
- `headerText_not`: `String`
- `headerText_not_contains`: `String`
- `headerText_not_in`: `[String]`
- `sys`: `SysFilter`
- `textButton_exists`: `Boolean`
- `uniqueId`: `String`
- `uniqueId_contains`: `String`
- `uniqueId_exists`: `Boolean`
- `uniqueId_in`: `[String]`
- `uniqueId_not`: `String`
- `uniqueId_not_contains`: `String`
- `uniqueId_not_in`: `[String]`

---

### cfPlayerSectionNestedFilter

**Fields:**

- `AND`: `[cfPlayerSectionNestedFilter]`
- `OR`: `[cfPlayerSectionNestedFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `moduleId`: `String`
- `moduleId_contains`: `String`
- `moduleId_exists`: `Boolean`
- `moduleId_in`: `[String]`
- `moduleId_not`: `String`
- `moduleId_not_contains`: `String`
- `moduleId_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfScreenNestedFilter

**Fields:**

- `AND`: `[cfScreenNestedFilter]`
- `OR`: `[cfScreenNestedFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `id`: `String`
- `id_contains`: `String`
- `id_exists`: `Boolean`
- `id_in`: `[String]`
- `id_not`: `String`
- `id_not_contains`: `String`
- `id_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfSduiDeeplinkNestedFilter

**Fields:**

- `AND`: `[cfSduiDeeplinkNestedFilter]`
- `OR`: `[cfSduiDeeplinkNestedFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `destination`: `String`
- `destination_contains`: `String`
- `destination_exists`: `Boolean`
- `destination_in`: `[String]`
- `destination_not`: `String`
- `destination_not_contains`: `String`
- `destination_not_in`: `[String]`
- `id`: `String`
- `id_contains`: `String`
- `id_exists`: `Boolean`
- `id_in`: `[String]`
- `id_not`: `String`
- `id_not_contains`: `String`
- `id_not_in`: `[String]`
- `staticParameters_contains_all`: `[String]`
- `staticParameters_contains_none`: `[String]`
- `staticParameters_contains_some`: `[String]`
- `staticParameters_exists`: `Boolean`
- `sys`: `SysFilter`

---

### cfStandingsColumnNestedFilter

**Fields:**

- `AND`: `[cfStandingsColumnNestedFilter]`
- `OR`: `[cfStandingsColumnNestedFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `displayName`: `String`
- `displayName_contains`: `String`
- `displayName_exists`: `Boolean`
- `displayName_in`: `[String]`
- `displayName_not`: `String`
- `displayName_not_contains`: `String`
- `displayName_not_in`: `[String]`
- `fieldName`: `String`
- `fieldName_contains`: `String`
- `fieldName_exists`: `Boolean`
- `fieldName_in`: `[String]`
- `fieldName_not`: `String`
- `fieldName_not_contains`: `String`
- `fieldName_not_in`: `[String]`
- `name`: `String`
- `name_contains`: `String`
- `name_exists`: `Boolean`
- `name_in`: `[String]`
- `name_not`: `String`
- `name_not_contains`: `String`
- `name_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfStandingsSectionNestedFilter

**Fields:**

- `AND`: `[cfStandingsSectionNestedFilter]`
- `OR`: `[cfStandingsSectionNestedFilter]`
- `columnsCollection_exists`: `Boolean`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sys`: `SysFilter`
- `title`: `String`
- `title_contains`: `String`
- `title_exists`: `Boolean`
- `title_in`: `[String]`
- `title_not`: `String`
- `title_not_contains`: `String`
- `title_not_in`: `[String]`

---

### cfSupportedUserTypeNestedFilter

**Fields:**

- `AND`: `[cfSupportedUserTypeNestedFilter]`
- `OR`: `[cfSupportedUserTypeNestedFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `logginStatus`: `String`
- `logginStatus_contains`: `String`
- `logginStatus_exists`: `Boolean`
- `logginStatus_in`: `[String]`
- `logginStatus_not`: `String`
- `logginStatus_not_contains`: `String`
- `logginStatus_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfTextButtonNestedFilter

**Fields:**

- `AND`: `[cfTextButtonNestedFilter]`
- `OR`: `[cfTextButtonNestedFilter]`
- `a11yText`: `String`
- `a11yText_contains`: `String`
- `a11yText_exists`: `Boolean`
- `a11yText_in`: `[String]`
- `a11yText_not`: `String`
- `a11yText_not_contains`: `String`
- `a11yText_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sduiDeepLink_exists`: `Boolean`
- `sys`: `SysFilter`
- `text`: `String`
- `text_contains`: `String`
- `text_exists`: `Boolean`
- `text_in`: `[String]`
- `text_not`: `String`
- `text_not_contains`: `String`
- `text_not_in`: `[String]`

---

### cfTextListItemNestedFilter

**Fields:**

- `AND`: `[cfTextListItemNestedFilter]`
- `OR`: `[cfTextListItemNestedFilter]`
- `a11yDisplayText`: `String`
- `a11yDisplayText_contains`: `String`
- `a11yDisplayText_exists`: `Boolean`
- `a11yDisplayText_in`: `[String]`
- `a11yDisplayText_not`: `String`
- `a11yDisplayText_not_contains`: `String`
- `a11yDisplayText_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `displayText`: `String`
- `displayText_contains`: `String`
- `displayText_exists`: `Boolean`
- `displayText_in`: `[String]`
- `displayText_not`: `String`
- `displayText_not_contains`: `String`
- `displayText_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sduiDeepLink_exists`: `Boolean`
- `secondaryDisplayText`: `String`
- `secondaryDisplayText_contains`: `String`
- `secondaryDisplayText_exists`: `Boolean`
- `secondaryDisplayText_in`: `[String]`
- `secondaryDisplayText_not`: `String`
- `secondaryDisplayText_not_contains`: `String`
- `secondaryDisplayText_not_in`: `[String]`
- `supportedPlatforms`: `String`
- `supportedPlatforms_contains`: `String`
- `supportedPlatforms_exists`: `Boolean`
- `supportedPlatforms_in`: `[String]`
- `supportedPlatforms_not`: `String`
- `supportedPlatforms_not_contains`: `String`
- `supportedPlatforms_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfTileGridItemNestedFilter

**Fields:**

- `AND`: `[cfTileGridItemNestedFilter]`
- `OR`: `[cfTileGridItemNestedFilter]`
- `a11yDisplayText`: `String`
- `a11yDisplayText_contains`: `String`
- `a11yDisplayText_exists`: `Boolean`
- `a11yDisplayText_in`: `[String]`
- `a11yDisplayText_not`: `String`
- `a11yDisplayText_not_contains`: `String`
- `a11yDisplayText_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sduiDeepLink_exists`: `Boolean`
- `supportedUserType_exists`: `Boolean`
- `sys`: `SysFilter`

---

### cfbrowseSectionsMultiTypeNestedFilter

**Fields:**

- `AND`: `[cfbrowseSectionsMultiTypeNestedFilter]`
- `OR`: `[cfbrowseSectionsMultiTypeNestedFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `sys`: `SysFilter`

---

### cfitemsMultiTypeNestedFilter

**Fields:**

- `AND`: `[cfitemsMultiTypeNestedFilter]`
- `OR`: `[cfitemsMultiTypeNestedFilter]`
- `accessibilityString`: `String`
- `accessibilityString_contains`: `String`
- `accessibilityString_exists`: `Boolean`
- `accessibilityString_in`: `[String]`
- `accessibilityString_not`: `String`
- `accessibilityString_not_contains`: `String`
- `accessibilityString_not_in`: `[String]`
- `analyticsOnClick`: `String`
- `analyticsOnClick_contains`: `String`
- `analyticsOnClick_exists`: `Boolean`
- `analyticsOnClick_in`: `[String]`
- `analyticsOnClick_not`: `String`
- `analyticsOnClick_not_contains`: `String`
- `analyticsOnClick_not_in`: `[String]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `deepLink`: `String`
- `deepLink_contains`: `String`
- `deepLink_exists`: `Boolean`
- `deepLink_in`: `[String]`
- `deepLink_not`: `String`
- `deepLink_not_contains`: `String`
- `deepLink_not_in`: `[String]`
- `iconUrl`: `String`
- `iconUrl_contains`: `String`
- `iconUrl_exists`: `Boolean`
- `iconUrl_in`: `[String]`
- `iconUrl_not`: `String`
- `iconUrl_not_contains`: `String`
- `iconUrl_not_in`: `[String]`
- `isExternalLink`: `Boolean`
- `isExternalLink_exists`: `Boolean`
- `isExternalLink_not`: `Boolean`
- `label`: `String`
- `label_contains`: `String`
- `label_exists`: `Boolean`
- `label_in`: `[String]`
- `label_not`: `String`
- `label_not_contains`: `String`
- `label_not_in`: `[String]`
- `passAuthenticationCredentials`: `Boolean`
- `passAuthenticationCredentials_exists`: `Boolean`
- `passAuthenticationCredentials_not`: `Boolean`
- `sys`: `SysFilter`

---

### cfsectionsMultiTypeNestedFilter

**Fields:**

- `AND`: `[cfsectionsMultiTypeNestedFilter]`
- `OR`: `[cfsectionsMultiTypeNestedFilter]`
- `contentfulMetadata`: `ContentfulMetadataFilter`
- `sys`: `SysFilter`

---

## Interfaces

### Entry

**Fields:**

- `contentfulMetadata`: `ContentfulMetadata!`
- `sys`: `Sys!`

**Implemented by:** BrowsMenuListSection, BrowseHeroSection, BrowseMenu, BrowseMenuAccount, BrowseMenuCard, BrowseMenuHero, BrowseMenuListItem, BrowseMenuSection, Header, LoginWallConfig, LoginWallText, OnboardingConfig, PlayerSection, PromoBannerSection, Screen, SduiDeeplink, SduiScreen, StandingsBlurb, StandingsColumn, StandingsConfig, StandingsSection, StandingsTab, SupportedUserType, TextButton, TextListItem, TextListSection, TileGridItem, TileGridSection, WebviewSection

---

### _Node

**Fields:**

- `_id`: `ID!`

**Implemented by:** BrowsMenuListSection, BrowseHeroSection, BrowseMenu, BrowseMenuAccount, BrowseMenuCard, BrowseMenuHero, BrowseMenuListItem, BrowseMenuSection, Header, LoginWallConfig, LoginWallText, OnboardingConfig, PlayerSection, PromoBannerSection, Screen, SduiDeeplink, SduiScreen, StandingsBlurb, StandingsColumn, StandingsConfig, StandingsSection, StandingsTab, SupportedUserType, TextButton, TextListItem, TextListSection, TileGridItem, TileGridSection, WebviewSection

---

