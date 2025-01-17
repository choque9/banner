import React, { Fragment, useEffect } from 'react'

const Banner: StorefrontFunctionComponent<VisibilityLayoutProps> = ({
  firstBannerIsVisible = true,
  secondBannerIsVisible = true,
  children
}) => {

  useEffect(() => {
    const searchResult = document.querySelectorAll(".vtex-search-result-3-x-galleryItem");

    const clonedElement = searchResult[0].cloneNode(true);
    const firstChild = clonedElement.firstChild;
    var banner = document.createElement('img');
    banner.src = "https://www.adh.com.co/cdn/shop/products/blt118.jpg?v=1695766541";
    banner.alt = "Banner";

    if (firstChild) {
      firstChild.replaceWith(banner)
    }

    if (firstBannerIsVisible) {
      if (!document.contains(clonedElement)) {
        if (searchResult && searchResult.length && searchResult[2].parentNode) {
          searchResult[2].parentNode.insertBefore(clonedElement, searchResult[2]);
        }
      }
    }

    if (secondBannerIsVisible) {
      const clonedElement2 = clonedElement.cloneNode(true);
      if (!document.contains(clonedElement2)) {
        if (searchResult && searchResult.length && searchResult[3].parentNode) {
          searchResult[3].parentNode.insertBefore(clonedElement2, searchResult[3]);
        }
      }
    }

  }, []);

  return <Fragment>{children}</Fragment>
}
interface VisibilityLayoutProps {
  firstBannerIsVisible: boolean
  secondBannerIsVisible: boolean
}

Banner.schema = {
  title: 'editor.banner.title'
}

export default Banner
