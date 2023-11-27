"use client";
import CompanyInfo from "@/components/ui/CompanyInfo";
import HeroBanner from "@/components/ui/HeroBanner";
import OurClient from "@/components/ui/OurClient";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceSection from "@/components/ui/ServiceSection";
import Subscribe from "@/components/ui/Subscribe";
import { useGetAvailableServicesQuery, useGetUpcomingServicesQuery } from "@/redux/api/serviceApi";
import { Row, Space, Spin } from "antd";

export default function Home() {
  // const query: Record<string, any> = {};
  const { data: availableData, isLoading: availableIsLoading } = useGetAvailableServicesQuery({});
  const { data: upcomingData, isLoading: upcomingIsLoading } = useGetUpcomingServicesQuery({});
  if (availableIsLoading || upcomingIsLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  // @ts-ignore
  const payload = availableData?.services?.data?.data.slice(0, 3);
  // @ts-ignore
  const upcomingPayload = upcomingData?.services?.data?.data.slice(0, 3);
  return (
    <div className="">
      <HeroBanner />
      <ServiceSection />
      <div className="mt-6">
        <h1
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="200"
          className="text-center text-2xl md:text-4xl font-medium md:font-bold text-[#474E68]"
        >
          Available Services
        </h1>
        <ServiceCard payload={payload} />
      </div>
      <div className="mt-6">
        <h1
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="200"
          className="text-center text-2xl md:text-4xl font-medium md:font-bold text-[#474E68]"
        >
          Upcoming Services
        </h1>
        <ServiceCard payload={upcomingPayload} />
      </div>
      <OurClient />
      <Subscribe />
      <CompanyInfo />
    </div>
  );
}
