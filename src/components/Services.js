import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaHiking />,
                title: "Endless hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer ",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {

                    }
                </div>
            </section>
        );
    }
}
