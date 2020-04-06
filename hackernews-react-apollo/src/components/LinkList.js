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

const NEW_LINKS_SUBSCRIPTION = gql`
    subscription {
        newLink {
            id
            url
            description
            createdAt
            postedBy {
                id
                name
            }
            votes {
                id
                user {
                    id
                }
            }
        }
    }
`;

const NEW_VOTES_SUBSCRIPTION = gql`
    subscription {
        newVote {
            id
            link {
                id
                url
                description
                createdAt
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
            user {
                id
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
    };

    _subscribeToNewLinks = (subscribeToMore) => {
        subscribeToMore({
            document: NEW_LINKS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newLink = subscriptionData.data.newLink;
                const exists = prev.feed.links.find(
                    ({ id }) => id === newLink.id
                );
                if (exists) return prev;

                return Object.assign({}, prev, {
                    feed: {
                        links: [...prev.feed.links, newLink],
                        count: prev.feed.links.length + 1,
                        __typename: prev.feed.__typename,
                    },
                });
            },
        });
    };

    _subscribeToNewVotes = (subscribeToMore) => {
        subscribeToMore({
            document: NEW_VOTES_SUBSCRIPTION,
        });
    };

    render() {
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error!</div>;

                    this._subscribeToNewLinks(subscribeToMore);
                    this._subscribeToNewVotes(subscribeToMore);

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
