import React from "react";

import { Stack, Column, Text, Row, Button, Img, List } from "components";

const BlogPostsEightPage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-montserrat h-[900px] mx-[auto] p-[120px] sm:p-[15px] md:p-[84px] relative w-[100%]">
        <div className="absolute bg-white_A700 bottom-[15%] sm:h-[263px] md:h-[340px] h-[480px] left-[16%] max-w-[459px] sm:pl-[15px] sm:pr-[15px] rounded-radius2 shadow-bs w-[100%]"></div>
        <Column className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] max-w-[948px] sm:pl-[15px] sm:pr-[15px] sm:pt-[4px] md:pt-[6px] pt-[9px] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[30px] md:mt-[38px] mt-[55px] w-[100%]">
            <Column
              className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:pt-[15px] md:pt-[283px] pt-[400px] sm:w-[100%] w-[49%]"
              style={{
                backgroundImage: "url('images/img_bitmap_312X360.png')",
              }}
            >
              <Row className="bg-bluegray_900_99 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                <Text
                  className="font-bold leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-white_A700 tracking-ls02857142984867096 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[74%]"
                  as="h3"
                  variant="h3"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Button
                  className="flex sm:h-[24px] md:h-[30px] h-[42px] items-center justify-center sm:mr-[4px] md:mr-[5px] mr-[8px] my-[3px] rounded-radius50 sm:w-[23px] md:w-[29px] w-[42px]"
                  size="smIcn"
                  variant="icbOutlineBlack9000c"
                >
                  <Img
                    src="images/img_playsolid.svg"
                    className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                    alt="playSolid"
                  />
                </Button>
              </Row>
            </Column>
            <List
              className="sm:gap-[16px] md:gap-[21px] gap-[30px] grid min-h-[auto] sm:w-[100%] w-[49%]"
              orientation="vertical"
            >
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start my-[0] md:pt-[102px] pt-[145px] sm:pt-[15px] w-[100%]"
                style={{ backgroundImage: "url('images/img_bitmap_1.png')" }}
              >
                <Row className="bg-bluegray_900_99 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                  <Text
                    className="font-bold leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-white_A700 tracking-ls02857142984867096 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[71%]"
                    as="h3"
                    variant="h3"
                  >
                    How to Design Your Site to Make it Super-fast
                  </Text>
                  <Button
                    className="flex sm:h-[24px] md:h-[30px] h-[42px] items-center justify-center sm:mr-[4px] md:mr-[5px] mr-[8px] my-[3px] rounded-radius50 sm:w-[23px] md:w-[29px] w-[42px]"
                    size="smIcn"
                    variant="icbOutlineBlack9000c"
                  >
                    <Img
                      src="images/img_playsolid.svg"
                      className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                      alt="playSolid One"
                    />
                  </Button>
                </Row>
              </Column>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-end my-[0] md:pt-[102px] pt-[145px] sm:pt-[15px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_bitmap_236X360.png')",
                }}
              >
                <Row className="bg-bluegray_900_99 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                  <Text
                    className="font-bold leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] text-white_A700 tracking-ls02857142984867096 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[73%]"
                    as="h3"
                    variant="h3"
                  >
                    How Snapchat and Netflix Break UX Design Principles
                    <br />
                  </Text>
                  <Button
                    className="flex sm:h-[24px] md:h-[30px] h-[42px] items-center justify-center sm:mr-[4px] md:mr-[5px] mr-[8px] my-[3px] rounded-radius50 sm:w-[23px] md:w-[29px] w-[42px]"
                    size="smIcn"
                    variant="icbOutlineBlack9000c"
                  >
                    <Img
                      src="images/img_playsolid.svg"
                      className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                      alt="playSolid Two"
                    />
                  </Button>
                </Row>
              </Column>
            </List>
          </Row>
        </Column>
      </Stack>
    </>
  );
};

export default BlogPostsEightPage;
