import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 980px;
	margin: 20px auto;
	text-align: center;
`;

export const ListContainer = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 30px;
	margin-top: 30px;
`;

export const ListItem = styled.li`
	display: flex;
	flex-direction: column;
`;

export const Avatar = styled.img`
	width: 100%;
	border-radius: 5px 5px 0 0;
`;

export const Footer = styled.footer`
	background: #fff;
	border: 1px solid #eee;
	padding: 15px 20px;
	text-align: center;
	border-radius: 0 0 5px 5px;
`;

export const Name = styled.strong`
	font-size: 16px;
	color: #333;
`;

export const Bio = styled.p`
	font-size: 14px;
	line-height: 20px;
	color: #999;
	margin-top: 5px;
`;

export const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
	margin-top: 10px;
`;

export const Button = styled.button`
	border: 0;
	background: #fff;
	flex: 1;
	height: 50px;
	box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	cursor: pointer;
	:hover img {
		transform: translateY(-5px);
		transition: all 0.2s;
	}
`;

export const Empty = styled.div`
	font-size: 32px;
	color: #999;
	margin-top: 200px;
`;

export const MatchContainer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
`;

export const MatchAvatar = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 2px solid #fff;
`;

export const MatchName = styled.strong`
	font-size: 32px;
	color: #fff;
`;

export const MatchBio = styled.p`
	margin-top: 20px;
	font-size: 20px;
	line-height: 30px;
	max-width: 400px;
	color: rgba(255, 255, 255, 0.8);
`;

export const MatchClose = styled.button`
	border: 0;
	background: none;
	color: rgba(255, 255, 255, 0.8);
	font-size: 18px;
	margin-top: 30px;
	cursor: pointer;
`;
