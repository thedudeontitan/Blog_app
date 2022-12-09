import React from "react";

import { Column, Row, Text, Img, Line, List, Button } from "components";

const BlogPostsFourPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-montserrat items-center justify-center mx-[auto] p-[130px] sm:p-[15px] md:p-[92px] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1140px] sm:mb-[19px] md:mb-[25px] mb-[36px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[28px] mt-[40px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
            <Column className="flex flex-col justify-start ml-[1px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[74%]">
              <Column className="flex flex-col justify-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                <Text
                  className="font-normal not-italic text-bluegray_600 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Blog posts
                </Text>
                <Img
                  src="images/img_line_1X32.svg"
                  className="max-w-[100%] ml-[2px] mt-[4px] w-[28%]"
                  alt="Line"
                />
              </Column>
              <Text
                className="ml-[1px] md:mt-[12px] mt-[17px] sm:mt-[9px] text-bluegray_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Read Our Latest Posts
              </Text>
              <Text
                className="font-normal leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[18px] md:mt-[23px] mt-[33px] not-italic text-bluegray_600 w-[100%]"
                as="h2"
                variant="h2"
              >
                Adwords Keyword research for beginners when you embark on your
                first PPC journey.
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
              <Column className="flex flex-col items-center justify-start pt-[2px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Text
                    className="flex-grow font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] mt-[4px] sm:mx-[0] text-bluegray_900"
                    as="h3"
                    variant="h3"
                  >
                    Writing A Good Headline For Your Advertisement
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="flex-shrink-0 sm:h-[14px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[13px] md:w-[16px] w-[24px]"
                    alt="arrowright"
                  />
                </Row>
                <Line className="bg-bluegray_50 h-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]" />
              </Column>
              <List
                className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                orientation="vertical"
              >
                <Column className="flex flex-col items-center justify-start pt-[2px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-bluegray_900"
                      as="h3"
                      variant="h3"
                    >
                      Where To Look For Cheap Printing Services
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="flex-shrink-0 sm:h-[14px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[13px] md:w-[16px] w-[24px]"
                      alt="arrowright One"
                    />
                  </Row>
                  <Line className="bg-bluegray_50 h-[1px] sm:mt-[10px] md:mt-[14px] mt-[20px] w-[100%]" />
                </Column>
                <Column className="flex flex-col items-center justify-start pt-[2px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] mt-[4px] sm:mx-[0] text-bluegray_900"
                      as="h3"
                      variant="h3"
                    >
                      Using Banner Stands To Increase Trade Show Traffic
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="flex-shrink-0 sm:h-[14px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[13px] md:w-[16px] w-[24px]"
                      alt="arrowright Two"
                    />
                  </Row>
                  <Line className="bg-bluegray_50 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[23px] w-[100%]" />
                </Column>
              </List>
            </Column>
          </Column>
          <List
            className="sm:gap-[16px] md:gap-[21px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[66%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_312X360.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Eleven"
                  />
                  <Text
                    className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </Row>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[85%]"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Text
                  className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] text-bluegray_600 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[34%] md:mt-[11px] mt-[16px] sm:mt-[8px] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                  shape="CircleBorder13"
                >
                  UX WRITING
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Twelve"
                  />
                  <Text
                    className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </Row>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How Snapchat and Netflix Break UX Design Principles
                  <br />
                </Text>
                <Text
                  className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] sm:mx-[0] text-bluegray_600 sm:w-[100%] w-[99%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius13 sm:w-[100%] w-[65%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[47%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UX DESIGN
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[47%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[12px] text-center text-red_700 uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UI DESIGN
                  </Button>
                </Row>
              </Column>
            </Column>
          </List>
        </Row>
      </Column>
    </>
  );
};

export default BlogPostsFourPage;
