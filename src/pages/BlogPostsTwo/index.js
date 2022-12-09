import React from "react";

import { Column, Img, Text, Grid, Row } from "components";

const BlogPostsTwoPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-[auto] sm:p-[15px] md:p-[67px] p-[95px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[951px] sm:mb-[18px] md:mb-[24px] mb-[34px] ml-[auto] mr-[auto] pb-[3px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_line3.svg"
            className="max-w-[100%] w-[6%]"
            alt="LineThree"
          />
          <Text
            className="sm:mt-[15px] md:mt-[19px] mt-[28px] text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Our Latest Posts
          </Text>
          <Grid className="font-montserrat sm:gap-[16px] md:gap-[21px] gap-[31px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[19px] md:mt-[25px] mt-[36px] w-[100%]">
            <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
              <Img
                src="images/img_bitmap_160X460.png"
                className="max-w-[100%] w-[100%]"
                alt="Bitmap"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] pt-[3px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by Virgie Patterson
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Four"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    UX WRITING
                  </Text>
                </Row>
                <Text
                  className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  15 March, 2022
                </Text>
              </Row>
              <Text
                className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] md:mt-[12px] mt-[17px] sm:mt-[9px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[84%]"
                as="h2"
                variant="h2"
              >
                How to create a UX Writing portfolio as a beginner
              </Text>
            </Column>
            <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
              <Img
                src="images/img_bitmap_2.png"
                className="max-w-[100%] w-[100%]"
                alt="Bitmap One"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] pt-[3px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by Virgie Patterson
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Five"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    UX WRITING
                  </Text>
                </Row>
                <Text
                  className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  15 March, 2022
                </Text>
              </Row>
              <Text
                className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] md:mt-[12px] mt-[17px] sm:mt-[9px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                as="h2"
                variant="h2"
              >
                How Snapchat and Netflix Break UX Design Principles
                <br />
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Img
                src="images/img_bitmap_3.png"
                className="max-w-[100%] w-[100%]"
                alt="Bitmap Two"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] pt-[3px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by Virgie Patterson
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Six"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    UX WRITING
                  </Text>
                </Row>
                <Text
                  className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  15 March, 2022
                </Text>
              </Row>
              <Text
                className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] text-bluegray_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                Designing Content for Readability, Legibility and Clarity.
              </Text>
            </Column>
            <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
              <Img
                src="images/img_bitmap_4.png"
                className="max-w-[100%] w-[100%]"
                alt="Bitmap Three"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] pt-[3px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by Virgie Patterson
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Seven"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    UX WRITING
                  </Text>
                </Row>
                <Text
                  className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  15 March, 2022
                </Text>
              </Row>
              <Text
                className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] md:mt-[12px] mt-[17px] sm:mt-[9px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[93%]"
                as="h2"
                variant="h2"
              >
                Survey: UX, Interactive Designer or Full-Stack Developer - Who
                are you?
              </Text>
            </Column>
          </Grid>
        </Column>
      </Column>
    </>
  );
};

export default BlogPostsTwoPage;
