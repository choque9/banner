import React, { Fragment, useEffect } from 'react'

const Banner: StorefrontFunctionComponent<VisibilityLayoutProps> = ({
  firstBannerIsVisible = true,
  secondBannerIsVisible = true,
  positionfirstBanner = 1,
  positionSecondBanner = 2,
  children
}) => {

  useEffect(() => {
    const searchResult = document.querySelectorAll(".vtex-search-result-3-x-galleryItem");

    positionfirstBanner--
    positionSecondBanner--

    const clonedElement = searchResult[0].cloneNode(true);
    const clonedElement2 = clonedElement.cloneNode(true);
    const firstChildContainerBannerOne = clonedElement.firstChild;
    const firstChildContainerBannerTwo = clonedElement2.firstChild;

    const infoCardBannerOne = document.querySelector(".vtex-store-components-3-x-infoCardContainer--info-card-banner-one");
    const infoCardBannerTwo = document.querySelector(".vtex-store-components-3-x-infoCardContainer--info-card-banner-two");

    if (firstChildContainerBannerOne && infoCardBannerOne) {
      (infoCardBannerOne as HTMLElement).style.display = "flex"
      clonedElement.firstChild?.replaceWith(infoCardBannerOne)
    }

    if (firstChildContainerBannerTwo && infoCardBannerTwo) {
      (infoCardBannerTwo as HTMLElement).style.display = "flex"
      clonedElement2.firstChild?.replaceWith(infoCardBannerTwo)
    }

    try {
      if (firstBannerIsVisible) {
        if (!document.contains(clonedElement) && infoCardBannerOne) {
          if (searchResult && searchResult.length > positionfirstBanner && searchResult[positionfirstBanner].parentNode) {

            searchResult[positionfirstBanner].parentNode?.insertBefore(clonedElement, searchResult[positionfirstBanner]);
          }
        }
      }

      if (secondBannerIsVisible) {
        if (!document.contains(clonedElement2) && infoCardBannerTwo) {
          if (searchResult && searchResult.length > positionSecondBanner && searchResult[positionSecondBanner].parentNode) {
            if (firstBannerIsVisible) {
              searchResult[positionSecondBanner - 1].parentNode?.insertBefore(clonedElement2, searchResult[positionSecondBanner - 1]);
            } else {
              searchResult[positionSecondBanner].parentNode?.insertBefore(clonedElement2, searchResult[positionSecondBanner]);
            }
          }
        }
      }
    } catch (error) {
      console.log("Error with banner: ", error)
    }
  }, []);

  return <Fragment>{children}</Fragment>
}
interface VisibilityLayoutProps {
  firstBannerIsVisible: boolean
  secondBannerIsVisible: boolean
  positionfirstBanner: number
  positionSecondBanner: number
}

Banner.schema = {
  title: 'editor.banner.title'
}

export default Banner
