import React, { Component } from "react";
import Link from "./Link";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

class LinkList extends Component {
    render() {
        const FEED_QUERY = gql`
        {
            feed {
                links {
                    id,
                    createdAt,
                    url,
                    description
                }
            }
        }`

        return (
            <Query query={FEED_QUERY}>
                {({data,loading,error}) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return <div>Error!</div>;

                    const LinksToRender = data.feed.links;

                    return (
                        <>
                            <h1>Links:</h1>
                            <ul>
                                {LinksToRender.map((link) => (
                                    <Link key={link.id} link={link} />
                                ))}
                            </ul>
                        </>
                    );
                }}
            </Query>
        );
    }
}

export default LinkList;
