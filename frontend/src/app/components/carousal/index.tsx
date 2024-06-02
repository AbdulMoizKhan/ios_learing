"use client"; // This must be the first line in the file
import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { CardsService } from "../cards";
import React from 'react';

const sliderArr = [
  {
    title: "Scroll Transition and Scale Effect",
    videoSource: 'https://www.youtube.com/embed/iiWxXd-MnRs?si=Dj1BK_lV_LvlRm8B'
  },
  {
    title: "Building SwiftUI App for tvOS",
    videoSource: 'https://www.youtube.com/embed/pGOFRgRQpNo?si=sNVESE9X-y_cXhMt'
  },
  {
    title: "SwiftUI - Animation Transiton, ScaleEffect, Opacity and ViewModifier",
    videoSource: 'https://www.youtube.com/embed/N1YIloLST-U?si=6AmeiQe4I_JXD4CN"'
  },
  {
    title: "Building SwiftUI tvOS TabView and FocusSection - Moving diagonal",
    videoSource: 'https://www.youtube.com/embed/aTCzjYyI3V8?si=YczdlJrEBNPYWKZE'
  },
  {
    title: "tvOS Introduction and User Interaction Guide",
    videoSource: 'https://www.youtube.com/embed/srb5sgdz2cs?si=JB63uIgDskMXbxN1'
  },
  {
    title: "Scroll Transition and Scale Effect",
    videoSource: 'https://www.youtube.com/embed/iiWxXd-MnRs?si=Dj1BK_lV_LvlRm8B'
  },
  {
    title: "SwiftUI Loading Bar, Splash Screen Animation and Content Transition",
    videoSource: 'https://www.youtube.com/embed/ZTZihHY6JKU?si=7mwqGaayYwBRtHFb'
  },
  {
    title: "Frames and Alignment - SwiftUI Bootcamp #4",
    videoSource: 'https://www.youtube.com/embed/CuHUAnuBNuA?si=MA3s60mYeRSLDTED'
  },
];
const articleArr = [
  {
    title: "ATTrackingManager: Empowering User Privacy (iOS 17.4.0/17.4.1 Challenge/Workaround)",
    description: "Explore how ATTrackingManager enhances user privacy in iOS 17.4.0 and 17.4.1, including challenges and potential workarounds for developers.",
    Link: 'https://medium.com/@abdulkarimkhaan/attrackingmanager-empowering-user-privacy-ios-17-4-0-17-4-1-challenge-workaro-8b22c9d1c85c',
    id: 'empowering-user-privacy'
  },
  {
    title: "Building SwiftUI App for tvOS (2024) | Episode 1: Introduction and User Interaction Guide",
    description: "Kickstart your journey in building a SwiftUI app for tvOS with this introductory guide, focusing on user interaction and essential concepts.",
    Link: 'https://medium.com/@abdulkarimkhaan/building-swiftui-app-for-tvos-2024-episode-1-introduction-and-user-interaction-guide-26f961eedad4',
    id: 'introduction-and-user-interaction-guide'
  },
  {
    title: "SPM vs. Cocoapods: The Battle for Package Management Supremacy in Apple App Development",
    description: "Dive into the comparison between Swift Package Manager (SPM) and Cocoapods, evaluating their strengths and weaknesses in Apple app development.",
    Link: 'https://medium.com/@abdulkarimkhaan/spm-vs-cocoapods-the-battle-for-package-management-supremacy-in-apple-app-development-b8e960671f41',
    id: 'the-battle-for-package-management'  
  },
  {
    title: "The Million Dollar Question for Product Success, Retention vs. Acquisition",
    description: "Analyze the critical aspects of product success by comparing user retention strategies with user acquisition tactics.",
    Link: 'https://medium.com/@abdulkarimkhaan/the-million-dollar-question-for-product-success-retention-vs-acquisition-be0ea0d4ce54',
    id: 'retention-vs-acquisition'
  },
  {
    title: "Exploring LLDB in Xcode: Your Guide to Effective Debugging #Xcode #Debugging #Development",
    description: "Learn how to use LLDB in Xcode for effective debugging, enhancing your development process with practical tips and techniques.",
    Link: 'https://medium.com/@abdulkarimkhaan/exploring-lldb-in-xcode-your-guide-to-effective-debugging-9db37c92cb2a',
    id: 'guide-to-effective-debugging'
  },
  {
    title: "Understanding Structs vs. Classes in Swift: Choosing the Right Data Type",
    description: "Understand the differences between structs and classes in Swift, and learn how to choose the appropriate data type for your project.",
    Link: 'https://medium.com/@abdulkarimkhaan/understanding-structs-vs-classes-in-swift-choosing-the-right-data-type-9078f697b69c',
    id: 'structs-vs-classes'
  },
  {
    title: "Implementing Self-Sizing UICollectionView Cells With AutoLayout in Storyboard",
    description: "Discover how to implement self-sizing UICollectionView cells using AutoLayout in Storyboard, ensuring responsive and dynamic UI designs.",
    Link: 'https://medium.com/@abdulkarimkhaan/implementing-self-sizing-uicollectionview-cells-with-autolayout-in-storyboard-2630a0ccd6d1',
    id: 'self-sizing-uicollectionview-cells'
  },
  {
    title: "Understanding AutoLayout in Swift: Building Responsive User Interfaces",
    description: "Gain insights into using AutoLayout in Swift to build responsive user interfaces that adapt to different screen sizes and orientations.",
    Link: 'https://medium.com/@abdulkarimkhaan/understanding-autolayout-in-swift-building-responsive-user-interfaces-8759030e1f56',
    id: 'autolayout-in-swift'
  },
];

interface CarousalProps {
  type: string;
  backgroundColor: string;
  slidesPerView: any
  delay:any
}

export const Carousal = ({ type, backgroundColor, slidesPerView, delay }: CarousalProps) => {
  
  
  return (
    <div style={{ backgroundColor: backgroundColor, height: '400px', cursor: 'pointer' }}>
      <Box sx={{ paddingTop: '20px', height: '100%' }} >
        <Typography align="center" variant="h4" sx={{ fontWeight: '700', paddingBottom: '30px' }} className={backgroundColor === "white" ? "black" : "white"}>{type === "youtube" ? "Course Insights" : "Articles"}</Typography>
        <Swiper
          centeredSlides={true}
          autoplay={delay}
          loop={true}
          slidesPerView= {1}
          spaceBetween= {10}
          style={backgroundColor === "white" ? { background: "white" } : { background: "black" }}
          pagination={type === "youtube" ? { clickable: true } : false}
          modules={type === "youtube" ? [Pagination, Autoplay] : [Autoplay]}
          className="mySwiper"
          breakpoints={slidesPerView}
        >
          {type === "youtube" && sliderArr.map((slider, index) => (
            <SwiperSlide key={index}>
              <CardsService
                videoSource={slider?.videoSource}
                cardTitle={slider.title}
                type={"youtube"}
              />
            </SwiperSlide>
          ))}
          {type === "article" && articleArr.map((item, index) => (
            <SwiperSlide key={index}>
              <CardsService
                type={"article"}
                articleLink={item?.Link}
                articleTitle={item.title}
                articleDescription={item.description}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  )
}
