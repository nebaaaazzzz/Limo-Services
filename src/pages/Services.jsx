import React, { useEffect } from "react";
import { getServices } from "../api";
import { useInView } from "react-intersection-observer";
import Loading from "../components/Loading";
import { useInfiniteQuery, useQuery } from "react-query";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container } from "reactstrap";
import ServicesList from "../components/UI/ServicesList";

export const Services = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const { data, fetchNextPage, isLoading, isError, error } = useInfiniteQuery(
        ["services"],
        ({ pageParam = 1 }) => {
            return getServices(pageParam);
        },
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.length) {
                    return pages.length + 1;
                }
            },
        }
    );
    // console.log(data);
    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);
    return <Helmet title="Services">
        <CommonSection title="Services" />
        <section>
            <Container>
                {data?.pages?.map((services, index) => {
                    return <ServicesList services={services} key={index} />;
                })}
                {isLoading && <Loading />}
                <div ref={ref}></div>
            </Container>
        </section>
    </Helmet>;
};

