import React from "react";

import { Column, Stack, Row, Img, Text, List, Button } from "components";

const BlogPostsThreePage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] sm:p-[15px] md:p-[67px] p-[95px] w-[100%]">
        <Stack className="h-[710px] max-w-[1140px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] right-[9%] top-[2%] sm:w-[100%] w-[23%]">
            <Img
              src="images/img_line.svg"
              className="flex-shrink-0 max-w-[100%] w-[11%]"
              alt="Line"
            />
            <Text
              className="flex-grow font-bold ml-[14px] sm:ml-[7px] md:ml-[9px] text-bluegray_900"
              as="h3"
              variant="h3"
            >
              Read our latest blog posts
            </Text>
          </Row>
          <List
            className="absolute sm:gap-[16px] md:gap-[21px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 flex flex-col items-end justify-start sm:mb-[122px] md:mb-[157px] mb-[223px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <Column className="flex flex-col justify-start sm:mb-[10px] md:mb-[14px] mb-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[37%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UX WRITING
                  </Button>
                  <Text
                    className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[92%]"
                    as="h2"
                    variant="h2"
                  >
                    How to create a UX Writing portfolio as a beginner
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[14px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
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
                      alt="Eight"
                    />
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      15 March, 2022
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex sm:h-[31px] md:h-[40px] h-[56px] items-center justify-center mt-[100px] sm:mt-[54px] md:mt-[70px] sm:w-[30px] md:w-[39px] w-[56px]"
                  size="smIcn"
                  variant="icbFillBlueA700"
                >
                  <Img
                    src="images/img_arrowright_56X56.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="arrowright"
                  />
                </Button>
              </Row>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-end justify-start my-[111px] sm:my-[60px] md:my-[78px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <Column className="flex flex-col justify-start sm:mb-[10px] md:mb-[14px] mb-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius13 sm:w-[100%] w-[71%]">
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
                  <Text
                    className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[92%]"
                    as="h2"
                    variant="h2"
                  >
                    How Snapchat and Netflix Break UX Design Principles
                    <br />
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[14px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
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
                      alt="Nine"
                    />
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      15 March, 2022
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex sm:h-[31px] md:h-[40px] h-[56px] items-center justify-center mt-[100px] sm:mt-[54px] md:mt-[70px] sm:w-[30px] md:w-[39px] w-[56px]"
                  size="smIcn"
                  variant="icbFillBlueA700"
                >
                  <Img
                    src="images/img_arrowright_56X56.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="arrowright One"
                  />
                </Button>
              </Row>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-end justify-start sm:mt-[122px] md:mt-[157px] mt-[223px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_1.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap Two"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <Column className="flex flex-col justify-start sm:mb-[10px] md:mb-[14px] mb-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[40%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    WEB DESIGN
                  </Button>
                  <Text
                    className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[90%]"
                    as="h2"
                    variant="h2"
                  >
                    How to Design Your Site to Make it Super-fast
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
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
                      alt="Ten"
                    />
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      15 March, 2022
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex sm:h-[31px] md:h-[40px] h-[56px] items-center justify-center mt-[100px] sm:mt-[54px] md:mt-[70px] sm:w-[30px] md:w-[39px] w-[56px]"
                  size="smIcn"
                  variant="icbFillBlueA700"
                >
                  <Img
                    src="images/img_arrowright_56X56.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="arrowright Two"
                  />
                </Button>
              </Row>
            </Column>
          </List>
        </Stack>
      </Column>
    </>
  );
};

export default BlogPostsThreePage;
