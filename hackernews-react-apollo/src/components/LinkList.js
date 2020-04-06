import React, { Component } from "react";
import Link from "./Link";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                createdAt
                url
                description
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                        name
                    }
                }
            }
        }
    }
`;

class LinkList extends Component {
    _updateCacheAfterVote = (store, createVote, linkId) => {
        const data = store.readQuery({ query: FEED_QUERY });

        const votedLink = data.feed.links.find((link) => link.id === linkId);
        votedLink.votes = createVote.link.votes;
        // console.log(data);
        // console.log(createVote);
        // console.log(linkId);
        store.writeQuery({ query: FEED_QUERY, data });
    }
    render() {

        return (
            <Query query={FEED_QUERY}>
                {({ data, loading, error }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error!</div>;

                    const LinksToRender = data.feed.links;

                    return (
                        <>
                            <h1>Links:</h1>
                            <ul>
                                {LinksToRender.map((link, i) => (
                                    <Link
                                        key={link.id}
                                        link={link}
                                        index={i}
                                        updateStoreAfterVote={
                                            this._updateCacheAfterVote
                                        }
                                    />
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
