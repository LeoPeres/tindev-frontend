import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import { Container, Form, Input, Button } from './styles';
import api from '../../services/api';

export default function Login({ history }) {
	const [username, setUsername] = useState('');

	function handleChange(e) {
		setUsername(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const response = await api.post('/devs', {
			user: username
		});

		const { _id } = response.data;

		history.push(`/dev/${_id}`);
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<img src={logo} alt="Tindev" />
				<Input
					placeholder="Digite seu usuário no Github"
					value={username}
					onChange={handleChange}
				/>
				<Button type="submit">Enviar</Button>
			</Form>
		</Container>
	);
}
