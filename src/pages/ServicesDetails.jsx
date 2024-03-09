import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { Link, useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";
import {
    QueryErrorResetBoundary,
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from "react-query";

import moment from "moment";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getService, getServices } from "../api";

const ServiceDetails = () => {
    const { slug } = useParams();
    // const blog = blogData.find((blog) => service.title === slug);
    const { data: services, isLoading: loading, isError: error } = useInfiniteQuery(
        ["services"], () => getServices(1),
    );
    const { data, isLoading, isError } = useQuery(["service", slug], () =>
        getService(slug)
    );
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data]);
    if (isError) return <>Error</>;
    if (isLoading) return <Loading />;
    return (
        <Helmet title={data.title}>
            <section>
                <Container>
                    <Row>
                        <div className="col-12 col-md-8 col-lg-12 col-xl-9">
                            <div className="row justify-content-between">
                                <div className="col-12 col-md-12 col-lg-6 ">
                                    <div className="blog__details">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="w-100"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 ">
                                    <div className="blog__details__info py-0">
                                        <h3 className="section__title">Discription</h3>
                                        <hr />
                                        <p className="section__description" style={{ whiteSpace: 'pre-line' }}>
                                            {data.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="comment__list mt-5">
                <h4 className="mb-5">Comments</h4>
                {commentData?.pages?.map((comments) => {
                  return comments.map((comment) => {
                    return <Comment data={comment} />;
                  });
                })}
                {isCommentLoading && <Loading />}
                {commentHasNextPage && (
                  <button
                    onClick={() => fetchCommentNextPage()}
                    className="btn btn-primary"
                  >
                    Load more
                  </button>
                )}
                {/* =============== comment form ============ */}
                            {/* <CommentForm id={data.id} />
              </div> */}
                        </div>
                        <div className="col col-md-4 px-md-0 col-xl-3">
                            <h3>Other Services</h3>
                            {
                                services && services.pages?.[0]?.map((service) => {
                                    return <Link to={`/services/${service.id}`} className="text-decoration-none text-dark single__blog__sidebar align-items-start d-flex" key={service.id} style={{ marginBottom: "20px" }}>
                                        <div className="col-3 col-md-6 col-lg-4">
                                            <img src={service.img} alt={service.title} srcSet="" className="img-fluid rounded-3" />
                                        </div>
                                        <div className="col px-2">
                                            <div className="">
                                                {service.title}
                                            </div>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

function Loading() {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                aspectRatio: "3 / 1",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                className="spinner-border spinner-border-lg text-primary"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default ServiceDetails;
