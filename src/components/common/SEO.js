import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default class SEO extends Component {
	static propTypes = {
		lang: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		author: PropTypes.string,
		meta: PropTypes.arrayOf(PropTypes.object),
		children: PropTypes.any,
	};

	static defaultProps = {
		lang: "en",
		title: "Max Altena",
		description:
			"Max Altena's website with his skills and his latest projects. Contact him through here if you prefer.",
		author: "Max Altena",
		meta: [],
	};

	render() {
		const { lang, title, description, author, meta, children } = this.props;

		return (
			<Helmet
				htmlAttributes={{
					lang,
				}}
				title={title}
				meta={[
					{
						name: "description",
						content: description,
					},
					{
						property: "og:title",
						content: title,
					},
					{
						property: "og:description",
						content: description,
					},
					{
						property: "og:url",
						content: "https://maxaltena.com/",
					},
					{
						property: "og:type",
						content: "website",
					},
					{
						property: "og:image",
						content: require("../../assets/images/picture_max.jpg"),
					},
					{
						name: "twitter:card",
						content: description,
					},
					{
						name: "twitter:creator",
						content: author,
					},
					{
						name: "twitter:title",
						content: title,
					},
					{
						name: "twitter:description",
						content: description,
					},
				].concat(meta)}
			>
				{children}
			</Helmet>
		);
	}
}
