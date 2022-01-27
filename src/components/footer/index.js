import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title } from './styles/footer';
import { removeUserSession } from './../../Utils/Common';
import { useNavigate } from 'react-router-dom';


export default function Footer({ children, ...restProps }) {
	const navigate = useNavigate();
	const handleLogout = () => {
		removeUserSession();
		navigate('/login');
	  }

	return <Container {...restProps}>{children}
		<button type="submit" onClick={handleLogout} value="Logout">Logout</button>
	</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
