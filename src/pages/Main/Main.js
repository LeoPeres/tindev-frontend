import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import itsamatch from '../../assets/itsamatch.png';

import {
	Container,
	ListContainer,
	ListItem,
	Avatar,
	Footer,
	Name,
	Bio,
	ButtonsContainer,
	Button,
	Empty,
	MatchContainer,
	MatchAvatar,
	MatchName,
	MatchBio,
	MatchClose
} from './styles';

export default function Main({ match }) {
	const [devs, setDevs] = useState([]);
	const [matchDev, setMatchDev] = useState(null);

	useEffect(() => {
		async function loadUsers() {
			const response = await api.get('/devs', {
				headers: {
					user: match.params.id
				}
			});

			setDevs(response.data);
		}

		loadUsers();
	}, [match.params.id]);

	useEffect(() => {
		const socket = io('http://localhost:3333', {
			query: { user: match.params.id }
		});

		socket.on('match', dev => {
			setMatchDev(dev);
		});
	}, [match.params.id]);

	async function handleLike(id) {
		await api.post(`/devs/${id}/likes`, null, {
			headers: {
				user: match.params.id
			}
		});

		setDevs(prevDevs => prevDevs.filter(dev => dev._id !== id));
	}

	async function handleDislike(id) {
		await api.post(`/devs/${id}/dislikes`, null, {
			headers: {
				user: match.params.id
			}
		});

		setDevs(prevDevs => prevDevs.filter(dev => dev._id !== id));
	}

	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="tindev" />
			</Link>
			{devs.length > 0 ? (
				<ListContainer>
					{devs.map(dev => (
						<ListItem key={dev._id}>
							<Avatar src={dev.avatar} alt={dev.name} />
							<Footer>
								<Name>{dev.name}</Name>
								<Bio>{dev.bio}</Bio>
							</Footer>

							<ButtonsContainer>
								<Button onClick={() => handleLike(dev._id)} type="button">
									<img src={like} alt="like" />
								</Button>
								<Button onClick={() => handleDislike(dev._id)} type="button">
									<img src={dislike} alt="dislike" />
								</Button>
							</ButtonsContainer>
						</ListItem>
					))}
				</ListContainer>
			) : (
				<Empty>Acabou :(</Empty>
			)}

			{matchDev && (
				<MatchContainer>
					<img src={itsamatch} alt="match" />
					<MatchAvatar src={matchDev.avatar} alt="avatar" />
					<MatchName>{matchDev.name}</MatchName>
					<MatchBio>{matchDev.bio}</MatchBio>
					<MatchClose type="button" onClick={() => setMatchDev(null)}>
						Fechar
					</MatchClose>
				</MatchContainer>
			)}
		</Container>
	);
}
