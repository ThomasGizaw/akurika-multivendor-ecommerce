import Link from "next/link";
import { useEffect } from "react";
import settings from "../../../utils/settings";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";
import ServeLangItem from "../Helpers/ServeLangItem";
import SimpleSlider from "../Helpers/SliderCom";
import FontAwesomeCom from "../Helpers/icons/FontAwesomeCom";
import { getCookie } from "cookies-next";
export default function Banner({
  className,
  images = [],
  sidebarImgOne,
  sidebarImgTwo,
  services = [],
}) {
  const settingBanner = {
    infinite: true,
    dots: true,
    autoplay: false,
    arrows: false,
    fade: true,
  };
  const { text_direction } = settings();
  useEffect(() => {
    const getCode = getCookie("googtrans")?.replace("/auto/", "");
    if (getCode) {
      const getSliderInitElement = document.querySelector(
        ".slider-wrapper .slick-slider.slick-initialized"
      );
      getSliderInitElement.setAttribute("dir", `${text_direction}`);

      if (getCookie("googtrans")) {
        const getCode = getCookie("googtrans").replace("/auto/", "");
        if (getCode === "ar" || getCode === "he") {
          getSliderInitElement.setAttribute("dir", "rtl");
        } else {
          getSliderInitElement.setAttribute("dir", "ltr");
        }
      }
    }
  }, [text_direction]);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] rtl:space-x-0 xl:h-[600px]  mb-[30px] ">
              <div
                data-aos="fade-right"
                className={` rtl:ml-[30px] ltr:ml-0 w-full xl:h-full md:h-[500px] h-[220px] xl:mb-0 mb-2 ${
                  sidebarImgOne || sidebarImgTwo
                    ? "xl:w-[740px] w-full"
                    : "w-full"
                }`}
              >
                <div className="slider-wrapper w-full h-full">
                  <SimpleSlider settings={settingBanner}>
                    {images.length > 0 &&
                      images.map((item, i) => (
                        <div key={i} className="item w-full h-full group">
                          <div
                            style={{
                              backgroundImage: `url(${
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              })`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="flex w-full max-w-full h-full h-auto relative items-center rtl:pr-[30px] ltr:pl-[30px]"
                          >
                            <div>
                              <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[30px] mb-[15px]">
                                <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                                  {item.badge}
                                </span>
                              </div>
                              <div className="md:mb-[30px] mb-[15px]">
                                <p className="md:text-[50px] text-[20px] leading-none text-qblack md:mb-3">
                                  {item.title_one}
                                </p>
                                <h1 className="md:text-[50px] text-[20px] md:w-[400px] md:leading-[66px] text-qblack font-bold">
                                  {item.title_two}
                                </h1>
                              </div>
                              <div className="w-auto">
                                <Link
                                  href={{
                                    pathname: "/single-product",
                                    query: { slug: item.product_slug },
                                  }}
                                  passHref
                                >
                                  <a rel="noopener noreferrer">
                                    <ShopNowBtn />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </SimpleSlider>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="flex-1 flex xl:flex-col flex-row  xl:space-y-[30px] xl:h-full md:h-[350px] h-[150px]"
              >
                {sidebarImgOne && (
                  <div
                    className="w-full xl:h-1/2 xl:mr-0 mr-2 relative flex items-center group rtl:md:pr-[40px] ltr:md:pl-[40px] rtl:pr-[30] ltr:pl-[30px]"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_BASE_URL + sidebarImgOne.image
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[22px] mb-[15px]">
                          <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                            {sidebarImgOne.badge}
                          </span>
                        </div>
                        <div className="md:mb-[30px] mb-2.5">
                          <p className="md:text-[30px] leading-none text-qblack font-semibold md:mb-3">
                            {sidebarImgOne.title_one}
                          </p>
                          <h1 className="md:text-[30px] md:leading-[40px] text-qblack font-semibold">
                            {sidebarImgOne.title_two}
                          </h1>
                        </div>
                      </div>
                      <div className="w-auto">
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: sidebarImgOne.product_slug },
                          }}
                          passHref
                        >
                          <a rel="noopener noreferrer">
                            <div className="cursor-pointer w-full relative  ">
                              <div className="inline-flex rtl:space-x-reverse  space-x-1.5 items-center relative z-20">
                                <span className="text-sm text-qblack font-medium leading-[30px]">
                                  {ServeLangItem()?.Shop_Now}
                                </span>
                                <span className="leading-[30px]">
                                  <svg
                                    className={`transform rtl:rotate-180`}
                                    width="7"
                                    height="11"
                                    viewBox="0 0 7 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="2.08984"
                                      y="0.636719"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(45 2.08984 0.636719)"
                                      fill="#1D1D1D"
                                    />
                                    <rect
                                      x="7"
                                      y="5.54492"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(135 7 5.54492)"
                                      fill="#1D1D1D"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 rtl:right-0 bottom-0 z-10"></div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {sidebarImgTwo && (
                  <div
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_BASE_URL + sidebarImgTwo.image
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-full xl:h-1/2 relative flex items-center rtl:md:pr-[40px] ltr:md:pl-[40px] rtl:pr-[30] ltr:pl-[30px] group"
                  >
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[22px] mb-[15px]">
                          <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                            {sidebarImgTwo.badge}
                          </span>
                        </div>
                        <div className="md:mb-[30px] mb-2.5">
                          <p className="md:text-[30px] leading-none text-qblack font-semibold md:mb-3">
                            {sidebarImgTwo.title_one}
                          </p>
                          <h1 className="md:text-[30px] md:leading-[40px] text-qblack font-semibold">
                            {sidebarImgTwo.title_two}
                          </h1>
                        </div>
                      </div>
                      <div className="w-auto">
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: sidebarImgTwo.product_slug },
                          }}
                          passHref
                        >
                          <a rel="noopener noreferrer">
                            <div className="cursor-pointer w-full relative  ">
                              <div className="inline-flex rtl:space-x-reverse  space-x-1.5 items-center relative z-20">
                                <span className="text-sm text-qblack font-medium leading-[30px]">
                                  {ServeLangItem()?.Shop_Now}
                                </span>
                                <span className="leading-[30px]">
                                  <svg
                                    className={`transform rtl:rotate-180`}
                                    width="7"
                                    height="11"
                                    viewBox="0 0 7 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="2.08984"
                                      y="0.636719"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(45 2.08984 0.636719)"
                                      fill="#1D1D1D"
                                    />
                                    <rect
                                      x="7"
                                      y="5.54492"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(135 7 5.54492)"
                                      fill="#1D1D1D"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 rtl:right-0 bottom-0 z-10"></div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="best-services w-full bg-white px-2 py-4"
            >
              <SimpleSlider
                settings={{
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2500,
                  arrows: false,
                  responsive: [
                    { breakpoint: 1024, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } },
                  ],
                }}
              >
                {services.map((service) => (
                  <div key={service.id} className="item px-2">
                    <div className="flex space-x-2 rtl:space-x-reverse items-center">
                      <div>
                        <span className="w-7 h-7 text-qyellow flex items-center justify-center">
                          <FontAwesomeCom className="w-5 h-5" icon={service.icon} />
                        </span>
                      </div>
                      <div>
                        <p className="text-black text-xs font-bold mb-0.5 leading-tight">
                          {service.title}
                        </p>
                        <p className="text-xs text-qgray line-clamp-1 leading-tight">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </SimpleSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
