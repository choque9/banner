# Custom Banner PLP

## Overview
The "Custom Banner PLP" app allows you to add and manage banners on the Product Listing Page (PLP) of your VTEX IO store. You can change the banner positions and modify the banner content directly from the Site Editor.

## Features
- **Dynamic Positioning**: Change the banner positions from the Site Editor.
- **Editable Content**: Modify the banner images and text and redirects from the Site Editor.

## Installation
To install the Custom Banner PLP app, follow these steps:

1. Install the necessary dependency:
    ```bash
    vtex install piercecommercepartnerar.banner@0.x
    ```

3. Add the following block configurations to your `store-theme` JSON:

### Configuration

```json
{
  "store.search#brand": {
    "blocks": [
      "search-result-layout#custom-banner"
    ]
  },

  "search-result-layout.desktop#banner": {
    "children": [
      "flex-layout.row#banner-one",
      "flex-layout.row#result-banner"
    ]
  },

  "flex-layout.row#result-banner": {
    "children": [
      "flex-layout.col#content-banner"
    ],
    "props": {
      "preventHorizontalStretch": true,
      "fullWidth": true
    }
  },

  "flex-layout.row#products": {
    "children": [
      "banner",
      "info-card#BannerOne",
      "info-card#BannerTwo"
    ]
  },
  "info-card#BannerOne": {
    "props": {
      "id": "info-card-banner-one",
      "isFullModeStyle": true,
      "textPosition": "center",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3dJhLSMxiSSiOBRP-YDLCIrMQvmJ6yRvuA&s",
      "headline": "Title test",
      "callToActionText": "DISCOVER",
      "callToActionUrl": "/sale/d",
      "blockClass": "info-card-banner-one",
      "textAlignment": "center",
      "fetchpriority": "auto",
      "preload": false
    }
  },
  "info-card#BannerTwo": {
    "props": {
      "id": "info-card-banner-two",
      "isFullModeStyle": true,
      "textPosition": "center",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI37eMfuR5NU-BNun7a7ZUFZYnYOaSNfBzw&s",
      "headline": "Clearance Sale",
      "callToActionText": "DISCOVER",
      "callToActionUrl": "/sale/d",
      "blockClass": "info-card-banner-two",
      "textAlignment": "center",
      "fetchpriority": "auto",
      "preload": false
    }
  },
}
