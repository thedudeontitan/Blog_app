import React from "react";

import { Column, Text, Row, Stack, Img, Line, Button } from "components";

const BlogPostsSevenPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[120px] sm:p-[15px] md:p-[84px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[1141px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:pt-[4px] md:pt-[6px] pt-[9px] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
            <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
              Our Latest Posts
            </Text>
            <Text
              className="font-light leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[15px] mt-[22px] text-bluegray_600 text-center w-[100%]"
              as="h2"
              variant="h2"
            >
              Adwords Keyword research for beginners when you embark on your
              first PPC journey, you need to keep a small number of keywords at
              first.
            </Text>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[30px] md:mt-[38px] mt-[55px] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
              <Column className="bg-white_A700 flex flex-col justify-start sm:mx-[0] md:pb-[11px] sm:pb-[15px] pb-[16px] rounded-radius4 shadow-bs sm:w-[100%] w-[90%]">
                <Stack className="h-[134px] relative w-[100%]">
                  <Img
                    src="images/img_bitmap_236X360.png"
                    className="absolute h-[114px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]"
                    alt="Bitmap"
                  />
                  <Img
                    src="images/img_ovalcopy4_42X42.png"
                    className="absolute bottom-[0] sm:h-[24px] md:h-[30px] h-[42px] left-[10%] rounded-radius50 sm:w-[23px] md:w-[29px] w-[42px]"
                    alt="OvalCopyFour"
                  />
                </Stack>
                <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                  <Text
                    className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[92%]"
                    as="h2"
                    variant="h2"
                  >
                    Netflix Break UX Design Principles
                    <br />
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] text-bluegray_600 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum is simply dummy text of the
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-end sm:mt-[16px] md:mt-[21px] mt-[30px] sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs sm:w-[100%] w-[90%]">
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[88%]"
                  as="h2"
                  variant="h2"
                >
                  UX Writing portfolio as a beginner
                </Text>
                <Column className="flex flex-col justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum
                  </Text>
                  <Line className="bg-bluegray_100_4c h-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[11px] sm:mt-[6px] md:mt-[7px] sm:px-[0] rounded-radius13 w-[100%]">
                  <Text
                    className="font-medium mb-[2px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[31%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UX / UI
                  </Button>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] md:pb-[11px] sm:pb-[15px] pb-[16px] rounded-radius4 shadow-bs sm:w-[100%] w-[49%]">
              <Stack className="h-[289px] relative w-[100%]">
                <Img
                  src="images/img_bitmap.png"
                  className="absolute h-[268px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]"
                  alt="Bitmap One"
                />
                <Img
                  src="images/img_ovalcopy4.png"
                  className="absolute bottom-[0] sm:h-[24px] md:h-[30px] h-[42px] left-[4%] rounded-radius50 sm:w-[23px] md:w-[29px] w-[42px]"
                  alt="OvalCopyFour One"
                />
              </Stack>
              <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[76%]"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a <br />
                  beginner
                </Text>
                <Text
                  className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] sm:mx-[0] text-bluegray_600 sm:w-[100%] w-[92%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </Text>
                <Line className="bg-bluegray_100_4c h-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius13 w-[100%]">
                  <Text
                    className="font-medium mb-[2px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] rounded-radius13 sm:w-[100%] w-[40%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[47%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                      shape="CircleBorder13"
                    >
                      UX DESIGN
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[47%] text-[12px] text-center text-red_700 uppercase w-[max-content]"
                      shape="CircleBorder13"
                    >
                      UI DESIGN
                    </Button>
                  </Row>
                </Row>
              </Column>
            </Column>
            <Column className="flex flex-col items-center md:ml-[21px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
              <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs w-[100%]">
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[88%]"
                  as="h2"
                  variant="h2"
                >
                  UX Writing portfolio as a beginner
                </Text>
                <Column className="flex flex-col justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-light text-bluegray_600 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum
                  </Text>
                  <Line className="bg-bluegray_100_4c h-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[11px] sm:mt-[6px] md:mt-[7px] sm:px-[0] rounded-radius13 w-[100%]">
                  <Text
                    className="font-medium mb-[2px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[31%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UX / UI
                  </Button>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[30px] md:pb-[11px] sm:pb-[15px] pb-[16px] rounded-radius4 shadow-bs w-[100%]">
                <Stack className="h-[134px] relative w-[100%]">
                  <Img
                    src="images/img_bitmap_1.png"
                    className="absolute h-[114px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]"
                    alt="Bitmap Two"
                  />
                  <Img
                    src="images/img_ovalcopy4_48X48.png"
                    className="absolute bottom-[0] sm:h-[24px] md:h-[30px] h-[42px] left-[10%] rounded-radius50 sm:w-[23px] md:w-[29px] w-[42px]"
                    alt="OvalCopyFour Two"
                  />
                </Stack>
                <Column className="flex flex-col justify-start md:ml-[16px] ml-[24px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                  <Text
                    className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[87%]"
                    as="h2"
                    variant="h2"
                  >
                    Design Your Site Super-Fast
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] text-bluegray_600 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem Ipsum is simply dummy text of the
                  </Text>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default BlogPostsSevenPage;
